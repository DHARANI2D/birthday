import * as THREE from 'three';
import { createEngine } from './engine.js';
import * as TX from './textures.js';
import { createStage } from './stage.js';
import { createCake } from './cake.js';
import { createFamily } from './people.js';
import { createTools } from './tools.js';
import { Crumbs, Smoke, Sparkler, Breath } from './fx.js';
import { Timeline } from './util.js';
import { CONFIG } from './config.js';

/** Build the whole 3D world and return handles to everything the story needs. */
export function createWorld(canvas) {
  const engine = createEngine(canvas);
  const aniso = engine.renderer.capabilities.getMaxAnisotropy();
  const timed = (_name, fn) => fn();
  const T = {
    frosting: timed('frosting', () => TX.frostingTextures(aniso)),
    section: timed('section', () => TX.sectionTextures(aniso)),
    berry: timed('berry', () => TX.strawberryTextures(aniso)),
    cloth: timed('cloth', () => TX.clothTextures(aniso)),
    topper: timed('topper', () => TX.topperTexture(CONFIG.name, aniso)),
    glow: TX.glowTexture(),
    bokeh: TX.bokehTexture(),
    star: TX.starTexture(),
    smoke: timed('smoke', () => TX.smokeTexture()),
    smear: timed('smear', () => TX.smearTexture()),
    iris: TX.irisTexture('#5a3720'),
    hair: TX.hairTextures(aniso),
    braid: TX.braidTextures(aniso),
    wall: TX.wallTextures(aniso),
    wood: TX.woodTextures(aniso),
  };
  const stage = createStage(engine, T);
  const cake = createCake({ scene: engine.scene, T, engine, stage });
  const family = createFamily(engine.scene, T);
  const tools = createTools(engine);
  engine.scene.add(tools.knife, tools.server);
  const smoke = new Smoke(engine.scene, T.smoke);
  const crumbs = new Crumbs(engine.scene);
  const sparkler = new Sparkler(engine.scene, T.star);
  const breath = new Breath(engine.scene, T.smoke);
  const timeline = new Timeline();

  return { engine, T, stage, cake, family, tools, smoke, crumbs, sparkler, breath, timeline, time: 0, updaters: [] };
}

export function stepWorld(w, dt) {
  w.time += dt;
  w.timeline.update(dt);
  for (const u of w.updaters) u(w.time, dt);
  w.engine.update(dt);
  w.stage.update(w.time, dt);
  w.cake.update(w.time);
  w.family.update(w.time, dt);
  w.smoke.update(dt, w.time);
  w.crumbs.update(dt);
  w.breath.update(dt);
  w.sparkler.update(dt, w.engine.viewportScale());
}

/** replay: throw the cut-up cake away and bake a fresh one */
export function rebuildCake(w) {
  w.cake.root.removeFromParent();
  w.cake.rig.removeFromParent();
  w.cake = createCake({ scene: w.engine.scene, T: w.T, engine: w.engine, stage: w.stage });
  w.crumbs.clear();
}
