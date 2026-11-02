import * as THREE from 'three';
import { R, H, CR, STAND_Y, CUT_A, CUT_B, CUT_MID, CUT_HALF } from './constants.js';
import {
  sectorGeometry, slitGeometry, slitMaterial, rosetteGeometry, strawberryGeometry, leafGeometry, polar,
  makeDripLumps, dripGeometry, dripTips, roseGeometry,
} from './geometry.js';
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

/** buttercream that blushes toward the base — an ombré done in the shader */
function ombre(mat, blush) {
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uH = { value: H };
    sh.uniforms.uBlush = { value: new THREE.Color(blush) };
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying float vObjY;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvObjY = position.y;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying float vObjY;\nuniform float uH;\nuniform vec3 uBlush;')
      .replace(
        '#include <map_fragment>',
        '#include <map_fragment>\n{ float t = 1.0 - smoothstep(0.0, uH * 0.78, vObjY); diffuseColor.rgb = mix(diffuseColor.rgb, uBlush * (0.85 + 0.15 * diffuseColor.r), t * t * 0.9); }',
      );
  };
  mat.customProgramCacheKey = () => 'ombre';
  return mat;
}

export function createCake({ scene, T, engine, stage }) {
  const aniso = engine.renderer.capabilities.getMaxAnisotropy();
  const rand = rng(2024);

  /* root: the stand-top, holds the remaining cake. rig: the slice, pivoting at its footprint centre */
  const root = new THREE.Group();
  root.position.y = STAND_Y;
  scene.add(root);
  const body = new THREE.Group();
  root.add(body);

  const rc = (2 * R * Math.sin(CUT_HALF)) / (3 * CUT_HALF);
  const C = polar(rc, 0, CUT_MID);
  const rig = new THREE.Group();
  rig.position.set(C.x, STAND_Y, C.z);
  scene.add(rig);
  const slice = new THREE.Group();
  slice.position.set(-C.x, 0, -C.z);
  rig.add(slice);

  /* ── materials ── */
  const frost = ombre(
    new THREE.MeshPhysicalMaterial({
      map: T.frosting.map, bumpMap: T.frosting.bump, bumpScale: 1.1, roughness: 0.5, metalness: 0,
      sheen: 0.7, sheenColor: new THREE.Color('#fff2e6'), sheenRoughness: 0.5,
    }),
    '#eaa6b5',
  );
  const section = new THREE.MeshPhysicalMaterial({
    map: T.section.map, bumpMap: T.section.bump, bumpScale: 1.8, roughness: 0.86, metalness: 0,
    sheen: 0.4, sheenColor: new THREE.Color('#ffe8b0'), sheenRoughness: 0.8,
  });
  const cream = new THREE.MeshPhysicalMaterial({ color: '#fff8ef', roughness: 0.42, sheen: 1, sheenColor: new THREE.Color('#ffe9dc'), sheenRoughness: 0.4 });
  const creamBlush = new THREE.MeshPhysicalMaterial({ color: '#f6c9d1', roughness: 0.42, sheen: 1, sheenColor: new THREE.Color('#ffd6df'), sheenRoughness: 0.4 });
  const berryMat = new THREE.MeshPhysicalMaterial({
    map: T.berry.map, bumpMap: T.berry.bump, bumpScale: 1.4, roughness: 0.3, clearcoat: 0.8, clearcoatRoughness: 0.22,
  });
  const leafMat = new THREE.MeshStandardMaterial({ color: '#3f8a4a', roughness: 0.5, side: THREE.DoubleSide });
  const pearlMat = new THREE.MeshPhysicalMaterial({ color: '#fffaf4', roughness: 0.18, metalness: 0.1, clearcoat: 1, iridescence: 0.7, iridescenceIOR: 1.4 });
  const goldMat = new THREE.MeshStandardMaterial({
    color: '#e2b45a', metalness: 1, roughness: 0.2, side: THREE.DoubleSide, envMap: scene.environment, envMapIntensity: 1.6,
  });
  const dripMat = new THREE.MeshPhysicalMaterial({
    color: '#d9a94e', metalness: 1, roughness: 0.16, clearcoat: 1, clearcoatRoughness: 0.08, envMap: scene.environment, envMapIntensity: 1.8,
  });

  /* ── the two solids ── */
  const bodyMesh = new THREE.Mesh(sectorGeometry({ R, H, cr: CR, a0: CUT_B, a1: CUT_A + TAU, uvScale: 2.4 }), [frost, section]);
  bodyMesh.castShadow = bodyMesh.receiveShadow = true;
  body.add(bodyMesh);
  const sliceMesh = new THREE.Mesh(sectorGeometry({ R, H, cr: CR, a0: CUT_A, a1: CUT_B, uvScale: 2.4 }), [frost, section]);
  sliceMesh.castShadow = sliceMesh.receiveShadow = true;
  slice.add(sliceMesh);
  const parentFor = (phi) => (inSlice(phi) ? slice : body);

  /* ── gold drip over the rim (split between the two pieces) ── */
  {
    const lumps = makeDripLumps({ R, H, seed: 9, avoid: [CUT_A, CUT_B], margin: deg(5) });
    const bodyDrip = new THREE.Mesh(dripGeometry({ R, H, cr: CR, a0: CUT_B, a1: CUT_A + TAU, lumps }), dripMat);
    const sliceDrip = new THREE.Mesh(dripGeometry({ R, H, cr: CR, a0: CUT_A, a1: CUT_B, lumps }), dripMat);
    bodyDrip.castShadow = sliceDrip.castShadow = true;
    body.add(bodyDrip);
    slice.add(sliceDrip);
    const tipGeo = new THREE.SphereGeometry(1, 14, 10);
    for (const tip of dripTips({ R, H, cr: CR, lumps })) {
      const m = new THREE.Mesh(tipGeo, dripMat);
      m.scale.set(tip.r, tip.r * 1.25, tip.r * 0.8);
      m.position.copy(tip.pos);
      m.rotation.y = tip.phi;
      parentFor(tip.phi).add(m);
    }
  }

  /* ── piped rosettes round the rim, set between the cut lines ── */
  const rosGeo = rosetteGeometry({ radius: 0.12, height: 0.15 });
  const rosGeoSm = rosetteGeometry({ radius: 0.08, height: 0.1, flutes: 9, coils: 2.2 });
  for (let k = 0; k < 18; k++) {
    const phi = CUT_A + deg(10) + deg(20) * k;
    const m = new THREE.Mesh(rosGeo, k % 2 ? cream : creamBlush);
    m.position.copy(polar(R - 0.15, H - 0.01, phi));
    m.rotation.y = rand() * TAU;
    m.castShadow = true;
    parentFor(phi).add(m);
  }
  for (let k = 0; k < 9; k++) {
    const phi = CUT_MID + deg(20) + deg(40) * k;
    if (nearLine(phi, deg(9))) continue;
    const m = new THREE.Mesh(rosGeoSm, cream);
    m.position.copy(polar(0.9, H - 0.01, phi));
    m.rotation.y = rand() * TAU;
    parentFor(phi).add(m);
  }

  /* ── strawberries resting on their sides ── */
  const berryGeo = strawberryGeometry(0.3);
  const leaf = leafGeometry(0.11, 0.04);
  const tilt = -Math.PI / 2 + 0.35;
  const axis = new THREE.Vector3(-Math.sin(tilt), Math.cos(tilt), 0);
  for (let k = 0; k < 9; k++) {
    const phi = CUT_MID + deg(40) * k;
    // leave room at the back for the roses and the topper
    const back = Math.abs(Math.atan2(Math.sin(phi - Math.PI), Math.cos(phi - Math.PI))) < deg(50);
    if (back) continue;
    const g = new THREE.Group();
    const berry = new THREE.Mesh(berryGeo, berryMat);
    berry.castShadow = true;
    berry.rotation.z = tilt;
    berry.position.copy(axis).multiplyScalar(-0.15);
    g.add(berry);
    const crown = new THREE.Group();
    crown.rotation.z = tilt;
    crown.position.copy(axis).multiplyScalar(0.148);
    for (let i = 0; i < 7; i++) {
      const holder = new THREE.Group();
      const l = new THREE.Mesh(leaf, leafMat);
      l.rotation.x = -Math.PI / 2;
      holder.rotation.y = (i / 7) * TAU + k;
      holder.rotation.z = 0.12;
      holder.add(l);
      crown.add(holder);
    }
    g.add(crown);
    g.position.copy(polar(0.9, H + 0.07, phi));
    g.rotation.y = phi - Math.PI / 2;
    parentFor(phi).add(g);
  }

  /* ── a cascade of roses round the topper (stays on the cake) ── */
  {
    const roseGeo = roseGeometry(15, 5);
    const roseMat = new THREE.MeshPhysicalMaterial({ roughness: 0.55, sheen: 1, sheenColor: new THREE.Color('#ffe0e6'), sheenRoughness: 0.5, side: THREE.DoubleSide });
    const roses = [
      { r: 0.55, phi: deg(150), s: 0.42, c: '#f2b3c2' },
      { r: 0.7, phi: deg(178), s: 0.48, c: '#fbeee6' },
      { r: 0.56, phi: deg(206), s: 0.4, c: '#d9768f' },
      { r: 0.9, phi: deg(160), s: 0.3, c: '#fbeee6' },
      { r: 0.92, phi: deg(197), s: 0.32, c: '#f2b3c2' },
      { r: 0.36, phi: deg(178), s: 0.3, c: '#f7d5dc' },
    ];
    const im = new THREE.InstancedMesh(roseGeo, roseMat, roses.length);
    const d = new THREE.Object3D();
    roses.forEach((ro, i) => {
      d.position.copy(polar(ro.r, H + 0.01, ro.phi));
      d.rotation.set((rand() - 0.5) * 0.4, rand() * TAU, (rand() - 0.5) * 0.4);
      d.scale.setScalar(ro.s);
      d.updateMatrix();
      im.setMatrixAt(i, d.matrix);
      im.setColorAt(i, new THREE.Color(ro.c));
    });
    im.castShadow = true;
    body.add(im);
    const leaves = new THREE.InstancedMesh(leafGeometry(0.2, 0.07), new THREE.MeshStandardMaterial({ color: '#4d7d4a', roughness: 0.55, side: THREE.DoubleSide }), 8);
    for (let i = 0; i < 8; i++) {
      const phi = deg(140) + i * deg(10);
      d.position.copy(polar(0.62 + (i % 2) * 0.3, H + 0.03, phi));
      d.rotation.set(-0.3, phi + (rand() - 0.5), 0);
      d.scale.setScalar(1);
      d.updateMatrix();
      leaves.setMatrixAt(i, d.matrix);
    }
    body.add(leaves);
  }

  /* ── pearls round the base, dragées and gold leaf on top (instanced per piece) ── */
  const instanced = (geo, mat, items, castShadow = false) => {
    for (const [parent, list] of [[body, items.filter((i) => !inSlice(i.phi))], [slice, items.filter((i) => inSlice(i.phi))]]) {
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
    const n = 84;
    for (let i = 0; i < n; i++) {
      const phi = CUT_A + (TAU * (i + 0.5)) / n;
      if (nearLine(phi, deg(2.6))) continue;
      pearls.push({ phi, pos: polar(R + 0.004, 0.055, phi), s: 1 });
    }
    instanced(new THREE.SphereGeometry(0.036, 14, 10), pearlMat, pearls, true);

    const dragees = [];
    for (let i = 0; i < 60; i++) {
      const r = 0.2 + Math.sqrt(rand()) * (R - 0.55);
      const phi = rand() * TAU;
      if (nearLine(phi, deg(6))) continue;
      dragees.push({ phi, pos: polar(r, H + 0.012, phi), s: 0.6 + rand() * 0.6, color: rand() > 0.55 ? '#e8c27a' : '#fff6ee' });
    }
    instanced(new THREE.SphereGeometry(0.022, 10, 8), pearlMat, dragees);

    const flakes = [];
    for (let i = 0; i < 40; i++) {
      const r = 0.25 + Math.sqrt(rand()) * (R - 0.6);
      const phi = rand() * TAU;
      if (nearLine(phi, deg(6))) continue;
      const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2 + (rand() - 0.5) * 0.7, rand() * TAU, (rand() - 0.5) * 0.7));
      flakes.push({ phi, pos: polar(r, H + 0.016, phi), quat: q, s: 0.5 + rand() * 0.7 });
    }
    instanced(new THREE.CircleGeometry(0.026, 5), goldMat, flakes);
  }

  /* ── gold topper at the back ── */
  const topperGroup = new THREE.Group();
  const topperMat = new THREE.MeshStandardMaterial({
    map: T.topper, transparent: true, alphaTest: 0.45, metalness: 0.6, roughness: 0.32, side: THREE.DoubleSide,
    emissive: new THREE.Color('#ffcf6a'), emissiveMap: T.topper, emissiveIntensity: 0.35,
  });
  const topperPlane = new THREE.Mesh(new THREE.PlaneGeometry(1.45, 0.79), topperMat);
  topperPlane.position.y = 0.78;
  topperPlane.castShadow = true;
  const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.8, 8), goldMat);
  stick.position.y = 0.24;
  topperGroup.add(topperPlane, stick);
  topperGroup.position.copy(polar(0.62, H - 0.02, deg(178)));
  root.add(topperGroup);

  /* ── slim ivory candles with a gold spiral ── */
  const candles = [];
  const candleGroup = new THREE.Group();
  root.add(candleGroup);
  const candleMap = candleTexture(null, aniso);
  for (let i = 0; i < 7; i++) {
    const phi = deg(-118) + deg(36) * i;
    const rr = i % 2 ? 0.42 : 0.62;
    const h = 0.46 + (i % 3) * 0.04;
    const g = new THREE.Group();
    const bodyC = new THREE.Mesh(
      new THREE.CylinderGeometry(0.028, 0.03, h, 20),
      new THREE.MeshPhysicalMaterial({ map: candleMap, roughness: 0.38, sheen: 0.5, sheenColor: new THREE.Color('#fff2dc'), transparent: true }),
    );
    bodyC.position.y = h / 2;
    bodyC.castShadow = true;
    const top = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.028, 0.01, 16), new THREE.MeshStandardMaterial({ color: '#fff3e0', roughness: 0.4, transparent: true }));
    top.position.y = h;
    const wick = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.005, 0.06, 6), new THREE.MeshStandardMaterial({ color: '#1b1210', roughness: 0.8 }));
    wick.position.y = h + 0.03;
    const flame = new Flame(T.glow, i * 0.37 + 0.11);
    flame.group.position.y = h + 0.06;
    flame.group.scale.setScalar(0.8);
    g.add(bodyC, top, wick, flame.group);
    g.position.copy(polar(rr, H - 0.01, phi));
    candleGroup.add(g);
    candles.push({ g, flame, h, mats: [bodyC.material, top.material], base: g.position.clone() });
  }
  const candleLightPos = new THREE.Vector3(0, STAND_Y + H + 0.8, 0.2);
  stage.candle.position.copy(candleLightPos);

  /* ── knife grooves ── */
  const slits = [CUT_B, CUT_A].map((phi) => {
    const mat = slitMaterial(H);
    const mesh = new THREE.Mesh(slitGeometry({ R, H, cr: CR, phi }), mat);
    mesh.renderOrder = 3;
    root.add(mesh);
    return { mesh, mat, phi };
  });

  /* ── cream left on the stand where the slice used to be ── */
  const smearMat = new THREE.MeshStandardMaterial({ map: T.smear, roughness: 0.55, transparent: true, opacity: 0 });
  const smear = new THREE.Mesh(sectorGeometry({ R: R - 0.05, H: 0.01, cr: 0.003, a0: CUT_A + deg(2), a1: CUT_B - deg(2), uvScale: 1.2 }), [smearMat, smearMat]);
  smear.visible = false;
  smear.receiveShadow = true;
  root.add(smear);

  return {
    root, body, rig, slice, candles, slits, topper: topperGroup, smear, H, R, C, candleLightPos,
    setCandlesVisible(v) {
      candleGroup.visible = v;
    },
    update(t) {
      for (const c of candles) c.flame.update(t);
    },
    showSmear() {
      smear.visible = true;
      smearMat.opacity = 1;
    },
    hideSlits() {
      slits.forEach((s) => (s.mesh.visible = false));
    },
  };
}
