import * as THREE from 'three';
import { GlowPoints, Flame } from './fx.js';
import { STAND_Y, SIDE_PLATE_POS, SIDE_PLATE_Y, TABLE, FLOOR_Y } from './constants.js';
import { curtainGeometry, roseGeometry, leafGeometry } from './geometry.js';
import { flagTexture } from './textures.js';
import { CONFIG } from './config.js';
import { rng, lerp, TAU } from './util.js';

// ──────────────────────────────────────────────────────────────
//  The room: a warm, candle-lit celebration — wine damask walls, velvet
//  drapes, a champagne-and-blush balloon arch, a name banner, fairy-light
//  curtains, and a dressed table with roses and votives.
// ──────────────────────────────────────────────────────────────

const lathe = (pts, seg = 96) => new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg);
const WALL_Z = -8.6;

export function createStage(engine, T) {
  const { scene } = engine;
  const env = scene.environment;
  const stage = new THREE.Group();
  scene.add(stage);
  scene.background = new THREE.Color('#140a09');
  const R = rng(4242);

  /* ── materials ── */
  const porcelain = new THREE.MeshPhysicalMaterial({
    color: '#f3ece3', roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0.08, sheen: 0.3, sheenColor: new THREE.Color('#ffe9ee'),
  });
  const gold = new THREE.MeshStandardMaterial({ color: '#e2b45a', metalness: 1, roughness: 0.24, envMap: env, envMapIntensity: 1.3 });
  const glow = [];
  const flames = [];

  /* ── lights ── */
  const hemi = new THREE.HemisphereLight(0xffe2cc, 0x3a1a12, 0.25);
  scene.add(hemi);

  const spot = new THREE.SpotLight(0xffdcb5, 0, 0, 0.55, 1, 2);
  spot.position.set(-3.2, 11.5, 6.0);
  spot.target.position.set(0.2, 1.0, 0.3);
  spot.castShadow = true;
  spot.shadow.mapSize.set(engine.q.shadow, engine.q.shadow);
  spot.shadow.camera.near = 6;
  spot.shadow.camera.far = 24;
  spot.shadow.bias = -0.00025;
  spot.shadow.normalBias = 0.02;
  scene.add(spot, spot.target);

  const wallWash = new THREE.SpotLight(0xffc9a0, 0, 0, 0.95, 1, 1.4);
  wallWash.position.set(0, 9.5, 3);
  wallWash.target.position.set(0, 3.5, WALL_Z);
  scene.add(wallWash, wallWash.target);

  const rim = new THREE.DirectionalLight(0xffb79e, 0.3);
  rim.position.set(5, 6, -7);
  scene.add(rim);

  const fill = new THREE.DirectionalLight(0xffe0c8, 0.5);
  fill.position.set(-3, 7, 12);
  scene.add(fill);

  const candle = new THREE.PointLight(0xffa04e, 0, 0, 2);
  scene.add(candle);

  /* ── floor & walls ── */
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(60, 40),
    new THREE.MeshStandardMaterial({ map: T.wood.map, bumpMap: T.wood.bump, bumpScale: 0.8, roughness: 0.45, metalness: 0 }),
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(0, FLOOR_Y, -2);
  floor.receiveShadow = true;
  stage.add(floor);

  const wallMat = new THREE.MeshStandardMaterial({
    map: T.wall.map, roughness: 0.85, metalness: 0.05, emissive: new THREE.Color('#ffffff'), emissiveMap: T.wall.map, emissiveIntensity: 0.12,
  });
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(36, 22), wallMat);
  wall.position.set(0, FLOOR_Y + 11, WALL_Z);
  stage.add(wall);
  const rail = new THREE.Mesh(new THREE.BoxGeometry(36, 0.14, 0.1), gold);
  rail.position.set(0, 0.2, WALL_Z + 0.05);
  stage.add(rail);
  const wains = new THREE.Mesh(new THREE.PlaneGeometry(36, 6.4), new THREE.MeshStandardMaterial({ color: '#3a1119', roughness: 0.7 }));
  wains.position.set(0, FLOOR_Y + 3.2, WALL_Z + 0.02);
  stage.add(wains);

  /* ── velvet curtains framing the room ── */
  {
    const velvet = new THREE.MeshPhysicalMaterial({
      color: '#5e1426', roughness: 0.72, sheen: 1, sheenColor: new THREE.Color('#ff8fa6'), sheenRoughness: 0.32, side: THREE.DoubleSide,
    });
    for (const sx of [-1, 1]) {
      const c = new THREE.Mesh(curtainGeometry(5.2, 21, 10, 0.32, 0.36, sx > 0 ? 3 : 7), velvet);
      c.position.set(sx * 9.6, FLOOR_Y + 10.5, WALL_Z + 0.45);
      c.scale.x = -sx; // gather toward the outside edge
      stage.add(c);
      // a gold valance rod across the top
      const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 5.6, 12), gold);
      rod.rotation.z = Math.PI / 2;
      rod.position.set(sx * 9.6, FLOOR_Y + 20.6, WALL_Z + 0.55);
      stage.add(rod);
    }
  }

  /* ── balloon arch: champagne, blush, ivory and rose gold ── */
  {
    const curve = new THREE.CatmullRomCurve3(
      [[-7.6, -2.2, -7.5], [-7.2, 2.6, -7.6], [-5.6, 6.4, -7.8], [-2.8, 8.4, -7.9], [0, 8.95, -7.9], [2.8, 8.4, -7.9], [5.6, 6.4, -7.8], [7.2, 2.6, -7.6], [7.6, -2.2, -7.5]]
        .map((p) => new THREE.Vector3(...p)),
    );
    const satin = [];
    const chrome = [];
    const palette = [
      { c: '#f2c7cf', metal: false }, { c: '#fbf1e6', metal: false }, { c: '#e7b7a6', metal: false },
      { c: '#d98b9c', metal: false }, { c: '#e9cf9e', metal: true }, { c: '#e3a98f', metal: true },
    ];
    const n = 120;
    for (let i = 0; i < n; i++) {
      const u = (i + R() * 0.8) / n;
      const p = curve.getPointAt(Math.min(1, u));
      const sz = 0.32 + R() * R() * 0.5;
      const off = new THREE.Vector3((R() - 0.5) * 1.2, (R() - 0.5) * 1.2, (R() - 0.3) * 0.9);
      const pick = palette[Math.floor(R() * palette.length)];
      (pick.metal ? chrome : satin).push({ pos: p.add(off), s: sz, c: pick.c });
    }
    const geo = new THREE.SphereGeometry(1, 28, 20);
    geo.scale(0.92, 1.0, 0.92);
    const mk = (list, mat) => {
      const im = new THREE.InstancedMesh(geo, mat, list.length);
      const d = new THREE.Object3D();
      list.forEach((b, i) => {
        d.position.copy(b.pos);
        d.rotation.set(R() * 0.4, R() * TAU, R() * 0.4);
        d.scale.setScalar(b.s);
        d.updateMatrix();
        im.setMatrixAt(i, d.matrix);
        im.setColorAt(i, new THREE.Color(b.c));
      });
      stage.add(im);
      return im;
    };
    mk(satin, new THREE.MeshPhysicalMaterial({ roughness: 0.35, clearcoat: 0.8, clearcoatRoughness: 0.2, sheen: 0.6, sheenColor: new THREE.Color('#ffffff') }));
    mk(chrome, new THREE.MeshStandardMaterial({ metalness: 1, roughness: 0.18, envMap: env, envMapIntensity: 1.6 }));
  }

  /* ── HAPPY BIRTHDAY <NAME> bunting ── */
  const flags = [];
  {
    const text = `HAPPY BIRTHDAY ${CONFIG.name.toUpperCase()}`;
    const span = Math.min(12.6, text.length * 0.58);
    const x0 = -span / 2;
    const y0 = 6.55;
    const sag = 0.85;
    const pts = [];
    for (let i = 0; i <= 40; i++) {
      const u = i / 40;
      pts.push(new THREE.Vector3(x0 + span * u, y0 - sag * (1 - (2 * u - 1) ** 2), WALL_Z + 0.35));
    }
    const curve = new THREE.CatmullRomCurve3(pts);
    stage.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 60, 0.012, 5, false), gold));
    const bgs = ['#f6ebdc', '#efb6c4', '#e9cf9e'];
    const flagGeo = new THREE.PlaneGeometry(0.5, 0.66);
    flagGeo.translate(0, -0.33, 0);
    [...text].forEach((ch, i) => {
      if (ch === ' ') return;
      const u = (i + 0.5) / text.length;
      const p = curve.getPointAt(u);
      const m = new THREE.Mesh(
        flagGeo,
        new THREE.MeshStandardMaterial({ map: flagTexture(ch, bgs[i % 3], '#7a1d35'), transparent: true, alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.6 }),
      );
      const holder = new THREE.Group();
      holder.position.copy(p);
      const tan = curve.getTangentAt(u);
      holder.rotation.z = Math.atan2(tan.y, tan.x);
      holder.add(m);
      stage.add(holder);
      flags.push({ m, ph: i * 0.7 });
    });
  }

  /* ── fairy-light curtain on the wall ── */
  {
    const bulbs = [];
    for (let k = 0; k < 23; k++) {
      const x = -7.2 + k * 0.65;
      const top = 8.3 - Math.abs(x) * 0.12;
      const len = 4.5 + R() * 2.5;
      for (let j = 0; j < 11; j++) bulbs.push([x + (R() - 0.5) * 0.08, top - (j / 10) * len, WALL_Z + 0.12]);
    }
    const warm = ['#ffd9a0', '#ffc77a', '#ffe7c2', '#ffcfa8'];
    const a = new GlowPoints({ positions: bulbs, sizes: [0.08], colors: warm, texture: T.glow, twinkle: 0.45, speed: 1.3, opacity: 2.0, seed: 3 });
    const b = new GlowPoints({ positions: bulbs, sizes: [0.55], colors: warm, texture: T.glow, twinkle: 0.3, speed: 0.9, opacity: 0.28, seed: 4 });
    stage.add(a.points, b.points);
    glow.push(a, b);
  }

  /* ── warm Edison bulbs hanging over the table ── */
  {
    const bulbMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 1.35, 0.6) });
    const wireMat = new THREE.MeshBasicMaterial({ color: '#2a1612' });
    const spots = [[-5.2, 7.2, -3.2], [-3.4, 8.0, -1.8], [3.6, 7.8, -2.0], [5.4, 7.0, -3.4], [-6.2, 8.4, 0.6], [6.3, 8.2, 0.4]];
    const halo = [];
    for (const [x, y, z] of spots) {
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.11, 16, 12), bulbMat);
      b.scale.set(1, 1.3, 1);
      b.position.set(x, y, z);
      const w = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 6, 4), wireMat);
      w.position.set(x, y + 3.1, z);
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.1, 10), gold);
      cap.position.set(x, y + 0.16, z);
      stage.add(b, w, cap);
      halo.push([x, y, z]);
    }
    const g = new GlowPoints({ positions: halo, sizes: [1.4], colors: ['#ffcf8a'], texture: T.glow, twinkle: 0.08, speed: 0.6, opacity: 0.5, seed: 8 });
    stage.add(g.points);
    glow.push(g);
  }

  /* ── table: ivory jacquard cloth, gold trim, blush runner ── */
  const clothMat = new THREE.MeshPhysicalMaterial({
    map: T.cloth.map, bumpMap: T.cloth.bump, bumpScale: 0.8, roughness: 0.6, metalness: 0,
    sheen: 0.6, sheenColor: new THREE.Color('#fff4e2'), sheenRoughness: 0.5,
  });
  const tableTop = new THREE.Mesh(new THREE.CircleGeometry(1, 96), clothMat);
  tableTop.rotation.x = -Math.PI / 2;
  tableTop.scale.set(TABLE.rx, TABLE.rz, 1);
  tableTop.position.set(TABLE.cx, 0, TABLE.cz);
  tableTop.receiveShadow = true;
  stage.add(tableTop);
  {
    const H = -FLOOR_Y;
    const skirtGeo = new THREE.CylinderGeometry(1, 1, H, 160, 14, true);
    const p = skirtGeo.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const a = Math.atan2(p.getZ(i), p.getX(i));
      const depth = (H / 2 - p.getY(i)) / H;
      const fold = 1 + 0.035 * depth * Math.sin(a * 36) + 0.02 * depth * Math.sin(a * 17 + 1);
      p.setX(i, p.getX(i) * fold * (1 + depth * 0.05));
      p.setZ(i, p.getZ(i) * fold * (1 + depth * 0.05));
    }
    skirtGeo.computeVertexNormals();
    const skirt = new THREE.Mesh(skirtGeo, clothMat.clone());
    skirt.material.side = THREE.DoubleSide;
    skirt.scale.set(TABLE.rx, 1, TABLE.rz);
    skirt.position.set(TABLE.cx, -H / 2, TABLE.cz);
    skirt.receiveShadow = true;
    stage.add(skirt);
    const trim = new THREE.Mesh(new THREE.TorusGeometry(1, 0.012, 6, 160), gold);
    trim.rotation.x = Math.PI / 2;
    trim.scale.set(TABLE.rx + 0.01, TABLE.rz + 0.01, 1);
    trim.position.set(TABLE.cx, -0.01, TABLE.cz);
    stage.add(trim);
    const runner = new THREE.Mesh(
      new THREE.PlaneGeometry(TABLE.rx * 1.98, 1.25),
      new THREE.MeshPhysicalMaterial({ color: '#e8aebb', roughness: 0.32, sheen: 1, sheenColor: new THREE.Color('#ffe1e8'), sheenRoughness: 0.25 }),
    );
    runner.rotation.x = -Math.PI / 2;
    runner.position.set(0, 0.004, -0.6);
    runner.receiveShadow = true;
    stage.add(runner);
  }

  /* ── cake stand (porcelain, gold rims) ── */
  const standPts = [
    [0.0, 0.0], [0.98, 0.0], [1.04, 0.02], [1.05, 0.05], [0.98, 0.085], [0.75, 0.13], [0.48, 0.19], [0.27, 0.26],
    [0.18, 0.33], [0.15, 0.39], [0.21, 0.43], [0.16, 0.47], [0.15, 0.53], [0.23, 0.58], [0.45, 0.61], [1.0, 0.63],
    [1.8, 0.65], [2.04, 0.67], [2.1, STAND_Y - 0.01], [2.08, STAND_Y + 0.02], [2.02, STAND_Y + 0.012], [1.95, STAND_Y], [0.0, STAND_Y],
  ];
  const stand = new THREE.Mesh(lathe(standPts), porcelain);
  stand.castShadow = true;
  stand.receiveShadow = true;
  stage.add(stand);
  for (const [r, y, t] of [[2.07, STAND_Y + 0.016, 0.014], [1.03, 0.04, 0.012], [0.18, 0.43, 0.014]]) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(r, t, 10, 140), gold);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = y;
    stage.add(ring);
  }

  /* ── dessert plate on a gold charger ── */
  const plateGroup = new THREE.Group();
  plateGroup.position.set(SIDE_PLATE_POS.x, 0, SIDE_PLATE_POS.z);
  {
    const charger = new THREE.Mesh(lathe([[0, 0.0], [1.25, 0.0], [1.3, 0.02], [1.27, 0.03], [0, 0.02]], 96), gold);
    charger.receiveShadow = true;
    const plate = new THREE.Mesh(
      lathe([[0, 0.02], [0.75, 0.02], [0.95, 0.035], [1.06, 0.07], [1.1, 0.09], [1.08, 0.1], [1.0, 0.08], [0.85, SIDE_PLATE_Y + 0.004], [0, SIDE_PLATE_Y]], 96),
      porcelain,
    );
    plate.castShadow = true;
    plate.receiveShadow = true;
    const rimG = new THREE.Mesh(new THREE.TorusGeometry(1.095, 0.01, 8, 120), gold);
    rimG.rotation.x = Math.PI / 2;
    rimG.position.y = 0.094;
    plateGroup.add(charger, plate, rimG);
    // a dessert fork beside it
    const fork = new THREE.Group();
    const handle = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.02, 0.9), gold);
    handle.position.z = 0.25;
    fork.add(handle);
    for (let i = -1.5; i <= 1.5; i++) {
      const tine = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.015, 0.25), gold);
      tine.position.set(i * 0.025, 0, -0.32);
      fork.add(tine);
    }
    fork.position.set(1.45, 0.015, 0.1);
    fork.rotation.y = 0.15;
    plateGroup.add(fork);
  }
  stage.add(plateGroup);

  /* ── roses in gold vases ── */
  {
    const roseGeo = roseGeometry(15, 11);
    const roseMat = new THREE.MeshPhysicalMaterial({ roughness: 0.55, sheen: 1, sheenColor: new THREE.Color('#ffe3e8'), sheenRoughness: 0.5, side: THREE.DoubleSide });
    const leafMat = new THREE.MeshStandardMaterial({ color: '#4c7a46', roughness: 0.55, side: THREE.DoubleSide });
    const vasePts = [[0, 0], [0.2, 0], [0.24, 0.05], [0.18, 0.2], [0.15, 0.4], [0.2, 0.58], [0.27, 0.66], [0.28, 0.7], [0.25, 0.7]];
    const roses = [];
    const leaves = [];
    const d = new THREE.Object3D();
    const colors = ['#f2b3c2', '#fbeee6', '#d9768f', '#f7d5dc', '#e9cf9e'];
    for (const [cx, cz] of [[-2.15, -2.05], [2.25, -2.15]]) {
      const vase = new THREE.Mesh(lathe(vasePts, 40), gold);
      vase.position.set(cx, 0, cz);
      vase.castShadow = true;
      stage.add(vase);
      for (let i = 0; i < 13; i++) {
        const a = R() * TAU;
        const el = Math.acos(1 - R() * 0.9);
        const rr = 0.48;
        d.position.set(cx + Math.sin(el) * Math.cos(a) * rr, 0.78 + Math.cos(el) * rr * 0.75, cz + Math.sin(el) * Math.sin(a) * rr);
        d.lookAt(cx + Math.sin(el) * Math.cos(a) * 3, 0.78 + Math.cos(el) * 3, cz + Math.sin(el) * Math.sin(a) * 3);
        d.rotateX(Math.PI / 2);
        d.scale.setScalar(0.3 + R() * 0.12);
        d.updateMatrix();
        roses.push({ m: d.matrix.clone(), c: colors[Math.floor(R() * colors.length)] });
      }
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * TAU;
        d.position.set(cx + Math.cos(a) * 0.42, 0.72 + R() * 0.12, cz + Math.sin(a) * 0.42);
        d.rotation.set(-0.2, -a, -0.6);
        d.scale.setScalar(1.6);
        d.updateMatrix();
        leaves.push(d.matrix.clone());
      }
    }
    const im = new THREE.InstancedMesh(roseGeo, roseMat, roses.length);
    roses.forEach((r, i) => {
      im.setMatrixAt(i, r.m);
      im.setColorAt(i, new THREE.Color(r.c));
    });
    im.castShadow = true;
    stage.add(im);
    const lm = new THREE.InstancedMesh(leafGeometry(0.2, 0.07), leafMat, leaves.length);
    leaves.forEach((m, i) => lm.setMatrixAt(i, m));
    stage.add(lm);

    // scattered petals on the cloth
    const petalGeo = new THREE.CircleGeometry(0.07, 8);
    petalGeo.scale(1, 1.4, 1);
    const pm = new THREE.InstancedMesh(petalGeo, new THREE.MeshPhysicalMaterial({ roughness: 0.5, sheen: 1, sheenColor: new THREE.Color('#ffe0e8'), side: THREE.DoubleSide }), 46);
    for (let i = 0; i < 46; i++) {
      let x;
      let z;
      do {
        const a = R() * TAU;
        const rr = 2.3 + R() * 1.1;
        x = Math.cos(a) * rr * (TABLE.rx / 3.6);
        z = TABLE.cz + Math.sin(a) * rr * (TABLE.rz / 3.6) * 0.95;
      } while ((x - SIDE_PLATE_POS.x) ** 2 + (z - SIDE_PLATE_POS.z) ** 2 < 1.7 || (x / TABLE.rx) ** 2 + ((z - TABLE.cz) / TABLE.rz) ** 2 > 0.9);
      d.position.set(x, 0.008, z);
      d.rotation.set(-Math.PI / 2 + (R() - 0.5) * 0.3, 0, R() * TAU);
      d.scale.setScalar(0.8 + R() * 0.5);
      d.updateMatrix();
      pm.setMatrixAt(i, d.matrix);
      pm.setColorAt(i, new THREE.Color(colors[Math.floor(R() * 3)]));
    }
    stage.add(pm);
  }

  /* ── glass votives with real little flames ── */
  {
    const glass = new THREE.MeshPhysicalMaterial({ color: '#ffd9a8', transparent: true, opacity: 0.35, roughness: 0.08, clearcoat: 1, side: THREE.DoubleSide, depthWrite: false });
    const wax = new THREE.MeshStandardMaterial({ color: '#fff4e4', roughness: 0.5, emissive: new THREE.Color('#ff9a3c'), emissiveIntensity: 0.25 });
    const spots = [[-3.0, 0.2], [-2.6, 1.6], [3.0, 0.1], [2.75, 1.7], [0.9, 3.2], [-0.4, -2.9], [1.2, -2.8]];
    spots.forEach(([x, z], i) => {
      const g = new THREE.Group();
      const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.11, 0.22, 20, 1, true), glass);
      cup.position.y = 0.11;
      const w = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.08, 16), wax);
      w.position.y = 0.04;
      const f = new Flame(T.glow, 3 + i * 0.7);
      f.group.position.y = 0.09;
      f.group.scale.setScalar(0.6);
      g.add(cup, w, f.group);
      g.position.set(x, 0, z);
      stage.add(g);
      flames.push(f);
    });
  }

  /* ── gifts, wrapped in ivory, blush and gold ── */
  const wrap = (w, h, d, paper, ribbon) => {
    const g = new THREE.Group();
    const box = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshPhysicalMaterial({ color: paper, roughness: 0.45, sheen: 0.5, sheenColor: new THREE.Color('#ffffff') }));
    box.position.y = h / 2;
    box.castShadow = box.receiveShadow = true;
    const rm = new THREE.MeshPhysicalMaterial({ color: ribbon, roughness: 0.28, sheen: 1, sheenColor: new THREE.Color('#ffffff'), metalness: 0.2 });
    const r1 = new THREE.Mesh(new THREE.BoxGeometry(w * 1.02, h * 1.02, d * 0.14), rm);
    const r2 = new THREE.Mesh(new THREE.BoxGeometry(w * 0.14, h * 1.02, d * 1.02), rm);
    r1.position.y = r2.position.y = h / 2;
    g.add(box, r1, r2);
    for (const s of [-1, 1]) {
      const loop = new THREE.Mesh(new THREE.TorusGeometry(w * 0.16, w * 0.04, 10, 24), rm);
      loop.position.set(s * w * 0.14, h + w * 0.09, 0);
      loop.rotation.set(0, 0, s * 0.9);
      loop.scale.set(1, 1.2, 1);
      g.add(loop);
    }
    return g;
  };
  const gift1 = wrap(0.85, 0.7, 0.85, '#fbf1e6', '#c9963e');
  gift1.position.set(2.75, 0, -0.75);
  gift1.rotation.y = 0.5;
  const gift2 = wrap(0.62, 0.5, 0.62, '#efb6c4', '#fbf1e6');
  gift2.position.set(2.45, 0, 0.45);
  gift2.rotation.y = -0.3;
  stage.add(gift1, gift2);

  /* ── mood: how bright the room is, how much candle light ── */
  const mood = { room: 0, candle: 0 };
  function applyMood(t) {
    const L = mood.room;
    spot.intensity = 230 * L;
    wallWash.intensity = lerp(18, 90, L);
    hemi.intensity = lerp(0.22, 0.42, L);
    rim.intensity = lerp(0.3, 0.7, L);
    fill.intensity = lerp(0.45, 0.8, L);
    scene.environmentIntensity = lerp(0.18, 0.38, L);
    wallMat.emissiveIntensity = lerp(0.1, 0.05, L);
    engine.bloom.strength = lerp(0.55, 0.32, L);
    const fl = 1 + 0.06 * Math.sin(t * 13) + 0.05 * Math.sin(t * 29.3) + 0.03 * Math.sin(t * 7.1);
    candle.intensity = 12 * mood.candle * fl;
  }
  applyMood(0);

  function update(t) {
    applyMood(t);
    for (const g of glow) g.update(t, engine.viewportScale());
    for (const f of flames) f.update(t);
    for (const f of flags) f.m.rotation.x = Math.sin(t * 1.3 + f.ph) * 0.08;
  }

  return { stage, mood, spot, hemi, rim, candle, fill, porcelain, gold, update, plateGroup };
}
