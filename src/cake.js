import * as THREE from 'three';
import { R, H, CR, STAND_Y, CUT_A, CUT_B, CUT_MID, CUT_HALF } from './constants.js';
import { sectorGeometry, slitGeometry, slitMaterial, rosetteGeometry, strawberryGeometry, leafGeometry, polar } from './geometry.js';
import { Flame } from './fx.js';
import { candleTexture } from './textures.js';
import { rng, TAU, deg } from './util.js';

const mod = (a) => ((a % TAU) + TAU) % TAU;
/** is cake-angle φ inside the wedge that will be cut out? */
export const inSlice = (phi) => mod(phi - CUT_A) < CUT_HALF * 2;
const nearLine = (phi, margin = deg(5)) => {
  const a = mod(phi - CUT_A);
  return a < margin || a > TAU - margin || Math.abs(a - CUT_HALF * 2) < margin;
};

export function createCake({ scene, T, engine, stage }) {
  const aniso = engine.renderer.capabilities.getMaxAnisotropy();
  const rand = rng(2024);

  /* ── groups ──
     root:   the stand-top, holds the big remaining body (+ slits, candles, topper)
     rig:    the slice. Pivots at the slice's footprint centre so it can be lifted/rotated */
  const root = new THREE.Group();
  root.position.y = STAND_Y;
  scene.add(root);
  const body = new THREE.Group();
  root.add(body);

  const rc = (2 * R * Math.sin(CUT_HALF)) / (3 * CUT_HALF); // centroid radius of a pie slice
  const C = polar(rc, 0, CUT_MID);
  const rig = new THREE.Group();
  rig.position.set(C.x, STAND_Y, C.z);
  scene.add(rig);
  const slice = new THREE.Group();
  slice.position.set(-C.x, 0, -C.z);
  rig.add(slice);

  /* ── materials ── */
  const frost = new THREE.MeshPhysicalMaterial({
    map: T.frosting.map, bumpMap: T.frosting.bump, bumpScale: 1.6, roughness: 0.52, metalness: 0,
    sheen: 0.8, sheenColor: new THREE.Color('#ffc4d4'), sheenRoughness: 0.5,
  });
  const section = new THREE.MeshPhysicalMaterial({
    map: T.section.map, bumpMap: T.section.bump, bumpScale: 2.0, roughness: 0.86, metalness: 0,
    sheen: 0.4, sheenColor: new THREE.Color('#ffe8b0'), sheenRoughness: 0.8,
  });
  const cream = new THREE.MeshPhysicalMaterial({ color: '#fff7ee', roughness: 0.42, sheen: 1, sheenColor: new THREE.Color('#ffd5e2'), sheenRoughness: 0.4 });
  const creamPink = new THREE.MeshPhysicalMaterial({ color: '#ffe0e8', roughness: 0.42, sheen: 1, sheenColor: new THREE.Color('#ffb0c8'), sheenRoughness: 0.4 });
  const berryMat = new THREE.MeshPhysicalMaterial({
    map: T.berry.map, bumpMap: T.berry.bump, bumpScale: 1.4, roughness: 0.3, clearcoat: 0.8, clearcoatRoughness: 0.22,
  });
  const leafMat = new THREE.MeshStandardMaterial({ color: '#2f9a45', roughness: 0.5, side: THREE.DoubleSide });
  const pearlMat = new THREE.MeshPhysicalMaterial({ color: '#fffaf6', roughness: 0.2, metalness: 0.1, clearcoat: 1, iridescence: 0.6, iridescenceIOR: 1.4 });
  const goldMat = new THREE.MeshStandardMaterial({ color: '#f0bf55', metalness: 1, roughness: 0.22, side: THREE.DoubleSide });

  /* ── the two solids ── */
  const bodyMesh = new THREE.Mesh(sectorGeometry({ R, H, cr: CR, a0: CUT_B, a1: CUT_A + TAU }), [frost, section]);
  bodyMesh.castShadow = bodyMesh.receiveShadow = true;
  body.add(bodyMesh);
  const sliceMesh = new THREE.Mesh(sectorGeometry({ R, H, cr: CR, a0: CUT_A, a1: CUT_B }), [frost, section]);
  sliceMesh.castShadow = sliceMesh.receiveShadow = true;
  slice.add(sliceMesh);
  const parentFor = (phi) => (inSlice(phi) ? slice : body);

  /* ── decorations ──
     Everything is generated around the wedge so the cut falls neatly between them. */
  const rosGeo = rosetteGeometry({ radius: 0.17, height: 0.2 });
  const rosGeoSm = rosetteGeometry({ radius: 0.11, height: 0.14, flutes: 9, coils: 2.2 });
  const rosGeoTall = rosetteGeometry({ radius: 0.2, height: 0.3, coils: 3.2 });
  const nRim = 18;
  for (let k = 0; k < nRim; k++) {
    const phi = CUT_A + deg(10) + deg(20) * k;
    const m = new THREE.Mesh(rosGeo, k % 2 ? cream : creamPink);
    const p = polar(R - 0.2, H - 0.015, phi);
    m.position.copy(p);
    m.rotation.y = rand() * TAU;
    m.castShadow = true;
    parentFor(phi).add(m);
  }
  // little dollops between the berries
  for (let k = 0; k < 9; k++) {
    const phi = CUT_MID + deg(20) + deg(40) * k;
    if (nearLine(phi, deg(9))) continue;
    const m = new THREE.Mesh(rosGeoSm, cream);
    m.position.copy(polar(1.28, H - 0.01, phi));
    m.rotation.y = rand() * TAU;
    m.castShadow = true;
    parentFor(phi).add(m);
  }

  // strawberries: resting on their sides, crown outward and slightly raised, tip toward the middle
  const berryGeo = strawberryGeometry(0.46);
  const leaf = leafGeometry(0.17, 0.06);
  const tilt = -Math.PI / 2 + 0.35; // rotation about z that lays the lathe's +y along (+x, a little up)
  const axis = new THREE.Vector3(-Math.sin(tilt), Math.cos(tilt), 0);
  for (let k = 0; k < 9; k++) {
    const phi = CUT_MID + deg(40) * k;
    const g = new THREE.Group();
    const berry = new THREE.Mesh(berryGeo, berryMat);
    berry.castShadow = true;
    berry.rotation.z = tilt;
    berry.position.copy(axis).multiplyScalar(-0.23);
    g.add(berry);
    const crown = new THREE.Group();
    crown.rotation.z = tilt;
    crown.position.copy(axis).multiplyScalar(0.225);
    for (let i = 0; i < 7; i++) {
      const holder = new THREE.Group();
      const l = new THREE.Mesh(leaf, leafMat);
      l.rotation.x = -Math.PI / 2;
      holder.rotation.y = (i / 7) * TAU + k;
      holder.rotation.z = 0.12;
      holder.add(l);
      crown.add(holder);
    }
    const hub = new THREE.Mesh(new THREE.SphereGeometry(0.035, 10, 8), leafMat);
    crown.add(hub);
    g.add(crown);
    g.position.copy(polar(1.28, H + 0.1, phi));
    g.rotation.y = phi - Math.PI / 2;
    parentFor(phi).add(g);
  }

  // pearls round the base, sprinkles + gold flakes on top (instanced, split by piece)
  const instanced = (geo, mat, items, castShadow = false) => {
    const pieces = [
      [body, items.filter((i) => !inSlice(i.phi))],
      [slice, items.filter((i) => inSlice(i.phi))],
    ];
    for (const [parent, list] of pieces) {
      if (!list.length) continue;
      const im = new THREE.InstancedMesh(geo, mat, list.length);
      const d = new THREE.Object3D();
      list.forEach((it, i) => {
        d.position.copy(it.pos);
        d.quaternion.copy(it.quat || new THREE.Quaternion());
        d.scale.setScalar(it.s || 1);
        d.updateMatrix();
        im.setMatrixAt(i, d.matrix);
        if (it.color) im.setColorAt(i, new THREE.Color(it.color));
      });
      im.castShadow = castShadow;
      parent.add(im);
    }
  };

  {
    const pearls = [];
    const n = 96;
    for (let i = 0; i < n; i++) {
      const phi = CUT_A + (TAU * (i + 0.5)) / n;
      if (nearLine(phi, deg(2.4))) continue;
      pearls.push({ phi, pos: polar(R + 0.005, 0.07, phi), s: 1 });
    }
    instanced(new THREE.SphereGeometry(0.045, 14, 10), pearlMat, pearls, true);

    const spr = [];
    const palette = ['#ff8fb3', '#ffd166', '#8ad9c6', '#b7a1ff', '#ffffff', '#ff6f91'];
    for (let i = 0; i < 170; i++) {
      const r = 0.25 + Math.sqrt(rand()) * (R - 0.75);
      const phi = rand() * TAU;
      if (nearLine(phi, deg(5.5))) continue;
      const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), rand() * TAU).multiply(
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI / 2),
      );
      spr.push({ phi, pos: polar(r, H + 0.012, phi), quat: q, color: palette[Math.floor(rand() * palette.length)], s: 0.8 + rand() * 0.5 });
    }
    instanced(new THREE.CapsuleGeometry(0.012, 0.06, 3, 6), new THREE.MeshStandardMaterial({ roughness: 0.4 }), spr);

    const flakes = [];
    for (let i = 0; i < 46; i++) {
      const r = 0.35 + Math.sqrt(rand()) * (R - 0.9);
      const phi = rand() * TAU;
      if (nearLine(phi, deg(5.5))) continue;
      const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2 + (rand() - 0.5) * 0.7, rand() * TAU, (rand() - 0.5) * 0.7));
      flakes.push({ phi, pos: polar(r, H + 0.018, phi), quat: q, s: 0.6 + rand() * 0.8 });
    }
    instanced(new THREE.CircleGeometry(0.03, 5), goldMat, flakes);
  }

  /* ── cake-topper on a stick (stays on the body) ── */
  const topperGroup = new THREE.Group();
  const topperMat = new THREE.MeshStandardMaterial({
    map: T.topper, transparent: true, alphaTest: 0.45, metalness: 0.55, roughness: 0.35, side: THREE.DoubleSide,
    emissive: new THREE.Color('#ffcf6a'), emissiveMap: T.topper, emissiveIntensity: 0.45,
  });
  const topperPlane = new THREE.Mesh(new THREE.PlaneGeometry(1.9, 1.036), topperMat);
  topperPlane.position.y = 0.95;
  topperPlane.castShadow = true;
  const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.95, 8), goldMat);
  stick.position.y = 0.3;
  topperGroup.add(topperPlane, stick);
  topperGroup.position.copy(polar(0.9, H - 0.02, deg(122)));
  topperGroup.rotation.y = deg(-6);
  root.add(topperGroup);

  /* ── candles ── */
  const candles = [];
  const candleGroup = new THREE.Group();
  root.add(candleGroup);
  const colors = ['#ff7aa8', '#ffc24a', '#6ccfc0', '#9d8cff', '#ff7aa8', '#ffc24a', '#6ccfc0'];
  const candleCount = 7;
  for (let i = 0; i < candleCount; i++) {
    const phi = deg(-135) + deg(34) * i;
    const rr = i % 2 ? 0.72 : 1.0;
    const h = 0.62 + (i % 3) * 0.04;
    const g = new THREE.Group();
    const bodyC = new THREE.Mesh(
      new THREE.CylinderGeometry(0.043, 0.047, h, 20),
      new THREE.MeshStandardMaterial({ map: candleTexture(colors[i], aniso), roughness: 0.45, transparent: true }),
    );
    bodyC.position.y = h / 2;
    bodyC.castShadow = true;
    const top = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.043, 0.012, 16), new THREE.MeshStandardMaterial({ color: '#fff3e0', roughness: 0.4, transparent: true }));
    top.position.y = h;
    const wick = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.006, 0.075, 6), new THREE.MeshStandardMaterial({ color: '#1b1210', roughness: 0.8 }));
    wick.position.y = h + 0.04;
    const flame = new Flame(T.glow, i * 0.37 + 0.11);
    flame.group.position.y = h + 0.075;
    g.add(bodyC, top, wick, flame.group);
    g.position.copy(polar(rr, H - 0.01, phi));
    candleGroup.add(g);
    candles.push({ g, flame, h, mats: [bodyC.material, top.material], base: g.position.clone() });
  }
  const candleLightPos = new THREE.Vector3(0, STAND_Y + H + 0.95, 0.2);
  stage.candle.position.copy(candleLightPos);

  /* ── knife grooves ── */
  const slits = [CUT_B, CUT_A].map((phi) => {
    const mat = slitMaterial(H);
    const mesh = new THREE.Mesh(slitGeometry({ R, H, cr: CR, phi }), mat);
    mesh.renderOrder = 3;
    root.add(mesh);
    return { mesh, mat, phi };
  });

  /* ── cream smear on the plate where the slice used to be ── */
  const smearMat = new THREE.MeshStandardMaterial({ map: T.smear, roughness: 0.55, transparent: true, opacity: 0 });
  const smear = new THREE.Mesh(sectorGeometry({ R: R - 0.06, H: 0.012, cr: 0.004, a0: CUT_A + deg(2), a1: CUT_B - deg(2), uvScale: 1.5 }), [smearMat, smearMat]);
  smear.visible = false;
  smear.receiveShadow = true;
  root.add(smear);

  /* ── API ── */
  const api = {
    root, body, rig, slice, candles, slits, topper: topperGroup, smear,
    cutPhi: [CUT_B, CUT_A],
    H, R, C,
    candleLightPos,
    detach() {
      /* nothing to do: the slice is already its own solid */
    },
    setCandlesVisible(v) {
      candleGroup.visible = v;
    },
    update(t) {
      for (const c of candles) c.flame.update(t);
    },
    sliceWorldCentre() {
      return new THREE.Vector3(C.x, STAND_Y, C.z);
    },
    showSmear() {
      smear.visible = true;
      smearMat.opacity = 1;
    },
    hideSlits() {
      slits.forEach((s) => (s.mesh.visible = false));
    },
    reset() {
      scene.remove(root, rig);
    },
  };
  return api;
}
