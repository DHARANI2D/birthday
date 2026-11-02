import * as THREE from 'three';
import { clamp, lerp, rng, TAU, smoothstep } from './util.js';
import { variableTube } from './geometry.js';
import { FLOOR_Y } from './constants.js';

// ──────────────────────────────────────────────────────────────
//  The family. Built procedurally with natural proportions, real eyes
//  (eyeball, iris, lids, lashes), shaped lips, styled hair and hands,
//  and animated with critically-damped springs so every motion eases
//  in and out like a person rather than snapping like a robot.
//
//  Local space: each person faces +z, origin at the waist (table height).
// ──────────────────────────────────────────────────────────────

const UP = new THREE.Vector3(0, 1, 0);
const ZV = new THREE.Vector3(0, 0, 1);
const _a = new THREE.Vector3();
const _b = new THREE.Vector3();
const _c = new THREE.Vector3();
const _d = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _q2 = new THREE.Quaternion();

const HR = 0.46; // head radius before egg-shaping
const NECK_Y = 1.88;
const SHOULDER = { x: 0.46, y: 1.48 };

const phys = (color, o = {}) => new THREE.MeshPhysicalMaterial({ color, roughness: 0.6, metalness: 0, ...o });
const sphereCache = new Map();
function unitSphere(seg = 20) {
  if (!sphereCache.has(seg)) sphereCache.set(seg, new THREE.SphereGeometry(1, seg, Math.max(8, Math.round(seg * 0.75))));
  return sphereCache.get(seg);
}
function ell(mat, sx, sy, sz, seg = 20) {
  const m = new THREE.Mesh(unitSphere(seg), mat);
  m.scale.set(sx, sy, sz);
  return m;
}
const lathe = (pts, seg = 48) => new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg);
function limbGeo(rTop, rBot) {
  const g = new THREE.CylinderGeometry(rTop, rBot, 1, 20, 1, true);
  g.translate(0, 0.5, 0);
  return g;
}
function placeLimb(mesh, a, b) {
  _a.subVectors(b, a);
  const len = _a.length() || 1e-4;
  mesh.position.copy(a);
  mesh.quaternion.setFromUnitVectors(UP, _a.multiplyScalar(1 / len));
  mesh.scale.set(1, len, 1);
}

/** two-bone IK: writes the elbow into `out`; clamps the hand into reach */
function solveArm(S, G, a, b, hint, out) {
  _a.subVectors(G, S);
  let dist = _a.length();
  const maxD = a + b - 0.01;
  if (dist > maxD) {
    G.copy(S).addScaledVector(_a, maxD / dist);
    dist = maxD;
  }
  dist = Math.max(dist, 0.3);
  _b.copy(_a).normalize();
  const x = (a * a - b * b + dist * dist) / (2 * dist);
  const h = Math.sqrt(Math.max(a * a - x * x, 0));
  _c.copy(hint).addScaledVector(_b, -hint.dot(_b));
  if (_c.lengthSq() < 1e-6) _c.set(0, -1, 0);
  _c.normalize();
  out.copy(S).addScaledVector(_b, x).addScaledVector(_c, h);
}

/* critically damped springs — smooth, never overshooting */
function springV(st, target, omega, dt) {
  const e = Math.exp(-omega * dt);
  _a.subVectors(st.x, target); // δ
  _b.copy(st.v).addScaledVector(_a, omega).multiplyScalar(dt); // tmp
  st.v.addScaledVector(_b, -omega).multiplyScalar(e);
  st.x.copy(target).add(_a.add(_b).multiplyScalar(e));
}
function springS(st, target, omega, dt) {
  const e = Math.exp(-omega * dt);
  const d = st.x - target;
  const tmp = (st.v + omega * d) * dt;
  st.v = (st.v - omega * tmp) * e;
  st.x = target + (d + tmp) * e;
  return st.x;
}
const S0 = (x = 0) => ({ x, v: 0 });

/* ───────────── head shaping ───────────── */
function deformHead(v, r, jawOn = true) {
  const yn = v.y / r;
  v.x *= 0.9;
  v.y *= 1.05;
  v.z *= 0.95;
  if (jawOn) {
    const jaw = smoothstep(0.05, -0.95, yn);
    v.x *= 1 - 0.2 * jaw;
    v.z *= 1 - 0.06 * jaw;
    if (v.z > 0) v.z += 0.028 * r * smoothstep(-0.55, -0.95, yn);
    // soft cheekbones
    if (v.z > 0) v.x *= 1 + 0.035 * Math.exp(-(((yn + 0.12) / 0.22) ** 2));
    if (v.z > 0.2) {
      // a sculpted nose: a ridge that grows from between the eyes to a soft tip
      const h = 0.05 * smoothstep(0.07, -0.075, v.y) * smoothstep(-0.13, -0.088, v.y);
      const w = 0.02 + 0.02 * smoothstep(0.02, -0.085, v.y);
      v.z += h * Math.exp(-((v.x / w) ** 2));
      // nostril wings
      for (const sx of [-1, 1]) v.z += 0.012 * Math.exp(-(((v.x - sx * 0.028) / 0.016) ** 2) - (((v.y + 0.093) / 0.014) ** 2));
      // eye sockets
      for (const sx of [-1, 1]) v.z -= 0.016 * Math.exp(-(((v.x - sx * 0.152) / 0.075) ** 2) - (((v.y - 0.04) / 0.055) ** 2));
      // a hint of fullness at the lips and chin
      v.z += 0.012 * Math.exp(-((v.x / 0.06) ** 2) - (((v.y + 0.19) / 0.03) ** 2));
    }
  }
  return v;
}
function skullGeometry() {
  const g = new THREE.SphereGeometry(HR, 150, 110);
  const p = g.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    deformHead(v, HR);
    p.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  return g;
}
/** a hair shell that hugs the head, with a soft hairline cut-out for the face */
function hairShell({ scale = 1.065, thetaLen = 1.8, window = 0.64, hairline = 0.48, drop = 0, part = true }) {
  const r = HR * scale;
  const g = new THREE.SphereGeometry(r, 110, 64, 0, TAU, 0, thetaLen);
  const p = g.attributes.position;
  const v = new THREE.Vector3();
  const n = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    n.copy(v).normalize();
    const hl = hairline - 0.4 * n.x * n.x + (part ? 0.05 * Math.exp(-((n.x / 0.08) ** 2)) : 0);
    const face =
      smoothstep(0.1, -0.06, Math.abs(n.x) - window) * smoothstep(-0.1, 0.08, hl - n.y) * smoothstep(-0.3, 0.12, n.z);
    // tuck the face area well inside the head so the face is never covered
    v.multiplyScalar(lerp(1, 0.55, face));
    // a little volume on the crown
    v.multiplyScalar(1 + 0.025 * smoothstep(0.3, 1, n.y));
    deformHead(v, r, true);
    if (drop > 0 && n.y < -0.05) {
      const f = (-0.05 - n.y) * (1 - face);
      v.y -= drop * f;
      v.x *= 1 + 0.18 * f;
    }
    p.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  return g;
}
/** horizontal radii of the hair surface at head-local height y (for placing a tiara) */
function hairRadiiAt(y, scale = 1.07) {
  const r = HR * scale;
  const yn = clamp(y / (r * 1.05), -0.99, 0.99);
  const k = Math.sqrt(1 - yn * yn);
  return { x: r * 0.9 * k, z: r * 0.95 * k };
}

