import * as THREE from 'three';
import { GlowPoints } from './fx.js';
import { STAND_Y, SIDE_PLATE_POS, SIDE_PLATE_Y, TABLE } from './constants.js';
import { rng, lerp } from './util.js';

const lathe = (pts, seg = 96) => new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg);

export function createStage(engine, T) {
  const { scene } = engine;
  const aniso = engine.renderer.capabilities.getMaxAnisotropy();
  const stage = new THREE.Group();
  scene.add(stage);

  /* ── materials ── */
  const porcelain = new THREE.MeshPhysicalMaterial({
    color: '#efe8e0', roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0.08, sheen: 0.3, sheenColor: new THREE.Color('#ffe2ee'),
  });
  const gold = new THREE.MeshStandardMaterial({ color: '#e6b24d', metalness: 1, roughness: 0.26 });

  /* ── lights ── */
  const hemi = new THREE.HemisphereLight(0xffd9ec, 0x2b1233, 0.2);
  scene.add(hemi);

  const spot = new THREE.SpotLight(0xfff0e2, 0, 0, 0.5, 1, 2);
  spot.position.set(-3.4, 11.8, 6.2);
  spot.target.position.set(0.6, 1.0, 0.6);
  spot.castShadow = true;
  spot.shadow.mapSize.set(engine.q.shadow, engine.q.shadow);
  spot.shadow.camera.near = 6;
  spot.shadow.camera.far = 24;
  spot.shadow.bias = -0.00025;
  spot.shadow.normalBias = 0.02;
  scene.add(spot, spot.target);

  const rim = new THREE.DirectionalLight(0xa9b8ff, 0.3);
  rim.position.set(6, 5, -9);
  scene.add(rim);

  const candle = new THREE.PointLight(0xffa04e, 0, 0, 2);
  scene.add(candle);

  // soft warm fill so faces never fall into black, even by candlelight
  const fill = new THREE.DirectionalLight(0xffe0cc, 0.5);
  fill.position.set(-3, 7, 12);
  scene.add(fill);

  /* ── oval table with a draped cloth ── */
  const cloth = T.cloth;
  const clothMat = new THREE.MeshPhysicalMaterial({
    map: cloth.map, bumpMap: cloth.bump, bumpScale: 0.6, roughness: 0.62, metalness: 0,
    sheen: 0.35, sheenColor: new THREE.Color('#c0507f'), sheenRoughness: 0.5,
  });
  const tableTop = new THREE.Mesh(new THREE.CircleGeometry(1, 96), clothMat);
  tableTop.rotation.x = -Math.PI / 2;
  tableTop.scale.set(TABLE.rx, TABLE.rz, 1);
  tableTop.position.set(TABLE.cx, 0, TABLE.cz);
  tableTop.receiveShadow = true;
  stage.add(tableTop);
  {
    const skirtGeo = new THREE.CylinderGeometry(1, 1, 6.2, 160, 14, true);
    const p = skirtGeo.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const a = Math.atan2(p.getZ(i), p.getX(i));
      const depth = (3.1 - p.getY(i)) / 6.2; // 0 at the table edge, 1 at the floor
      const fold = 1 + 0.035 * depth * Math.sin(a * 36) + 0.02 * depth * Math.sin(a * 17 + 1);
      p.setX(i, p.getX(i) * fold * (1 + depth * 0.04));
      p.setZ(i, p.getZ(i) * fold * (1 + depth * 0.04));
    }
    skirtGeo.computeVertexNormals();
    const uv = skirtGeo.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * 3.2, uv.getY(i) * 0.9);
    const skirt = new THREE.Mesh(skirtGeo, clothMat.clone());
    skirt.material.side = THREE.DoubleSide;
    skirt.scale.set(TABLE.rx, 1, TABLE.rz);
    skirt.position.set(TABLE.cx, -3.1, TABLE.cz);
    skirt.receiveShadow = true;
    stage.add(skirt);
    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(80, 48),
      new THREE.MeshStandardMaterial({ color: '#1a0c1f', roughness: 0.9, metalness: 0 }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -6.25;
    stage.add(floor);
  }

  /* ── cake stand ── */
  const standPts = [
    [0.0, 0.0], [1.28, 0.0], [1.36, 0.02], [1.37, 0.055], [1.3, 0.095], [1.0, 0.14], [0.66, 0.2], [0.38, 0.28],
    [0.24, 0.37], [0.2, 0.44], [0.27, 0.49], [0.21, 0.54], [0.2, 0.6], [0.3, 0.66], [0.55, 0.7], [1.2, 0.72],
    [2.3, 0.745], [2.62, 0.77], [2.7, 0.795], [2.68, STAND_Y + 0.02], [2.6, STAND_Y + 0.012], [2.5, STAND_Y], [0.0, STAND_Y],
  ];
  const stand = new THREE.Mesh(lathe(standPts), porcelain);
  stand.castShadow = true;
  stand.receiveShadow = true;
  stage.add(stand);
  const standRim = new THREE.Mesh(new THREE.TorusGeometry(2.655, 0.017, 10, 160), gold);
  standRim.rotation.x = Math.PI / 2;
  standRim.position.y = STAND_Y + 0.016;
  stage.add(standRim);
  const footRim = new THREE.Mesh(new THREE.TorusGeometry(1.34, 0.014, 10, 96), gold);
  footRim.rotation.x = Math.PI / 2;
  footRim.position.y = 0.045;
  stage.add(footRim);
  const ringStem = new THREE.Mesh(new THREE.TorusGeometry(0.235, 0.017, 10, 48), gold);
  ringStem.rotation.x = Math.PI / 2;
  ringStem.position.y = 0.465;
  stage.add(ringStem);

  /* ── serving plate ── */
  const plateGroup = new THREE.Group();
  plateGroup.position.set(SIDE_PLATE_POS.x, 0, SIDE_PLATE_POS.z);
  const platePts = [
    [0, 0.0], [0.95, 0.0], [1.22, 0.022], [1.4, 0.06], [1.47, 0.09], [1.45, 0.1], [1.38, 0.082], [1.15, SIDE_PLATE_Y + 0.004], [0, SIDE_PLATE_Y],
  ];
  const plate = new THREE.Mesh(lathe(platePts), porcelain);
  plate.castShadow = true;
  plate.receiveShadow = true;
  const plateRim = new THREE.Mesh(new THREE.TorusGeometry(1.455, 0.012, 8, 120), gold);
  plateRim.rotation.x = Math.PI / 2;
  plateRim.position.y = 0.094;
  plateGroup.add(plate, plateRim);
  stage.add(plateGroup);

  /* ── a few gifts in the shadows ── */
  const wrap = (w, h, d, paper, ribbon) => {
    const g = new THREE.Group();
    const box = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshStandardMaterial({ color: paper, roughness: 0.45, metalness: 0.15 }));
    box.position.y = h / 2;
    box.castShadow = box.receiveShadow = true;
    const rm = new THREE.MeshStandardMaterial({ color: ribbon, roughness: 0.3, metalness: 0.5 });
    const r1 = new THREE.Mesh(new THREE.BoxGeometry(w * 1.02, h * 1.02, d * 0.16), rm);
    const r2 = new THREE.Mesh(new THREE.BoxGeometry(w * 0.16, h * 1.02, d * 1.02), rm);
    r1.position.y = r2.position.y = h / 2;
    g.add(box, r1, r2);
    for (const s of [-1, 1]) {
      const loop = new THREE.Mesh(new THREE.TorusGeometry(w * 0.17, w * 0.045, 10, 24), rm);
      loop.position.set(s * w * 0.15, h + w * 0.1, 0);
      loop.rotation.set(0, 0, s * 0.9);
      loop.scale.set(1, 1.2, 1);
      g.add(loop);
    }
    const knot = new THREE.Mesh(new THREE.SphereGeometry(w * 0.07, 12, 10), rm);
    knot.position.y = h + w * 0.02;
    g.add(knot);
    return g;
  };
  const gift1 = wrap(1.25, 1.0, 1.25, '#e9b551', '#d2557f');
  gift1.position.set(2.9, 0, -1.3);
  gift1.rotation.y = 0.5;
  const gift2 = wrap(0.9, 0.7, 0.9, '#f4b5c8', '#e6b24d');
  gift2.position.set(3.0, 0, 0.7);
  gift2.rotation.y = -0.3;
  const gift3 = wrap(0.8, 0.55, 0.8, '#fbf0e4', '#d2557f');
  gift3.position.set(1.4, 0, -3.0);
  gift3.rotation.y = 0.9;
  stage.add(gift1, gift2, gift3);

  /* ── atmosphere: fairy lights & bokeh ── */
  const glow = [];
  const fairyString = (zz, y0, sag, x0, x1, n, seed) => {
    const pos = [];
    const curvePts = [];
    for (let i = 0; i <= 60; i++) {
      const u = i / 60;
      const x = lerp(x0, x1, u);
      const y = y0 - sag * (1 - Math.pow(2 * u - 1, 2)) * -1 - sag;
      curvePts.push(new THREE.Vector3(x, y, zz));
    }
    const curve = new THREE.CatmullRomCurve3(curvePts);
    for (let i = 0; i < n; i++) pos.push(curve.getPoint((i + 0.5) / n).toArray());
    const wire = new THREE.Mesh(new THREE.TubeGeometry(curve, 80, 0.011, 5, false), new THREE.MeshBasicMaterial({ color: '#1a0c1d' }));
    stage.add(wire);
    const warm = ['#ffdca0', '#ffc77a', '#ffe9c4', '#ffb4cc'];
    const bulbs = new GlowPoints({ positions: pos, sizes: [0.1], colors: warm, texture: T.glow, twinkle: 0.5, speed: 1.4, opacity: 1.8, seed });
    const halos = new GlowPoints({ positions: pos, sizes: [0.85], colors: warm, texture: T.glow, twinkle: 0.35, speed: 1.1, opacity: 0.55, seed: seed + 1 });
    stage.add(bulbs.points, halos.points);
    glow.push(bulbs, halos);
  };
  fairyString(-7.5, 7.6, 1.4, -13, 13, 34, 3);
  fairyString(-9.5, 8.6, 1.9, -15, 15, 30, 9);
  fairyString(-5.8, 6.2, 1.0, -9, 9, 22, 21);

  {
    const R2 = rng(77);
    const pos = [];
    const cols = ['#ffcf8a', '#ff9ec2', '#ffe3b0', '#c9a6ff', '#ffb36b'];
    for (let i = 0; i < 46; i++) pos.push([(R2() - 0.5) * 34, 0.6 + R2() * 9.5, -11 - R2() * 8]);
    const bokeh = new GlowPoints({
      positions: pos, sizes: [1.1, 1.6, 2.3, 0.8], colors: cols, texture: T.bokeh, twinkle: 0.45, speed: 0.7, opacity: 0.2, seed: 5,
    });
    stage.add(bokeh.points);
    glow.push(bokeh);
  }

  /* ── balloons ── */
  const balloons = [];
  {
    const defs = [
      { c: '#f6a6bd', x: -6.6, y: 5.4, z: -6.5, s: 1.0 },
      { c: '#e8b650', x: -4.8, y: 6.5, z: -8.2, s: 0.9 },
      { c: '#fbf1e6', x: -8.4, y: 4.6, z: -7.8, s: 1.05 },
      { c: '#d65f87', x: -3.1, y: 5.3, z: -9.5, s: 0.85 },
      { c: '#e8b650', x: 6.4, y: 5.6, z: -6.8, s: 1.0 },
      { c: '#f6a6bd', x: 4.7, y: 6.8, z: -8.6, s: 0.95 },
      { c: '#bba0ee', x: 8.2, y: 4.9, z: -8.0, s: 1.05 },
      { c: '#fbf1e6', x: 3.0, y: 5.6, z: -10.2, s: 0.85 },
      { c: '#d65f87', x: 7.2, y: 7.2, z: -10.5, s: 0.9 },
    ];
    const geo = new THREE.SphereGeometry(1, 40, 30);
    defs.forEach((d, i) => {
      const m = new THREE.MeshPhysicalMaterial({ color: d.c, roughness: 0.18, metalness: 0.0, clearcoat: 1, clearcoatRoughness: 0.08, sheen: 0.4, sheenColor: new THREE.Color('#ffffff') });
      const g = new THREE.Group();
      const b = new THREE.Mesh(geo, m);
      b.scale.set(0.74, 0.92, 0.74);
      const knot = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.16, 12), m);
      knot.position.y = -0.95;
      knot.rotation.x = Math.PI;
      const str = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 3.4, 4), new THREE.MeshBasicMaterial({ color: '#d9c7ae', transparent: true, opacity: 0.55 }));
      str.position.y = -0.95 - 1.7;
      g.add(b, knot, str);
      g.position.set(d.x, d.y, d.z);
      g.scale.setScalar(d.s * 1.15);
      g.userData = { base: d.y, ph: i * 1.7, x: d.x };
      stage.add(g);
      balloons.push(g);
    });
  }

  /* ── mood: how bright is the room, how much candle light ── */
  const mood = { room: 0, candle: 0 };
  function applyMood(t) {
    const L = mood.room;
    spot.intensity = 250 * L;
    hemi.intensity = lerp(0.2, 0.4, L);
    rim.intensity = lerp(0.35, 0.8, L);
    fill.intensity = lerp(0.5, 0.85, L);
    scene.environmentIntensity = lerp(0.14, 0.4, L);
    engine.bloom.strength = lerp(0.5, 0.26, L);
    const fl = 1 + 0.06 * Math.sin(t * 13) + 0.05 * Math.sin(t * 29.3) + 0.03 * Math.sin(t * 7.1);
    candle.intensity = 15 * mood.candle * fl;
  }
  applyMood(0);

  function update(t, dt) {
    applyMood(t);
    for (const g of glow) g.update(t, engine.viewportScale());
    for (const b of balloons) {
      const u = b.userData;
      b.position.y = u.base + Math.sin(t * 0.6 + u.ph) * 0.18;
      b.rotation.z = Math.sin(t * 0.45 + u.ph) * 0.06;
      b.rotation.y = t * 0.1 + u.ph;
    }
  }

  return { stage, mood, spot, hemi, rim, candle, porcelain, gold, update, plateGroup };
}
