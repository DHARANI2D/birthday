// ──────────────────────────────────────────────────────────────
//  All sound is synthesised with the Web Audio API — no audio files.
//  · Sound  — the effects (breath, candles out, knife, applause…)
//  · Music  — a warm waltz arrangement of "Happy Birthday" (piano, strings,
//             bass and a music-box celesta) that keeps playing throughout.
// ──────────────────────────────────────────────────────────────

export const BPM = 84;
export const BEAT = 60 / BPM;

const midi = (name) => {
  const m = /^([A-G])(#|b)?(-?\d)$/.exec(name);
  const base = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }[m[1]];
  return 12 * (parseInt(m[3], 10) + 1) + base + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0);
};
const hz = (name) => 440 * Math.pow(2, (midi(name) - 69) / 12);

// "Happy Birthday to You" (public domain), with a two-beat lead-in so the
// melody's pickup lands on beat 3 of a 3/4 bar.
export const MELODY = [
  ['G4', 0.75], ['G4', 0.25], ['A4', 1], ['G4', 1], ['C5', 1], ['B4', 2],
  ['G4', 0.75], ['G4', 0.25], ['A4', 1], ['G4', 1], ['D5', 1], ['C5', 2],
  ['G4', 0.75], ['G4', 0.25], ['G5', 1], ['E5', 1], ['C5', 1], ['B4', 1], ['A4', 1],
  ['F5', 0.75], ['F5', 0.25], ['E5', 1], ['C5', 1], ['D5', 1], ['C5', 3],
];
export const SONG_LEAD = 2; // beats before the first note
export const SONG_BEATS = 27; // nine bars of 3/4
export const LINE_BEATS = [2, 8, 14, 20]; // where each lyric line starts
/** onset times (in beats from the song section start) of every sung note */
export const NOTE_ONSETS = (() => {
  let b = SONG_LEAD;
  return MELODY.map(([, d]) => {
    const o = { b, d };
    b += d;
    return o;
  });
})();

const CHORDS = {
  C: { bass: 'C3', tones: ['E3', 'G3', 'C4'], pad: ['C3', 'G3', 'E4'] },
  C7: { bass: 'C3', tones: ['E3', 'Bb3', 'C4'], pad: ['C3', 'Bb3', 'E4'] },
  G7: { bass: 'G2', tones: ['F3', 'B3', 'D4'], pad: ['G2', 'F3', 'B3'] },
  F: { bass: 'F2', tones: ['A3', 'C4', 'F4'], pad: ['F2', 'C4', 'A4'] },
  Am: { bass: 'A2', tones: ['C4', 'E4', 'A3'], pad: ['A2', 'E3', 'C4'] },
  Em: { bass: 'E2', tones: ['G3', 'B3', 'E4'], pad: ['E2', 'B3', 'G4'] },
  Dm7: { bass: 'D3', tones: ['F3', 'A3', 'C4'], pad: ['D3', 'A3', 'F4'] },
  G: { bass: 'G2', tones: ['G3', 'B3', 'D4'], pad: ['G2', 'D3', 'B3'] },
};

export class Sound {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.scrapeNode = null;
    this.music = new Music(this);
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const c = (this.ctx = new AC());
    this.master = c.createGain();
    this.master.gain.value = this.muted ? 0 : 0.85;
    const comp = c.createDynamicsCompressor();
    comp.threshold.value = -16;
    comp.ratio.value = 3.5;
    this.master.connect(comp).connect(c.destination);

    this.reverb = c.createConvolver();
    this.reverb.buffer = this.makeIR(3.0, 2.4);
    this.wet = c.createGain();
    this.wet.gain.value = 0.34;
    this.reverb.connect(this.wet).connect(this.master);

    this.bus = c.createGain(); // dry → master, and a send into the hall reverb
    this.bus.connect(this.master);
    this.bus.connect(this.reverb);