function makeHand(skin, sx) {
  const g = new THREE.Group();
  const palm = ell(skin, 0.068, 0.095, 0.034, 16);
  palm.position.y = 0.08;
  const fingers = ell(skin, 0.06, 0.075, 0.03, 16);
  fingers.position.set(0, 0.165, 0.012);
  fingers.rotation.x = 0.3;
  const thumb = new THREE.Mesh(new THREE.CapsuleGeometry(0.02, 0.055, 4, 8), skin);
  thumb.position.set(sx * 0.058, 0.07, 0.03);
  thumb.rotation.set(0.35, 0, -sx * 0.65);
  g.add(palm, fingers, thumb);
  g.traverse((o) => o.isMesh && (o.castShadow = true));
  return g;
}
function orientHand(hand, wrist, dir, palmDir) {
  hand.position.copy(wrist);
  _q.setFromUnitVectors(UP, dir);
  hand.quaternion.copy(_q);
  const n = _a.copy(ZV).applyQuaternion(_q);
  const d = _b.copy(palmDir).addScaledVector(dir, -palmDir.dot(dir));
  if (d.lengthSq() < 1e-6) return;
  d.normalize();
  const ang = Math.atan2(_c.crossVectors(n, d).dot(dir), n.dot(d));
  _q2.setFromAxisAngle(dir, ang);
  hand.quaternion.premultiply(_q2);
}

export const SPECS = {
  kaviya: {
    kind: 'girl', scale: 1.3, y: 0.5, skin: '#f0c9b0', lip: '#cf7b84', blush: '#f19ca6', hair: '#2a1813',
    top: '#efb6c4', skirt: '#f2bfcb', sleeve: 'elbow', hairStyle: 'braid', tiara: true, bindi: true, jewels: true, bangles: true,
  },
  mom: {
    kind: 'mom', scale: 1.3, y: 0.5, skin: '#f0ccb4', lip: '#b75a66', blush: '#ee9aa0', hair: '#24140f',
    top: '#8e1e3c', skirt: '#8e1e3c', sleeve: 'short', hairStyle: 'bun', bindi: true, jewels: true, bangles: true, saree: true,
  },
  dad: {
    kind: 'dad', scale: 1.4, y: 0.52, skin: '#ecc4aa', lip: '#b98078', blush: '#e8a08c', hair: '#26170f',
    top: '#2f3d5e', pants: '#2a2422', sleeve: 'long', hairStyle: 'short', glasses: true, mustache: true, stole: '#8e1e3c',
  },
  sister: {
    kind: 'sis', scale: 1.18, y: 0.46, skin: '#f7d9c6', lip: '#d8838b', blush: '#f3a2aa', hair: '#2d1a14',
    top: '#a98bc9', pants: '#8d70b0', sleeve: 'elbow', hairStyle: 'long', jewels: true, bangles: true,
  },
};
export const KAVIYA_HOME = { pos: [-3.95, SPECS.kaviya.y, -1.2], yaw: THREE.MathUtils.degToRad(62) };

export class Person {
  constructor(spec, T, name = '') {
    this.spec = spec;
    this.T = T;
    this.name = name;
    this.root = new THREE.Group();
    this.root.scale.setScalar(spec.scale);
    this.body = new THREE.Group();
    this.root.add(this.body);
    this.rng = rng(name.length * 977 + 13);
    this.female = spec.kind !== 'dad';

    // ── behaviour state (set by the story) ──
    this.mode = 'idle';
    this.voice = 0; // 0..1 how open the mouth is while singing
    this.eyesClosed = 0;
    this.smileAmt = 0.7;
    this.mouthOpenTarget = 0;
    this.pucker = 0;
    this.lookTarget = null;
    this.grip = null; // world point the grip hand must hold
    this.gripHand = 'R';
    this.gripW = 0;
    this.leanTarget = 0;
    this.beatHz = 84 / 60;

    // ── animation state ──
    this.phase = this.rng() * TAU;
    this.t = 0;
    this.lean = S0();
    this.bounce = S0();
    this.headYaw = S0();
    this.headPitch = S0();
    this.headRoll = S0();
    this.eyeYaw = S0();
    this.eyePitch = S0();
    this.lid = S0();
    this.open = S0();
    this.smile = S0(0.7);
    this.puck = S0();
    this.blinkT = 1 + this.rng() * 3;
    this.blink = 0;
    this.saccade = { t: 0, x: 0, y: 0 };
    this.walkSpeed = 0;
    this.walkPhase = 0;
    this.lastPos = new THREE.Vector3();
    this.firstFrame = true;
    this.hands = {
      L: { x: new THREE.Vector3(0.15, 0.4, 0.45), v: new THREE.Vector3() },
      R: { x: new THREE.Vector3(-0.15, 0.4, 0.45), v: new THREE.Vector3() },
    };
    this.elbows = { L: new THREE.Vector3(), R: new THREE.Vector3() };
    this.armLen = { a: 1.15, b: 1.0 };

    this.build(spec);
  }

