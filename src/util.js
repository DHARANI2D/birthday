export const TAU = Math.PI * 2;
export const deg = (d) => (d * Math.PI) / 180;
export const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (a, b, x) => {
  const t = clamp((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};

export const ease = {
  linear: (t) => t,
  in: (t) => t * t * t,
  out: (t) => 1 - Math.pow(1 - t, 3),
  inOut: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  inOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
  outBack: (t) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },
  outElastic: (t) => {
    if (t === 0 || t === 1) return t;
    const c4 = (2 * Math.PI) / 3;
    return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  },
};

// deterministic random so every visit looks the same
export function rng(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Tiny promise-based tween engine. Driven by update(dt) so that the whole
 * story is deterministic (and can be time-warped for testing).
 */
export class Timeline {
  constructor() {
    this.items = [];
  }
  tween(duration, fn, easing = ease.inOut, delay = 0) {
    return new Promise((resolve) => {
      this.items.push({ duration: Math.max(1e-4, duration), fn, easing, t: -delay, resolve });
    });
  }
  wait(seconds) {
    return this.tween(seconds, null, ease.linear);
  }
  clear() {
    this.items.length = 0;
  }
  update(dt) {
    if (!this.items.length) return;
    const done = [];
    for (const it of this.items.slice()) {
      it.t += dt;
      if (it.t < 0) continue;
      const k = Math.min(1, it.t / it.duration);
      if (it.fn) it.fn(it.easing(k), k);
      if (k >= 1) done.push(it);
    }
    if (done.length) {
      this.items = this.items.filter((i) => !done.includes(i));
      for (const d of done) d.resolve();
    }
  }
}
