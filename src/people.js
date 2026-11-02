import * as THREE from 'three';
import { clamp, lerp, rng, TAU } from './util.js';

// ──────────────────────────────────────────────────────────────
//  Stylised, procedurally-built people. Each person faces +z in local
//  space, with the origin at the waist (= table-top height).
// ──────────────────────────────────────────────────────────────

const UP = new THREE.Vector3(0, 1, 0);
const _a = new THREE.Vector3();
const _b = new THREE.Vector3();
const _c = new THREE.Vector3();
const _d = new THREE.Vector3();
const _q = new THREE.Quaternion();

const phys = (color, o = {}) => new THREE.MeshPhysicalMaterial({ color, roughness: 0.6, metalness: 0, ...o });
const sphere = (r, mat, sx = 1, sy = 1, sz = 1, seg = 20) => {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, seg, Math.max(8, seg * 0.7 | 0)), mat);
  m.scale.set(sx, sy, sz);
  return m;
};
const limbGeo = (rTop, rBot) => {
  const g = new THREE.CylinderGeometry(rTop, rBot, 1, 18, 1);
  g.translate(0, 0.5, 0);
  return g;
};
function placeLimb(mesh, a, b) {
  _a.subVectors(b, a);
  const len = _a.length() || 1e-4;
  mesh.position.copy(a);
  mesh.quaternion.setFromUnitVectors(UP, _a.multiplyScalar(1 / len));
  mesh.scale.set(1, len, 1);
}
const lathe = (pts, seg = 40) => new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg);

/** two-bone IK: returns the elbow (written into `out`) and clamps the hand into reach */
function solveArm(S, G, a, b, hint, out) {
  _a.subVectors(G, S);
  let dist = _a.length();
  const maxD = a + b - 0.02;
  if (dist > maxD) {
    G.copy(S).addScaledVector(_a, maxD / dist);
    dist = maxD;
  }
  dist = Math.max(dist, 0.25);
  _b.copy(_a).normalize();
  const x = (a * a - b * b + dist * dist) / (2 * dist);
  const h = Math.sqrt(Math.max(a * a - x * x, 0));
  _c.copy(hint).addScaledVector(_b, -hint.dot(_b));
  if (_c.lengthSq() < 1e-6) _c.set(0, -1, 0);
  _c.normalize();
  out.copy(S).addScaledVector(_b, x).addScaledVector(_c, h);
}

const damp = (cur, target, rate, dt) => cur + (target - cur) * (1 - Math.exp(-rate * dt));

export const SPECS = {
  kaviya: {
    skin: '#bf8660', hair: '#150a0e', top: '#f0719f', trim: '#f6cd62', scale: 1.55, y: 0.55, kind: 'girl', flowers: true, tiara: true, bangles: true, skirt: '#f48ab0',
  },
  mom: {
    skin: '#b57b55', hair: '#190f0f', top: '#a8214f', trim: '#f2c14e', scale: 1.45, y: 0.5, kind: 'mom', flowers: true, hat: '#f6c453', skirt: '#a8214f', bangles: true,
  },
  dad: {
    skin: '#b57c57', hair: '#181210', top: '#5b8bbd', trim: '#ffffff', scale: 1.52, y: 0.55, kind: 'dad', hat: '#6fb7c9', pants: '#2d3446',
  },
  sister: {
    skin: '#bf8962', hair: '#1a100e', top: '#9a82dd', trim: '#f6cd62', scale: 1.3, y: 0.45, kind: 'sis', hat: '#f08cb0', pants: '#3a3150', bangles: true,
  },
};

export class Person {
  constructor(spec, { name = '' } = {}) {
    this.spec = spec;
    this.name = name;
    this.root = new THREE.Group();
    this.root.scale.setScalar(spec.scale);
    this.body = new THREE.Group();
    this.root.add(this.body);
    this.rng = rng(name.length * 977 + 13);

    // animation state ------------------------------------------------
    this.mode = 'idle';
    this.sing = 0; // 0..1 mouth activity
    this.eyesClosed = 0; // target
    this.smileAmt = 0.8;
    this.mouthOpenTarget = 0;
    this.lookTarget = null; // THREE.Vector3 (world) or null
    this.grip = null; // THREE.Vector3 (world): where the dominant hand must go
    this.leanTarget = 0;
    this.hop = 0; // vertical bounce amount
    this.clapRate = 1.45;
    this.phase = this.rng() * TAU;
    this.blinkT = 1.5 + this.rng() * 3;
    this.blink = 0;
    this.eyeSquint = 0;
    this.hands = { L: new THREE.Vector3(0.3, 0.5, 0.6), R: new THREE.Vector3(-0.3, 0.5, 0.6) };
    this.elbows = { L: new THREE.Vector3(), R: new THREE.Vector3() };
    this.gripHand = 'R';
    this.lean = 0;
    this.reachLean = 0;
    this.sway = 0;
    this.headYaw = 0;
    this.headPitch = 0;
    this.openCur = 0;
    this.closedCur = 0;
    this.smileCur = 0.8;
    this.t = 0;

    this.build(spec);
  }