  /* ════════════════════════ construction ════════════════════════ */
  build(s) {
    const T = this.T;
    const skin = phys(s.skin, { roughness: 0.5, sheen: 0.6, sheenColor: new THREE.Color('#ffc4b0'), sheenRoughness: 0.55, clearcoat: 0.05 });
    const hairM = phys(s.hair, {
      roughness: 0.38, sheen: 1, sheenColor: new THREE.Color('#8a6050'), sheenRoughness: 0.35, bumpMap: T.hair.bump, bumpScale: 1.2,
    });
    const cloth = phys(s.top, { roughness: 0.48, sheen: 1, sheenColor: new THREE.Color(s.top).lerp(new THREE.Color('#ffffff'), 0.5), sheenRoughness: 0.45 });
    const gold = new THREE.MeshStandardMaterial({ color: '#e2b45a', metalness: 1, roughness: 0.24 });
    const lipM = phys(s.lip, { roughness: 0.36, clearcoat: 0.35, clearcoatRoughness: 0.4 });
    this.mats = { skin, hairM, cloth, gold };
    const body = this.body;
    const F = this.female;

    /* torso */
    const torsoPts = F
      ? [[0.001, -0.7], [0.46, -0.7], [0.47, -0.25], [0.4, 0.25], [0.37, 0.5], [0.43, 0.9], [0.46, 1.12], [0.47, 1.36], [0.45, 1.52], [0.35, 1.62], [0.16, 1.7], [0.001, 1.7]]
      : [[0.001, -0.7], [0.5, -0.7], [0.5, -0.2], [0.46, 0.3], [0.5, 0.85], [0.53, 1.1], [0.53, 1.36], [0.5, 1.53], [0.38, 1.63], [0.17, 1.7], [0.001, 1.7]];
    this.torso = new THREE.Mesh(lathe(torsoPts, 56), cloth);
    this.torso.scale.set(1, 1, 0.72);
    this.torso.castShadow = true;
    body.add(this.torso);

    /* neck */
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(F ? 0.105 : 0.125, F ? 0.12 : 0.14, 0.5, 20), skin);
    neck.position.y = 1.78;
    body.add(neck);

    /* shoulders */
    const sleeveM = cloth;
    for (const sx of [-1, 1]) {
      const cap = ell(sleeveM, F ? 0.14 : 0.16, F ? 0.13 : 0.15, F ? 0.13 : 0.15, 18);
      cap.position.set(sx * SHOULDER.x, SHOULDER.y, 0);
      body.add(cap);
    }

