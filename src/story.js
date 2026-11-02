import * as THREE from 'three';
import { clamp, lerp, ease, deg } from './util.js';
import { mixShot } from './engine.js';
import { CONFIG } from './config.js';
import { H, R, STAND_Y, CUT_A, CUT_B, CUT_MID, SIDE_PLATE_POS, SIDE_PLATE_Y } from './constants.js';
import { polar } from './geometry.js';
import { rebuildCake } from './world.js';

const BEAT = 60 / 94;
const LINE_AT = [0.35, 0.35 + 6 * BEAT, 0.35 + 12 * BEAT, 0.35 + 18 * BEAT];
const SONG_LEN = 0.35 + 24 * BEAT;

// camera shots: where to look, from which direction, and how much must fit
const SHOTS = {
  // w/h = how much must fit on a landscape screen, wp = width that fits on a phone held upright
  intro: { target: [0.2, 2.9, 0.2], dir: [0.0, 0.33, 1], w: 16.5, h: 10.6, wp: 9.0 },
  family: { target: [0.0, 2.8, 0.2], dir: [0.0, 0.28, 1], w: 15.2, h: 9.6, wp: 7.4 },
  wish: { target: [-2.4, 3.6, -0.4], dir: [0.2, 0.14, 1], w: 9.8, h: 6.4, wp: 8.2 },
  blow: { target: [-2.1, 3.5, -0.2], dir: [0.2, 0.15, 1], w: 10.6, h: 6.6, wp: 8.6 },
  cut: { target: [-1.0, 3.0, -0.1], dir: [0.45, 0.36, 1], w: 10.8, h: 6.8, wp: 7.6 },
  serve: { target: [-1.8, 2.5, 1.2], dir: [0.3, 0.33, 1], w: 11.4, h: 7.2, wp: 7.0 },
  final: { target: [-1.6, 2.1, 1.4], dir: [-0.12, 0.3, 1], w: 13.0, h: 8.4, wp: 7.8 },
};

