import * as THREE from 'three';
import { rng, TAU } from './util.js';

// ──────────────────────────────────────────────────────────────
//  Procedural textures — everything is painted on <canvas>, so the
//  whole site ships without a single image file.
// ──────────────────────────────────────────────────────────────

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}

function toTexture(c, { srgb = true, repeat = null, wrap = false, aniso = 8 } = {}) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.anisotropy = aniso;
  if (wrap) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  if (repeat) t.repeat.set(repeat[0], repeat[1]);
  t.needsUpdate = true;
  return t;
}

function grain(ctx, w, h, amount, seed, channels = 3) {
  const R = rng(seed);
  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (R() - 0.5) * amount;
    d[i] += n;
    if (channels === 3) {
      d[i + 1] += n;
      d[i + 2] += n;
    } else {
      d[i + 1] = d[i];
      d[i + 2] = d[i];
    }
  }
  ctx.putImageData(img, 0, 0);
}

// draw something 9 times so strokes wrap and the texture tiles seamlessly
function wrapped(S, fn, x = S / 2, y = S / 2, reach = 0) {
  const xs = [0];
  const ys = [0];
  if (x < reach) xs.push(S);
  if (x > S - reach) xs.push(-S);
  if (y < reach) ys.push(S);
  if (y > S - reach) ys.push(-S);
  for (const ox of xs) for (const oy of ys) fn(ox, oy);
}

/* ─── ivory buttercream, with palette-knife streaks ─────────────── */
export function frostingTextures(aniso) {
  const S = 512;
  const R = rng(11);
  const col = canvas(S, S);
  const cx = col.getContext('2d');
  const bump = canvas(S, S);
  const bx = bump.getContext('2d');
  cx.fillStyle = '#f8eee3';
  cx.fillRect(0, 0, S, S);
  bx.fillStyle = '#808080';
  bx.fillRect(0, 0, S, S);
  cx.lineCap = bx.lineCap = 'round';

  for (let i = 0; i < 700; i++) {
    const x = R() * S;
    const y = R() * S;
    const len = 50 + R() * 170;
    const w = 3 + R() * 12;
    const ang = Math.PI / 2 + (R() - 0.5) * 0.3;
    const light = R() > 0.5;
    const a = 0.05 + R() * 0.08;
    const dx = Math.cos(ang) * len;
    const dy = Math.sin(ang) * len;
    wrapped(S, (ox, oy) => {
      cx.strokeStyle = light ? `rgba(255,252,246,${a * 1.2})` : `rgba(214,184,160,${a * 0.9})`;
      cx.lineWidth = w;
      cx.beginPath();
      cx.moveTo(x + ox, y + oy);
      cx.lineTo(x + ox + dx, y + oy + dy);
      cx.stroke();
      bx.strokeStyle = light ? `rgba(255,255,255,${a * 1.6})` : `rgba(0,0,0,${a * 1.6})`;
      bx.lineWidth = w;
      bx.beginPath();
      bx.moveTo(x + ox, y + oy);
      bx.lineTo(x + ox + dx, y + oy + dy);
      bx.stroke();
    }, x, y, 200);
  }
  grain(cx, S, S, 7, 3);
  grain(bx, S, S, 10, 4, 1);
  return {
    map: toTexture(col, { wrap: true, aniso }),
    bump: toTexture(bump, { srgb: false, wrap: true, aniso }),
  };
}