    /* lower body — fixed to the root so it never leans */
    this.lower = new THREE.Group();
    this.root.add(this.lower);
    const drop = (s.y - FLOOR_Y) / s.scale;
    if (s.skirt) {
      const sk = lathe([[0.001, 0.1], [0.42, 0.1], [0.47, -0.4], [0.7, -drop * 0.35], [0.98, -drop * 0.7], [1.22, -drop + 0.01], [0.001, -drop]], 72);
      const p = sk.attributes.position;
      for (let i = 0; i < p.count; i++) {
        const x = p.getX(i);
        const y = p.getY(i);
        const z = p.getZ(i);
        const a = Math.atan2(z, x);
        const depth = clamp(-y / drop);
        const k = 1 + 0.05 * depth * Math.sin(a * 22) + 0.02 * depth * Math.sin(a * 9 + 1);
        p.setXYZ(i, x * k, y, z * k);
      }
      sk.computeVertexNormals();
      const skirtM = phys(s.skirt, { roughness: 0.42, sheen: 1, sheenColor: new THREE.Color('#ffffff'), sheenRoughness: 0.4, side: THREE.DoubleSide });
      this.skirt = new THREE.Mesh(sk, skirtM);
      this.skirt.scale.set(1, 1, 0.9);
      this.lower.add(this.skirt);
      const hem = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.05, 8, 72), gold);
      hem.rotation.x = Math.PI / 2;
      hem.position.y = -drop + 0.22;
      hem.scale.set(1, 0.9, 1);
      this.skirt.add(hem);
    } else {
      const pants = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.5, drop, 24), phys(s.pants || '#3b302c', { roughness: 0.7 }));
      pants.position.y = -drop / 2;
      pants.scale.z = 0.8;
      this.lower.add(pants);
    }

    /* outfit details */
    if (s.kind === 'girl') {
      const neckline = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.022, 8, 48), gold);
      neckline.rotation.x = Math.PI / 2;
      neckline.position.set(0, 1.56, 0.03);
      neckline.scale.set(1, 0.74, 1);
      body.add(neckline);
      const belt = new THREE.Mesh(new THREE.TorusGeometry(0.385, 0.035, 8, 56), gold);
      belt.rotation.x = Math.PI / 2;
      belt.position.y = 0.42;
      belt.scale.set(1, 0.73, 1);
      body.add(belt);
    }
    if (s.saree) {
      // gold-bordered pallu across the chest and over the left shoulder
      const curve = new THREE.CatmullRomCurve3(
        [[0.4, 1.52, 0.08], [0.3, 1.25, 0.33], [0.02, 0.85, 0.36], [-0.28, 0.48, 0.34], [-0.44, 0.1, 0.3]].map((p) => new THREE.Vector3(...p)),
      );
      const pallu = new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 0.085, 8, false), gold);
      pallu.scale.set(1, 1, 0.75);
      body.add(pallu);
      const drape = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.32, 1.5, 18), cloth);
      drape.scale.z = 0.14;
      drape.position.set(0.14, 0.82, -0.36);
      body.add(drape);
    }
    if (s.kind === 'dad') {
      const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.17, 0.1, 24, 1, true), cloth);
      collar.position.y = 1.66;
      body.add(collar);
      for (let i = 0; i < 4; i++) {
        const btn = ell(gold, 0.022, 0.022, 0.012, 10);
        btn.position.set(0, 1.5 - i * 0.2, 0.37 - i * 0.004);
        body.add(btn);
      }
      // a wine stole over both shoulders
      const stoleM = phys(s.stole, { roughness: 0.5, sheen: 1, sheenColor: new THREE.Color('#ff9aa8'), sheenRoughness: 0.4 });
      for (const sx of [-1, 1]) {
        const band = new THREE.Mesh(new THREE.BoxGeometry(0.17, 1.25, 0.03), stoleM);
        band.position.set(sx * 0.24, 0.93, 0.37);
        band.rotation.set(-0.06, 0, sx * 0.04);
        body.add(band);
        const trim = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.05, 0.035), gold);
        trim.position.set(sx * 0.24, 0.33, 0.405);
        body.add(trim);
      }
      const back = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.04, 8, 32, Math.PI), stoleM);
      back.rotation.set(Math.PI / 2, 0, Math.PI);
      back.position.set(0, 1.58, 0.0);
      back.scale.set(1, 1.2, 0.7);
      body.add(back);
    }
    if (s.jewels) {
      const chain = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.012, 6, 40), gold);
      chain.position.set(0, 1.64, 0.05);
      chain.rotation.x = Math.PI / 2 + 0.45;
      body.add(chain);
      const pend = ell(phys('#c8325f', { roughness: 0.1, clearcoat: 1 }), 0.03, 0.04, 0.02, 12);
      pend.position.set(0, 1.5, 0.17);
      body.add(pend);
    }

    /* ─── head ─── */
    this.neckPivot = new THREE.Group();
    this.neckPivot.position.set(0, NECK_Y, 0);
    this.neckPivot.rotation.order = 'YXZ';
    body.add(this.neckPivot);
    const head = new THREE.Group();
    head.position.set(0, 0.55, 0.03);
    this.neckPivot.add(head);
    this.head = head;
    const skull = new THREE.Mesh(skullGeometry(), skin);
    skull.castShadow = true;
    head.add(skull);

    // ears (+ little gold jhumkas)
    for (const sx of [-1, 1]) {
      const ear = ell(skin, 0.045, 0.085, 0.03, 14);
      ear.position.set(sx * 0.385, 0.0, -0.03);
      ear.rotation.y = sx * 0.3;
      head.add(ear);
      if (s.jewels) {
        const bell = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.04, 12, 1, true), gold);
        bell.position.set(sx * 0.395, -0.13, 0.0);
        const bead = ell(gold, 0.012, 0.012, 0.012, 8);
        bead.position.set(sx * 0.395, -0.16, 0.0);
        head.add(bell, bead);
      }
    }

    // eyes: an eyeball (sclera + iris) that can look around, and lids that blink
    const sclera = phys('#f7f0ea', { roughness: 0.15, clearcoat: 1, clearcoatRoughness: 0.05 });
    const irisM = new THREE.MeshPhysicalMaterial({ map: T.iris, roughness: 0.1, clearcoat: 1, clearcoatRoughness: 0.03 });
    const lashM = phys('#140a08', { roughness: 0.5 });
    const shineM = new THREE.MeshBasicMaterial({ color: '#ffffff' });
    this.eyes = [];
    const ER = 0.058;
    for (const sx of [-1, 1]) {
      const eg = new THREE.Group();
      eg.position.set(sx * 0.152, 0.045, 0.352);
      const ball = new THREE.Group();
      ball.rotation.order = 'YXZ';
      ball.add(new THREE.Mesh(new THREE.SphereGeometry(ER, 24, 18), sclera));
      const iris = new THREE.Mesh(new THREE.SphereGeometry(ER * 1.006, 32, 10, 0, TAU, 0, 0.6), irisM);
      iris.rotation.x = Math.PI / 2;
      ball.add(iris);
      eg.add(ball);
      const shine = ell(shineM, 0.009, 0.009, 0.004, 8);
      shine.position.set(0.018, 0.022, ER * 0.97);
      eg.add(shine);
      const upper = new THREE.Group();
      upper.add(new THREE.Mesh(new THREE.SphereGeometry(ER * 1.09, 28, 10, 0, TAU, 0, Math.PI / 2), skin));
      const lash = new THREE.Mesh(new THREE.TorusGeometry(ER * 1.1, F ? 0.0075 : 0.004, 6, 24, Math.PI), lashM);
      lash.rotation.x = Math.PI / 2;
      if (F) lash.scale.set(1.06, 1, 1);
      upper.add(lash);
      eg.add(upper);
      const lower = new THREE.Mesh(new THREE.SphereGeometry(ER * 1.07, 28, 8, 0, TAU, Math.PI / 2, Math.PI / 2), skin);
      lower.rotation.x = 0.78;
      eg.add(lower);
      head.add(eg);
      this.eyes.push({ eg, ball, upper, shine, sx });
    }

    // brows
    this.brows = [];
    for (const sx of [-1, 1]) {
      const c = new THREE.CatmullRomCurve3([
        new THREE.Vector3(sx * 0.07, 0.15, 0.405),
        new THREE.Vector3(sx * 0.16, 0.18, 0.395),
        new THREE.Vector3(sx * 0.245, 0.15, 0.35),
      ]);
      const br = new THREE.Mesh(variableTube(c, 16, 6, (u) => (F ? 0.011 : 0.016) * (1 - 0.55 * u)), hairM);
      head.add(br);
      this.brows.push({ m: br, sx });
    }

    // nose
    const nostrilM = phys('#9c675a', { roughness: 0.8 });
    for (const sx of [-1, 1]) {
      const nostril = ell(nostrilM, 0.009, 0.005, 0.006, 8);
      nostril.position.set(sx * 0.017, -0.108, 0.432);
      nostril.rotation.x = 0.5;
      head.add(nostril);
    }

    // cheeks
    const blushM = new THREE.MeshBasicMaterial({ color: s.blush, transparent: true, opacity: 0.16, depthWrite: false });
    for (const sx of [-1, 1]) {
      const bl = ell(blushM, 0.085, 0.055, 0.02, 14);
      bl.position.set(sx * 0.215, -0.075, 0.37);
      bl.rotation.y = sx * 0.55;
      head.add(bl);
    }

    // mouth: two halves of each lip so the corners can lift into a smile
    const mouth = new THREE.Group();
    mouth.position.set(0, -0.19, 0.372);
    head.add(mouth);
    const inner = ell(phys('#5a1c24', { roughness: 0.7 }), 0.06, 0.004, 0.024, 14);
    inner.position.set(0, -0.012, -0.006);
    const teeth = ell(phys('#fbf6f0', { roughness: 0.3 }), 0.046, 0.011, 0.014, 14);
    teeth.position.set(0, -0.004, 0.004);
    mouth.add(inner, teeth);
    const lips = { upper: [], lower: [] };
    for (const sx of [-1, 1]) {
      const u = ell(lipM, 0.042, 0.011, 0.017, 14);
      u.position.set(sx * 0.03, 0.003, 0);
      const l = ell(lipM, 0.038, 0.015, 0.019, 14);
      l.position.set(sx * 0.026, -0.024, 0);
      mouth.add(u, l);
      lips.upper.push({ m: u, sx });
      lips.lower.push({ m: l, sx });
    }
    this.mouth = { g: mouth, inner, teeth, lips };

    /* ─── hair ─── */
    const style = s.hairStyle;
    if (style === 'short') {
      head.add(new THREE.Mesh(hairShell({ scale: 1.04, thetaLen: 1.68, window: 0.74, hairline: 0.62, part: true }), hairM));
      if (s.mustache) {
        const c = new THREE.CatmullRomCurve3([
          new THREE.Vector3(-0.1, -0.165, 0.37), new THREE.Vector3(-0.04, -0.142, 0.408), new THREE.Vector3(0, -0.145, 0.412),
          new THREE.Vector3(0.04, -0.142, 0.408), new THREE.Vector3(0.1, -0.165, 0.37),
        ]);
        head.add(new THREE.Mesh(variableTube(c, 24, 8, (u) => 0.012 + 0.012 * Math.sin(u * Math.PI)), hairM));
      }
    } else {
      const drop = style === 'long' ? 0.75 : 0.25;
      head.add(new THREE.Mesh(hairShell({ scale: 1.07, thetaLen: style === 'long' ? 2.35 : 2.15, window: 0.62, hairline: 0.5, drop }), hairM));
    }
    if (style === 'long') {
      // long open hair falling down her back
      const sheetGeo = new THREE.CylinderGeometry(0.36, 0.44, 1.35, 40, 10, true, Math.PI - 1.35, 2.7);
      const p = sheetGeo.attributes.position;
      for (let i = 0; i < p.count; i++) {
        const y = p.getY(i);
        if (y < -0.5) p.setY(i, y + 0.05 * Math.sin(p.getX(i) * 18));
      }
      sheetGeo.computeVertexNormals();
      const sheetM = hairM.clone();
      sheetM.side = THREE.DoubleSide;
      const sheet = new THREE.Mesh(sheetGeo, sheetM);
      sheet.position.set(0, 1.52, -0.05);
      body.add(sheet);
      const clip = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.016, 8, 16), gold);
      clip.position.set(0.3, 0.32, 0.18);
      clip.rotation.y = 0.9;
      head.add(clip);
    }
    if (style === 'bun') {
      const bun = ell(hairM, 0.24, 0.2, 0.22, 24);
      bun.position.set(0, 0.06, -0.5);
      head.add(bun);
      const fl = phys('#fffaf0', { roughness: 0.4 });
      for (let i = 0; i < 16; i++) {
        const a = (i / 16) * TAU;
        const f = ell(fl, 0.035, 0.035, 0.028, 10);
        f.position.set(Math.cos(a) * 0.27, 0.06 + Math.sin(a) * 0.23, -0.47);
        head.add(f);
      }
    }
    this.braid = null;
    if (style === 'braid') {
      // a real plaited braid over her right shoulder, with jasmine and a gold tassel
      const curve = new THREE.CatmullRomCurve3(
        [[-0.05, 2.28, -0.38], [-0.32, 1.96, -0.3], [-0.52, 1.58, 0.02], [-0.44, 1.15, 0.3], [-0.37, 0.62, 0.36], [-0.34, 0.15, 0.34]].map(
          (p) => new THREE.Vector3(...p),
        ),
      );
      const braidM = phys(s.hair, { roughness: 0.4, sheen: 1, sheenColor: new THREE.Color('#8a6050'), sheenRoughness: 0.35, bumpMap: T.braid.bump, bumpScale: 3 });
      const knots = 16;
      const geo = variableTube(curve, 140, 18, (u) => (0.115 * (1 - 0.5 * u) + 0.012) * (1 + 0.16 * Math.abs(Math.sin(u * knots * Math.PI))), knots);
      this.braid = new THREE.Mesh(geo, braidM);
      this.braid.castShadow = true;
      body.add(this.braid);
      const fl = phys('#fffaf0', { roughness: 0.4 });
      for (let i = 0; i < 14; i++) {
        const u = 0.03 + i * 0.024;
        const p = curve.getPointAt(u);
        const f = ell(fl, 0.034, 0.034, 0.03, 10);
        f.position.copy(p).add(new THREE.Vector3(0.05 * Math.sin(i * 2.3), 0.07, 0.05 * Math.cos(i * 2.3)));
        body.add(f);
      }
      const end = curve.getPointAt(1);
      const tassel = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.14, 14), gold);
      tassel.position.copy(end).add(new THREE.Vector3(0, -0.08, 0));
      tassel.rotation.x = Math.PI;
      body.add(tassel);
      const ball = ell(gold, 0.03, 0.03, 0.03, 10);
      ball.position.copy(end).add(new THREE.Vector3(0, -0.18, 0));
      body.add(ball);
      // a pink rose tucked behind her ear
      const rose = ell(phys('#e9788f', { roughness: 0.5 }), 0.06, 0.06, 0.05, 12);
      rose.position.set(0.37, 0.18, -0.12);
      head.add(rose);
    }
    if (s.tiara) {
      const yb = 0.37;
      const rr = hairRadiiAt(yb, 1.09);
      const band = new THREE.Group();
      band.position.y = yb;
      band.scale.set(rr.x, rr.x, rr.z);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1, 0.06, 8, 48, Math.PI), gold);
      ring.rotation.x = Math.PI / 2;
      band.add(ring);
      head.add(band);
      for (let i = -3; i <= 3; i++) {
        const a = i * 0.24;
        const h = 0.1 - Math.abs(i) * 0.018;
        const spike = new THREE.Mesh(new THREE.ConeGeometry(0.02, h, 6), gold);
        spike.position.set(Math.sin(a) * rr.x, yb + h / 2 + 0.01, Math.cos(a) * rr.z);
        head.add(spike);
      }
      const gem = ell(phys('#ff8fb6', { roughness: 0.05, clearcoat: 1, emissive: new THREE.Color('#ff4f93'), emissiveIntensity: 0.35 }), 0.026, 0.034, 0.02, 12);
      gem.position.set(0, yb + 0.03, rr.z + 0.01);
      head.add(gem);
    }
    if (s.bindi) {
      const big = s.kind === 'mom';
      const bindi = ell(phys('#b0122c', { roughness: 0.3 }), big ? 0.017 : 0.012, big ? 0.017 : 0.014, 0.006, 10);
      bindi.position.set(0, 0.2, 0.428);
      head.add(bindi);
    }
    if (s.glasses) {
      const frame = phys('#b38a3c', { roughness: 0.25, metalness: 0.9 });
      for (const sx of [-1, 1]) {
        const rim = new THREE.Mesh(new THREE.TorusGeometry(0.078, 0.007, 8, 32), frame);
        rim.position.set(sx * 0.152, 0.045, 0.428);
        rim.scale.set(1.1, 0.85, 1);
        head.add(rim);
        const lens = new THREE.Mesh(
          new THREE.CircleGeometry(0.078, 24),
          new THREE.MeshPhysicalMaterial({ color: '#e8f2ff', transparent: true, opacity: 0.1, roughness: 0.05, clearcoat: 1 }),
        );
        lens.position.copy(rim.position);
        lens.scale.set(1.1, 0.85, 1);
        head.add(lens);
        const temple = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.38, 6), frame);
        temple.rotation.x = Math.PI / 2;
        temple.position.set(sx * 0.33, 0.06, 0.24);
        temple.rotation.z = sx * 0.12;
        head.add(temple);
      }
      const br = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.07, 6), frame);
      br.rotation.z = Math.PI / 2;
      br.position.set(0, 0.06, 0.435);
      head.add(br);
    }

    /* ─── arms (children of the root, placed by IK every frame) ─── */
    const foreM = s.sleeve === 'long' ? cloth : skin;
    this.arm = {};
    for (const side of ['L', 'R']) {
      const sx = side === 'L' ? 1 : -1;
      const upper = new THREE.Mesh(limbGeo(F ? 0.125 : 0.145, F ? 0.1 : 0.115), s.sleeve === 'short' ? skin : sleeveM);
      const fore = new THREE.Mesh(limbGeo(F ? 0.092 : 0.105, F ? 0.068 : 0.08), foreM);
      const elbow = ell(s.sleeve === 'long' ? cloth : skin, F ? 0.097 : 0.112, F ? 0.097 : 0.112, F ? 0.097 : 0.112, 14);
      const hand = makeHand(skin, sx);
      upper.castShadow = fore.castShadow = true;
      this.root.add(upper, fore, elbow, hand);
      const a = { upper, fore, elbow, hand, sx };
      if (s.sleeve === 'elbow') {
        a.cuff = new THREE.Mesh(new THREE.TorusGeometry(0.104, 0.013, 6, 20), gold);
        this.root.add(a.cuff);
      }
      if (s.sleeve === 'short') {
        // a short blouse sleeve over the top of the arm
        a.sleeve = new THREE.Mesh(limbGeo(0.145, 0.13), cloth);
        this.root.add(a.sleeve);
      }
      if (s.bangles) {
        a.bangles = [0, 1, 2].map((i) => {
          const b = new THREE.Mesh(new THREE.TorusGeometry(0.068, 0.009, 6, 20), i === 1 ? phys('#c8325f', { roughness: 0.2, clearcoat: 1 }) : gold);
          this.root.add(b);
          return b;
        });
      }
      this.arm[side] = a;
    }
  }

  /* ════════════════════════ control ════════════════════════ */
  setMode(mode) {
    this.mode = mode;
  }
  lookAt(v) {
    this.lookTarget = v ? v.clone() : null;
  }

  /* ════════════════════════ animation ════════════════════════ */
  update(t, dt) {
    if (dt <= 0) return;
    this.t = t;
    const mode = this.mode;
    this.root.updateWorldMatrix(true, false);

    /* walking, derived from how fast the root is being moved */
    if (this.firstFrame) {
      this.lastPos.copy(this.root.position);
      this.firstFrame = false;
    }
    const speed = this.root.position.distanceTo(this.lastPos) / dt;
    this.lastPos.copy(this.root.position);
    this.walkSpeed += (speed - this.walkSpeed) * (1 - Math.exp(-6 * dt));
    const walk = clamp(this.walkSpeed / 1.0);
    this.walkPhase += dt * (2.2 + 2.5 * walk) * walk * Math.PI;

    /* body: breathing, weight shift, lean, bounce */
    const breathe = Math.sin(t * 1.55 + this.phase);
    let bounceT = 0;
    let leanT = this.leanTarget;
    if (mode === 'cheer') bounceT = 0.04 * Math.max(0, Math.sin(t * TAU * 1.6 + this.phase));
    if (mode === 'sing' || mode === 'clap') bounceT = 0.012 * Math.sin(t * TAU * this.beatHz);
    if (mode === 'wish') leanT += 0.04;
    if (mode === 'cut') leanT = clamp(leanT, 0, 0.16);
    springS(this.bounce, bounceT, 10, dt);
    springS(this.lean, clamp(leanT, -0.15, 0.3), 3.5, dt);
    const sway = Math.sin(t * 0.42 + this.phase) * 0.018 + Math.sin(t * 0.21 + this.phase * 2) * 0.01 + walk * Math.sin(this.walkPhase) * 0.035;
    this.body.position.set(Math.sin(t * 0.37 + this.phase) * 0.018, this.bounce.x + walk * Math.abs(Math.sin(this.walkPhase)) * 0.045, 0);
    this.body.rotation.set(this.lean.x + breathe * 0.006, Math.sin(t * 0.3 + this.phase) * 0.02, sway);
    this.torso.scale.set(1 + breathe * 0.006, 1 + breathe * 0.003, 0.72 * (1 + breathe * 0.012));
    if (this.skirt) this.skirt.rotation.z = walk * Math.sin(this.walkPhase) * 0.025 + Math.sin(t * 0.5 + this.phase) * 0.004;
    this.body.updateMatrix();

    /* head + eyes: the eyes lead, the head follows */
    let yawT = 0;
    let pitchT = 0;
    if (this.lookTarget) {
      _a.copy(this.lookTarget);
      this.body.updateWorldMatrix(true, false);
      this.body.worldToLocal(_a);
      _a.sub(_b.set(0, NECK_Y + 0.55, 0));
      yawT = Math.atan2(_a.x, _a.z);
      pitchT = -Math.atan2(_a.y, Math.hypot(_a.x, _a.z));
    }
    if (mode === 'wish') pitchT += 0.22;
    if (mode === 'sing') pitchT += Math.sin(t * TAU * this.beatHz * 0.5 + this.phase) * 0.035;
    springS(this.headYaw, clamp(yawT * 0.8, -1.0, 1.0), 4.5, dt);
    springS(this.headPitch, clamp(pitchT * 0.75, -0.35, 0.42), 4.5, dt);
    springS(this.headRoll, mode === 'cheer' || mode === 'joy' ? Math.sin(t * 2 + this.phase) * 0.08 : Math.sin(t * 0.6 + this.phase) * 0.025, 4, dt);
    const microY = Math.sin(t * 0.83 + this.phase) * 0.018 + Math.sin(t * 1.9 + this.phase * 3) * 0.008;
    const microX = Math.sin(t * 0.67 + this.phase * 2) * 0.014;
    this.neckPivot.rotation.set(this.headPitch.x + microX, this.headYaw.x + microY, this.headRoll.x);

    // saccades: tiny, quick eye movements
    this.saccade.t -= dt;
    if (this.saccade.t < 0) {
      this.saccade.t = 0.6 + this.rng() * 2.2;
      this.saccade.x = (this.rng() - 0.5) * 0.12;
      this.saccade.y = (this.rng() - 0.5) * 0.06;
    }
    springS(this.eyeYaw, clamp(yawT - this.headYaw.x, -0.38, 0.38) + this.saccade.x, 28, dt);
    springS(this.eyePitch, clamp(pitchT - this.headPitch.x, -0.3, 0.3) + this.saccade.y, 28, dt);

    // blinks (now and then a double blink)
    this.blinkT -= dt;
    if (this.blinkT < 0) {
      this.blink = 1;
      this.blinkT = this.rng() < 0.2 ? 0.25 : 2 + this.rng() * 4;
    }
    this.blink = Math.max(0, this.blink - dt / 0.16);
    const blinkAmt = Math.sin(this.blink * Math.PI);
    const squint = mode === 'cheer' || mode === 'joy' ? 0.3 : 0;
    springS(this.lid, Math.max(this.eyesClosed, blinkAmt, squint), blinkAmt > 0.05 ? 60 : 14, dt);
    const lidUp = lerp(-0.5, 0.5, this.lid.x);
    for (const e of this.eyes) {
      e.ball.rotation.set(this.eyePitch.x, this.eyeYaw.x, 0);
      e.upper.rotation.x = lidUp + this.eyePitch.x * 0.4;
      e.shine.visible = this.lid.x < 0.6;
    }

    /* mouth */
    let openT = this.mouthOpenTarget;
    if (mode === 'sing') openT = this.voice * 0.75;
    if (mode === 'cheer') openT = 0.5 + 0.15 * Math.sin(t * 7 + this.phase);
    if (mode === 'joy') openT = 0.35;
    springS(this.open, openT, 18, dt);
    springS(this.smile, mode === 'blow' ? 0.1 : this.smileAmt + (mode === 'cheer' || mode === 'joy' ? 0.25 : 0), 6, dt);
    springS(this.puck, mode === 'blow' ? this.pucker : 0, 10, dt);
    const o = Math.max(0, this.open.x);
    const sm = clamp(this.smile.x, 0, 1.1);
    const pk = clamp(this.puck.x);
    const M = this.mouth;
    for (const { m, sx } of M.lips.upper) {
      m.rotation.z = sx * (sm * 0.24 - pk * 0.1);
      m.position.set(sx * (0.03 - pk * 0.012), 0.003 + o * 0.008 + pk * 0.004, pk * 0.012);
    }
    for (const { m, sx } of M.lips.lower) {
      m.rotation.z = sx * (sm * 0.18 - pk * 0.1);
      m.position.set(sx * (0.026 - pk * 0.01), -0.024 - o * 0.055 - pk * 0.012, pk * 0.012);
    }
    M.inner.scale.set(0.058 * (1 - pk * 0.45), 0.004 + o * 0.03 + pk * 0.012, 0.024);
    M.inner.position.y = -0.012 - o * 0.026 - pk * 0.006;
    M.teeth.visible = o > 0.12 && pk < 0.3;
    const browUp = mode === 'cheer' || mode === 'joy' ? 0.016 : mode === 'wish' ? -0.006 : 0;
    for (const b of this.brows) b.m.position.y = browUp;

    if (this.braid) this.braid.rotation.z = Math.sin(t * 1.1 + this.phase) * 0.012 - this.lean.x * 0.15;

    /* arms */
    const bodyM = this.body.matrix;
    const targets = this.handTargets(t, mode);
    this.gripW += ((this.grip ? 1 : 0) - this.gripW) * (1 - Math.exp(-5 * dt));
    for (const side of ['L', 'R']) {
      const sx = side === 'L' ? 1 : -1;
      const S = _d.set(sx * SHOULDER.x, SHOULDER.y, 0).applyMatrix4(bodyM).clone();
      const tgt = targets[side].pos.clone().applyMatrix4(bodyM);
      const st = this.hands[side];
      springV(st, tgt, targets[side].omega, dt);
      const hand = st.x.clone();
      const palm = targets[side].palm.clone();
      if (this.grip && side === this.gripHand) {
        const g = this.root.worldToLocal(_c.copy(this.grip)).clone();
        hand.lerp(g, this.gripW);
        palm.lerp(_b.set(-sx * 0.4, -1, 0.2), this.gripW);
        this.lastReach = { want: g.distanceTo(S), max: this.armLen.a + this.armLen.b };
      }
      const elbow = this.elbows[side];
      solveArm(S, hand, this.armLen.a, this.armLen.b, _a.set(sx * 0.8, -1, -0.55), elbow);
      const arm = this.arm[side];
      placeLimb(arm.upper, S, elbow);
      placeLimb(arm.fore, elbow, hand);
      arm.elbow.position.copy(elbow);
      const dir = new THREE.Vector3().subVectors(hand, elbow).normalize();
      orientHand(arm.hand, hand, dir, palm);
      const up = new THREE.Vector3().subVectors(elbow, S).normalize();
      if (arm.cuff) {
        arm.cuff.position.copy(elbow).addScaledVector(up, -0.03);
        arm.cuff.quaternion.setFromUnitVectors(ZV, up);
      }
      if (arm.sleeve) {
        placeLimb(arm.sleeve, S, _b.copy(S).addScaledVector(up, 0.42));
      }
      if (arm.bangles) {
        arm.bangles.forEach((b, i) => {
          b.position.copy(hand).addScaledVector(dir, -0.03 - i * 0.03);
          b.quaternion.setFromUnitVectors(ZV, dir);
        });
      }
    }
  }

  /** where each hand wants to be (body-local), how briskly it moves there, and which way the palm faces */
  handTargets(t, mode) {
    const out = {};
    const beat = t * TAU * this.beatHz;
    for (const side of ['L', 'R']) {
      const sx = side === 'L' ? 1 : -1;
      const pos = new THREE.Vector3();
      const palm = new THREE.Vector3(-sx, 0.2, 0.3);
      let omega = 9;
      switch (mode) {
        case 'sing':
        case 'clap': {
          // claps land on the beat: hands meet quickly, part slowly
          const ph = ((mode === 'sing' ? beat : t * TAU * 1.8) + this.phase * 0.1) / TAU;
          const f = ph - Math.floor(ph);
          const open = f < 0.18 ? 0.02 : 0.02 + 0.17 * Math.sin(((f - 0.18) / 0.82) * Math.PI);
          pos.set(sx * open, 1.0 + 0.02 * Math.sin(beat), 0.5);
          palm.set(-sx, 0.15, 0.1);
          omega = 22;
          break;
        }
        case 'cheer': {
          const ph = (t * 2.4 + this.phase * 0.1) % 1;
          const open = ph < 0.2 ? 0.02 : 0.02 + 0.19 * Math.sin(((ph - 0.2) / 0.8) * Math.PI);
          pos.set(sx * open, 1.28, 0.48);
          palm.set(-sx, 0.2, 0.1);
          omega = 24;
          break;
        }
        case 'wish':
          pos.set(sx * 0.035, 1.28, 0.42);
          palm.set(-sx, 0.1, 0);
          omega = 6;
          break;
        case 'blow':
          pos.set(sx * 0.2, 0.62, 0.5);
          palm.set(0, -1, 0.2);
          omega = 6;
          break;
        case 'joy':
          pos.set(sx * 0.05, 1.5, 0.48);
          palm.set(-sx, 0.2, 0);
          omega = 7;
          break;
        case 'heart':
          pos.set(sx * 0.05, 1.12, 0.36);
          palm.set(0, 0, -1);
          omega = 6;
          break;
        case 'wave':
          if (side === 'L') {
            pos.set(0.62 + 0.06 * Math.sin(t * 7), 2.35, 0.25);
            palm.set(0, 0.1, 1);
            omega = 12;
          } else pos.set(-0.12, 0.45, 0.45);
          break;
        case 'cut':
          pos.set(sx * 0.28, 0.6, 0.55);
          palm.set(0, -1, 0.1);
          omega = 6;
          break;
        default:
          // relaxed, hands lightly clasped in front
          pos.set(sx * (0.065 + 0.01 * Math.sin(t * 0.7 + this.phase)), 0.4 + 0.015 * Math.sin(t * 0.9 + this.phase), 0.46);
          palm.set(-sx, 0.3, 0.2);
          omega = 5;
      }
      out[side] = { pos, palm, omega };
    }
    return out;
  }

  mouthWorld(out = new THREE.Vector3()) {
    this.mouth.g.updateWorldMatrix(true, false);
    return out.setFromMatrixPosition(this.mouth.g.matrixWorld);
  }
  headWorld(out = new THREE.Vector3()) {
    this.head.updateWorldMatrix(true, false);
    return out.setFromMatrixPosition(this.head.matrixWorld);
  }
  shoulderWorld(side) {
    this.body.updateWorldMatrix(true, false);
    return new THREE.Vector3((side === 'L' ? 1 : -1) * SHOULDER.x, SHOULDER.y, 0).applyMatrix4(this.body.matrixWorld);
  }
}