  /* ────────────────────────── construction ────────────────────────── */
  build(s) {
    const skin = phys(s.skin, { roughness: 0.52, sheen: 0.7, sheenColor: new THREE.Color('#ff9f8a'), sheenRoughness: 0.5 });
    const hairM = phys(s.hair, { roughness: 0.34, sheen: 1, sheenColor: new THREE.Color('#7a5568'), sheenRoughness: 0.4, clearcoat: 0.25 });
    const top = phys(s.top, { roughness: 0.52, sheen: 0.8, sheenColor: new THREE.Color(s.top).lerp(new THREE.Color('#ffffff'), 0.4) });
    const gold = new THREE.MeshStandardMaterial({ color: s.trim === '#ffffff' ? '#f4f1ec' : '#e8b44c', metalness: s.trim === '#ffffff' ? 0 : 1, roughness: 0.28 });
    const goldM = new THREE.MeshStandardMaterial({ color: '#e8b44c', metalness: 1, roughness: 0.26 });
    this.mats = { skin, hairM, top, gold };
    const dark = phys('#140a0c', { roughness: 0.25, clearcoat: 1 });
    const white = phys('#ffffff', { roughness: 0.3 });

    const body = this.body;

    /* torso */
    const torsoPts = [
      [0.01, -0.5], [0.6, -0.5], [0.64, -0.1], [0.6, 0.45], [0.64, 0.95], [0.6, 1.3], [0.42, 1.58], [0.2, 1.7], [0.17, 1.8], [0.01, 1.8],
    ];
    const torso = new THREE.Mesh(lathe(torsoPts, 48), top);
    torso.scale.set(1, 1, 0.74);
    torso.castShadow = true;
    body.add(torso);
    this.torso = torso;

    /* neck + shoulders */
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.17, 0.4, 16), skin);
    neck.position.y = 1.9;
    body.add(neck);
    this.shoulderAnchor = { L: new THREE.Vector3(0.58, 1.42, 0), R: new THREE.Vector3(-0.58, 1.42, 0) };
    for (const sx of [-1, 1]) {
      const sh = sphere(s.kind === 'girl' ? 0.25 : 0.21, top, 1, 1, 1);
      sh.position.set(sx * 0.58, 1.42, 0);
      body.add(sh);
    }

    /* lower body (fixed to root, so it doesn't lean) */
    this.lower = new THREE.Group();
    this.root.add(this.lower);
    const drop = (s.y + 6.25) / s.scale; // local units from waist to the floor
    if (s.skirt) {
      const sk = new THREE.Mesh(
        lathe([[0.01, 0.1], [0.62, 0.1], [0.68, -0.5], [0.95, -drop * 0.35], [1.2, -drop * 0.7], [1.5, -drop + 0.01], [0.01, -drop]], 64),
        phys(s.skirt, { roughness: 0.5, sheen: 1, sheenColor: new THREE.Color('#ffffff'), side: THREE.DoubleSide }),
      );
      sk.scale.set(1, 1, 0.9);
      this.lower.add(sk);
      if (s.kind === 'mom') {
        // saree pleats at the front + gold border at the hem
        const border = new THREE.Mesh(new THREE.TorusGeometry(1.48, 0.07, 8, 64), goldM);
        border.rotation.x = Math.PI / 2;
        border.position.y = -drop + 0.2;
        border.scale.set(1, 0.9, 1);
        this.lower.add(border);
      }
    } else {
      const pants = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.7, drop, 24), phys(s.pants || '#2d3446', { roughness: 0.7 }));
      pants.position.y = -drop / 2;
      pants.scale.z = 0.8;
      this.lower.add(pants);
    }

    /* outfit details */
    if (s.kind === 'mom') {
      // saree: gold-bordered pallu across the chest and over the shoulder
      const curve = new THREE.CatmullRomCurve3(
        [[0.5, 1.62, 0.1], [0.38, 1.35, 0.4], [0.05, 0.95, 0.5], [-0.3, 0.55, 0.47], [-0.58, 0.1, 0.34]].map((p) => new THREE.Vector3(...p)),
      );
      const pallu = new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 0.1, 8, false), goldM);
      pallu.scale.set(1, 1, 0.75);
      body.add(pallu);
      const drape = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.4, 1.7, 18), top);
      drape.scale.z = 0.16;
      drape.position.set(0.18, 0.95, -0.46);
      drape.rotation.z = 0.08;
      body.add(drape);
    }
    if (s.kind === 'girl') {
      // neckline trim + puffy sleeves + sparkly belt
      const neckline = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.035, 8, 40), goldM);
      neckline.rotation.x = Math.PI / 2;
      neckline.position.set(0, 1.68, 0.06);
      neckline.scale.set(1, 0.75, 1);
      body.add(neckline);
      const belt = new THREE.Mesh(new THREE.TorusGeometry(0.58, 0.05, 8, 48), goldM);
      belt.rotation.x = Math.PI / 2;
      belt.position.y = 0.35;
      belt.scale.set(1, 0.76, 1);
      body.add(belt);
    }
    if (s.kind === 'dad') {
      const collarM = phys('#f4f6fa', { roughness: 0.6 });
      for (const sx of [-1, 1]) {
        const c = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.34, 4), collarM);
        c.position.set(sx * 0.13, 1.72, 0.2);
        c.rotation.set(0.5, 0, sx * 0.9);
        body.add(c);
      }
      for (let i = 0; i < 4; i++) {
        const btn = sphere(0.032, white);
        btn.position.set(0, 1.45 - i * 0.32, 0.48);
        body.add(btn);
      }
    }
    if (s.kind === 'sis') {
      const nl = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.022, 8, 32, Math.PI), goldM);
      nl.position.set(0, 1.6, 0.34);
      nl.rotation.z = Math.PI;
      nl.scale.set(1, 1.2, 0.8);
      body.add(nl);
    }

    /* ─── head ─── */
    const head = new THREE.Group();
    head.position.set(0, 2.58, 0.04);
    head.rotation.order = 'YXZ';
    body.add(head);
    this.head = head;
    const skull = sphere(0.62, skin, 1, 1.04, 0.98, 40);
    skull.castShadow = true;
    head.add(skull);

    // ears
    for (const sx of [-1, 1]) {
      const ear = sphere(0.1, skin, 0.5, 1, 0.8, 12);
      ear.position.set(sx * 0.615, -0.02, 0);
      head.add(ear);
      if (s.kind === 'girl' || s.kind === 'mom' || s.kind === 'sis') {
        const ring = sphere(0.045, goldM, 1, 1, 1, 10);
        ring.position.set(sx * 0.64, -0.14, 0.02);
        head.add(ring);
      }
    }

    // eyes
    const eyeMat = phys('#1a0e0c', { roughness: 0.12, clearcoat: 1, clearcoatRoughness: 0.05 });
    this.eyes = [];
    for (const sx of [-1, 1]) {
      const eg = new THREE.Group();
      eg.position.set(sx * 0.22, 0.02, 0.555);
      const eye = sphere(0.1, eyeMat, 1, 1.28, 0.5, 18);
      eg.add(eye);
      const hl = sphere(0.032, new THREE.MeshBasicMaterial({ color: '#ffffff' }), 1, 1, 1, 8);
      hl.position.set(0.03, 0.06, 0.045);
      const hl2 = sphere(0.016, new THREE.MeshBasicMaterial({ color: '#ffffff' }), 1, 1, 1, 8);
      hl2.position.set(-0.035, -0.04, 0.046);
      eg.add(hl, hl2);
      // lash line
      const lash = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.012, 6, 14, Math.PI), dark);
      lash.position.set(0, 0.01, 0.03);
      lash.rotation.z = Math.PI;
      lash.visible = false;
      eg.add(lash);
      head.add(eg);
      this.eyes.push({ g: eg, eye, hl, hl2, lash, sx });
    }
    // brows
    this.brows = [];
    for (const sx of [-1, 1]) {
      const br = new THREE.Mesh(new THREE.CapsuleGeometry(0.02, s.kind === 'dad' ? 0.17 : 0.13, 4, 8), hairM);
      br.rotation.z = Math.PI / 2;
      br.position.set(sx * 0.225, 0.2, 0.545);
      br.scale.set(1, 1, 0.8);
      head.add(br);
      this.brows.push({ m: br, sx });
    }
    // nose + cheeks
    const nose = sphere(0.05, skin, 1, 0.85, 0.9, 12);
    nose.position.set(0, -0.08, 0.615);
    head.add(nose);
    const blushM = new THREE.MeshBasicMaterial({ color: '#ff6f8f', transparent: true, opacity: 0.32, depthWrite: false });
    for (const sx of [-1, 1]) {
      const bl = sphere(0.1, blushM, 1.3, 0.8, 0.2, 14);
      bl.position.set(sx * 0.36, -0.14, 0.47);
      bl.rotation.y = sx * 0.6;
      head.add(bl);
    }
    // mouth: a smile arc + an open mouth
    this.smile = new THREE.Mesh(new THREE.TorusGeometry(0.115, 0.017, 8, 24, Math.PI), dark);
    this.smile.rotation.z = Math.PI;
    this.smile.position.set(0, -0.2, 0.585);
    head.add(this.smile);
    const mouthInside = phys('#5c1220', { roughness: 0.6, side: THREE.DoubleSide });
    this.mouth = new THREE.Mesh(new THREE.SphereGeometry(0.115, 20, 12, 0, TAU, Math.PI / 2, Math.PI / 2), mouthInside);
    this.mouth.position.set(0, -0.19, 0.57);
    this.mouth.visible = false;
    head.add(this.mouth);
    const tongue = sphere(0.07, phys('#d9576b', { roughness: 0.5 }), 1, 0.5, 0.5, 12);
    tongue.position.set(0, -0.07, -0.02);
    this.mouth.add(tongue);

    /* ─── hair & headwear ─── */
    const capTheta = s.kind === 'dad' ? 0.82 : 0.98;
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.66, 40, 20, 0, TAU, 0, capTheta), hairM);
    cap.scale.set(1, 1.04, 1.0);
    head.add(cap);
    if (s.kind !== 'dad') {
      const back = new THREE.Mesh(
        new THREE.SphereGeometry(0.665, 40, 20, Math.PI / 2 + 1.12, TAU - 2.24, 0.5, s.kind === 'girl' || s.kind === 'mom' ? 1.55 : 1.3),
        hairM,
      );
      back.scale.set(1, 1.04, 1.0);
      head.add(back);
      // side-swept fringe
      const fringe = sphere(0.3, hairM, 1.5, 0.55, 0.7, 18);
      fringe.position.set(-0.18, 0.4, 0.42);
      fringe.rotation.z = 0.35;
      head.add(fringe);
    } else {
      const sides = new THREE.Mesh(new THREE.SphereGeometry(0.655, 32, 16, Math.PI / 2 + 1.25, TAU - 2.5, 0.8, 0.7), hairM);
      sides.scale.set(1, 1.04, 1);
      head.add(sides);
    }

    this.hairBits = [];
    if (s.kind === 'girl' || s.kind === 'sis' || s.kind === 'mom') {
      // braid / ponytail / bun
      if (s.kind === 'girl') {
        const links = 16;
        for (let i = 0; i < links; i++) {
          const u = i / (links - 1);
          const bead = sphere(0.17 - u * 0.065, hairM, 1, 1.25, 1, 12);
          // lives on the body so it swings with the torso, not the head
          bead.userData.u = u;
          this.hairBits.push(bead);
          this.body.add(bead);
          bead.position.set(-0.66 - u * 0.1, 2.0 - u * 2.55, 0.1 + u * 0.28);
        }
        const tie = sphere(0.1, goldM, 1, 1, 1, 10);
        tie.position.copy(this.hairBits[links - 1].position).add(new THREE.Vector3(0, -0.2, 0.02));
        this.body.add(tie);
      } else if (s.kind === 'sis') {
        const links = 7;
        for (let i = 0; i < links; i++) {
          const u = i / (links - 1);
          const bead = sphere(0.2 - u * 0.08, hairM, 1, 1.2, 1, 14);
          bead.userData.u = u;
          bead.position.set(0.05 + u * 0.1, 3.0 - u * 1.4, -0.55 - u * 0.2);
          this.hairBits.push(bead);
          this.body.add(bead);
        }
        const scr = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.06, 8, 16), phys('#f08cb0', { roughness: 0.6 }));
        scr.position.set(0.05, 3.0, -0.52);
        scr.rotation.y = 0.2;
        this.body.add(scr);
      } else {
        const bun = sphere(0.32, hairM, 1, 0.9, 1, 22);
        bun.position.set(0, 0.5, -0.5);
        head.add(bun);
      }
    }
    if (s.flowers) {
      const fl = phys('#fffaf0', { roughness: 0.4 });
      const ring = s.kind === 'mom' ? { c: new THREE.Vector3(0, 0.5, -0.5), r: 0.36 } : { c: new THREE.Vector3(0.3, 2.45, -0.5), r: 0 };
      if (s.kind === 'mom') {
        for (let i = 0; i < 14; i++) {
          const a = (i / 14) * TAU;
          const f = sphere(0.062, fl, 1, 1, 0.7, 10);
          f.position.set(Math.cos(a) * ring.r, ring.c.y + Math.sin(a) * ring.r * 0.9, ring.c.z - 0.0 + 0.05);
          head.add(f);
        }
      } else {
        // jasmine garland along the top of the braid
        for (let i = 0; i < 6; i++) {
          const f = sphere(0.075, fl, 1, 1, 0.8, 10);
          f.position.set(0.05 + i * 0.1, 0.52 - i * 0.04, -0.46 + (i % 2) * 0.05);
          head.add(f);
        }
        const rose = sphere(0.1, phys('#ff5f8f', { roughness: 0.5 }), 1, 1, 0.8, 12);
        rose.position.set(0.42, 0.3, 0.3);
        head.add(rose);
      }
    }
    if (s.tiara) {
      // a gold band across the front of the head with a row of little points and a pink gem
      const band = new THREE.Mesh(new THREE.TorusGeometry(0.635, 0.03, 8, 40, Math.PI * 0.95), goldM);
      band.rotation.x = Math.PI / 2;
      band.rotation.z = Math.PI * 0.025;
      band.position.y = 0.36;
      band.scale.set(1, 0.95, 1.04);
      head.add(band);
      for (let i = -2; i <= 2; i++) {
        const h = 0.2 - Math.abs(i) * 0.04;
        const spike = new THREE.Mesh(new THREE.ConeGeometry(0.055, h, 6), goldM);
        const a = i * 0.34;
        spike.position.set(Math.sin(a) * 0.62, 0.39 + h / 2, Math.cos(a) * 0.62);
        head.add(spike);
      }
      const gem = sphere(0.055, phys('#ff80b8', { roughness: 0.05, clearcoat: 1, emissive: new THREE.Color('#ff3d8f'), emissiveIntensity: 0.4 }), 1, 1.2, 1, 12);
      gem.position.set(0, 0.36, 0.64);
      head.add(gem);
    }
    if (s.kind === 'mom') {
      const bindi = sphere(0.035, phys('#c01430', { roughness: 0.3 }), 1, 1, 0.4, 10);
      bindi.position.set(0, 0.12, 0.6);
      head.add(bindi);
    }
    if (s.kind === 'girl') {
      const bindi = sphere(0.026, phys('#c01430', { roughness: 0.3 }), 1, 1, 0.4, 10);
      bindi.position.set(0, 0.12, 0.6);
      head.add(bindi);
    }
    if (s.kind === 'dad') {
      for (const sx of [-1, 1]) {
        const m = new THREE.Mesh(new THREE.CapsuleGeometry(0.022, 0.15, 4, 8), hairM);
        m.rotation.z = Math.PI / 2 + sx * 0.25;
        m.position.set(sx * 0.1, -0.15, 0.6);
        head.add(m);
      }
      const glassM = phys('#222a38', { roughness: 0.2, metalness: 0.6 });
      for (const sx of [-1, 1]) {
        const rimG = new THREE.Mesh(new THREE.TorusGeometry(0.155, 0.014, 8, 28), glassM);
        rimG.position.set(sx * 0.22, 0.03, 0.58);
        head.add(rimG);
        const lens = new THREE.Mesh(
          new THREE.CircleGeometry(0.15, 24),
          new THREE.MeshPhysicalMaterial({ color: '#cfe6ff', transparent: true, opacity: 0.12, roughness: 0.05, clearcoat: 1 }),
        );
        lens.position.set(sx * 0.22, 0.03, 0.585);
        head.add(lens);
      }
      const bridge = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.12, 6), glassM);
      bridge.rotation.z = Math.PI / 2;
      bridge.position.set(0, 0.05, 0.58);
      head.add(bridge);
    }
    if (s.hat) {
      const hatG = new THREE.Group();
      const cone = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.68, 28, 1, true), phys(s.hat, { roughness: 0.5, side: THREE.DoubleSide }));
      cone.position.y = 0.34;
      hatG.add(cone);
      for (let i = 0; i < 3; i++) {
        const stripe = new THREE.Mesh(new THREE.TorusGeometry(0.27 - i * 0.085, 0.017, 6, 28), phys('#ffffff', { roughness: 0.5 }));
        stripe.rotation.x = Math.PI / 2;
        stripe.position.y = 0.13 + i * 0.19;
        hatG.add(stripe);
      }
      const pom = sphere(0.075, phys('#ffe28a', { roughness: 0.6 }), 1, 1, 1, 12);
      pom.position.y = 0.7;
      hatG.add(pom);
      hatG.position.set(s.kind === 'mom' ? 0.0 : -0.1, 0.52, 0.12);
      hatG.rotation.set(0.1, 0.0, s.kind === 'sis' ? 0.28 : -0.22);
      head.add(hatG);
    }

    /* ─── arms (children of root; positioned each frame by IK) ─── */
    const sleeve = s.kind === 'girl' ? phys(s.top, { roughness: 0.5 }) : top;
    this.arm = {};
    for (const side of ['L', 'R']) {
      const upper = new THREE.Mesh(limbGeo(0.145, 0.13), sleeve);
      const fore = new THREE.Mesh(limbGeo(0.125, 0.105), s.kind === 'girl' || s.kind === 'sis' ? skin : sleeve);
      const hand = sphere(0.14, skin, 1, 0.92, 1, 18);
      const elbow = sphere(0.135, s.kind === 'girl' || s.kind === 'sis' ? sleeve : sleeve, 1, 1, 1, 12);
      upper.castShadow = fore.castShadow = true;
      this.root.add(upper, fore, hand, elbow);
      const a = { upper, fore, hand, elbow };
      if (s.bangles) {
        a.bangle = new THREE.Mesh(new THREE.TorusGeometry(0.105, 0.022, 8, 18), goldM);
        a.bangle2 = new THREE.Mesh(new THREE.TorusGeometry(0.105, 0.016, 8, 18), goldM);
        this.root.add(a.bangle, a.bangle2);
      }
      this.arm[side] = a;
    }
    this.armLen = { a: 0.98, b: 0.92 };
    this.root.traverse((o) => {
      if (o.isMesh && o.material && o.material.sheen === undefined) o.castShadow = o.castShadow || false;
    });
  }

  /* ────────────────────────── control helpers ────────────────────────── */
  setMode(mode) {
    this.mode = mode;
  }
  lookAt(v) {
    this.lookTarget = v ? v.clone() : null;
  }

  /* ────────────────────────── per-frame animation ────────────────────────── */
  update(t, dt) {
    this.t = t;
    const s = this.spec;
    const mode = this.mode;
    this.root.updateWorldMatrix(true, false);

    /* ---- body: breathing, sway, lean, hop ---- */
    const breathe = Math.sin(t * 1.9 + this.phase) * 0.012;
    let swayAmt = 0.03;
    let hop = 0;
    let leanT = 0;
    let headDown = 0;
    if (mode === 'sing') {
      swayAmt = 0.07;
    }
    if (mode === 'cheer') {
      swayAmt = 0.06;
      hop = Math.abs(Math.sin(t * 7.2 + this.phase)) * 0.22;
    }
    if (mode === 'wish') {
      headDown = 0.22;
      swayAmt = 0.012;
    }
    if (mode === 'blow') {
      leanT = this.leanTarget;
    }
    if (mode === 'cut') {
      leanT = 0.12 + this.leanTarget;
    }
    this.hop = damp(this.hop, hop, 14, dt);
    this.lean = damp(this.lean, leanT + this.reachLean, 5, dt);
    this.sway = Math.sin(t * 1.4 + this.phase) * swayAmt;
    this.body.position.y = this.hop;
    this.body.rotation.set(this.lean + breathe, 0, this.sway);
    this.body.updateMatrix();

    /* ---- face ---- */
    this.blinkT -= dt;
    if (this.blinkT < 0) {
      this.blink = 1;
      this.blinkT = 2.2 + this.rng() * 3.6;
    }
    this.blink = Math.max(0, this.blink - dt / 0.14);
    const blinkAmt = Math.sin(this.blink * Math.PI);
    const closedT = Math.max(this.eyesClosed, blinkAmt, mode === 'cheer' ? 0.55 : 0);
    this.closedCur = damp(this.closedCur, closedT, 22, dt);
    for (const e of this.eyes) {
      const c = this.closedCur;
      e.eye.scale.y = lerp(1.28, 0.08, c);
      e.hl.visible = e.hl2.visible = c < 0.5;
      e.lash.visible = c > 0.7;
      e.g.position.y = 0.02 - c * 0.02;
    }
    // mouth
    let openT = this.mouthOpenTarget;
    if (mode === 'sing') {
      openT = this.sing * (0.12 + 0.88 * Math.abs(Math.sin(t * 8.4 + this.phase) * Math.sin(t * 3.1 + this.phase * 2)));
    }
    if (mode === 'cheer') openT = 0.85 + 0.15 * Math.sin(t * 9 + this.phase);
    if (mode === 'blow') openT = this.mouthOpenTarget;
    this.openCur = damp(this.openCur, openT, 18, dt);
    const o = this.openCur;
    const smileT = mode === 'blow' ? 0 : this.smileAmt;
    this.smileCur = damp(this.smileCur, smileT, 8, dt);
    if (mode === 'blow' && o > 0.02) {
      // puckered "ooo"
      this.mouth.visible = true;
      this.smile.visible = false;
      this.mouth.scale.set(0.45 + o * 0.15, 0.2 + o * 0.5, 0.8);
      this.mouth.rotation.x = Math.PI; // full small ellipse (flip bowl up)
      this.mouth.position.y = -0.23;
    } else if (o > 0.06) {
      this.mouth.visible = true;
      this.smile.visible = false;
      this.mouth.rotation.x = 0;
      this.mouth.position.y = -0.17;
      this.mouth.scale.set(0.8 + o * 0.35, 0.25 + o * 1.0, 0.9);
    } else {
      this.mouth.visible = false;
      this.smile.visible = true;
      this.smile.scale.set(1, 0.35 + this.smileCur * 0.8, 1);
      this.smile.position.y = -0.19 - (1 - this.smileCur) * 0.01;
    }
    for (const b of this.brows) {
      const up = mode === 'cheer' ? 0.05 : mode === 'wish' ? -0.01 : 0.0;
      b.m.position.y = 0.2 + up + this.closedCur * -0.02;
      b.m.rotation.z = Math.PI / 2 - b.sx * (mode === 'wish' ? 0.18 : 0.06 + (mode === 'cheer' ? -0.12 : 0));
    }

    /* ---- head orientation ---- */
    let yaw = 0;
    let pitch = headDown;
    if (this.lookTarget) {
      _a.copy(this.lookTarget);
      this.head.parent.worldToLocal(_a);
      _a.sub(this.head.position);
      yaw = Math.atan2(_a.x, _a.z);
      pitch = -Math.atan2(_a.y, Math.hypot(_a.x, _a.z)) + headDown;
    }
    yaw = clamp(yaw, -1.15, 1.15);
    pitch = clamp(pitch, -0.45, 0.6);
    this.headYaw = damp(this.headYaw, yaw, 7, dt);
    this.headPitch = damp(this.headPitch, pitch, 7, dt);
    this.head.rotation.set(this.headPitch + Math.sin(t * 1.1 + this.phase) * 0.02, this.headYaw, Math.sin(t * 0.9 + this.phase) * 0.025 + (mode === 'sing' ? Math.sin(t * 2.4 + this.phase) * 0.05 : 0));

    // hair that swings
    if (this.hairBits.length) {
      const swing = Math.sin(t * 1.7 + this.phase) * 0.05 + this.sway * 1.5 + (this.hop > 0.01 ? Math.sin(t * 14) * 0.05 : 0);
      this.hairBits.forEach((b) => {
        const u = b.userData.u;
        if (b.userData.bx === undefined) {
          b.userData.bx = b.position.x;
          b.userData.bz = b.position.z;
        }
        b.position.x = b.userData.bx + swing * u * u * 1.2;
        b.position.z = b.userData.bz + this.lean * u * 0.5;
      });
    }

    /* ---- arms ---- */
    const bodyM = this.body.matrix;
    const poses = this.handTargets(t, mode);
    const gripWorld = this.grip;
    for (const side of ['L', 'R']) {
      const sxn = side === 'L' ? 1 : -1;
      const S = this.shoulderAnchor[side].clone().applyMatrix4(bodyM);
      let T;
      if (gripWorld && side === this.gripHand) {
        T = this.root.worldToLocal(_b.copy(gripWorld)).clone();
      } else {
        T = poses[side].clone().applyMatrix4(bodyM);
      }
      const h = this.hands[side];
      const rate = mode === 'sing' || mode === 'cheer' ? 26 : 12;
      if (gripWorld && side === this.gripHand) h.copy(T);
      else h.lerp(T, 1 - Math.exp(-rate * dt));
      const hand = h.clone();
      const elbow = this.elbows[side];
      solveArm(S, hand, this.armLen.a, this.armLen.b, _d.set(sxn * 0.7, -1, -0.35), elbow);
      const arm = this.arm[side];
      placeLimb(arm.upper, S, elbow);
      placeLimb(arm.fore, elbow, hand);
      arm.elbow.position.copy(elbow);
      arm.hand.position.copy(hand);
      _c.subVectors(hand, elbow).normalize();
      if (arm.bangle) {
        arm.bangle.position.copy(hand).addScaledVector(_c, -0.16);
        arm.bangle2.position.copy(hand).addScaledVector(_c, -0.23);
        _q.setFromUnitVectors(new THREE.Vector3(0, 0, 1), _c);
        arm.bangle.quaternion.copy(_q);
        arm.bangle2.quaternion.copy(_q);
      }
      // when the target was beyond reach, let the body lean in a little more
      if (gripWorld && side === this.gripHand) {
        const want = T.distanceTo(S);
        this.lastReach = { want, max: this.armLen.a + this.armLen.b };
        const miss = want - (this.armLen.a + this.armLen.b) * 0.96;
        this.reachLean = clamp(this.reachLean + (miss > 0 ? 1 : -0.6) * dt * 0.8, 0, 0.7);
      }
    }
    if (!gripWorld) this.reachLean = Math.max(0, this.reachLean - dt * 0.8);
  }

  handTargets(t, mode) {
    const out = { L: new THREE.Vector3(), R: new THREE.Vector3() };
    for (const side of ['L', 'R']) {
      const sx = side === 'L' ? 1 : -1;
      const v = out[side];
      switch (mode) {
        case 'sing': {
          const c = 0.5 + 0.5 * Math.sin(t * TAU * this.clapRate + this.phase * 0.2);
          const open = 0.05 + 0.34 * Math.pow(c, 0.7);
          v.set(sx * open, 1.12 + 0.04 * Math.sin(t * TAU * this.clapRate * 2), 0.78);
          break;
        }
        case 'clap': {
          const c = 0.5 + 0.5 * Math.sin(t * TAU * 3.1 + this.phase);
          v.set(sx * (0.05 + 0.3 * c), 1.25, 0.8);
          break;
        }
        case 'cheer':
          v.set(sx * (1.0 + 0.12 * Math.sin(t * 9 + sx)), 2.85 + 0.2 * Math.sin(t * 8 + sx * 2 + this.phase), 0.2);
          break;
        case 'wish':
          v.set(sx * 0.06, 1.42, 0.72);
          break;
        case 'blow':
          v.set(sx * 0.5, 0.75, 0.9);
          break;
        case 'cut':
          v.set(sx * 0.42, 0.95, 0.78);
          break;
        case 'laugh':
          v.set(sx * 0.4, 2.3, 0.62);
          break;
        default:
          v.set(sx * (0.1 + 0.02 * Math.sin(t * 1.3)), 0.78 + 0.02 * Math.sin(t * 1.9 + this.phase), 0.72);
      }
    }
    return out;
  }

  mouthWorld(out = new THREE.Vector3()) {
    this.head.updateWorldMatrix(true, false);
    return out.set(0, -0.2, 0.62).applyMatrix4(this.head.matrixWorld);
  }
  headWorld(out = new THREE.Vector3()) {
    this.head.updateWorldMatrix(true, false);
    return out.set(0, 0.0, 0.5).applyMatrix4(this.head.matrixWorld);
  }
  shoulderWorld(side) {
    this.body.updateWorldMatrix(true, false);
    return this.shoulderAnchor[side].clone().applyMatrix4(this.body.matrixWorld);
  }
}