/* ─── the cut face: golden sponge, cream, strawberry jam ───────── */
export function sectionTextures(aniso) {
  const W = 1024;
  const H = 640;
  const R = rng(77);
  const col = canvas(W, H);
  const c = col.getContext('2d');
  const bump = canvas(W, H);
  const b = bump.getContext('2d');

  // layers measured top → bottom, as fractions of the cake's height
  const layers = [
    { k: 'frost', h: 0.06 },
    { k: 'sponge', h: 0.235 },
    { k: 'cream', h: 0.052 },
    { k: 'jam', h: 0.03 },
    { k: 'cream', h: 0.04 },
    { k: 'sponge', h: 0.235 },
    { k: 'cream', h: 0.052 },
    { k: 'jam', h: 0.03 },
    { k: 'cream', h: 0.04 },
    { k: 'sponge', h: 0.2 },
    { k: 'frost', h: 0.025 },
  ];
  const total = layers.reduce((s, l) => s + l.h, 0);
  let acc = 0;
  for (const l of layers) {
    l.y0 = (acc / total) * H;
    acc += l.h;
    l.y1 = (acc / total) * H;
  }
  const wob = (i, x) =>
    Math.sin(x * 0.011 + i * 1.7) * 2.2 + Math.sin(x * 0.037 + i * 4.1) * 1.2 + Math.sin(x * 0.09 + i) * 0.5;
  const path = (ctx, l, idx) => {
    ctx.beginPath();
    ctx.moveTo(0, l.y0 + wob(idx, 0));
    for (let x = 0; x <= W; x += 8) ctx.lineTo(x, l.y0 + wob(idx, x));
    for (let x = W; x >= 0; x -= 8) ctx.lineTo(x, l.y1 + wob(idx + 1, x));
    ctx.closePath();
  };

  b.fillStyle = '#808080';
  b.fillRect(0, 0, W, H);
  c.fillStyle = '#e8c477';
  c.fillRect(0, 0, W, H);

  // crumb + air-pocket overlays are painted ONCE (no clipping = fast), then
  // stamped into each sponge layer.
  const poreC = canvas(W, H);
  const pc = poreC.getContext('2d');
  const poreB = canvas(W, H);
  const pb = poreB.getContext('2d');
  pb.fillStyle = 'rgba(128,128,128,0)';
  for (let n = 0; n < 9000; n++) {
    const x = R() * W;
    const y = R() * H;
    const r = 0.6 + R() * R() * 3.2;
    pc.fillStyle = `rgba(150,96,34,${0.1 + R() * 0.22})`;
    pc.beginPath();
    pc.ellipse(x, y, r * 1.25, r, R() * 3, 0, TAU);
    pc.fill();
    pc.fillStyle = `rgba(255,243,200,${0.18 + R() * 0.3})`;
    pc.beginPath();
    pc.arc(x - r * 0.5, y + r * 0.7, r * 0.45, 0, TAU);
    pc.fill();
    pb.fillStyle = `rgba(0,0,0,${0.22 + R() * 0.3})`;
    pb.beginPath();
    pb.ellipse(x, y, r * 1.25, r, R() * 3, 0, TAU);
    pb.fill();
  }
  for (let n = 0; n < 520; n++) {
    const x = R() * W;
    const y = R() * H;
    const r = 3 + R() * 5;
    pc.fillStyle = 'rgba(140,86,30,0.22)';
    pc.beginPath();
    pc.ellipse(x, y, r * 1.4, r, R() * 3, 0, TAU);
    pc.fill();
    pb.fillStyle = 'rgba(0,0,0,0.45)';
    pb.beginPath();
    pb.ellipse(x, y, r * 1.4, r, R() * 3, 0, TAU);
    pb.fill();
  }

  layers.forEach((l, i) => {
    c.save();
    path(c, l, i);
    c.clip();
    b.save();
    path(b, l, i);
    b.clip();
    const y0 = l.y0 - 6;
    const y1 = l.y1 + 6;
    if (l.k === 'sponge') {
      const g = c.createLinearGradient(0, y0, 0, y1);
      g.addColorStop(0, '#f4d98f');
      g.addColorStop(0.5, '#f0cf7e');
      g.addColorStop(1, '#e8bd66');
      c.fillStyle = g;
      c.fillRect(0, y0, W, y1 - y0);
      // soft toasted crust along the top and bottom of each layer
      const t = c.createLinearGradient(0, y0, 0, y1);
      t.addColorStop(0, 'rgba(196,132,52,0.55)');
      t.addColorStop(0.12, 'rgba(196,132,52,0)');
      t.addColorStop(0.88, 'rgba(196,132,52,0)');
      t.addColorStop(1, 'rgba(196,132,52,0.5)');
      c.fillStyle = t;
      c.fillRect(0, y0, W, y1 - y0);
      c.drawImage(poreC, 0, 0);
      b.drawImage(poreB, 0, 0);
    } else if (l.k === 'cream') {
      const g = c.createLinearGradient(0, y0, 0, y1);
      g.addColorStop(0, '#fff6ea');
      g.addColorStop(1, '#fffaf2');
      c.fillStyle = g;
      c.fillRect(0, y0, W, y1 - y0);
      b.fillStyle = '#8a8a8a';
      b.fillRect(0, y0, W, y1 - y0);
    } else if (l.k === 'jam') {
      const g = c.createLinearGradient(0, y0, 0, y1);
      g.addColorStop(0, '#d8284a');
      g.addColorStop(0.5, '#b81432');
      g.addColorStop(1, '#8e0f28');
      c.fillStyle = g;
      c.fillRect(0, y0, W, y1 - y0);
      for (let n = 0; n < 150; n++) {
        const x = R() * W;
        const y = y0 + R() * (y1 - y0);
        const r = 1 + R() * 3.5;
        c.fillStyle = R() > 0.5 ? 'rgba(255,120,140,0.5)' : 'rgba(80,0,16,0.45)';
        c.beginPath();
        c.ellipse(x, y, r * 1.8, r, 0, 0, TAU);
        c.fill();
      }
      // seeds
      for (let n = 0; n < 60; n++) {
        c.fillStyle = 'rgba(255,224,130,0.8)';
        c.fillRect(R() * W, y0 + R() * (y1 - y0), 1.4, 1.4);
      }
      b.fillStyle = '#767676';
      b.fillRect(0, y0, W, y1 - y0);
    } else {
      // frosting band (top / bottom)
      c.fillStyle = '#f8ede2';
      c.fillRect(0, y0, W, y1 - y0);
      b.fillStyle = '#909090';
      b.fillRect(0, y0, W, y1 - y0);
    }
    c.restore();
    b.restore();
  });

  // the buttercream coat wraps the outside edge: a thick pink border on the right
  const coat = W * 0.052;
  c.save();
  c.beginPath();
  c.moveTo(W - coat, 0);
  for (let y = 0; y <= H; y += 6) c.lineTo(W - coat + Math.sin(y * 0.05) * 3 + Math.sin(y * 0.17) * 1.5, y);
  c.lineTo(W, H);
  c.lineTo(W, 0);
  c.closePath();
  // ivory at the top, blushing toward the base (matches the ombré outside)
  const cg = c.createLinearGradient(0, 0, 0, H);
  cg.addColorStop(0, '#f8eee3');
  cg.addColorStop(0.45, '#f6e2d8');
  cg.addColorStop(1, '#eeb0bd');
  c.fillStyle = cg;
  c.fill();
  c.strokeStyle = 'rgba(190,150,120,0.35)';
  c.lineWidth = 2;
  c.stroke();
  c.restore();
  b.fillStyle = '#909090';
  b.fillRect(W - coat, 0, coat, H);

  // a hair of cream squeezed out at the edges of the fillings
  grain(c, W, H, 8, 9);
  grain(b, W, H, 14, 10, 1);
  return {
    map: toTexture(col, { aniso }),
    bump: toTexture(bump, { srgb: false, aniso }),
    layers: layers.map((l) => ({ k: l.k, a: l.y0 / H, b: l.y1 / H })),
  };
}