/**
 * Kaviya at the back-left of the table, Mom on the right, Dad and her sister
 * behind — a warm little circle around the cake.
 */
export function createFamily(scene, T) {
  const kaviya = new Person(SPECS.kaviya, T, 'kaviya');
  const mom = new Person(SPECS.mom, T, 'mom');
  const dad = new Person(SPECS.dad, T, 'dad');
  const sister = new Person(SPECS.sister, T, 'sister');

  kaviya.root.position.set(...KAVIYA_HOME.pos);
  kaviya.root.rotation.y = KAVIYA_HOME.yaw;
  mom.root.position.set(4.35, SPECS.mom.y, 0.75);
  mom.root.rotation.y = THREE.MathUtils.degToRad(-62);
  dad.root.position.set(-1.85, SPECS.dad.y, -4.35);
  dad.root.rotation.y = THREE.MathUtils.degToRad(12);
  sister.root.position.set(2.2, SPECS.sister.y, -4.35);
  sister.root.rotation.y = THREE.MathUtils.degToRad(-16);

  const all = [kaviya, mom, dad, sister];
  all.forEach((p) => scene.add(p.root));
  const others = [mom, dad, sister];

  const cakeLook = new THREE.Vector3(0, 2.3, 0);
  const kLook = new THREE.Vector3(-3.95, 4.0, -1.2);
  const camLook = new THREE.Vector3(-1.5, 3.6, 14);

  return {
    kaviya, mom, dad, sister, all, others, cakeLook, camLook,
    setOthers(mode, opts = {}) {
      others.forEach((p) => {
        p.setMode(mode);
        if (opts.smile !== undefined) p.smileAmt = opts.smile;
      });
    },
    othersLookAtKaviya() {
      others.forEach((p) => p.lookAt(kLook));
    },
    othersLookAtCake() {
      others.forEach((p) => p.lookAt(cakeLook));
    },
    update(t, dt) {
      all.forEach((p) => p.update(t, dt));
    },
  };
}