/**
 * Kaviya at the left of the table, Mom on the right, Dad and her sister
 * behind — a warm little circle around the cake.
 */
export function createFamily(scene) {
  const kaviya = new Person(SPECS.kaviya, { name: 'kaviya' });
  const mom = new Person(SPECS.mom, { name: 'mom' });
  const dad = new Person(SPECS.dad, { name: 'dad' });
  const sister = new Person(SPECS.sister, { name: 'sister' });

  kaviya.root.position.set(-4.75, SPECS.kaviya.y, -1.7);
  kaviya.root.rotation.y = THREE.MathUtils.degToRad(70);
  mom.root.position.set(5.2, SPECS.mom.y, 0.7);
  mom.root.rotation.y = THREE.MathUtils.degToRad(-58);
  dad.root.position.set(-2.5, SPECS.dad.y, -5.0);
  dad.root.rotation.y = THREE.MathUtils.degToRad(14);
  sister.root.position.set(2.9, SPECS.sister.y, -5.1);
  sister.root.rotation.y = THREE.MathUtils.degToRad(-16);

  const all = [kaviya, mom, dad, sister];
  all.forEach((p) => scene.add(p.root));
  const others = [mom, dad, sister];

  const cakeLook = new THREE.Vector3(0, 3.0, 0);
  const kLook = new THREE.Vector3(-4.7, 4.7, -1.6);
  const camLook = new THREE.Vector3(-2, 4.2, 14);

  const family = {
    kaviya, mom, dad, sister, all, others, cakeLook, camLook,
    /** everyone except Kaviya */
    setOthers(mode, opts = {}) {
      others.forEach((p, i) => {
        p.setMode(mode);
        if (opts.sing !== undefined) p.sing = opts.sing;
        if (opts.smile !== undefined) p.smileAmt = opts.smile;
        p.clapRate = 1.4 + i * 0.07;
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
  return family;
}