/* ─── strawberry skin with seeds ───────────────────────────────── */
export function strawberryTextures(aniso) {
  const W = 512;
  const H = 512;
  const R = rng(5);
  const col = canvas(W, H);
  const c = col.getContext('2d');
  const bump = canvas(W, H);
  const b = bump.getContext('2d');
  // v=0 tip (canvas bottom) … v=1 crown (canvas top)
  const g = c.createLinearGradient(0, H, 0, 0);
  g.addColorStop(0, '#d11a2e');
  g.addColorStop(0.45, '#c8102e');
  g.addColorStop(0.85, '#b00c26');
  g.addColorStop(1, '#8c1a22');
  c.fillStyle = g;
  c.fillRect(0, 0, W, H);
  b.fillStyle = '#9a9a9a';
  b.fillRect(0, 0, W, H);
  for (let i = 0; i < 4500; i++) {
    c.fillStyle = `rgba(255,120,120,${R() * 0.07})`;
    c.fillRect(R() * W, R() * H, 2 + R() * 6, 2 + R() * 6);
  }
  const rows = 17;
  const cols = 22;
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const x = ((i + (j % 2) * 0.5) / cols) * W;
      const y = ((j + 0.7) / rows) * H;
      const jx = x + (R() - 0.5) * 5;
      const jy = y + (R() - 0.5) * 5;
      // dimple
      c.fillStyle = 'rgba(110,0,16,0.55)';
      c.beginPath();
      c.ellipse(jx, jy, 5.2, 7.4, 0, 0, TAU);
      c.fill();
      // seed
      c.fillStyle = '#f4d77a';
      c.beginPath();
      c.ellipse(jx, jy - 0.5, 2.2, 3.6, 0, 0, TAU);
      c.fill();
      c.fillStyle = 'rgba(255,248,210,0.9)';
      c.fillRect(jx - 0.6, jy - 2.6, 1, 2);
      b.fillStyle = 'rgba(0,0,0,0.7)';
      b.beginPath();
      b.ellipse(jx, jy, 5.2, 7.4, 0, 0, TAU);
      b.fill();
    }
  }
  return {
    map: toTexture(col, { wrap: true, aniso }),
    bump: toTexture(bump, { srgb: false, wrap: true, aniso }),
  };
}

