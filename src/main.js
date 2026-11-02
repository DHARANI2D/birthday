import { Vector3 } from 'three';
import { createWorld, stepWorld } from './world.js';
import { createUI } from './ui.js';
import { Sound } from './audio.js';
import { Confetti } from './confetti.js';
import { createStory } from './story.js';
import { CONFIG } from './config.js';

const $ = (id) => document.getElementById(id);
const params = new URLSearchParams(location.search);
const testMode = params.has('test');

function fallback(why) {
  // no WebGL: still deliver the birthday wishes
  console.warn(why);
  const ui = createUI();
  ui.el.intro.classList.add('hidden');
  ui.letter(true);
  ui.el.letterBack.style.display = 'none';
}

let world;
try {
  world = createWorld($('gl'));
} catch (e) {
  fallback(e);
  throw e;
}
const ui = createUI();
const sound = new Sound();
const confetti = new Confetti($('fx'));
const story = createStory({ world, sound, confetti, ui });

// sound toggle
$('mute').addEventListener('click', () => {
  sound.init();
  sound.setMuted(!sound.muted);
  $('mute').classList.toggle('off', sound.muted);
  $('mute').setAttribute('aria-label', sound.muted ? 'Turn sound on' : 'Turn sound off');
});
document.addEventListener('visibilitychange', () => {
  if (!sound.ctx) return;
  if (document.hidden) sound.ctx.suspend();
  else sound.ctx.resume();
});

function frame(dt) {
  stepWorld(world, dt);
  confetti.update(dt);
  world.engine.render();
  confetti.draw();
}

if (testMode) window.__bday = {
  V3: (x, y, z) => new Vector3(x, y, z),
  world, story, sound, ui, confetti, CONFIG,
  step: (dt) => { stepWorld(world, dt); confetti.update(dt); },
  render: () => { world.engine.render(); confetti.draw(); },
  /** advance simulated time without rendering (tests) */
  async advance(sec, dt = 1 / 30) {
    for (let t = 0; t < sec; t += dt) {
      stepWorld(world, dt);
      confetti.update(dt);
      await new Promise((r) => setTimeout(r, 0));
    }
  },
};

if (!testMode) {
  let last = performance.now();
  let slow = 0;
  let frames = 0;
  let level = 0;
  const loop = (now) => {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    frame(dt);
    // gentle automatic quality ladder for weak devices
    frames++;
    if (frames > 60 && level < 2) {
      slow = slow * 0.95 + dt * 0.05;
      if (frames % 120 === 0 && slow > 0.042) {
        level++;
        world.engine.lowerQuality(level);
        slow = 0.02;
      }
    }
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}
story.run();