    this.noise = c.createBuffer(1, c.sampleRate * 2, c.sampleRate);
    const d = this.noise.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }

  makeIR(sec, decay) {
    const c = this.ctx;
    const len = Math.floor(c.sampleRate * sec);
    const buf = c.createBuffer(2, len, c.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = buf.getChannelData(ch);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
    }
    return buf;
  }

  setMuted(m) {
    this.muted = m;
    if (this.ctx) this.master.gain.setTargetAtTime(m ? 0 : 0.85, this.ctx.currentTime, 0.05);
  }

  /* a music-box bell: sine + octave + a pinch of inharmonic shimmer */
  bell(freq, when, dur = 1.6, vel = 0.2, dest = this.bus) {
    const c = this.ctx;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, when);
    g.gain.linearRampToValueAtTime(vel, when + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0005, when + dur);
    g.connect(dest);
    [[1, 1], [2, 0.32], [4.01, 0.09], [5.4, 0.04]].forEach(([m, a]) => {
      const o = c.createOscillator();
      const og = c.createGain();
      o.type = 'sine';
      o.frequency.value = freq * m;
      og.gain.value = a;
      o.connect(og).connect(g);
      o.start(when);
      o.stop(when + dur + 0.05);
    });
  }

  noiseBurst({ dur = 0.5, f0 = 1000, f1 = f0, q = 1, type = 'bandpass', gain = 0.3, attack = 0.02, when = 0, dest = this.bus }) {
    if (!this.ctx) return;
    const c = this.ctx;
    const t = c.currentTime + when;
    const src = c.createBufferSource();
    src.buffer = this.noise;
    src.loop = true;
    const f = c.createBiquadFilter();
    f.type = type;
    f.Q.value = q;
    f.frequency.setValueAtTime(f0, t);
    f.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(gain, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0005, t + dur);
    src.connect(f).connect(g).connect(dest);
    src.start(t, Math.random());
    src.stop(t + dur + 0.05);
  }

  inhale() {
    this.noiseBurst({ dur: 0.7, f0: 500, f1: 1500, q: 0.8, gain: 0.1, attack: 0.5 });
  }
  blow() {
    this.noiseBurst({ dur: 1.5, f0: 1100, f1: 380, q: 0.6, gain: 0.42, attack: 0.12 });
    this.noiseBurst({ dur: 1.2, f0: 300, f1: 200, q: 0.5, type: 'lowpass', gain: 0.2, attack: 0.1 });
  }
  poof() {
    this.noiseBurst({ dur: 0.18, f0: 2600, f1: 900, q: 0.7, gain: 0.06, attack: 0.005 });
  }
  applause(sec = 4) {
    if (!this.ctx) return;
    const n = Math.floor(sec * 55);
    for (let i = 0; i < n; i++) {
      const when = Math.random() * sec;
      const env = Math.sin(Math.min(1, when / sec) * Math.PI * 0.9 + 0.15);
      this.noiseBurst({ dur: 0.05 + Math.random() * 0.05, f0: 1500 + Math.random() * 3500, q: 1.2, gain: 0.06 * env, attack: 0.002, when });
    }
  }
  pop() {
    this.noiseBurst({ dur: 0.25, f0: 5000, f1: 300, q: 0.5, gain: 0.28, attack: 0.002 });
    this.noiseBurst({ dur: 0.2, f0: 160, f1: 60, type: 'lowpass', gain: 0.28, attack: 0.002 });
  }
  /** a soft thud as the knife meets the stand through the sponge */
  thunk() {
    if (!this.ctx) return;
    const c = this.ctx;
    const t = c.currentTime;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(95, t);
    o.frequency.exponentialRampToValueAtTime(52, t + 0.18);
    g.gain.setValueAtTime(0.28, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
    o.connect(g).connect(this.master);
    o.start(t);
    o.stop(t + 0.25);
    this.noiseBurst({ dur: 0.12, f0: 900, f1: 300, type: 'lowpass', gain: 0.18, attack: 0.003 });
  }
  slide() {
    this.noiseBurst({ dur: 0.7, f0: 1800, f1: 900, q: 1.1, gain: 0.1, attack: 0.15 });
  }
  clink() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.bell(2637, t, 0.6, 0.06);
    this.bell(3951, t + 0.01, 0.4, 0.04);
  }
  sparkle(n = 9) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const seq = ['C6', 'E6', 'G6', 'C7', 'G6', 'E6', 'A6', 'C7', 'D6'].map(hz);
    for (let i = 0; i < n; i++) this.bell(seq[i % seq.length], t + i * 0.075, 1.4, 0.06);
  }
  wishMagic() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    ['C5', 'E5', 'G5', 'C6', 'E6', 'G6', 'C7'].map(hz).forEach((f, i) => this.bell(f, t + i * 0.12, 2.2, 0.08));
  }
  /** continuous blade-through-sponge sound; level 0..1 */
  scrape(level) {
    if (!this.ctx) return;
    const c = this.ctx;
    if (!this.scrapeNode) {
      const src = c.createBufferSource();
      src.buffer = this.noise;
      src.loop = true;
      const f = c.createBiquadFilter();
      f.type = 'bandpass';
      f.frequency.value = 900;
      f.Q.value = 0.6;
      const g = c.createGain();
      g.gain.value = 0;
      src.connect(f).connect(g).connect(this.bus);
      src.start();
      this.scrapeNode = { src, f, g };
    }
    const s = this.scrapeNode;
    s.g.gain.setTargetAtTime(Math.min(1, level) * 0.1, c.currentTime, 0.06);
    s.f.frequency.setTargetAtTime(600 + level * 900, c.currentTime, 0.08);
  }
}

