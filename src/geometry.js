import * as THREE from 'three';
import { TAU } from './util.js';

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
export function slitGeometry({ R, H, cr = 0.09, phi, width = 0.042, r0 = 0.1, lift = 0.0045 }) {
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