/* ─── slim ivory candles with a fine gold spiral ───────────────── */
let candleTex = null;
export function candleTexture(_color, aniso) {
  if (candleTex) return candleTex;
  const W = 128;
  const H = 256;
  const c = canvas(W, H);
  const x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, W, 0);
  g.addColorStop(0, '#f3e6d4');
  g.addColorStop(0.5, '#fffaf2');
  g.addColorStop(1, '#f3e6d4');
  x.fillStyle = g;
  x.fillRect(0, 0, W, H);
  x.fillStyle = '#d9ad55';
  const stripe = 44;
  for (let k = -4; k < 12; k++) {
    x.beginPath();
    x.moveTo(0, k * stripe);
    x.lineTo(W, k * stripe - 90);
    x.lineTo(W, k * stripe - 90 + 6);
    x.lineTo(0, k * stripe + 6);
    x.closePath();
    x.fill();
  }
  candleTex = toTexture(c, { wrap: true, aniso });
  return candleTex;
}

/* ─── ivory jacquard tablecloth (tone-on-tone damask) ───────────── */
export function clothTextures(aniso) {
  const S = 512;
  const col = canvas(S, S);
  const c = col.getContext('2d');
  const bump = canvas(S, S);
  const b = bump.getContext('2d');
  c.fillStyle = '#f4ead9';
  c.fillRect(0, 0, S, S);
  b.fillStyle = '#808080';
  b.fillRect(0, 0, S, S);
  for (const [px, py] of [[S / 2, S / 2], [0, 0], [S, 0], [0, S], [S, S]]) {
    damaskMotif(c, px, py, 1.55, 'rgba(214,190,150,0.28)');
    damaskMotif(b, px, py, 1.55, 'rgba(255,255,255,0.35)');
  }
  for (const [px, py] of [[S / 2, 0], [S / 2, S], [0, S / 2], [S, S / 2]]) {
    damaskMotif(c, px, py, 0.7, 'rgba(214,190,150,0.2)');
  }
  for (let i = 0; i < S; i += 2) {
    c.fillStyle = `rgba(255,255,255,${(i / 2) % 2 ? 0.05 : 0})`;
    c.fillRect(0, i, S, 1);
  }
  grain(c, S, S, 6, 21);
  return {
    map: toTexture(col, { wrap: true, repeat: [7, 7], aniso }),
    bump: toTexture(bump, { srgb: false, wrap: true, repeat: [7, 7], aniso }),
  };
}