/* ══════════════════════════ the music ══════════════════════════ */
export class Music {
  constructor(sound) {
    this.s = sound;
    this.on = false;
    this.order = ['song', 'inter', 'soft', 'inter'];
  }

  /** start the arrangement; returns the audio time at which the first song section begins */
  start() {
    const c = this.s.ctx;
    if (!c || this.on) return null;
    this.on = true;
    this.bus = c.createGain();
    this.bus.gain.value = 0.0001;
    this.bus.connect(this.s.bus);
    this.secStart = c.currentTime + 0.15;
    this.oi = 0;
    this.cur = this.build(this.order[0]);
    this.ei = 0;
    this.pending = null;
    this.timer = setInterval(() => this.tick(), 50);
    this.tick();
    this.setLevel(1, 0.3);
    return this.secStart;
  }
  setLevel(v, seconds = 1) {
    if (!this.on) return;
    const c = this.s.ctx;
    this.bus.gain.cancelScheduledValues(c.currentTime);
    this.bus.gain.setTargetAtTime(Math.max(0.0001, v * 0.9), c.currentTime, seconds / 3);
  }
  /** begin the song again at the next bar line; returns that audio time */
  jumpToSong() {
    if (!this.on) return null;
    const c = this.s.ctx;
    const pos = (c.currentTime + 0.3 - this.secStart) / BEAT;
    const at = this.secStart + Math.ceil(pos / 3) * 3 * BEAT;
    this.pending = { name: 'song', at };
    return at;
  }

  tick() {
    const c = this.s.ctx;
    const ahead = c.currentTime + 0.4;
    for (let guard = 0; guard < 400; guard++) {
      if (this.pending) {
        const ev = this.cur.events[this.ei];
        const nextT = ev ? this.secStart + ev.b * BEAT : Infinity;
        if (nextT >= this.pending.at) {
          this.secStart = this.pending.at;
          this.cur = this.build(this.pending.name);
          this.ei = 0;
          this.oi = 0;
          this.pending = null;
          continue;
        }
      }
      if (this.ei >= this.cur.events.length) {
        this.secStart += this.cur.len * BEAT;
        this.oi = (this.oi + 1) % this.order.length;
        this.cur = this.build(this.order[this.oi]);
        this.ei = 0;
        if (this.secStart > ahead) break;
        continue;
      }
      const ev = this.cur.events[this.ei];
      const t = this.secStart + ev.b * BEAT;
      if (t > ahead) break;
      if (t > c.currentTime - 0.05) ev.fn(t);
      this.ei++;
    }
  }

