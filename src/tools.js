import * as THREE from 'three';
import { KNIFE, SERVER } from './constants.js';

const lathe = (pts, seg = 28) => new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg);

function makeHandle(length, goldMat, pearlMat) {
  const g = new THREE.Group();
  const pts = [
    [0.001, 0], [0.048, 0], [0.058, 0.05], [0.055, 0.25], [0.064, length * 0.55], [0.072, length * 0.78],
    [0.062, length * 0.93], [0.038, length - 0.03], [0.001, length],
  ];
  const grip = new THREE.Mesh(lathe(pts), pearlMat);
  grip.rotation.z = -Math.PI / 2; // +y → +x
  grip.castShadow = true;
  g.add(grip);
  for (const x of [0.05, length * 0.5, length * 0.9]) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.068 + (x > length * 0.4 ? 0.005 : -0.01), 0.01, 8, 28), goldMat);
    ring.rotation.y = Math.PI / 2;
    ring.position.x = x;
    g.add(ring);
  }
  const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.056, 16, 12), goldMat);
  pommel.position.x = length;
  g.add(pommel);
  return g;
}

export function createTools(engine) {
  const steel = new THREE.MeshStandardMaterial({ color: '#dde3ec', metalness: 1, roughness: 0.16, envMap: engine.scene.environment, envMapIntensity: 1.1 });
  const gold = new THREE.MeshStandardMaterial({ color: '#e6b85c', metalness: 1, roughness: 0.24, envMap: engine.scene.environment, envMapIntensity: 1.4 });
  const pearl = new THREE.MeshPhysicalMaterial({ color: '#fff4ea', roughness: 0.22, clearcoat: 1, sheen: 0.8, sheenColor: new THREE.Color('#ffc0d6') });

  /* ───── cake knife ───── */
  const knife = new THREE.Group(); // positioned / yawed on the cake
  const pitch = new THREE.Group();
  knife.add(pitch);
  const model = new THREE.Group();
  pitch.add(model);
  const BL = KNIFE.blade;
  const BH = KNIFE.bladeH;
  {
    const sh = new THREE.Shape();
    sh.moveTo(0.24, 0);
    sh.lineTo(BL, 0);
    sh.lineTo(BL, BH);
    sh.lineTo(0.48, BH * 0.93);
    sh.quadraticCurveTo(0.07, BH * 0.8, 0, BH * 0.24);
    sh.quadraticCurveTo(0.025, 0, 0.24, 0);
    const geo = new THREE.ExtrudeGeometry(sh, { depth: 0.01, bevelEnabled: true, bevelThickness: 0.006, bevelSize: 0.006, bevelSegments: 2, curveSegments: 18 });
    geo.translate(0, 0, -0.005);
    const blade = new THREE.Mesh(geo, steel);
    blade.castShadow = true;
    model.add(blade);
    const inlay = new THREE.Mesh(new THREE.BoxGeometry(BL * 0.62, 0.01, 0.026), gold);
    inlay.position.set(BL * 0.62, BH * 0.78, 0);
    model.add(inlay);
    const bolster = new THREE.Mesh(new THREE.BoxGeometry(0.13, BH * 1.12, 0.045), gold);
    bolster.position.set(BL + 0.06, BH * 0.5, 0);
    model.add(bolster);
    const handle = makeHandle(KNIFE.handle, gold, pearl);
    handle.position.set(BL + 0.12, BH * 0.6, 0);
    model.add(handle);
  }
  knife.userData.grip = new THREE.Vector3(BL + 0.12 + KNIFE.handle * 0.52, BH * 0.6, 0);
  knife.visible = false;

  /* ───── cake server ───── */
  const server = new THREE.Group();
  const smodel = new THREE.Group();
  server.add(smodel);
  const SL = SERVER.len;
  const SW = SERVER.wid;
  {
    const sh = new THREE.Shape();
    sh.moveTo(0.0, 0);
    sh.lineTo(SL - 0.1, -SW);
    sh.quadraticCurveTo(SL + 0.02, -SW - 0.02, SL + 0.02, -SW + 0.11);
    sh.lineTo(SL + 0.02, SW - 0.11);
    sh.quadraticCurveTo(SL + 0.02, SW + 0.02, SL - 0.1, SW);
    sh.closePath();
    const geo = new THREE.ExtrudeGeometry(sh, { depth: 0.018, bevelEnabled: true, bevelThickness: 0.005, bevelSize: 0.005, bevelSegments: 2, curveSegments: 14 });
    geo.rotateX(-Math.PI / 2);
    const blade = new THREE.Mesh(geo, steel);
    blade.castShadow = true;
    smodel.add(blade);
    const tri = new THREE.Shape();
    tri.moveTo(SL * 0.32, 0);
    tri.lineTo(SL * 0.78, -SW * 0.45);
    tri.lineTo(SL * 0.78, SW * 0.45);
    tri.closePath();
    const inlay = new THREE.Mesh(new THREE.ShapeGeometry(tri), gold);
    inlay.rotation.x = -Math.PI / 2;
    inlay.position.y = 0.03;
    smodel.add(inlay);
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.04, 0.6, 10), steel);
    neck.position.set(SL + 0.26, 0.16, 0);
    neck.rotation.z = -Math.PI / 2 + 0.62;
    smodel.add(neck);
    const handle = makeHandle(SERVER.handle, gold, pearl);
    handle.position.set(SL + 0.5, 0.34, 0);
    smodel.add(handle);
  }
  server.userData.grip = new THREE.Vector3(SL + 0.5 + SERVER.handle * 0.5, 0.34, 0);
  server.visible = false;

  return {
    knife, knifePitch: pitch, knifeModel: model, server, serverModel: smodel, steel, gold, pearl,
    /** place the knife so its blade lies along the radial line at cake-angle φ */
    poseKnife({ phi, base, r0 = 0.0, y = 3, along = 0, pitchAngle = 0.1, roll = 0 }) {
      knife.position.set(base.x + (r0 + along) * Math.sin(phi), y, base.z + (r0 + along) * Math.cos(phi));
      knife.rotation.set(0, phi - Math.PI / 2, 0);
      pitch.rotation.set(0, 0, pitchAngle);
      model.rotation.set(roll, 0, 0);
    },
    gripWorld(tool, out = new THREE.Vector3()) {
      const m = tool === knife ? model : smodel;
      tool.updateWorldMatrix(true, true);
      return out.copy(tool.userData.grip).applyMatrix4(m.matrixWorld);
    },
  };
}
