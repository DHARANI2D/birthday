import * as THREE from 'three';
import { clamp, lerp, ease, deg } from './util.js';
import { mixShot } from './engine.js';
import { CONFIG } from './config.js';
import { H, R, STAND_Y, CUT_A, CUT_B, CUT_MID, CUT_HALF, SIDE_PLATE_POS, SIDE_PLATE_Y } from './constants.js';
import { polar } from './geometry.js';
import { rebuildCake } from './world.js';
import { BEAT, LINE_BEATS, NOTE_ONSETS, SONG_BEATS } from './audio.js';
import { KAVIYA_HOME } from './people.js';

// camera shots: where to look, from which direction, how much must fit
// (w/h on a landscape screen, wp = the width that must fit on an upright phone)
const SHOTS = {
  intro: { target: [0.0, 2.7, -0.6], dir: [0.0, 0.3, 1], w: 14.5, h: 9.0, wp: 8.6 },
  family: { target: [0.0, 2.55, -0.7], dir: [0.0, 0.22, 1], w: 12.2, h: 7.4, wp: 7.2 },
  wish: { target: [-2.3, 3.1, -0.9], dir: [0.42, 0.1, 1], w: 7.0, h: 4.4, wp: 6.0 },
  blow: { target: [-1.6, 2.9, -0.7], dir: [0.36, 0.14, 1], w: 8.4, h: 5.2, wp: 7.0 },
  cut: { target: [-1.25, 2.55, -0.5], dir: [0.55, 0.36, 1], w: 8.4, h: 5.3, wp: 6.6 },
  serve: { target: [-1.7, 2.2, 0.6], dir: [0.32, 0.32, 1], w: 9.4, h: 5.9, wp: 6.8 },
  final: { target: [-0.6, 2.35, 0.2], dir: [-0.04, 0.25, 1], w: 11.6, h: 7.2, wp: 7.4 },
  // phones held upright can't fit everyone, so the camera pans across the family instead
  panMom: { target: [2.4, 2.6, -0.2], dir: [-0.18, 0.22, 1], w: 12, h: 7.4, wp: 6.4 },
  panKaviya: { target: [-2.2, 2.7, -0.8], dir: [0.12, 0.22, 1], w: 12, h: 7.4, wp: 6.4 },
};

