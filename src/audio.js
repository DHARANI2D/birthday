// ──────────────────────────────────────────────────────────────
//  All sound is synthesised with the Web Audio API — no audio files.
// ──────────────────────────────────────────────────────────────

const N = {
  G4: 392.0, A4: 440.0, B4: 493.88, C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99,
  C6: 1046.5, D6: 1174.7, E6: 1318.5, G6: 1568.0, A6: 1760, C7: 2093.0,
};

// "Happy Birthday to You" — a traditional tune in the public domain.
const MELODY = [
  ['G4', 0.75], ['G4', 0.25], ['A4', 1], ['G4', 1], ['C5', 1], ['B4', 2],
  ['G4', 0.75], ['G4', 0.25], ['A4', 1], ['G4', 1], ['D5', 1], ['C5', 2],
  ['G4', 0.75], ['G4', 0.25], ['G5', 1], ['E5', 1], ['C5', 1], ['B4', 1], ['A4', 1],
  ['F5', 0.75], ['F5', 0.25], ['E5', 1], ['C5', 1], ['D5', 1], ['C5', 3],
];
const LINE_STARTS = [0, 6, 12, 18]; // in beats
const BASS = [[0, 130.81], [3, 98], [6, 98], [9, 130.81], [12, 130.81], [15, 174.61], [18, 174.61], [21, 130.81]];
export const SONG_BEATS = 24;
const BPM = 94;

export class Sound {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.scrapeNode = null;
    this.songStop = null;
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
    comp.ratio.value = 4;
    this.master.connect(comp).connect(c.destination);

    this.reverb = c.createConvolver();
    this.reverb.buffer = this.makeIR(2.6, 2.6);
    this.wet = c.createGain();
    this.wet.gain.value = 0.32;
    this.reverb.connect(this.wet).connect(this.master);

    this.bus = c.createGain(); // everything goes dry → master and wet → reverb
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