/** a symmetrical damask ornament, drawn around (x, y) */
export function damaskMotif(c, x, y, s, color) {
  c.save();
  c.translate(x, y);
  c.scale(s, s);
  c.fillStyle = color;
  c.strokeStyle = color;
  c.lineWidth = 3;
  for (const m of [1, -1]) {
    c.save();
    c.scale(m, 1);
    // central flame
    c.beginPath();
    c.moveTo(0, -78);
    c.bezierCurveTo(10, -58, 26, -40, 14, -18);
    c.bezierCurveTo(30, -8, 30, 18, 10, 30);
    c.bezierCurveTo(22, 46, 14, 64, 0, 80);
    c.lineTo(0, -78);
    c.fill();
    // scrolls
    c.beginPath();
    c.moveTo(14, -18);
    c.bezierCurveTo(44, -40, 66, -20, 56, 2);
    c.bezierCurveTo(50, 16, 34, 12, 38, 0);
    c.stroke();
    c.beginPath();
    c.moveTo(10, 30);
    c.bezierCurveTo(44, 34, 62, 58, 46, 74);
    c.bezierCurveTo(36, 82, 26, 70, 34, 62);
    c.stroke();
    // leaves
    c.beginPath();
    c.ellipse(46, -46, 7, 18, -0.7, 0, Math.PI * 2);
    c.fill();
    c.beginPath();
    c.ellipse(30, 52, 5, 13, 0.6, 0, Math.PI * 2);
    c.fill();
    c.beginPath();
    c.arc(60, 28, 4, 0, Math.PI * 2);
    c.fill();
    c.restore();
  }
  c.beginPath();
  c.arc(0, -90, 6, 0, Math.PI * 2);
  c.fill();
  c.restore();
}

/* ─── golden “Happy Birthday <name>” topper ────────────────────── */
export function topperTexture(name, aniso) {
  const W = 1024;
  const H = 560;
  const c = canvas(W, H);
  const x = c.getContext('2d');
  x.clearRect(0, 0, W, H);
  x.textAlign = 'center';
  x.textBaseline = 'alphabetic';
  const script = '"Great Vibes", "Snell Roundhand", "Apple Chancery", "Brush Script MT", cursive';

  const gold = x.createLinearGradient(0, 40, 0, H - 40);
  gold.addColorStop(0, '#fff2b0');
  gold.addColorStop(0.35, '#e9bd4e');
  gold.addColorStop(0.6, '#b8862a');
  gold.addColorStop(0.8, '#f3d37a');
  gold.addColorStop(1, '#c79a35');

  x.fillStyle = gold;
  x.strokeStyle = gold;
  x.lineJoin = 'round';

  x.font = `150px ${script}`;
  x.lineWidth = 7;
  x.strokeText('Happy Birthday', W / 2, 190);
  x.fillText('Happy Birthday', W / 2, 190);

  let size = 300;
  x.font = `${size}px ${script}`;
  while (x.measureText(name).width > W * 0.9 && size > 120) {
    size -= 10;
    x.font = `${size}px ${script}`;
  }
  x.lineWidth = 9;
  x.strokeText(name, W / 2, 440);
  x.fillText(name, W / 2, 440);

  // a flourish underline that also bridges every glyph so the cut-out is one piece
  x.lineWidth = 12;
  x.lineCap = 'round';
  x.beginPath();
  x.moveTo(W * 0.14, 485);
  x.bezierCurveTo(W * 0.35, 515, W * 0.65, 515, W * 0.86, 480);
  x.stroke();
  x.lineWidth = 7;
  x.beginPath();
  x.moveTo(W * 0.5, 160);
  x.lineTo(W * 0.5, 360);
  x.stroke();
  // stars
  const star = (cx, cy, r) => {
    x.beginPath();
    for (let i = 0; i < 10; i++) {
      const rr = i % 2 ? r * 0.42 : r;
      const a = (i / 10) * TAU - Math.PI / 2;
      x.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr);
    }
    x.closePath();
    x.fill();
  };
  star(W * 0.1, 80, 26);
  star(W * 0.92, 130, 20);
  star(W * 0.06, 300, 14);
  return toTexture(c, { aniso });
}