export function createStory({ world, sound, confetti, ui }) {
  const { engine, stage, tools, family, smoke, crumbs, sparkler, breath, timeline: tl } = world;
  const K = family.kaviya;
  const base = { x: 0, z: 0 };
  const candleTarget = new THREE.Vector3(0, STAND_Y + H + 0.5, 0.1);
  const v = (x, y, z) => new THREE.Vector3(x, y, z);
  const dirMid = v(Math.sin(CUT_MID), 0, Math.cos(CUT_MID)); // radial direction toward Kaviya
  let wishText = '';
  let holding = null; // tool currently in Kaviya's hand
  let shotToken = 0;
  let songOn = false;
  const gripV = v(0, 0, 0);

  /* ───────────── helpers ───────────── */
  function shotFor(name) {
    const s = JSON.parse(JSON.stringify(SHOTS[name]));
    const a = window.innerWidth / window.innerHeight;
    // blend toward the phone framing as the screen gets taller
    const t = clamp((a - 0.5) / 0.9);
    s.w = lerp(s.wp, s.w, t);
    return s;
  }
  function setShot(name) {
    engine.setShot(shotFor(name));
  }
  function moveShot(name, dur = 2, e = ease.inOut) {
    const token = ++shotToken;
    const a = engine.getShot();
    const b = shotFor(name);
    return tl.tween(dur, (k) => {
      if (token === shotToken) engine.setShot(mixShot(a, b, k));
    }, e);
  }
  const wait = (s) => tl.wait(s);
  const tween = (d, fn, e = ease.inOut) => tl.tween(d, fn, e);

  function nearerHand(p) {
    const l = K.shoulderWorld('L').distanceTo(p);
    const r = K.shoulderWorld('R').distanceTo(p);
    return l < r ? 'L' : 'R';
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
  world.updaters.push(() => {
    if (holding) tools.gripWorld(holding, gripV);
  });

  const cheerAll = (on) => {
    family.setOthers(on ? 'cheer' : 'idle', { smile: 1 });
    K.setMode(on ? 'cheer' : 'idle');
  };

  /* ───────────── scenes ───────────── */
  function resetState() {
    holding = null;
    K.grip = null;
    tl.clear();
    crumbs.clear();
    engine.shake.amp = 0;
    tools.knife.visible = false;
    tools.server.visible = false;
    stage.mood.room = 0;
    stage.mood.candle = 1;
    family.all.forEach((p) => {
      p.setMode('idle');
      p.sing = 0;
      p.eyesClosed = 0;
      p.smileAmt = 0.9;
      p.leanTarget = 0;
      p.mouthOpenTarget = 0;
    });
    K.root.position.set(-4.75, K.spec.y, -1.7);
    K.root.rotation.y = deg(70);
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
    family.setOthers('sing', { sing: 1, smile: 1 });
    K.setMode('sing');
    K.sing = 0;
    K.smileAmt = 1;
    K.lookAt(family.camLook);
    moveShot('family', 3.2, ease.out);
    const dur = sound.song(() => {});
    songOn = true;
    LINE_AT.forEach((t, i) => wait(t).then(() => songOn && ui.lyric(CONFIG.lyrics[i])));
    // the wish button appears a few seconds in, for the impatient
    const skipP = wait(3.5).then(() => ui.ask('', [{ id: 'wish', label: 'Make a wish ✨', kind: 'primary' }]));
    await Promise.race([wait(Math.max(dur, SONG_LEN) + 0.8), skipP]);
    songOn = false;
    sound.stopSong();
    ui.lyric(null);
    ui.hidePrompt();
  }

  async function wishScene() {
    family.setOthers('idle', { smile: 0.9 });
    family.othersLookAtKaviya();
    K.setMode('wish');
    K.eyesClosed = 1;
    K.lookAt(family.cakeLook);
    ui.headline(false);
    moveShot('wish', 2.4);
    await wait(1.4);
    sparkler.burst(K.headWorld().add(v(0, 0.6, 0)), 14, 0.9, 0.6);
    wishText = await ui.wish();
    sound.wishMagic();
  }

  async function blowScene() {
    K.eyesClosed = 0;
    family.othersLookAtCake();
    K.lookAt(candleTarget);
    K.setMode('blow');
    K.leanTarget = 0;
    moveShot('blow', 2);
    await wait(1.0);

    // wait for the blow — button, or the microphone
    const blowBtn = { id: 'blow', label: 'Blow! 💨', kind: 'primary' };
    const text = `Take a deep breath, ${CONFIG.pet}… blow out the candles 🕯️`;
    let how = await ui.ask(text, [blowBtn, { id: 'mic', label: '🎤 Use my mic', kind: 'ghost' }]);
    if (how === 'mic') {
      let stopMic = null;
      const heard = new Promise((res) => {
        sound.listenBlow(() => res('mic')).then((s) => (stopMic = s)).catch(() => {
          ui.el.promptText.textContent = "Couldn't hear a mic — just tap Blow! 💨";
        });
      });
      how = await Promise.race([ui.ask('Listening… blow into your mic 🎤', [blowBtn]), heard]);
      if (stopMic) stopMic();
    }
    ui.hidePrompt();

    // breathe in …
    K.leanTarget = -0.1;
    K.smileAmt = 1;
    sound.inhale();
    await wait(0.75);
    // … and blow
    K.leanTarget = 0.3;
    K.mouthOpenTarget = 0.7;
    sound.blow();
    const blowing = { on: true };
    const mouth = v(0, 0, 0);
    const dir = v(0, 0, 0);
    world.updaters.push(() => {
      if (!blowing.on) return;
      K.mouthWorld(mouth);
      dir.copy(candleTarget).sub(mouth).normalize();
      breath.emit(mouth, dir, 6.5);
      breath.emit(mouth, dir, 5.5);
    });
    const dist = K.mouthWorld(mouth).distanceTo(candleTarget);
    const travel = clamp(dist / 6.5, 0.3, 1.2);

    // flames lean, then go out nearest-first
    const flames = world.cake.candles
      .map((c) => ({ c, d: c.g.getWorldPosition(v(0, 0, 0)).distanceTo(K.mouthWorld(mouth)) }))
      .sort((a, b) => a.d - b.d);
    const outs = flames.map(({ c }, i) =>
      (async () => {
        await wait(travel * 0.8 + i * 0.12);
        await tween(0.4, (k) => (c.flame.blow = k), ease.out);
        await wait(0.12);
        await tween(0.22, (k) => (c.flame.life = 1 - k), ease.in);
        c.flame.blow = 0;
        const p = c.flame.group.getWorldPosition(v(0, 0, 0));
        smoke.emit(p, 6);
        sound.poof();
      })(),
    );
    await Promise.all(outs);
    blowing.on = false;
    K.mouthOpenTarget = 0;
    K.leanTarget = 0;

    // ✨ lights up, cheers, the wish floats away
    tween(1.2, (k) => (stage.mood.candle = 1 - k), ease.out);
    tween(2.4, (k) => (stage.mood.room = k), ease.inOut);
    sound.applause(4.5);
    sound.pop();
    wait(0.15).then(() => sound.sparkle());
    cheerAll(true);
    K.lookAt(family.camLook);
    confetti.burst(0, window.innerHeight, 70, { angle: -Math.PI * 0.32, spread: 0.9 });
    confetti.burst(window.innerWidth, window.innerHeight, 70, { angle: -Math.PI * 0.68, spread: 0.9 });
    ui.floatWish(wishText);
    sparkler.burst(candleTarget.clone().add(v(0, 0.4, 0)), 40, 1.3, 1.6);
    await wait(2.4);

    // everyone settles into happy clapping while the candles are lifted away
    family.setOthers('clap', { smile: 1 });
    K.setMode('clap');
    const cs = world.cake.candles;
    await Promise.all(
      cs.map((c, i) =>
        wait(i * 0.1).then(() =>
          tween(0.8, (k) => {
            c.g.position.y = c.base.y + k * 1.1;
            c.mats.forEach((m) => (m.opacity = 1 - k));
          }, ease.in),
        ),
      ),
    );
    world.cake.setCandlesVisible(false);
    family.setOthers('idle', { smile: 1 });
    family.othersLookAtCake();
    await wait(0.6);
  }

  /* the knife */
  const kn = { idx: 0, phi: CUT_B, pv: 0, extraY: 0, saw: 0, pitch: 0.12, roll: 0, depthLock: -1 };
  const hover = STAND_Y + H + 0.75;
  const bottom = STAND_Y + 0.0;
  function poseKnife(t) {
    const y = lerp(hover, bottom, kn.pv) + kn.extraY;
    const contactY = STAND_Y + H;
    const along = Math.sin(t * 30) * 0.07 * kn.saw;
    tools.poseKnife({ phi: kn.phi, base, r0: 0.0, y, along, pitchAngle: kn.pitch, roll: kn.roll });
    return clamp((contactY - y) / H);
  }
  const knifeUpdater = (t) => {
    if (!tools.knife.visible) return;
    const depth = poseKnife(t);
    const s = world.cake.slits[kn.idx];
    if (s && kn.depthLock < 0) s.mat.uniforms.uDepth.value = depth;
  };
  world.updaters.push(knifeUpdater);

  async function knifeEnters() {
    K.setMode('cut');
    K.lookAt(null);
    tools.knife.visible = true;
    kn.phi = CUT_B;
    kn.idx = 0;
    kn.pv = 0;
    kn.saw = 0;
    kn.depthLock = -1;
    kn.extraY = 3.2;
    kn.roll = 0.5;
    poseKnife(world.time);
    hold(tools.knife);
    sound.clink();
    moveShot('cut', 2.2);
    tween(1.1, (k) => {
      kn.extraY = 3.2 * (1 - k);
      kn.roll = 0.5 * (1 - k);
    }, ease.outBack);
    await wait(1.2);
  }

  function crumbsAt(phi, n) {
    for (let i = 0; i < n; i++) {
      const r = 0.4 + Math.random() * (R - 0.5);
      const p = polar(r, H, phi);
      p.y += STAND_Y;
      crumbs.emit(p, 1, { spread: 0.08, speed: 0.5, up: 0.6, floor: STAND_Y + H, size: [0.01, 0.022] });
    }
    // chunks fall down the side at the rim
    const p = polar(R + 0.02, H * Math.random(), phi);
    p.y += STAND_Y;
    crumbs.emit(p, 1, { spread: 0.05, speed: 0.4, up: 0.3, floor: STAND_Y, dir: new THREE.Vector3(Math.sin(phi), 0, Math.cos(phi)), size: [0.012, 0.026] });
  }

  /** one drag-down cut; resolves when the blade has gone all the way through */
  function cutDrag(idx, phi) {
    return new Promise((resolve) => {
      kn.phi = phi;
      kn.idx = idx;
      kn.depthLock = -1;
      kn.pv = 0;
      let target = 0;
      let startY = null;
      let auto = false;
      let finished = false;
      let last = 0;
      const range = clamp(window.innerHeight * 0.4, 170, 320);

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
          auto = true;
        }
      };
      const listeners = [['pointerdown', down], ['pointermove', move], ['pointerup', up], ['pointercancel', up], ['keydown', key]];
      listeners.forEach(([n, f]) => window.addEventListener(n, f));
      world.autoCut = () => (auto = true);

      const updater = (t, dt) => {
        if (finished) return;
        if (auto) target = clamp(target + dt / 1.5);
        const prev = kn.pv;
        kn.pv += (target - kn.pv) * (1 - Math.exp(-(auto ? 9 : 14) * dt));
        const speed = Math.abs(kn.pv - prev) / Math.max(dt, 1e-4);
        const inCake = kn.pv > 0.37 && kn.pv < 0.995;
        kn.saw = inCake && speed > 0.05 ? 1 : 0;
        sound.scrape(inCake ? clamp(speed * 1.6) : 0);
        engine.shake.amp = inCake && speed > 0.05 ? 0.02 : 0;
        if (inCake && speed > 0.05 && t - last > 0.05) {
          last = t;
          crumbsAt(phi, 1);
        }
        K.leanTarget = 0.02 + 0.22 * kn.pv;
        if (kn.pv > 0.985 && target > 0.95) finish();
      };
      const finish = async () => {
        finished = true;
        listeners.forEach(([n, f]) => window.removeEventListener(n, f));
        world.autoCut = null;
        ui.cutHint(false);
        sound.scrape(0);
        engine.shake.amp = 0;
        kn.pv = 1;
        kn.saw = 0;
        kn.depthLock = 1;
        world.cake.slits[idx].mat.uniforms.uDepth.value = 1;
        sound.thunk();
        crumbsAt(phi, 14);
        // the cake settles with a little bounce
        tween(0.6, (k) => {
          const b = Math.sin(k * Math.PI * 3) * (1 - k) * 0.012;
          world.cake.root.scale.set(1 + b, 1 - b * 1.5, 1 + b);
        }, ease.linear);
        await wait(0.35);
        await tween(0.9, (k) => (kn.pv = 1 - k), ease.inOut);
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
    const hintBtn = ui.ask(`Now cut the cake, ${CONFIG.pet} 🔪`, [{ id: 'auto', label: 'Tap here to cut', kind: 'ghost' }], 'top');
    hintBtn.then(() => world.autoCut && world.autoCut());
    await cutDrag(0, CUT_B);
    family.setOthers('clap', { smile: 1 });
    wait(1.3).then(() => family.setOthers('idle', { smile: 1 }));
    sound.applause(1.4);
    ui.hidePrompt();

    // swing round to the second line
    const from = CUT_B;
    const to = CUT_A;
    await tween(1.4, (k) => {
      kn.phi = lerp(from, to, k);
      kn.extraY = Math.sin(k * Math.PI) * 0.6;
    }, ease.inOut);
    kn.extraY = 0;
    ui.cutHint(true);
    ui.ask('One more — a clean slice for you ✨', [{ id: 'auto', label: 'Tap here to cut', kind: 'ghost' }], 'top').then(() => world.autoCut && world.autoCut());
    await cutDrag(1, CUT_A);
    ui.hidePrompt();
    sound.applause(1.6);

    // the knife is set aside
    await Promise.all([
      tween(0.9, (k) => (kn.extraY = k * 3.4), ease.in),
      tween(0.9, (k) => (kn.roll = k * 0.5), ease.in),
    ]);
    hold(null);
    tools.knife.visible = false;
  }

  /* the cake server carries the slice to the plate */
  async function serveScene() {
    const cake = world.cake;
    const server = tools.server;
    const Y = v(0, 1, 0);
    const d = dirMid.clone();
    const yBase = STAND_Y + 0.05;
    const plate = v(SIDE_PLATE_POS.x, SIDE_PLATE_Y, SIDE_PLATE_POS.z);
    const yawDelta = -0.15;
    const along = 0.86; // the slice's centre sits this far from the server's tip
    const rigStart = cake.rig.position.clone();

    server.visible = true;
    const tip = v(0, 0, 0);
    let carrying = 0; // 0..1 how firmly the slice rides on the blade
    let yaw = 0;
    const place = () => {
      server.position.copy(tip);
      server.rotation.y = CUT_MID - Math.PI / 2 + yaw;
      if (carrying > 0) {
        const off = d.clone().multiplyScalar(along).applyAxisAngle(Y, yaw);
        cake.rig.position.set(
          lerp(rigStart.x, tip.x + off.x, carrying),
          lerp(rigStart.y, tip.y + 0.04, carrying),
          lerp(rigStart.z, tip.z + off.z, carrying),
        );
        cake.rig.rotation.y = yaw;
      }
    };
    const serverUpdater = () => place();
    world.updaters.push(serverUpdater);

    // 1 — slide the server in under the slice
    tip.copy(d).multiplyScalar(3.4).setY(yBase);
    place();
    hold(server);
    K.setMode('cut');
    K.lookAt(null);
    moveShot('serve', 2.4);
    sound.slide();
    cake.hideSlits();
    await tween(1.2, (k) => tip.copy(d).multiplyScalar(lerp(3.4, 0.5, k)).setY(yBase), ease.inOut);
    sound.clink();
    await tween(0.35, (k) => (carrying = k), ease.out);

    // 2 — lift and carry; Kaviya steps in so her arm can follow
    const tip0 = tip.clone();
    const tipEnd = plate.clone().sub(d.clone().multiplyScalar(along).applyAxisAngle(Y, yawDelta)).setY(plate.y + 0.12);
    const k0 = K.root.position.clone();
    const yawK0 = K.root.rotation.y;
    cake.showSmear();
    crumbsAt(CUT_MID, 18);
    sound.sparkle(5);
    tween(2.2, (k) => {
      K.root.position.x = lerp(k0.x, -4.3, k);
      K.root.position.z = lerp(k0.z, 1.6, k);
      K.root.rotation.y = lerp(yawK0, deg(82), k);
    });
    await tween(2.2, (k) => {
      tip.x = lerp(tip0.x, tipEnd.x, k);
      tip.z = lerp(tip0.z, tipEnd.z, k);
      tip.y = lerp(tip0.y, tipEnd.y, k) + Math.sin(k * Math.PI) * 1.25;
      yaw = yawDelta * k;
    }, ease.inOut);

    // 3 — set it down, slide the server out from underneath
    await tween(0.5, (k) => (tip.y = lerp(tipEnd.y, plate.y + 0.004, k)), ease.inOut);
    sound.thunk();
    sound.slide();
    carrying = 0; // from here on the slice stays where it is while the blade slides out
    const down = tip.clone();
    await tween(1.1, (k) => {
      const out = d.clone().multiplyScalar(k * 3.2).applyAxisAngle(Y, yaw);
      tip.set(down.x + out.x, down.y, down.z + out.z);
    }, ease.inOut);
    // the slice settles onto the plate
    const rigNow = cake.rig.position.clone();
    await tween(0.18, (k) => (cake.rig.position.y = lerp(rigNow.y, plate.y, k)), ease.in);
    cake.rig.position.y = plate.y;
    sound.clink();
    const gone = tip.clone();
    await tween(0.9, (k) => {
      tip.set(gone.x - d.x * k * -2.0, gone.y + k * 1.4, gone.z - d.z * k * -2.0);
    }, ease.in);
    world.updaters.splice(world.updaters.indexOf(serverUpdater), 1);
    hold(null);
    server.visible = false;
    K.setMode('idle');
  }

  async function celebrateScene() {
    const cake = world.cake;
    moveShot('final', 3.2, ease.inOut);
    cheerAll(true);
    K.lookAt(family.camLook);
    ui.headline(false);
    ui.bigGreeting(true);
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
    const slicePos = cake.rig.position.clone().add(v(0, 0.8, 0));
    sparkler.burst(slicePos, 60, 1.2, 1.4);
    wait(0.8).then(() => sparkler.burst(slicePos, 40, 1.5, 1.4));
    await wait(4.2);
    ui.bigGreeting(false);
    family.setOthers('sing', { sing: 0.4, smile: 1 });
    K.setMode('sing');
    K.sing = 0.2;
    K.lookAt(family.camLook);
    ui.endBar(true);
    await wait(1.2);
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
    world.updaters.push(() => {
      if (holding) tools.gripWorld(holding, gripV);
    });
    world.updaters.push(knifeUpdater);
    rebuildCake(world);
    world.cake.root.scale.set(1, 1, 1);
    run({ skipIntro: true });
  }

  ui.onReadNote(() => ui.letter(true));
  ui.onLetterBack(() => ui.letter(false));
  ui.onReplay(restart);

  return { run, restart, kn, K, shotFor, moveShot, setShot, wait };
}