  /** play Happy Birthday; onLine(i) fires as each line begins. Returns the duration in seconds. */
  song(onLine) {
    if (!this.ctx) return SONG_BEATS * (60 / BPM);
    const c = this.ctx;
    const beat = 60 / BPM;
    const t0 = c.currentTime + 0.35;
    const songBus = c.createGain();
    songBus.gain.value = 1;
    songBus.connect(this.bus);
    let at = 0;
    for (const [n, b] of MELODY) {
      this.bell(N[n], t0 + at * beat, 1.7, 0.2, songBus);
      at += b;
    }
    for (const [b, f] of BASS) {
      const o = c.createOscillator();
      const g = c.createGain();
      o.type = 'triangle';
      o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t0 + b * beat);
      g.gain.linearRampToValueAtTime(0.07, t0 + b * beat + 0.03);
      g.gain.exponentialRampToValueAtTime(0.0005, t0 + b * beat + beat * 2.6);
      o.connect(g).connect(songBus);
      o.start(t0 + b * beat);
      o.stop(t0 + b * beat + beat * 2.7);
    }
    const timers = LINE_STARTS.map((b, i) => setTimeout(() => onLine && onLine(i), (0.35 + b * beat) * 1000));
    this.songStop = () => {
      timers.forEach(clearTimeout);
      songBus.gain.cancelScheduledValues(c.currentTime);
      songBus.gain.setValueAtTime(songBus.gain.value, c.currentTime);
      songBus.gain.linearRampToValueAtTime(0, c.currentTime + 0.6);
    };
    return 0.35 + SONG_BEATS * beat;
  }
  stopSong() {
    if (this.songStop) this.songStop();
    this.songStop = null;
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
    this.noiseBurst({ dur: 0.7, f0: 500, f1: 1500, q: 0.8, gain: 0.12, attack: 0.5 });
  }
  blow() {
    this.noiseBurst({ dur: 1.5, f0: 1100, f1: 380, q: 0.6, gain: 0.5, attack: 0.12 });
    this.noiseBurst({ dur: 1.2, f0: 300, f1: 200, q: 0.5, type: 'lowpass', gain: 0.25, attack: 0.1 });
  }
  poof() {
    this.noiseBurst({ dur: 0.18, f0: 2600, f1: 900, q: 0.7, gain: 0.07, attack: 0.005 });
  }
  applause(sec = 4) {
    if (!this.ctx) return;
    const n = Math.floor(sec * 55);
    for (let i = 0; i < n; i++) {
      const when = Math.random() * sec;
      const env = Math.sin((Math.min(1, when / sec) * Math.PI) * 0.9 + 0.15);
      this.noiseBurst({ dur: 0.05 + Math.random() * 0.05, f0: 1500 + Math.random() * 3500, q: 1.2, gain: 0.07 * env, attack: 0.002, when });
    }
  }
  pop() {
    this.noiseBurst({ dur: 0.25, f0: 5000, f1: 300, q: 0.5, gain: 0.35, attack: 0.002 });
    this.noiseBurst({ dur: 0.2, f0: 160, f1: 60, type: 'lowpass', gain: 0.35, attack: 0.002 });
  }
  thunk() {
    if (!this.ctx) return;
    const c = this.ctx;
    const t = c.currentTime;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(130, t);
    o.frequency.exponentialRampToValueAtTime(48, t + 0.2);
    g.gain.setValueAtTime(0.5, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.28);
    o.connect(g).connect(this.master);
    o.start(t);
    o.stop(t + 0.3);
    this.noiseBurst({ dur: 0.08, f0: 2400, f1: 900, q: 1.5, gain: 0.25, attack: 0.001 });
  }
  slide() {
    this.noiseBurst({ dur: 0.7, f0: 1800, f1: 900, q: 1.1, gain: 0.12, attack: 0.15 });
  }
  clink() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.bell(2637, t, 0.6, 0.08);
    this.bell(3951, t + 0.01, 0.4, 0.05);
  }
  sparkle(n = 9) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const seq = [N.C6, N.E6, N.G6, N.C7, N.G6, N.E6, N.A6, N.C7, N.D6];
    for (let i = 0; i < n; i++) this.bell(seq[i % seq.length], t + i * 0.075, 1.4, 0.07);
  }
  wishMagic() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    [N.C5, N.E5, N.G5, N.C6, N.E6, N.G6, N.C7].forEach((f, i) => this.bell(f, t + i * 0.12, 2.2, 0.09));
  }
  /** continuous blade-through-cake sound; level 0..1 */
  scrape(level) {
    if (!this.ctx) return;
    const c = this.ctx;
    if (!this.scrapeNode) {
      const src = c.createBufferSource();
      src.buffer = this.noise;
      src.loop = true;
      const f = c.createBiquadFilter();
      f.type = 'bandpass';
      f.frequency.value = 1400;
      f.Q.value = 0.7;
      const g = c.createGain();
      g.gain.value = 0;
      src.connect(f).connect(g).connect(this.bus);
      src.start();
      this.scrapeNode = { src, f, g };
    }
    const s = this.scrapeNode;
    s.g.gain.setTargetAtTime(Math.min(1, level) * 0.16, c.currentTime, 0.04);
    s.f.frequency.setTargetAtTime(900 + level * 1600, c.currentTime, 0.05);
  }

  /** microphone "blow" detector. Returns a stop function. */
  async listenBlow(onBlow) {
    this.init();
    const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false } });
    const c = this.ctx;
    const src = c.createMediaStreamSource(stream);
    const an = c.createAnalyser();
    an.fftSize = 1024;
    src.connect(an);
    const buf = new Float32Array(an.fftSize);
    let base = 0.01;
    let acc = 0;
    let live = true;
    let frames = 0;
    const tick = () => {
      if (!live) return;
      an.getFloatTimeDomainData(buf);
      let sum = 0;
      for (let i = 0; i < buf.length; i++) sum += buf[i] * buf[i];
      const rms = Math.sqrt(sum / buf.length);
      frames++;
      if (frames < 30) base = Math.max(base, rms);
      const thresh = Math.max(0.09, base * 4);
      acc = rms > thresh ? acc + 1 : Math.max(0, acc - 2);
      if (acc > 14) {
        live = false;
        stream.getTracks().forEach((t) => t.stop());
        onBlow();
        return;
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    return () => {
      live = false;
      stream.getTracks().forEach((t) => t.stop());
    };
  }
}