/* ─── soft sprite helpers ──────────────────────────────────────── */
export function glowTexture() {
  const S = 128;
  const c = canvas(S, S);
  const x = c.getContext('2d');
  const g = x.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.18, 'rgba(255,255,255,0.55)');
  g.addColorStop(0.5, 'rgba(255,255,255,0.12)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g;
  x.fillRect(0, 0, S, S);
  return toTexture(c, { srgb: true });
}

export function bokehTexture() {
  const S = 128;
  const c = canvas(S, S);
  const x = c.getContext('2d');
  const g = x.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  g.addColorStop(0, 'rgba(255,255,255,0.35)');
  g.addColorStop(0.75, 'rgba(255,255,255,0.5)');
  g.addColorStop(0.92, 'rgba(255,255,255,0.95)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g;
  x.beginPath();
  x.arc(S / 2, S / 2, S / 2, 0, TAU);
  x.fill();
  return toTexture(c, { srgb: true });
}

export function starTexture() {
  const S = 128;
  const c = canvas(S, S);
  const x = c.getContext('2d');
  x.translate(S / 2, S / 2);
  const g = x.createRadialGradient(0, 0, 0, 0, 0, S / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.25, 'rgba(255,255,255,0.35)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g;
  x.fillRect(-S / 2, -S / 2, S, S);
  // four-point glint
  x.fillStyle = 'rgba(255,255,255,0.95)';
  for (const rot of [0, Math.PI / 2]) {
    x.save();
    x.rotate(rot);
    x.beginPath();
    x.moveTo(-S / 2, 0);
    x.quadraticCurveTo(0, -3, S / 2, 0);
    x.quadraticCurveTo(0, 3, -S / 2, 0);
    x.fill();
    x.restore();
  }
  return toTexture(c, { srgb: true });
}

export function smokeTexture() {
  const S = 128;
  const R = rng(3);
  const c = canvas(S, S);
  const x = c.getContext('2d');
  for (let i = 0; i < 14; i++) {
    const px = S / 2 + (R() - 0.5) * 40;
    const py = S / 2 + (R() - 0.5) * 40;
    const r = 18 + R() * 26;
    const g = x.createRadialGradient(px, py, 0, px, py, r);
    g.addColorStop(0, 'rgba(255,255,255,0.28)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = g;
    x.fillRect(0, 0, S, S);
  }
  return toTexture(c, { srgb: true });
}

/* ─── cream smear left on the plate after the slice is lifted ─── */
export function smearTexture() {
  const S = 256;
  const R = rng(8);
  const c = canvas(S, S);
  const x = c.getContext('2d');
  x.fillStyle = '#f7ebe0';
  x.fillRect(0, 0, S, S);
  for (let i = 0; i < 260; i++) {
    x.fillStyle = R() > 0.5 ? 'rgba(238,176,189,0.16)' : 'rgba(255,250,240,0.3)';
    x.beginPath();
    x.ellipse(R() * S, R() * S, 4 + R() * 22, 3 + R() * 10, R() * 3, 0, TAU);
    x.fill();
  }
  grain(x, S, S, 10, 2);
  return toTexture(c, { wrap: true });
}

/* ─── wine damask wallpaper with a soft pool of light baked in ─── */
export function wallTextures(aniso) {
  const S = 512;
  const col = canvas(S, S);
  const c = col.getContext('2d');
  c.fillStyle = '#4a1722';
  c.fillRect(0, 0, S, S);
  for (const [px, py] of [[S / 2, S / 2], [0, 0], [S, 0], [0, S], [S, S]]) damaskMotif(c, px, py, 1.5, 'rgba(120,40,52,0.55)');
  for (const [px, py] of [[S / 2, S / 2], [0, 0], [S, 0], [0, S], [S, S]]) damaskMotif(c, px, py, 1.5, 'rgba(214,170,90,0.10)');
  for (const [px, py] of [[S / 2, 0], [S / 2, S], [0, S / 2], [S, S / 2]]) damaskMotif(c, px, py, 0.65, 'rgba(214,170,90,0.12)');
  grain(c, S, S, 8, 31);
  return { map: toTexture(col, { wrap: true, repeat: [9, 5], aniso }) };
}

/* ─── warm wooden floor ─── */
export function woodTextures(aniso) {
  const W = 512;
  const H = 512;
  const R = rng(17);
  const col = canvas(W, H);
  const c = col.getContext('2d');
  const bump = canvas(W, H);
  const b = bump.getContext('2d');
  b.fillStyle = '#808080';
  b.fillRect(0, 0, W, H);
  const plank = 64;
  for (let y = 0; y < H; y += plank) {
    const tint = 0.85 + R() * 0.3;
    const base = [Math.floor(112 * tint), Math.floor(64 * tint), Math.floor(38 * tint)];
    c.fillStyle = `rgb(${base})`;
    c.fillRect(0, y, W, plank);
    for (let i = 0; i < 40; i++) {
      const yy = y + R() * plank;
      c.strokeStyle = `rgba(${R() > 0.5 ? '60,30,14' : '170,110,70'},${0.08 + R() * 0.12})`;
      c.lineWidth = 0.5 + R() * 1.5;
      c.beginPath();
      c.moveTo(0, yy);
      for (let x = 0; x <= W; x += 16) c.lineTo(x, yy + Math.sin(x * 0.02 + i) * 2 + Math.sin(x * 0.07 + yy) * 0.8);
      c.stroke();
    }
    const joint = Math.floor(R() * W);
    c.fillStyle = 'rgba(30,14,6,0.8)';
    c.fillRect(0, y, W, 2);
    c.fillRect(joint, y, 2, plank);
    b.fillStyle = '#202020';
    b.fillRect(0, y, W, 2);
    b.fillRect(joint, y, 2, plank);
  }
  grain(c, W, H, 10, 3);
  return {
    map: toTexture(col, { wrap: true, repeat: [10, 10], aniso }),
    bump: toTexture(bump, { srgb: false, wrap: true, repeat: [10, 10], aniso }),
  };
}

/* ─── a single bunting pennant with a letter ─── */
const flagCache = new Map();
export function flagTexture(letter, bg, fg) {
  const key = letter + bg + fg;
  if (flagCache.has(key)) return flagCache.get(key);
  const W = 128;
  const H = 168;
  const c = canvas(W, H);
  const x = c.getContext('2d');
  x.beginPath();
  x.moveTo(4, 4);
  x.lineTo(W - 4, 4);
  x.lineTo(W - 4, H * 0.62);
  x.lineTo(W / 2, H - 4);
  x.lineTo(4, H * 0.62);
  x.closePath();
  const g = x.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, bg);
  g.addColorStop(1, shade(bg, -18));
  x.fillStyle = g;
  x.fill();
  x.lineWidth = 4;
  x.strokeStyle = '#d9ad55';
  x.stroke();
  x.fillStyle = fg;
  x.textAlign = 'center';
  x.textBaseline = 'middle';
  x.font = '600 76px "Cormorant Garamond", Georgia, serif';
  x.fillText(letter, W / 2, H * 0.4);
  const t = toTexture(c);
  flagCache.set(key, t);
  return t;
}
function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.min(255, (n >> 16) + amt));
  const g = Math.max(0, Math.min(255, ((n >> 8) & 255) + amt));
  const b = Math.max(0, Math.min(255, (n & 255) + amt));
  return `rgb(${r},${g},${b})`;
}

