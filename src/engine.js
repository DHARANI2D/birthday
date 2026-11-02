import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { lerp } from './util.js';

export const isMobile = () =>
  /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 1 && innerWidth < 900);

/**
 * Renderer + camera rig + post-processing.
 *
 * The camera is described by a "shot": where it looks, from which direction,
 * and how much of the world must fit in frame. The distance is derived from the
 * screen's aspect ratio, so the cake is framed nicely on a phone *and* a TV.
 */
export function createEngine(canvas) {
  const mobile = isMobile();
  const fast = new URLSearchParams(location.search).has('fast'); // used by the test harness
  const q = {
    dpr: fast ? 1 : Math.min(window.devicePixelRatio || 1, mobile ? 1.75 : 2),
    shadow: fast ? 1024 : mobile ? 1024 : 2048,
    // multisampled half-float targets are rock solid on desktop; phones skip MSAA to be safe
    msaa: fast || mobile ? 0 : 4,
    bloom: true,
  };

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(q.dpr);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.9;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const bgColor = new THREE.Color('#12061a');
  scene.background = bgColor;

  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.2;

  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 120);

  // ── shot-based camera ──
  const shot = {
    target: new THREE.Vector3(0, 1.2, 0),
    dir: new THREE.Vector3(0, 0.36, 1).normalize(), // from target toward camera
    w: 6.4, // world width that must fit
    h: 5.6, // world height that must fit
    roll: 0,
  };
  const parallax = new THREE.Vector2();
  const parallaxTarget = new THREE.Vector2();
  const shake = { amp: 0 };
  let time = 0;

  const composer = new EffectComposer(
    renderer,
    new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: q.msaa }),
  );
  const renderPass = new RenderPass(scene, camera);
  const bloom = new UnrealBloomPass(new THREE.Vector2(512, 512), 0.4, 0.6, 1.0);
  const output = new OutputPass();
  composer.addPass(renderPass);
  composer.addPass(bloom);
  composer.addPass(output);

  function resize() {
    const w = Math.max(1, canvas.clientWidth || window.innerWidth);
    const h = Math.max(1, canvas.clientHeight || window.innerHeight);
    renderer.setPixelRatio(q.dpr);
    renderer.setSize(w, h, false);
    composer.setPixelRatio(q.dpr);
    composer.setSize(w, h);
    camera.aspect = w / h;
    camera.fov = camera.aspect < 0.8 ? 40 : camera.aspect < 1.2 ? 36 : 32;
    camera.updateProjectionMatrix();
  }

  function placeCamera() {
    const t = Math.tan((camera.fov * Math.PI) / 360);
    const dV = shot.h / (2 * t);
    const dH = shot.w / (2 * t * camera.aspect);
    const d = Math.max(dV, dH);
    camera.position.copy(shot.target).addScaledVector(shot.dir, d);
    // gentle drift + mouse parallax + impact shake
    const s = shake.amp;
    camera.position.x += parallax.x * 0.45 + Math.sin(time * 0.35) * 0.06 + (Math.random() - 0.5) * s;
    camera.position.y += parallax.y * 0.25 + Math.sin(time * 0.27 + 1) * 0.04 + (Math.random() - 0.5) * s;
    camera.lookAt(shot.target);
    if (shot.roll) camera.rotateZ(shot.roll);
  }

  function update(dt) {
    time += dt;
    parallax.lerp(parallaxTarget, 1 - Math.pow(0.001, dt));
    placeCamera();
  }

  function render() {
    placeCamera();
    composer.render();
  }

  function setShot(s) {
    if (s.target) shot.target.set(...s.target);
    if (s.dir) shot.dir.set(...s.dir).normalize();
    if (s.w !== undefined) shot.w = s.w;
    if (s.h !== undefined) shot.h = s.h;
  }
  function getShot() {
    return { target: shot.target.toArray(), dir: shot.dir.toArray(), w: shot.w, h: shot.h };
  }

  function lowerQuality(level) {
    if (level === 1) {
      q.dpr = Math.min(q.dpr, 1.25);
      bloom.enabled = false;
    } else if (level === 2) {
      q.dpr = 1;
    }
    resize();
  }

  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('pointermove', (e) => {
    parallaxTarget.set((e.clientX / window.innerWidth - 0.5) * 2, -(e.clientY / window.innerHeight - 0.5) * 2);
  });

  return {
    renderer, scene, camera, composer, bloom, q, shot, shake, bgColor,
    resize, update, render, setShot, getShot, lowerQuality,
    viewportScale: () => renderer.domElement.height / (2 * Math.tan((camera.fov * Math.PI) / 360)),
  };
}

/** blend two shots by t */
export function mixShot(a, b, t) {
  const v = (x, y) => [lerp(x[0], y[0], t), lerp(x[1], y[1], t), lerp(x[2], y[2], t)];
  return { target: v(a.target, b.target), dir: v(a.dir, b.dir), w: lerp(a.w, b.w, t), h: lerp(a.h, b.h, t) };
}

