import * as THREE from 'three';
import { TAU, rng } from './util.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// Point on the cake in cake-local coordinates. φ is measured from +z toward +x.
export const polar = (r, y, phi) => new THREE.Vector3(r * Math.sin(phi), y, r * Math.cos(phi));
export const tangent = (phi) => new THREE.Vector3(Math.cos(phi), 0, -Math.sin(phi));

function fixWinding(indices, pos, nor) {
  for (let i = 0; i < indices.length; i += 3) {
    const a = indices[i] * 3;
    const b = indices[i + 1] * 3;
    const c = indices[i + 2] * 3;
    const ux = pos[b] - pos[a];
    const uy = pos[b + 1] - pos[a + 1];
    const uz = pos[b + 2] - pos[a + 2];
    const vx = pos[c] - pos[a];
    const vy = pos[c + 1] - pos[a + 1];
    const vz = pos[c + 2] - pos[a + 2];
    const cx = uy * vz - uz * vy;
    const cy = uz * vx - ux * vz;
    const cz = ux * vy - uy * vx;
    const nx = nor[a] + nor[b] + nor[c];
    const ny = nor[a + 1] + nor[b + 1] + nor[c + 1];
    const nz = nor[a + 2] + nor[b + 2] + nor[c + 2];
    if (cx * nx + cy * ny + cz * nz < 0) {
      const t = indices[i + 1];
      indices[i + 1] = indices[i + 2];
      indices[i + 2] = t;
    }
  }
}

/** outline of the vertical cross-section, centre-bottom → rim → centre-top */
function crossSection(R, H, cr, S) {
  const pts = [
    { r: 0, y: 0 },
    { r: R, y: 0 },
    { r: R, y: H - cr },
  ];
  for (let i = 1; i <= S; i++) {
    const t = (i / S) * (Math.PI / 2);
    pts.push({ r: R - cr + cr * Math.cos(t), y: H - cr + cr * Math.sin(t) });
  }
  pts.push({ r: 0, y: H });
  return pts;
}

/**
 * A solid pie-slice of cake from angle a0 to a1 (or a full round when
 * a1 − a0 = 2π). Group 0 = buttercream skin, group 1 = flat cut faces.
 */
export function sectorGeometry({ R, H, cr = 0.09, a0 = 0, a1 = TAU, uvScale = 3.2 }) {
  const full = a1 - a0 >= TAU - 1e-4;
  const nAng = Math.max(2, Math.ceil((a1 - a0) / (TAU / 128)));
  const S = 7;
  const pos = [];
  const nor = [];
  const uv = [];
  const idxSkin = [];
  const idxCut = [];

  // ── swept surfaces ──
  const sweep = (pts, mode) => {
    const base = pos.length / 3;
    let s = 0;
    const cum = pts.map((p, i) => {
      if (i) s += Math.hypot(p.r - pts[i - 1].r, p.y - pts[i - 1].y);
      return s;
    });
    for (let i = 0; i <= nAng; i++) {
      const phi = a0 + ((a1 - a0) * i) / nAng;
      const sn = Math.sin(phi);
      const cs = Math.cos(phi);
      pts.forEach((p, j) => {
        pos.push(p.r * sn, p.y, p.r * cs);
        nor.push(p.nr * sn, p.ny, p.nr * cs);
        if (mode === 'wall') uv.push((phi * R) / uvScale, (cum[j] + 0.0) / uvScale);
        else uv.push((p.r * sn) / uvScale, (p.r * cs) / uvScale);
      });
    }
    const cnt = pts.length;
    for (let i = 0; i < nAng; i++) {
      for (let j = 0; j < cnt - 1; j++) {
        const a = base + i * cnt + j;
        const b = base + (i + 1) * cnt + j;
        const c = base + (i + 1) * cnt + j + 1;
        const d = base + i * cnt + j + 1;
        idxSkin.push(a, b, c, a, c, d);
      }
    }
  };

  const wall = [
    { r: R, y: 0, nr: 1, ny: 0 },
    { r: R, y: H - cr, nr: 1, ny: 0 },
  ];
  for (let i = 1; i <= S; i++) {
    const t = (i / S) * (Math.PI / 2);
    wall.push({ r: R - cr + cr * Math.cos(t), y: H - cr + cr * Math.sin(t), nr: Math.cos(t), ny: Math.sin(t) });
  }
  sweep(wall, 'wall');
  sweep(
    [
      { r: R - cr, y: H, nr: 0, ny: 1 },
      { r: 0, y: H, nr: 0, ny: 1 },
    ],
    'flat',
  );
  sweep(
    [
      { r: R, y: 0, nr: 0, ny: -1 },
      { r: 0, y: 0, nr: 0, ny: -1 },
    ],
    'flat',
  );

  // ── flat cut faces ──
  if (!full) {
    const outline = crossSection(R, H, cr, S);
    for (const [phi, sign] of [
      [a0, -1],
      [a1, 1],
    ]) {
      const base = pos.length / 3;
      const t = tangent(phi);
      outline.forEach((p) => {
        const v = polar(p.r, p.y, phi);
        pos.push(v.x, v.y, v.z);
        nor.push(t.x * sign, 0, t.z * sign);
        uv.push(p.r / R, p.y / H);
      });
      for (let k = 1; k < outline.length - 1; k++) idxCut.push(base, base + k, base + k + 1);
    }
  }

  const index = idxSkin.concat(idxCut);
  fixWinding(index, pos, nor);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(index);
  g.addGroup(0, idxSkin.length, 0);
  if (idxCut.length) g.addGroup(idxSkin.length, idxCut.length, 1);
  g.computeBoundingSphere();
  return g;
}