  /* ── instruments ── */
  piano(f, t, dur, vel) {
    const c = this.s.ctx;
    const g = c.createGain();
    const lp = c.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(Math.min(9000, f * 9), t);
    lp.frequency.exponentialRampToValueAtTime(Math.max(380, f * 2.4), t + dur * 0.8);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vel, t + 0.006);
    g.gain.exponentialRampToValueAtTime(vel * 0.32, t + 0.3);
    g.gain.exponentialRampToValueAtTime(0.0004, t + dur);
    lp.connect(g).connect(this.bus);
    [['triangle', 1, 1], ['sine', 2, 0.42], ['sine', 3, 0.1], ['sine', 1.0035, 0.5]].forEach(([type, m, a]) => {
      const o = c.createOscillator();
      const og = c.createGain();
      o.type = type;
      o.frequency.value = f * m;
      og.gain.value = a;
      o.connect(og).connect(lp);
      o.start(t);
      o.stop(t + dur + 0.05);
    });
  }
  pad(names, t, dur, vel) {
    const c = this.s.ctx;
    const g = c.createGain();
    const lp = c.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 950;
    lp.Q.value = 0.4;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vel, t + Math.min(0.9, dur * 0.4));
    g.gain.setValueAtTime(vel, t + dur * 0.75);
    g.gain.exponentialRampToValueAtTime(0.0004, t + dur + 0.9);
    lp.connect(g).connect(this.bus);
    for (const n of names) {
      for (const det of [-7, 7]) {
        const o = c.createOscillator();
        o.type = 'sawtooth';
        o.frequency.value = hz(n);
        o.detune.value = det;
        o.connect(lp);
        o.start(t);
        o.stop(t + dur + 1);
      }
    }
  }
  bass(f, t, dur, vel) {
    const c = this.s.ctx;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vel, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0004, t + dur);
    g.connect(this.bus);
    [['sine', 1, 1], ['triangle', 2, 0.18]].forEach(([type, m, a]) => {
      const o = c.createOscillator();
      const og = c.createGain();
      o.type = type;
      o.frequency.value = f * m;
      og.gain.value = a;
      o.connect(og).connect(g);
      o.start(t);
      o.stop(t + dur + 0.05);
    });
  }

  /* ── sections ── */
  build(name) {
    const ev = [];
    const at = (b, fn) => ev.push({ b, fn });
    const waltz = (barStart, chord, soft = 1) => {
      const ch = CHORDS[chord];
      at(barStart, (t) => this.bass(hz(ch.bass), t, BEAT * 2.6, 0.2 * soft));
      for (const k of [1, 2]) at(barStart + k, (t) => ch.tones.forEach((n) => this.piano(hz(n), t, BEAT * 1.4, 0.045 * soft)));
      at(barStart, (t) => this.pad(ch.pad, t, BEAT * 3, 0.018 * soft));
    };
    if (name === 'song' || name === 'soft') {
      const soft = name === 'soft';
      const bars = ['C', 'C', 'G7', 'G7', 'C', 'C7', 'F', 'C', 'C'];
      // bar 0: a harp-like roll as the lead-in
      at(0, (t) => ['C3', 'G3', 'C4', 'E4', 'G4'].forEach((n, i) => this.piano(hz(n), t + i * 0.09, BEAT * 3, 0.05)));
      at(0, (t) => this.pad(CHORDS.C.pad, t, BEAT * 3, 0.016));
      bars.forEach((chord, i) => {
        if (i === 0) return;
        if (i === 7) {
          // C on the downbeat, G7 on beat three
          const b = i * 3;
          at(b, (t) => this.bass(hz('G2'), t, BEAT * 1.8, 0.2));
          at(b + 1, (t) => CHORDS.C.tones.forEach((n) => this.piano(hz(n), t, BEAT, 0.045)));
          at(b + 2, (t) => CHORDS.G7.tones.forEach((n) => this.piano(hz(n), t, BEAT, 0.045)));
          at(b, (t) => this.pad(CHORDS.G7.pad, t, BEAT * 3, 0.018));
          return;
        }
        waltz(i * 3, chord, soft ? 0.75 : 1);
      });
      let b = SONG_LEAD;
      for (const [n, d] of MELODY) {
        const f = hz(n);
        const beat = b;
        if (soft) {
          at(beat, (t) => this.s.bell(f * 2, t, 1.8, 0.07, this.bus));
          at(beat, (t) => this.piano(f, t, BEAT * d + 0.6, 0.05));
        } else {
          at(beat, (t) => this.piano(f, t, BEAT * d + 0.9, 0.16));
          at(beat, (t) => this.s.bell(f * 2, t, 1.6, 0.045, this.bus));
        }
        b += d;
      }
      return { len: SONG_BEATS, events: ev.sort((a, b2) => a.b - b2.b) };
    }
    // interlude: a gentle chord walk with arpeggios and a celesta line
    const prog = ['C', 'Am', 'F', 'G', 'Em', 'Am', 'Dm7', 'C'];
    const line = [['G5', 'E5', 'C5'], ['A5', 'E5', 'C5'], ['A5', 'F5', 'C5'], ['B5', 'G5', 'D5'], ['G5', 'E5', 'B4'], ['C6', 'A5', 'E5'], ['F5', 'D5', 'B4'], ['E5', 'G5', 'C6']];
    prog.forEach((chord, i) => {
      const b0 = i * 3;
      const ch = CHORDS[chord];
      at(b0, (t) => this.bass(hz(ch.bass), t, BEAT * 2.8, 0.17));
      at(b0, (t) => this.pad(ch.pad, t, BEAT * 3, 0.02));
      const arp = [ch.bass.replace(/\d/, (d) => String(+d + 1)), ...ch.tones, ch.tones[1], ch.tones[0]];
      arp.forEach((n, k) => at(b0 + k * 0.5, (t) => this.piano(hz(n), t, BEAT * 1.6, 0.038)));
      line[i].forEach((n, k) => at(b0 + k, (t) => this.s.bell(hz(n), t, 1.8, 0.05, this.bus)));
      if (i === 6) at(b0 + 2, (t) => this.pad(CHORDS.G7.pad, t, BEAT, 0.016));
    });
    return { len: 24, events: ev.sort((a, b2) => a.b - b2.b) };
  }
}
