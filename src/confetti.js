import { TAU, rng } from './util.js';

const COLORS = ['#ff7aa8', '#ffd166', '#ffffff', '#9d8cff', '#6ccfc0', '#ff9ec2', '#f6c453', '#ff6f91'];

/** 2-D confetti, hearts and stars drawn on a canvas above the 3-D scene */
export class Confetti {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.p = [];
    this.R = rng(5);
    this.rain = 0;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }
  resize() {
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.canvas.width = this.w * this.dpr;
    this.canvas.height = this.h * this.dpr;
  }
  burst(x, y, n = 90, { angle = -Math.PI / 2, spread = Math.PI * 0.9, speed = 900, gravity = 1100 } = {}) {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) n = Math.floor(n * 0.3);
    for (let i = 0; i < n; i++) {
      const a = angle + (this.R() - 0.5) * spread;
      const v = speed * (0.35 + this.R() * 0.8);
      const shape = this.R();
      this.p.push({
        x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, g: gravity * (0.7 + this.R() * 0.5),
        rot: this.R() * TAU, vr: (this.R() - 0.5) * 14, flip: this.R() * TAU, vf: 6 + this.R() * 10,
        size: 6 + this.R() * 9, color: COLORS[Math.floor(this.R() * COLORS.length)],
        shape: shape < 0.55 ? 'rect' : shape < 0.75 ? 'circle' : shape < 0.9 ? 'heart' : 'star',
        life: 4 + this.R() * 2.5, drag: 0.992,
      });
    }
  }
  /** a gentle shower from the top edge for `seconds` */
  shower(seconds) {
    this.rain = seconds;
  }
  update(dt) {
    if (this.rain > 0) {
      this.rain -= dt;
      const n = Math.ceil(dt * 70);
      for (let i = 0; i < n; i++) {
        this.p.push({
          x: this.R() * this.w, y: -20, vx: (this.R() - 0.5) * 120, vy: 120 + this.R() * 200, g: 140 + this.R() * 120,
          rot: this.R() * TAU, vr: (this.R() - 0.5) * 8, flip: this.R() * TAU, vf: 4 + this.R() * 8,
          size: 6 + this.R() * 8, color: COLORS[Math.floor(this.R() * COLORS.length)],
          shape: this.R() < 0.7 ? 'rect' : this.R() < 0.5 ? 'heart' : 'circle', life: 7, drag: 0.996,
        });
      }
    }
    for (const q of this.p) {
      q.life -= dt;
      q.vy += q.g * dt;
      q.vx *= q.drag;
      q.vy *= q.drag;
      q.x += q.vx * dt;
      q.y += q.vy * dt;
      q.rot += q.vr * dt;
      q.flip += q.vf * dt;
    }
    this.p = this.p.filter((q) => q.life > 0 && q.y < this.h + 40);
  }
  draw() {
    const c = this.ctx;
    c.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    c.clearRect(0, 0, this.w, this.h);
    for (const q of this.p) {
      const a = Math.min(1, q.life * 1.2);
      c.save();
      c.globalAlpha = a;
      c.translate(q.x, q.y);
      c.rotate(q.rot);
      c.fillStyle = q.color;
      const s = q.size;
      if (q.shape === 'rect') {
        c.scale(1, Math.cos(q.flip));
        c.fillRect(-s / 2, -s * 0.3, s, s * 0.6);
      } else if (q.shape === 'circle') {
        c.beginPath();
        c.arc(0, 0, s * 0.38, 0, TAU);
        c.fill();
      } else if (q.shape === 'heart') {
        c.scale(1, 0.6 + 0.4 * Math.cos(q.flip));
        c.beginPath();
        c.moveTo(0, s * 0.35);
        c.bezierCurveTo(-s * 0.7, -s * 0.1, -s * 0.35, -s * 0.6, 0, -s * 0.2);
        c.bezierCurveTo(s * 0.35, -s * 0.6, s * 0.7, -s * 0.1, 0, s * 0.35);
        c.fill();
      } else {
        c.beginPath();
        for (let i = 0; i < 10; i++) {
          const r = i % 2 ? s * 0.2 : s * 0.55;
          const ang = (i / 10) * TAU;
          c.lineTo(Math.cos(ang) * r, Math.sin(ang) * r);
        }
        c.closePath();
        c.fill();
      }
      c.restore();
    }
  }
}