/**
 * The narrow groove a knife leaves behind: runs from near the centre, across the
 * top, round the rounded rim, and down the side. A shader reveals it top→bottom.
 */
export function slitGeometry({ R, H, cr = 0.09, phi, width = 0.034, r0 = 0.08, lift = 0.022 }) {
  const S = 6;
  const path = [{ r: r0, y: H, nr: 0, ny: 1 }];
  path.push({ r: R - cr, y: H, nr: 0, ny: 1 });
  for (let i = 1; i <= S; i++) {
    const t = (i / S) * (Math.PI / 2);
    path.push({ r: R - cr + cr * Math.cos(t), y: H - cr + cr * Math.sin(t), nr: Math.cos(t), ny: Math.sin(t) });
  }
  // (this arc runs top→side as t goes 90°→0° so reverse it)
  const arc = path.splice(2).reverse();
  path.push(...arc);
  const wallSteps = 8;
  for (let i = 1; i <= wallSteps; i++) {
    path.push({ r: R, y: (H - cr) * (1 - i / wallSteps) + 0.015, nr: 1, ny: 0 });
  }
  let len = 0;
  const cum = path.map((p, i) => {
    if (i) len += Math.hypot(p.r - path[i - 1].r, p.y - path[i - 1].y);
    return len;
  });

  const t = tangent(phi);
  const pos = [];
  const across = [];
  const along = [];
  const index = [];
  path.forEach((p, i) => {
    const c = polar(p.r, p.y, phi);
    const n = new THREE.Vector3(p.nr * Math.sin(phi), p.ny, p.nr * Math.cos(phi));
    c.addScaledVector(n, lift);
    for (const s of [-1, 1]) {
      const v = c.clone().addScaledVector(t, (s * width) / 2);
      pos.push(v.x, v.y, v.z);
      across.push(s);
      along.push(cum[i] / len);
    }
    if (i < path.length - 1) {
      const a = i * 2;
      index.push(a, a + 2, a + 3, a, a + 3, a + 1);
    }
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('aAcross', new THREE.Float32BufferAttribute(across, 1));
  g.setAttribute('aAlong', new THREE.Float32BufferAttribute(along, 1));
  g.setIndex(index);
  return g;
}

export function slitMaterial(H) {
  return new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2,
    uniforms: { uDepth: { value: 0 }, uH: { value: H } },
    vertexShader: /* glsl */ `
      attribute float aAcross; attribute float aAlong;
      varying float vAcross; varying float vAlong; varying float vY;
      void main(){
        vAcross = aAcross; vAlong = aAlong; vY = position.y;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: /* glsl */ `
      uniform float uDepth; uniform float uH;
      varying float vAcross; varying float vAlong; varying float vY;
      void main(){
        float cutY = uH * (1.0 - uDepth);
        if (vY < cutY - 0.004) discard;
        float edge = 1.0 - smoothstep(0.35, 1.0, abs(vAcross));
        float a = edge * smoothstep(0.0, 0.07, vAlong) * smoothstep(0.0, 0.05, uDepth);
        vec3 col = mix(vec3(0.30,0.10,0.14), vec3(0.075,0.02,0.035), edge);
        gl_FragColor = vec4(col, a * 0.94);
      }`,
  });
}

/**
 * Piped-cream rosette: a fluted, twisting, tapering swirl like one squeezed
 * through a star nozzle.
 */
export function rosetteGeometry({ radius = 0.17, height = 0.19, flutes = 11, coils = 2.6, rows = 40, cols = 44 } = {}) {
  const pos = [];
  const index = [];
  for (let j = 0; j <= rows; j++) {
    const s = j / rows;
    const taper = Math.pow(1 - Math.pow(s, 1.35), 0.7);
    const coil = 1 + 0.2 * Math.sin(s * TAU * coils - 0.6) * (1 - s * 0.6);
    const rr = radius * taper * coil;
    const y = height * Math.pow(s, 0.82);
    for (let i = 0; i < cols; i++) {
      const phi = (i / cols) * TAU;
      const ridge = 1 + (0.13 * (1 - s * 0.7)) * Math.cos(flutes * phi + 3.2 * s);
      pos.push(Math.cos(phi) * rr * ridge, y, Math.sin(phi) * rr * ridge);
    }
  }
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const a = j * cols + i;
      const b = j * cols + ((i + 1) % cols);
      const c = (j + 1) * cols + ((i + 1) % cols);
      const d = (j + 1) * cols + i;
      index.push(a, d, c, a, c, b);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(index);
  g.computeVertexNormals();
  return g;
}

/** strawberry, tip at y=0 and leafy crown at y≈size */
export function strawberryGeometry(size = 0.4) {
  const prof = [
    [0.0, 0.0],
    [0.07, 0.025],
    [0.17, 0.11],
    [0.27, 0.27],
    [0.345, 0.47],
    [0.37, 0.64],
    [0.35, 0.82],
    [0.28, 0.94],
    [0.16, 0.99],
    [0.0, 1.0],
  ].map(([r, y]) => new THREE.Vector2(r * size * 0.78, y * size));
  const curve = new THREE.SplineCurve(prof);
  const pts = curve.getPoints(40).map((p) => new THREE.Vector2(Math.max(0, p.x), p.y));
  pts[0].x = 0;
  pts[pts.length - 1].x = 0;
  return new THREE.LatheGeometry(pts, 40);
}

export function leafGeometry(len = 0.2, wid = 0.07) {
  const s = new THREE.Shape();
  s.moveTo(0, 0);
  s.quadraticCurveTo(len * 0.35, wid, len, 0);
  s.quadraticCurveTo(len * 0.35, -wid, 0, 0);
  const g = new THREE.ShapeGeometry(s, 6);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i);
    p.setZ(i, -((x / len) ** 2) * len * 0.5);
  }
  g.computeVertexNormals();
  return g;
}

/* ───────────────────────── gold drip ─────────────────────────
   A glossy ganache-style drip over the top edge: a band that hugs the
   rounded rim and runs down the side by a length that varies around the cake. */
export function makeDripLumps({ R, H, seed = 9, avoid = [], margin = 0.08 }) {
  const rand = rng(seed);
  const lumps = [];
  const n = 34;
  for (let k = 0; k < n; k++) {
    const phi = (k / n) * TAU + (rand() - 0.5) * 0.12;
    const near = avoid.some((a) => Math.abs(Math.atan2(Math.sin(phi - a), Math.cos(phi - a))) < margin);
    if (near) continue;
    lumps.push({ phi, A: H * (0.08 + rand() * rand() * 0.42), w: 0.028 + rand() * 0.02 });
  }
  return lumps;
}
const dripLen = (phi, lumps) => {
  let L = 0.03;
  for (const l of lumps) {
    const d = Math.atan2(Math.sin(phi - l.phi), Math.cos(phi - l.phi)) / l.w;
    L = Math.max(L, 0.03 + l.A * Math.exp(-d * d));
  }
  return L;
};

export function dripGeometry({ R, H, cr, a0, a1, lumps, off = 0.013, topIn = 0.1 }) {
  const n = Math.max(8, Math.ceil((a1 - a0) / 0.005));
  const S = 6;
  const Wn = 10;
  const pos = [];
  const nor = [];
  const index = [];
  let cnt = 0;
  for (let i = 0; i <= n; i++) {
    const phi = a0 + ((a1 - a0) * i) / n;
    const sn = Math.sin(phi);
    const cs = Math.cos(phi);
    const L = dripLen(phi, lumps);
    const prof = [];
    prof.push([R - cr - topIn, H + off * 0.5, 0, 1]);
    prof.push([R - cr, H + off, 0, 1]);
    for (let k = 1; k <= S; k++) {
      const t = (k / S) * (Math.PI / 2);
      prof.push([R - cr + (cr + off) * Math.sin(t), H - cr + (cr + off) * Math.cos(t), Math.sin(t), Math.cos(t)]);
    }
    for (let j = 1; j <= Wn; j++) {
      const y = H - cr - L * (j / Wn);
      const end = j === Wn ? 0.55 : 1;
      prof.push([R + off * end, y, 1, 0]);
    }
    prof.push([R + 0.002, H - cr - L - 0.006, 0.4, -0.9]);
    cnt = prof.length;
    for (const [r, y, nr, ny] of prof) {
      pos.push(r * sn, y, r * cs);
      nor.push(nr * sn, ny, nr * cs);
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < cnt - 1; j++) {
      const a = i * cnt + j;
      const b = (i + 1) * cnt + j;
      index.push(a, b, b + 1, a, b + 1, a + 1);
    }
  }
  fixWinding(index, pos, nor);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(index);
  g.computeVertexNormals();
  return g;
}
export function dripTips({ R, H, cr, lumps, off = 0.013 }) {
  return lumps.map((l) => {
    const L = dripLen(l.phi, lumps);
    const r = Math.min(0.03, l.w * R * 0.55);
    return { phi: l.phi, r, pos: polar(R + off * 0.4, H - cr - L + r * 0.5, l.phi) };
  });
}

/* ───────────────────────── roses ───────────────────────── */
function petalGeometry(w, h, cup, curl) {
  const cols = 8;
  const rows = 7;
  const pos = [];
  const index = [];
  for (let j = 0; j <= rows; j++) {
    const v = j / rows;
    const width = w * Math.sin(Math.PI * (0.12 + 0.82 * Math.pow(v, 0.75)));
    for (let i = 0; i <= cols; i++) {
      const u = (i / cols) * 2 - 1;
      const x = u * width;
      const y = v * h;
      const z = cup * u * u * width - curl * v * v * h + 0.04 * h * Math.sin(u * 3 + v * 5) * v;
      pos.push(x, y, z);
    }
  }
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const a = j * (cols + 1) + i;
      const b = a + cols + 1;
      index.push(a, b, a + 1, a + 1, b, b + 1);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(index);
  g.computeVertexNormals();
  return g;
}
/** an open garden rose about 1 unit across, sitting on y = 0 */
export function roseGeometry(petals = 15, seed = 3) {
  const rand = rng(seed);
  const parts = [];
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  for (let i = 0; i < petals; i++) {
    const k = i / (petals - 1);
    const g = petalGeometry(0.16 + 0.24 * k, 0.32 + 0.16 * k, 0.55 - 0.25 * k, 0.08 + 0.4 * k * k);
    const theta = i * 2.39996 + rand() * 0.2;
    const d = 0.02 + 0.2 * k;
    const tilt = 0.05 + 1.05 * Math.pow(k, 1.3);
    q.setFromEuler(new THREE.Euler(-tilt, theta + Math.PI, 0, 'YXZ'));
    m.compose(new THREE.Vector3(Math.sin(theta) * d, -0.06 * k, Math.cos(theta) * d), q, new THREE.Vector3(1, 1, 1));
    g.applyMatrix4(m);
    parts.push(g);
  }
  const bud = new THREE.SphereGeometry(0.07, 10, 8);
  bud.scale(1, 1.4, 1);
  bud.translate(0, 0.16, 0);
  bud.deleteAttribute('uv');
  parts.push(bud);
  const merged = mergeGeometries(parts.map((p) => (p.index ? p : p)), false);
  merged.computeVertexNormals();
  return merged;
}

/* ───────────────────────── tubes with a varying radius (braids) ───────────────────────── */
export function variableTube(curve, segs, radial, radiusFn, uRepeat = 1) {
  const frames = curve.computeFrenetFrames(segs, false);
  const pos = [];
  const uv = [];
  const index = [];
  const P = new THREE.Vector3();
  for (let i = 0; i <= segs; i++) {
    const u = i / segs;
    curve.getPointAt(u, P);
    const N = frames.normals[i];
    const B = frames.binormals[i];
    for (let j = 0; j <= radial; j++) {
      const a = (j / radial) * TAU;
      const r = radiusFn(u, a);
      const cx = -Math.cos(a);
      const sx = Math.sin(a);
      pos.push(P.x + r * (cx * N.x + sx * B.x), P.y + r * (cx * N.y + sx * B.y), P.z + r * (cx * N.z + sx * B.z));
      uv.push(u * uRepeat, j / radial);
    }
  }
  for (let i = 0; i < segs; i++) {
    for (let j = 0; j < radial; j++) {
      const a = i * (radial + 1) + j;
      const b = a + radial + 1;
      index.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(index);
  g.computeVertexNormals();
  return g;
}

/* ───────────────────────── velvet curtain ───────────────────────── */
export function curtainGeometry(width, height, folds = 9, depth = 0.28, tieAt = 0.32, seed = 1) {
  const g = new THREE.PlaneGeometry(width, height, 140, 30);
  const p = g.attributes.position;
  const rand = rng(seed);
  const ph = rand() * 6;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i);
    const y = p.getY(i);
    const yn = (y + height / 2) / height; // 0 floor … 1 top
    const gather = 1 - 0.5 * Math.exp(-(((yn - tieAt) / 0.14) ** 2));
    const xn = x / width;
    const nx = (xn + 0.5) * gather - 0.5 * gather + (1 - gather) * 0.32 * Math.sign(-0.5);
    const z = depth * Math.sin(xn * folds * TAU + ph) * (0.55 + 0.45 * gather) + depth * 0.3 * Math.sin(xn * folds * 2.3 * TAU + ph * 2);
    p.setXYZ(i, nx * width, y, z);
  }
  g.computeVertexNormals();
  return g;
}