/* ─── iris for a sphere cap (v=0 is the pupil, v=1 the rim) ─── */
export function irisTexture(color = '#5a3520') {
  const W = 128;
  const H = 128;
  const R = rng(4);
  const c = canvas(W, H);
  const x = c.getContext('2d');
  // canvas bottom = v 0 = pupil centre
  const g = x.createLinearGradient(0, H, 0, 0);
  g.addColorStop(0, '#050302');
  g.addColorStop(0.3, '#050302');
  g.addColorStop(0.36, shade(color, 40));
  g.addColorStop(0.7, color);
  g.addColorStop(0.9, shade(color, -40));
  g.addColorStop(1, '#1a0d08');
  x.fillStyle = g;
  x.fillRect(0, 0, W, H);
  for (let i = 0; i < 220; i++) {
    const px = R() * W;
    x.strokeStyle = R() > 0.5 ? 'rgba(220,170,110,0.25)' : 'rgba(30,14,6,0.3)';
    x.lineWidth = 0.6 + R();
    x.beginPath();
    x.moveTo(px, H * (0.12 + R() * 0.1));
    x.lineTo(px + (R() - 0.5) * 4, H * (0.55 + R() * 0.1));
    x.stroke();
  }
  return toTexture(c);
}

/* ─── hair strands (used as colour + bump) ─── */
export function hairTextures(aniso) {
  const W = 256;
  const H = 256;
  const R = rng(12);
  const col = canvas(W, H);
  const c = col.getContext('2d');
  c.fillStyle = '#808080';
  c.fillRect(0, 0, W, H);
  for (let i = 0; i < 900; i++) {
    const x0 = R() * W;
    c.strokeStyle = R() > 0.5 ? `rgba(255,255,255,${0.1 + R() * 0.2})` : `rgba(0,0,0,${0.1 + R() * 0.25})`;
    c.lineWidth = 0.5 + R() * 1.2;
    c.beginPath();
    c.moveTo(x0, 0);
    c.bezierCurveTo(x0 + (R() - 0.5) * 10, H * 0.33, x0 + (R() - 0.5) * 10, H * 0.66, x0 + (R() - 0.5) * 6, H);
    c.stroke();
  }
  return { bump: toTexture(col, { srgb: false, wrap: true, aniso }) };
}