export function createStory({ world, sound, confetti, ui }) {
  const { engine, stage, tools, family, smoke, crumbs, sparkler, breath, timeline: tl } = world;
  const K = family.kaviya;
  const music = sound.music;
  const base = { x: 0, z: 0 };
  const v = (x, y, z) => new THREE.Vector3(x, y, z);
  const candleTarget = v(0, STAND_Y + H + 0.4, 0.05);
  const dirMid = v(Math.sin(CUT_MID), 0, Math.cos(CUT_MID)); // radial direction toward Kaviya
  let wishText = '';
  let holding = null; // tool currently in Kaviya's hand
  let shotToken = 0;
  let songT0 = null; // simulated time at which the current song section begins
  let singers = [];
  let lyricToken = 0;
  const gripV = v(0, 0, 0);

  /* ───────────── helpers ───────────── */
  function shotFor(name) {
    const s = JSON.parse(JSON.stringify(SHOTS[name]));
    const a = window.innerWidth / window.innerHeight;
    s.w = lerp(s.wp, s.w, clamp((a - 0.5) / 0.9));
    return s;
  }
  function setShot(name) {
    engine.setShot(shotFor(name));
  }
  function moveShot(name, dur = 2, e = ease.inOutSine) {
    const token = ++shotToken;
    const a = engine.getShot();
    const b = shotFor(name);
    return tl.tween(dur, (k) => {
      if (token === shotToken) engine.setShot(mixShot(a, b, k));
    }, e);
  }
  const wait = (s) => tl.wait(s);
  const tween = (d, fn, e = ease.inOutSine) => tl.tween(d, fn, e);

  function nearerHand(p) {
    return K.shoulderWorld('L').distanceTo(p) < K.shoulderWorld('R').distanceTo(p) ? 'L' : 'R';
  }
  function hold(tool) {
    holding = tool;
    if (tool) {
      tools.gripWorld(tool, gripV);
      K.gripHand = nearerHand(gripV);
      K.grip = gripV;
    } else {
      K.grip = null;
    }
  }
  const gripUpdater = () => {
    if (holding) tools.gripWorld(holding, gripV);
  };

  /* singing: mouths open with each note of the melody */
  const singUpdater = (t) => {
    if (songT0 === null) return;
    const pos = (t - songT0) / BEAT;
    let env = 0;
    if (pos >= 0 && pos < SONG_BEATS - 1.5) {
      for (const o of NOTE_ONSETS) {
        if (pos >= o.b && pos < o.b + o.d) env = 0.35 + 0.65 * Math.exp(-(pos - o.b) * 2.4);
      }
    }
    singers.forEach((p, i) => (p.voice = env * (0.85 + 0.15 * Math.sin(i * 2.1))));
  };

  /** start (or restart) the song at the next bar; returns its simulated start time */
  function beginSong(withLyrics = true, who = family.others) {
    sound.init();
    let lead = 0.2;
    if (sound.ctx) {
      const at = music.on ? music.jumpToSong() : music.start();
      if (at !== null) lead = Math.max(0.05, at - sound.ctx.currentTime);
    }
    songT0 = world.time + lead;
    singers = who;
    who.forEach((p) => p.setMode('sing'));
    const token = ++lyricToken;
    if (withLyrics) LINE_BEATS.forEach((b, i) => wait(lead + b * BEAT).then(() => token === lyricToken && ui.lyric(CONFIG.lyrics[i])));
    wait(lead + SONG_BEATS * BEAT).then(() => token === lyricToken && ui.lyric(null));
    return lead + SONG_BEATS * BEAT;
  }
  function stopLyrics() {
    lyricToken++;
    ui.lyric(null);
  }

  /* ───────────── scenes ───────────── */
  function resetState() {
    holding = null;
    K.grip = null;
    songT0 = null;
    tl.clear();
    crumbs.clear();
    engine.shake.amp = 0;
    tools.knife.visible = false;
    tools.server.visible = false;
    stage.mood.room = 0;
    stage.mood.candle = 1;
    family.all.forEach((p) => {
      p.setMode('idle');
      p.voice = 0;
      p.eyesClosed = 0;
      p.smileAmt = 0.8;
      p.leanTarget = 0;
      p.mouthOpenTarget = 0;
      p.pucker = 0;
    });
    K.root.position.set(...KAVIYA_HOME.pos);
    K.root.rotation.y = KAVIYA_HOME.yaw;
    family.othersLookAtCake();
    K.lookAt(family.camLook);
    ui.cutHint(false);
    ui.bigGreeting(false);
    ui.endBar(false);
    ui.letter(false);
    ui.hidePrompt();
    ui.lyric(null);
    setShot('intro');
  }

  async function songScene() {
    ui.headline(true);
    K.setMode('clap');
    K.smileAmt = 1;
    K.lookAt(family.camLook);
    family.others.forEach((p) => (p.smileAmt = 1));
    family.othersLookAtKaviya();
    const len = beginSong(true);
    if (window.innerWidth / window.innerHeight < 0.8) {
      moveShot('panMom', 3.4, ease.out)
        .then(() => moveShot('family', len * 0.3))
        .then(() => moveShot('panKaviya', len * 0.3));
    } else {
      moveShot('family', 3.6, ease.out);
    }
    // the family glances between Kaviya and the cake as they sing
    wait(len * 0.45).then(() => family.othersLookAtCake());
    wait(len * 0.7).then(() => family.othersLookAtKaviya());
    const skipP = wait(4).then(() => ui.ask('', [{ id: 'wish', label: 'Make a wish ✨', kind: 'primary' }]));
    await Promise.race([wait(len + 0.6), skipP]);
    songT0 = null;
    stopLyrics();
    ui.hidePrompt();
    music.setLevel(0.5, 2);
  }

  async function wishScene() {
    family.setOthers('idle', { smile: 0.95 });
    family.others.forEach((p) => (p.voice = 0));
    family.othersLookAtKaviya();
    K.setMode('wish');
    K.eyesClosed = 1;
    K.lookAt(family.cakeLook);
    ui.headline(false);
    moveShot('wish', 2.6);
    await wait(1.5);
    sparkler.burst(K.headWorld().add(v(0, 0.7, 0)), 14, 0.8, 0.5);
    wishText = await ui.wish();
    sound.wishMagic();
  }

  async function blowScene() {
    K.eyesClosed = 0;
    family.othersLookAtCake();
    K.lookAt(candleTarget);
    K.setMode('blow');
    K.leanTarget = 0;
    K.pucker = 0;
    moveShot('blow', 2.2);
    await wait(1.0);

    await ui.ask(`Take a deep breath, ${CONFIG.pet}… and blow out the candles 🕯️`, [{ id: 'blow', label: 'Blow the candles 💨', kind: 'primary' }]);
    ui.hidePrompt();
    music.setLevel(0.3, 1);

    // breathe in …
    K.leanTarget = -0.06;
    K.smileAmt = 0.6;
    sound.inhale();
    await wait(0.8);
    // … and blow
    K.leanTarget = 0.16;
    K.pucker = 1;
    K.mouthOpenTarget = 0.25;
    sound.blow();
    const blowing = { on: true };
    const mouth = v(0, 0, 0);
    const dir = v(0, 0, 0);
    const blowUpdater = () => {
      if (!blowing.on) return;
      K.mouthWorld(mouth);
      dir.copy(candleTarget).sub(mouth).normalize();
      breath.emit(mouth.clone().addScaledVector(dir, 0.12), dir, 5.5);
      breath.emit(mouth.clone().addScaledVector(dir, 0.12), dir, 4.5);
    };
    world.updaters.push(blowUpdater);
    const travel = clamp(K.mouthWorld(mouth).distanceTo(candleTarget) / 5.5, 0.25, 1.0);

    // the flames bend away, then go out nearest-first
    const flames = world.cake.candles
      .map((c) => ({ c, d: c.g.getWorldPosition(v(0, 0, 0)).distanceTo(mouth) }))
      .sort((a, b) => a.d - b.d);
    await Promise.all(
      flames.map(({ c }, i) =>
        (async () => {
          await wait(travel * 0.8 + i * 0.12);
          await tween(0.4, (k) => (c.flame.blow = k), ease.out);
          await wait(0.12);
          await tween(0.22, (k) => (c.flame.life = 1 - k), ease.in);
          c.flame.blow = 0;
          smoke.emit(c.flame.group.getWorldPosition(v(0, 0, 0)), 6);
          sound.poof();
        })(),
      ),
    );
    blowing.on = false;
    world.updaters.splice(world.updaters.indexOf(blowUpdater), 1);
    K.pucker = 0;
    K.mouthOpenTarget = 0;
    K.leanTarget = 0;

    // ✨ lights up, cheers, and her wish floats away
    tween(1.2, (k) => (stage.mood.candle = 1 - k), ease.out);
    tween(2.6, (k) => (stage.mood.room = k), ease.inOutSine);
    music.setLevel(0.85, 2);
    sound.applause(4.5);
    sound.pop();
    wait(0.15).then(() => sound.sparkle());
    family.setOthers('cheer', { smile: 1 });
    family.othersLookAtKaviya();
    K.setMode('joy');
    K.lookAt(family.camLook);
    confetti.burst(0, window.innerHeight, 70, { angle: -Math.PI * 0.32, spread: 0.9 });
    confetti.burst(window.innerWidth, window.innerHeight, 70, { angle: -Math.PI * 0.68, spread: 0.9 });
    ui.floatWish(wishText);
    sparkler.burst(candleTarget.clone().add(v(0, 0.4, 0)), 40, 1.1, 1.4);
    await wait(2.6);

    // everyone settles into happy clapping while the candles are lifted away
    family.setOthers('clap', { smile: 1 });
    K.setMode('heart');
    await Promise.all(
      world.cake.candles.map((c, i) =>
        wait(i * 0.1).then(() =>
          tween(0.9, (k) => {
            c.g.position.y = c.base.y + k * 0.9;
            c.mats.forEach((m) => (m.opacity = 1 - k));
          }, ease.in),
        ),
      ),
    );
    world.cake.setCandlesVisible(false);
    family.setOthers('idle', { smile: 1 });
    family.othersLookAtCake();
    await wait(0.5);
  }

  /* ───────────── the knife ───────────── */
  const kn = { idx: 0, phi: CUT_B, pv: 0, extraY: 0, saw: { x: 0, v: 0 }, sawT: 0, pitch: 0.1, roll: 0, depthLock: -1 };
  const hover = STAND_Y + H + 0.5;
  const bottom = STAND_Y + 0.0;
  function poseKnife(t) {
    const y = lerp(hover, bottom, kn.pv) + kn.extraY;
    // a gentle back-and-forth sawing that fades in and out with the motion
    const along = Math.sin(t * 8.5) * 0.028 * kn.saw.x;
    tools.poseKnife({ phi: kn.phi, base, r0: 0.0, y, along, pitchAngle: kn.pitch, roll: kn.roll });
    return clamp((STAND_Y + H - y) / H);
  }
  const knifeUpdater = (t) => {
    if (!tools.knife.visible) return;
    const depth = poseKnife(t);
    const s = world.cake.slits[kn.idx];
    if (s && kn.depthLock < 0) s.mat.uniforms.uDepth.value = depth;
  };
  const spring = (st, target, omega, dt) => {
    const e = Math.exp(-omega * dt);
    const d = st.x - target;
    const tmp = (st.v + omega * d) * dt;
    st.v = (st.v - omega * tmp) * e;
    st.x = target + (d + tmp) * e;
  };

  /** Kaviya looks at the spot on the cake where she is cutting */
  const cutLook = (phi) => polar(R * 0.55, H, phi).add(v(0, STAND_Y, 0));

  async function knifeEnters() {
    K.setMode('cut');
    K.lookAt(cutLook(CUT_B));
    K.leanTarget = 0.04;
    tools.knife.visible = true;
    kn.phi = CUT_B;
    kn.idx = 0;
    kn.pv = 0;
    kn.saw = { x: 0, v: 0 };
    kn.depthLock = -1;
    kn.extraY = 1.6;
    kn.roll = 0.35;
    poseKnife(world.time);
    hold(tools.knife);
    sound.clink();
    moveShot('cut', 2.4);
    music.setLevel(0.6, 2);
    await tween(1.4, (k) => {
      kn.extraY = 1.6 * (1 - k);
      kn.roll = 0.35 * (1 - k);
    }, ease.out);
    await wait(0.3);
  }

  function crumbsAt(phi, n) {
    for (let i = 0; i < n; i++) {
      const p = polar(0.3 + Math.random() * (R - 0.4), H, phi);
      p.y += STAND_Y;
      crumbs.emit(p, 1, { spread: 0.06, speed: 0.35, up: 0.45, floor: STAND_Y + H, size: [0.008, 0.018] });
    }
    const p = polar(R + 0.02, H * Math.random(), phi);
    p.y += STAND_Y;
    crumbs.emit(p, 1, { spread: 0.04, speed: 0.3, up: 0.2, floor: STAND_Y, dir: new THREE.Vector3(Math.sin(phi), 0, Math.cos(phi)), size: [0.01, 0.02] });
  }

  /** one drag-down cut; resolves when the blade has gone all the way through */
  function cutDrag(idx, phi) {
    return new Promise((resolve) => {
      kn.phi = phi;
      kn.idx = idx;
      kn.depthLock = -1;
      kn.pv = 0;
      const pvS = { x: 0, v: 0 };
      let target = 0;
      let startY = null;
      let auto = false;
      let autoT = 0;
      let autoFrom = 0;
      let finished = false;
      let last = 0;
      const range = clamp(window.innerHeight * 0.38, 160, 300);
      K.lookAt(cutLook(phi));

      const down = (e) => {
        if (e.target.closest && e.target.closest('button, .modal, textarea')) return;
        startY = e.clientY;
        sound.init();
      };
      const move = (e) => {
        if (startY === null || auto) return;
        target = clamp((e.clientY - startY) / range);
      };
      const up = () => {
        if (startY === null) return;
        startY = null;
        if (!auto && target < 0.96) target = 0;
      };
      const key = (e) => {
        if (['Space', 'Enter', 'ArrowDown'].includes(e.code)) {
          e.preventDefault();
          startAuto();
        }
      };
      const startAuto = () => {
        if (auto) return;
        auto = true;
        autoFrom = target;
        autoT = 0;
      };
      const listeners = [['pointerdown', down], ['pointermove', move], ['pointerup', up], ['pointercancel', up], ['keydown', key]];
      listeners.forEach(([n, f]) => window.addEventListener(n, f));
      world.autoCut = startAuto;

      const updater = (t, dt) => {
        if (finished) return;
        if (auto) {
          autoT += dt / 2.4;
          target = lerp(autoFrom, 1, ease.inOutSine(clamp(autoT)));
        }
        const prev = pvS.x;
        spring(pvS, target, auto ? 7 : 9, dt);
        kn.pv = clamp(pvS.x);
        const speed = Math.abs(pvS.x - prev) / Math.max(dt, 1e-4);
        const inCake = kn.pv > 0.28 && kn.pv < 0.995;
        spring(kn.saw, inCake && speed > 0.04 ? 1 : 0, 6, dt);
        sound.scrape(inCake ? clamp(speed * 1.4) : 0);
        if (inCake && speed > 0.05 && t - last > 0.09) {
          last = t;
          crumbsAt(phi, 1);
        }
        K.leanTarget = 0.04 + 0.1 * kn.pv;
        if (kn.pv > 0.985 && target > 0.95) finish();
      };
      const finish = async () => {
        finished = true;
        listeners.forEach(([n, f]) => window.removeEventListener(n, f));
        world.autoCut = null;
        ui.cutHint(false);
        sound.scrape(0);
        kn.pv = 1;
        kn.depthLock = 1;
        world.cake.slits[idx].mat.uniforms.uDepth.value = 1;
        sound.thunk();
        crumbsAt(phi, 8);
        const saw0 = kn.saw.x;
        tween(0.4, (k) => (kn.saw.x = saw0 * (1 - k)), ease.out);
        // the cake settles with a tiny bounce
        tween(0.6, (k) => {
          const b = Math.sin(k * Math.PI * 2) * (1 - k) * 0.006;
          world.cake.root.scale.set(1 + b, 1 - b * 1.5, 1 + b);
        }, ease.linear);
        await wait(0.4);
        await tween(1.1, (k) => (kn.pv = 1 - k), ease.inOutSine);
        kn.pv = 0;
        world.updaters.splice(world.updaters.indexOf(updater), 1);
        resolve();
      };
      world.updaters.push(updater);
    });
  }

  async function cutScene() {
    await knifeEnters();
    ui.cutHint(true);
    ui.ask(`Now cut the cake, ${CONFIG.pet} 🔪`, [{ id: 'auto', label: 'Tap here to cut', kind: 'ghost' }], 'top').then(() => world.autoCut && world.autoCut());
    await cutDrag(0, CUT_B);
    family.setOthers('clap', { smile: 1 });
    wait(1.6).then(() => family.setOthers('idle', { smile: 1 }));
    sound.applause(1.4);
    ui.hidePrompt();

    // glide round to the second line; Kaviya takes a small step to follow
    K.lookAt(cutLook(CUT_A));
    const kFrom = K.root.position.clone();
    tween(1.6, (k) => {
      K.root.position.x = lerp(kFrom.x, -3.6, k);
      K.root.position.z = lerp(kFrom.z, -1.75, k);
    }, ease.inOutSine);
    await tween(1.6, (k) => {
      kn.phi = lerp(CUT_B, CUT_A, k);
      kn.extraY = Math.sin(k * Math.PI) * 0.35;
    }, ease.inOutSine);
    kn.extraY = 0;
    ui.cutHint(true);
    ui.ask('One more — a perfect slice for you ✨', [{ id: 'auto', label: 'Tap here to cut', kind: 'ghost' }], 'top').then(() => world.autoCut && world.autoCut());
    await cutDrag(1, CUT_A);
    ui.hidePrompt();
    sound.applause(1.6);
    family.setOthers('clap', { smile: 1 });

    // the knife is set down beside the cake
    await tween(1.0, (k) => {
      kn.extraY = k * 1.2;
      kn.roll = k * 0.3;
    }, ease.inOutSine);
    hold(null);
    tools.knife.visible = false;
    family.setOthers('idle', { smile: 1 });
  }

  /* ───────────── the cake server carries the slice to the plate ───────────── */
  async function serveScene() {
    const cake = world.cake;
    const server = tools.server;
    const Y = v(0, 1, 0);
    const d = dirMid.clone();
    const yBase = STAND_Y + 0.045;
    const plate = v(SIDE_PLATE_POS.x, SIDE_PLATE_Y, SIDE_PLATE_POS.z);
    const yawDelta = -0.2;
    const rc = (2 * R * Math.sin(CUT_HALF)) / (3 * CUT_HALF);
    const tipIn = 0.3;
    const along = rc - tipIn; // the slice's centre sits this far from the server's tip
    const rigStart = cake.rig.position.clone();

    server.visible = true;
    const tip = v(0, 0, 0);
    let carrying = 0;
    let yaw = 0;
    const place = () => {
      server.position.copy(tip);
      server.rotation.y = CUT_MID - Math.PI / 2 + yaw;
      if (carrying > 0) {
        const off = d.clone().multiplyScalar(along).applyAxisAngle(Y, yaw);
        cake.rig.position.set(lerp(rigStart.x, tip.x + off.x, carrying), lerp(rigStart.y, tip.y + 0.035, carrying), lerp(rigStart.z, tip.z + off.z, carrying));
        cake.rig.rotation.y = yaw;
      }
    };
    world.updaters.push(place);

    // 1 — slide the server in under the slice
    tip.copy(d).multiplyScalar(2.7).setY(yBase);
    place();
    hold(server);
    K.setMode('cut');
    K.lookAt(cake.rig.position.clone().add(v(0, 0.5, 0)));
    moveShot('serve', 2.6);
    music.setLevel(0.7, 2);
    sound.slide();
    cake.hideSlits();
    await tween(1.4, (k) => tip.copy(d).multiplyScalar(lerp(2.7, tipIn, k)).setY(yBase), ease.inOutSine);
    sound.clink();
    await tween(0.45, (k) => (carrying = k), ease.inOutSine);

    // 2 — lift and carry; Kaviya walks round to the plate with it
    const tip0 = tip.clone();
    const tipEnd = plate.clone().sub(d.clone().multiplyScalar(along).applyAxisAngle(Y, yawDelta)).setY(plate.y + 0.1);
    const k0 = K.root.position.clone();
    const yawK0 = K.root.rotation.y;
    cake.showSmear();
    crumbsAt(CUT_MID, 10);
    sound.sparkle(5);
    K.lookAt(plate.clone().add(v(0, 0.4, 0)));
    tween(2.8, (k) => {
      K.root.position.x = lerp(k0.x, -4.15, k);
      K.root.position.z = lerp(k0.z, 1.55, k);
      K.root.rotation.y = lerp(yawK0, deg(78), k);
    }, ease.inOutSine);
    await tween(2.8, (k) => {
      tip.x = lerp(tip0.x, tipEnd.x, k);
      tip.z = lerp(tip0.z, tipEnd.z, k);
      tip.y = lerp(tip0.y, tipEnd.y, k) + Math.sin(k * Math.PI) * 0.75;
      yaw = yawDelta * k;
    }, ease.inOutSine);

    // 3 — set it down, slide the server out from underneath
    await tween(0.6, (k) => (tip.y = lerp(tipEnd.y, plate.y + 0.004, k)), ease.inOutSine);
    sound.thunk();
    sound.slide();
    carrying = 0; // from here the slice stays put while the blade slides out
    const down = tip.clone();
    await tween(1.2, (k) => {
      const out = d.clone().multiplyScalar(k * 2.4).applyAxisAngle(Y, yaw);
      tip.set(down.x + out.x, down.y, down.z + out.z);
    }, ease.inOutSine);
    const rigNow = cake.rig.position.clone();
    await tween(0.2, (k) => (cake.rig.position.y = lerp(rigNow.y, plate.y, k)), ease.in);
    cake.rig.position.y = plate.y;
    sound.clink();
    hold(null);
    const gone = tip.clone();
    await tween(0.8, (k) => tip.set(gone.x + d.x * k * 1.5, gone.y + k * 0.9, gone.z + d.z * k * 1.5), ease.in);
    world.updaters.splice(world.updaters.indexOf(place), 1);
    server.visible = false;
    K.setMode('idle');
  }

  async function celebrateScene() {
    const cake = world.cake;
    moveShot('final', 3.4, ease.inOutSine);
    family.setOthers('cheer', { smile: 1 });
    family.othersLookAtKaviya();
    K.setMode('joy');
    K.lookAt(family.camLook);
    ui.headline(false);
    ui.bigGreeting(true);
    music.setLevel(1, 1.5);
    sound.applause(6);
    sound.sparkle(12);
    sound.pop();
    for (let i = 0; i < 4; i++) {
      wait(i * 0.45).then(() => {
        confetti.burst(window.innerWidth * (0.15 + 0.23 * i), window.innerHeight * 0.95, 60, { angle: -Math.PI / 2 + (i - 1.5) * 0.12, spread: 1, speed: 1100 });
        sound.pop();
      });
    }
    confetti.shower(9);
    const slicePos = cake.rig.position.clone().add(v(0, 0.7, 0));
    sparkler.burst(slicePos, 50, 1.0, 1.2);
    wait(0.8).then(() => sparkler.burst(slicePos, 30, 1.2, 1.2));
    await wait(3.6);
    ui.bigGreeting(false);
    // …and the whole family sings to her once more
    K.setMode('heart');
    beginSong(true, family.others);
    ui.endBar(true);
    await wait(1);
  }

  /* ───────────── the full run ───────────── */
  async function run({ skipIntro = false } = {}) {
    resetState();
    if (!skipIntro) await ui.waitOpen();
    sound.init();
    await songScene();
    await wishScene();
    await blowScene();
    await cutScene();
    await serveScene();
    await celebrateScene();
  }

  function restart() {
    ui.letter(false);
    ui.endBar(false);
    ui.bigGreeting(false);
    confetti.p.length = 0;
    kn.depthLock = -1;
    world.updaters.length = 0;
    world.updaters.push(gripUpdater, knifeUpdater, singUpdater);
    rebuildCake(world);
    world.cake.root.scale.set(1, 1, 1);
    run({ skipIntro: true });
  }

  world.updaters.push(gripUpdater, knifeUpdater, singUpdater);
  ui.onReadNote(() => ui.letter(true));
  ui.onLetterBack(() => ui.letter(false));
  ui.onReplay(restart);

  return { run, restart, kn, K, shotFor, moveShot, setShot, wait };
}
