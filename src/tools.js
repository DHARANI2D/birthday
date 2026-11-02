import * as THREE from 'three';

const lathe = (pts, seg = 28) => new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg);

function makeHandle(length, goldMat, pearlMat) {
  const g = new THREE.Group();
  const pts = [
    [0.001, 0], [0.058, 0], [0.07, 0.06], [0.066, 0.3], [0.078, length * 0.55], [0.088, length * 0.78],
    [0.075, length * 0.93], [0.045, length - 0.03], [0.001, length],
  ];
  const grip = new THREE.Mesh(lathe(pts), pearlMat);
  grip.rotation.z = -Math.PI / 2; // +y → +x
  grip.castShadow = true;
  g.add(grip);
  for (const x of [0.05, length * 0.5, length * 0.9]) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.083 + (x > length * 0.4 ? 0.006 : -0.012), 0.012, 8, 28), goldMat);
    ring.rotation.y = Math.PI / 2;
    ring.position.x = x;
    g.add(ring);
  }
  const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.068, 16, 12), goldMat);
  pommel.position.x = length;
  g.add(pommel);
  return g;
}

export function createTools(engine) {
  const steel = new THREE.MeshStandardMaterial({ color: '#dde3ec', metalness: 1, roughness: 0.16, envMap: engine.scene.environment, envMapIntensity: 1.1 });
  const gold = new THREE.MeshStandardMaterial({ color: '#f0bf55', metalness: 1, roughness: 0.24 });
  const pearl = new THREE.MeshPhysicalMaterial({ color: '#fff4ea', roughness: 0.22, clearcoat: 1, sheen: 0.8, sheenColor: new THREE.Color('#ffc0d6') });

  /* ───── cake knife ───── */
  const knife = new THREE.Group(); // positioned / yawed on the cake
  const pitch = new THREE.Group();
  knife.add(pitch);
  const model = new THREE.Group();
  pitch.add(model);
  {
    const sh = new THREE.Shape();
    sh.moveTo(0.3, 0);
    sh.lineTo(2.2, 0);
    sh.lineTo(2.2, 0.44);
    sh.lineTo(0.6, 0.41);
    sh.quadraticCurveTo(0.09, 0.35, 0, 0.1);
    sh.quadraticCurveTo(0.03, 0, 0.3, 0);
    const geo = new THREE.ExtrudeGeometry(sh, { depth: 0.012, bevelEnabled: true, bevelThickness: 0.007, bevelSize: 0.007, bevelSegments: 2, curveSegments: 18 });
    geo.translate(0, 0, -0.006);
    const blade = new THREE.Mesh(geo, steel);
    blade.castShadow = true;
    model.add(blade);
    // engraved gold filigree line + bolster
    const inlay = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.012, 0.03), gold);
    inlay.position.set(1.45, 0.34, 0);
    model.add(inlay);
    const bolster = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.5, 0.05), gold);
    bolster.position.set(2.28, 0.22, 0);
    model.add(bolster);
    const handle = makeHandle(1.15, gold, pearl);
    handle.position.set(2.34, 0.26, 0);
    model.add(handle);
  }
  knife.userData.grip = new THREE.Vector3(2.34 + 0.58, 0.26, 0);
  knife.visible = false;

  /* ───── cake server ───── */
  const server = new THREE.Group();
  const smodel = new THREE.Group();
  server.add(smodel);
  {
    const sh = new THREE.Shape();
    const L = 1.62;
    const W = 0.62;
    sh.moveTo(0.0, 0);
    sh.lineTo(L - 0.12, -W);
    sh.quadraticCurveTo(L + 0.02, -W - 0.02, L + 0.02, -W + 0.14);
    sh.lineTo(L + 0.02, W - 0.14);
    sh.quadraticCurveTo(L + 0.02, W + 0.02, L - 0.12, W);
    sh.closePath();
    const geo = new THREE.ExtrudeGeometry(sh, { depth: 0.022, bevelEnabled: true, bevelThickness: 0.006, bevelSize: 0.006, bevelSegments: 2, curveSegments: 14 });
    geo.rotateX(-Math.PI / 2); // lay flat: shape y → z
    const blade = new THREE.Mesh(geo, steel);
    blade.castShadow = true;
    smodel.add(blade);
    // decorative cut-out inlay
    const tri = new THREE.Shape();
    tri.moveTo(0.5, 0);
    tri.lineTo(1.25, -0.28);
    tri.lineTo(1.25, 0.28);
    tri.closePath();
    const inlay = new THREE.Mesh(new THREE.ShapeGeometry(tri), gold);
    inlay.rotation.x = -Math.PI / 2;
    inlay.position.y = 0.036;
    smodel.add(inlay);
    // neck rises from the blade to the handle
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.05, 0.75, 10), steel);
    neck.position.set(1.95, 0.2, 0);
    neck.rotation.z = -Math.PI / 2 + 0.62;
    smodel.add(neck);
    const handle = makeHandle(1.15, gold, pearl);
    handle.position.set(2.3, 0.42, 0);
    smodel.add(handle);
  }
  server.userData.grip = new THREE.Vector3(2.3 + 0.58, 0.42, 0);
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