/* ─── woven braid: repeating chevrons along u ─── */
export function braidTextures(aniso) {
  const W = 128;
  const H = 128;
  const col = canvas(W, H);
  const c = col.getContext('2d');
  c.fillStyle = '#808080';
  c.fillRect(0, 0, W, H);
  // one braid "knot" per texture repeat: two diagonal lobes meeting in the middle
  for (const [y0, dir] of [[0, 1], [H / 2, -1]]) {
    const g = c.createLinearGradient(0, y0, 0, y0 + H / 2);
    g.addColorStop(0, 'rgba(0,0,0,0.65)');
    g.addColorStop(0.5, 'rgba(255,255,255,0.45)');
    g.addColorStop(1, 'rgba(0,0,0,0.65)');
    c.fillStyle = g;
    c.beginPath();
    c.moveTo(0, y0);
    c.quadraticCurveTo(W * 0.5, y0 + (dir > 0 ? H * 0.12 : H * 0.38), W, y0);
    c.lineTo(W, y0 + H / 2);
    c.quadraticCurveTo(W * 0.5, y0 + (dir > 0 ? H * 0.62 : H * 0.88), 0, y0 + H / 2);
    c.closePath();
    c.fill();
  }
  for (let i = 0; i < 300; i++) {
    c.strokeStyle = `rgba(${Math.random() > 0.5 ? '255,255,255' : '0,0,0'},0.15)`;
    c.beginPath();
    const x0 = Math.random() * W;
    const y0 = Math.random() * H;
    c.moveTo(x0, y0);
    c.lineTo(x0 + 18, y0 + 10);
    c.stroke();
  }
  return { bump: toTexture(col, { srgb: false, wrap: true, aniso }) };
}
