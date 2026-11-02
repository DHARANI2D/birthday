import * as THREE from 'three';
import { rng, TAU } from './util.js';

/* ───────────────────── candle flame ───────────────────── */
const flameGeo = new THREE.PlaneGeometry(1, 1);
flameGeo.translate(0, 0.5, 0);

export class Flame {
  constructor(glowTex, seed = 0) {
    this.seed = seed;
    this.life = 1; // 1 = burning, 0 = out
    this.blow = 0; // 0..1 how hard the breath hits it
    this.group = new THREE.Group();

    this.mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uSeed: { value: seed },
        uLife: { value: 1 },
        uBlow: { value: 0 },
        uSize: { value: new THREE.Vector2(0.085, 0.215) },
      },
      vertexShader: /* glsl */ `
        uniform float uTime, uSeed, uLife, uBlow; uniform vec2 uSize;
        varying vec2 vUv;
        void main(){
          vUv = uv;
          vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          float h = position.y;
          float flick = sin(uTime*7.0 + uSeed*6.28)*0.5 + sin(uTime*13.0 + uSeed*3.1)*0.35;
          float lean = flick*0.05*h*h + uBlow*1.15*h*h;
          float stretch = 0.9 + 0.12*sin(uTime*9.0 + uSeed*5.0) - abs(uBlow)*0.35;
          vec2 off = vec2(position.x*uSize.x*(1.0 + abs(uBlow)*0.5) + lean*uSize.y, position.y*uSize.y*stretch) * uLife;
          mv.xy += off;
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */ `
        uniform float uTime, uSeed, uLife;
        varying vec2 vUv;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
        float noise(vec2 p){
          vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
          return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
        }
        void main(){
          float y = vUv.y; float x = (vUv.x - 0.5) * 2.0;
          float n = noise(vec2(x*2.5 + uSeed*10.0, y*3.0 - uTime*2.6));
          x += (n - 0.5) * 0.5 * y;
          float w = pow(max(sin(3.14159*pow(y, 0.55)), 0.0), 0.85) * (1.0 - 0.25*y);
          float d = abs(x) / max(w, 0.001);
          float body = smoothstep(1.0, 0.2, d) * smoothstep(0.0, 0.06, y) * (1.0 - smoothstep(0.86, 1.0, y));
          vec3 hot  = vec3(1.0, 0.96, 0.78);
          vec3 mid  = vec3(1.0, 0.58, 0.14);
          vec3 tip  = vec3(0.85, 0.28, 0.05);
          vec3 cool = vec3(0.22, 0.42, 1.0);
          vec3 col = mix(mid, hot, smoothstep(0.6, 0.0, d) * (1.0 - y*0.55));
          col = mix(col, tip, smoothstep(0.55, 1.0, y));
          col = mix(cool, col, smoothstep(0.02, 0.28, y));
          gl_FragColor = vec4(col * 1.7, body * uLife);
        }`,
    });
    this.mesh = new THREE.Mesh(flameGeo, this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 6;

    this.glow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTex,
        color: 0xff9a3c,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
        opacity: 0.3,
      }),
    );
    this.glow.position.y = 0.1;
    this.glow.scale.setScalar(0.4);
    this.glow.renderOrder = 5;
    this.group.add(this.mesh, this.glow);
  }

  update(t) {
    const u = this.mat.uniforms;
    u.uTime.value = t;
    u.uLife.value = this.life;
    u.uBlow.value = this.blow;
    this.glow.material.opacity = this.life * (0.3 + 0.05 * Math.sin(t * 11 + this.seed * 9) + 0.03 * Math.sin(t * 23 + this.seed));
    this.glow.scale.setScalar(0.4 * (0.4 + 0.6 * this.life));
    this.group.visible = this.life > 0.002;
  }
}

/* ───────────────────── smoke wisps ───────────────────── */
export class Smoke {
  constructor(scene, tex, n = 70) {
    this.puffs = [];
    this.R = rng(41);
    for (let i = 0; i < n; i++) {
      const s = new THREE.Sprite(
        new THREE.SpriteMaterial({ map: tex, color: 0xdcd3e8, transparent: true, depthWrite: false, opacity: 0 }),
      );
      s.visible = false;
      s.renderOrder = 4;
      scene.add(s);
      this.puffs.push({ s, life: 0, max: 1, vx: 0, vy: 0, vz: 0, grow: 1, spin: 0 });
    }
    this.next = 0;
  }
  emit(pos, count = 5) {
    for (let k = 0; k < count; k++) {
      const p = this.puffs[this.next++ % this.puffs.length];
      p.s.position.copy(pos);
      p.s.position.x += (this.R() - 0.5) * 0.03;
      p.max = p.life = 2.2 + this.R() * 1.8;
      p.vx = 0.05 + this.R() * 0.12; // drifts with the breath
      p.vy = 0.35 + this.R() * 0.3;
      p.vz = (this.R() - 0.5) * 0.06;
      p.grow = 0.35 + this.R() * 0.3;
      p.s.scale.setScalar(0.06);
      p.s.material.rotation = this.R() * TAU;
      p.spin = (this.R() - 0.5) * 0.8;
      p.s.visible = true;
    }
  }
  update(dt, t) {
    for (const p of this.puffs) {
      if (p.life <= 0) continue;
      p.life -= dt;
      if (p.life <= 0) {
        p.s.visible = false;
        continue;
      }
      const k = 1 - p.life / p.max;
      p.s.position.x += (p.vx + Math.sin(t * 2 + p.max * 3) * 0.04) * dt;
      p.s.position.y += p.vy * dt * (1 - k * 0.5);
      p.s.position.z += p.vz * dt;
      p.s.scale.setScalar(0.06 + p.grow * Math.pow(k, 0.6));
      p.s.material.rotation += p.spin * dt;
      p.s.material.opacity = 0.34 * Math.sin(Math.min(1, k * 6) * Math.PI * 0.5) * (1 - k);
    }
  }
}

/* ───────────────────── flying crumbs ───────────────────── */
export class Crumbs {
  constructor(scene, n = 160) {
    this.n = n;
    this.R = rng(99);
    this.mesh = new THREE.InstancedMesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial({ roughness: 0.85, metalness: 0 }),
      n,
    );
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.castShadow = true;
    scene.add(this.mesh);
    this.p = Array.from({ length: n }, () => ({
      pos: new THREE.Vector3(), vel: new THREE.Vector3(), rot: new THREE.Euler(), spin: new THREE.Vector3(),
      size: 0, floor: 0, alive: false, rest: false,
    }));
    this.dummy = new THREE.Object3D();
    this.next = 0;
    const zero = new THREE.Matrix4().makeScale(0, 0, 0);
    for (let i = 0; i < n; i++) {
      this.mesh.setMatrixAt(i, zero);
      this.mesh.setColorAt(i, new THREE.Color(1, 1, 1));
    }
  }
  emit(origin, count, { spread = 0.25, speed = 0.9, up = 1.4, floor = 0.8, palette = null, size = [0.012, 0.03], dir = null } = {}) {
    const colors = palette || ['#f2cf86', '#e9bd68', '#fbe9bd', '#f3a3b8', '#fff5ea'];
    for (let k = 0; k < count; k++) {
      const p = this.p[this.next++ % this.n];
      p.alive = true;
      p.rest = false;
      p.pos.set(origin.x + (this.R() - 0.5) * spread, origin.y + this.R() * 0.05, origin.z + (this.R() - 0.5) * spread);
      p.vel.set((this.R() - 0.5) * speed, up * (0.35 + this.R() * 0.65), (this.R() - 0.5) * speed);
      if (dir) p.vel.addScaledVector(dir, speed * (0.4 + this.R()));
      p.rot.set(this.R() * TAU, this.R() * TAU, this.R() * TAU);
      p.spin.set((this.R() - 0.5) * 12, (this.R() - 0.5) * 12, (this.R() - 0.5) * 12);
      p.size = size[0] + this.R() * (size[1] - size[0]);
      p.floor = floor + p.size * 0.4;
      this.mesh.setColorAt(this.p.indexOf(p), new THREE.Color(colors[Math.floor(this.R() * colors.length)]));
    }
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
  }
  update(dt) {
    const d = this.dummy;
    let dirty = false;
    this.p.forEach((p, i) => {
      if (!p.alive || p.rest) return;
      dirty = true;
      p.vel.y -= 5.2 * dt;
      p.pos.addScaledVector(p.vel, dt);
      p.rot.x += p.spin.x * dt;
      p.rot.y += p.spin.y * dt;
      p.rot.z += p.spin.z * dt;
      if (p.pos.y <= p.floor) {
        p.pos.y = p.floor;
        p.rest = true;
      }
      d.position.copy(p.pos);
      d.rotation.copy(p.rot);
      d.scale.set(p.size * 1.3, p.size * 0.8, p.size);
      d.updateMatrix();
      this.mesh.setMatrixAt(i, d.matrix);
    });
    if (dirty) this.mesh.instanceMatrix.needsUpdate = true;
  }
  clear() {
    const zero = new THREE.Matrix4().makeScale(0, 0, 0);
    this.p.forEach((p, i) => {
      p.alive = false;
      this.mesh.setMatrixAt(i, zero);
    });
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}

/* ───────────────────── twinkling glow points ───────────────────── */
export class GlowPoints {
  constructor({ positions, sizes, colors, texture, twinkle = 0.4, speed = 1.6, opacity = 1, seed = 1, blending = THREE.AdditiveBlending }) {
    const n = positions.length;
    const R = rng(seed);
    const pos = new Float32Array(n * 3);
    const col = new Float32Array(n * 3);
    const siz = new Float32Array(n);
    const pha = new Float32Array(n);
    const c = new THREE.Color();
    positions.forEach((p, i) => {
      pos.set(p, i * 3);
      c.set(colors[i % colors.length]);
      col.set([c.r, c.g, c.b], i * 3);
      siz[i] = sizes[i % sizes.length] * (0.8 + R() * 0.4);
      pha[i] = R() * TAU;
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
    g.setAttribute('aSize', new THREE.BufferAttribute(siz, 1));
    g.setAttribute('aPhase', new THREE.BufferAttribute(pha, 1));
    this.mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending,
      uniforms: {
        uMap: { value: texture },
        uTime: { value: 0 },
        uScale: { value: 600 },
        uTwinkle: { value: twinkle },
        uSpeed: { value: speed },
        uOpacity: { value: opacity },
      },
      vertexShader: /* glsl */ `
        attribute float aSize; attribute float aPhase; attribute vec3 aColor;
        uniform float uTime, uScale, uTwinkle, uSpeed;
        varying vec3 vColor; varying float vTw;
        void main(){
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vTw = 1.0 - uTwinkle + uTwinkle * (0.5 + 0.5*sin(uTime*uSpeed + aPhase));
          vColor = aColor;
          gl_PointSize = max(1.0, aSize * uScale / -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */ `
        uniform sampler2D uMap; uniform float uOpacity;
        varying vec3 vColor; varying float vTw;
        void main(){
          vec4 t = texture2D(uMap, gl_PointCoord);
          gl_FragColor = vec4(vColor * vTw * uOpacity, t.a);
        }`,
    });
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
  }
  update(t, scale) {
    this.mat.uniforms.uTime.value = t;
    this.mat.uniforms.uScale.value = scale;
  }
}

/* ───────────────────── celebration sparkles around the cake ───────────────────── */
export class Sparkler {
  constructor(scene, starTex, n = 90) {
    this.n = n;
    this.R = rng(123);
    this.pos = new Float32Array(n * 3);
    this.vel = new Float32Array(n * 3);
    this.life = new Float32Array(n);
    this.max = new Float32Array(n);
    this.size = new Float32Array(n);
    this.col = new Float32Array(n * 3);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    g.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1));
    g.setAttribute('aColor', new THREE.BufferAttribute(this.col, 3));
    g.setAttribute('aLife', new THREE.BufferAttribute(new Float32Array(n), 1));
    this.mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: { uMap: { value: starTex }, uScale: { value: 600 } },
      vertexShader: /* glsl */ `
        attribute float aSize; attribute float aLife; attribute vec3 aColor;
        uniform float uScale; varying vec3 vColor; varying float vLife;
        void main(){
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vLife = aLife; vColor = aColor;
          gl_PointSize = max(0.0, aSize * uScale / -mv.z * (0.4 + 0.6*aLife));
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */ `
        uniform sampler2D uMap; varying vec3 vColor; varying float vLife;
        void main(){
          vec4 t = texture2D(uMap, gl_PointCoord);
          gl_FragColor = vec4(vColor * vLife * 1.4, t.a * vLife);
        }`,
    });
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    scene.add(this.points);
    this.next = 0;
  }
  burst(center, count, radius = 0.6, speed = 1.2) {
    const palette = ['#ffe9a8', '#ffc4d6', '#ffffff', '#ffd27a', '#f8b4ff'];
    const c = new THREE.Color();
    for (let k = 0; k < count; k++) {
      const i = this.next++ % this.n;
      const a = this.R() * TAU;
      const b = Math.acos(2 * this.R() - 1);
      const r = Math.cbrt(this.R()) * radius;
      this.pos[i * 3] = center.x + Math.sin(b) * Math.cos(a) * r;
      this.pos[i * 3 + 1] = center.y + Math.cos(b) * r * 0.7;
      this.pos[i * 3 + 2] = center.z + Math.sin(b) * Math.sin(a) * r;
      this.vel[i * 3] = Math.sin(b) * Math.cos(a) * speed * 0.3;
      this.vel[i * 3 + 1] = 0.2 + this.R() * speed * 0.5;
      this.vel[i * 3 + 2] = Math.sin(b) * Math.sin(a) * speed * 0.3;
      this.max[i] = this.life[i] = 1.2 + this.R() * 1.6;
      this.size[i] = 0.1 + this.R() * 0.2;
      c.set(palette[Math.floor(this.R() * palette.length)]);
      this.col.set([c.r, c.g, c.b], i * 3);
    }
    this.points.geometry.attributes.aColor.needsUpdate = true;
    this.points.geometry.attributes.aSize.needsUpdate = true;
  }
  update(dt, scale) {
    this.mat.uniforms.uScale.value = scale;
    const lifeAttr = this.points.geometry.attributes.aLife;
    for (let i = 0; i < this.n; i++) {
      if (this.life[i] <= 0) {
        lifeAttr.array[i] = 0;
        continue;
      }
      this.life[i] -= dt;
      this.pos[i * 3] += this.vel[i * 3] * dt;
      this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt;
      this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      this.vel[i * 3 + 1] -= 0.12 * dt;
      const k = Math.max(0, this.life[i] / this.max[i]);
      lifeAttr.array[i] = Math.sin(k * Math.PI) ** 0.6 * (0.6 + 0.4 * Math.sin(this.life[i] * 25 + i));
    }
    lifeAttr.needsUpdate = true;
    this.points.geometry.attributes.position.needsUpdate = true;
  }
}

/* ───────────────────── Kaviya's visible breath ───────────────────── */
export class Breath {
  constructor(scene, tex, n = 46) {
    this.R = rng(7);
    this.puffs = [];
    for (let i = 0; i < n; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, color: 0xffffff, transparent: true, depthWrite: false, opacity: 0 }));
      s.visible = false;
      s.renderOrder = 7;
      scene.add(s);
      this.puffs.push({ s, life: 0, max: 1, vel: new THREE.Vector3(), grow: 1 });
    }
    this.next = 0;
  }
  emit(from, dir, speed = 6) {
    const p = this.puffs[this.next++ % this.puffs.length];
    p.s.position.copy(from);
    p.max = p.life = 0.55 + this.R() * 0.4;
    p.vel.copy(dir).multiplyScalar(speed * (0.8 + this.R() * 0.5));
    p.vel.x += (this.R() - 0.5) * 0.6;
    p.vel.y += (this.R() - 0.5) * 0.6;
    p.vel.z += (this.R() - 0.5) * 0.6;
    p.grow = 0.5 + this.R() * 0.5;
    p.s.scale.setScalar(0.15);
    p.s.material.rotation = this.R() * TAU;
    p.s.visible = true;
  }
  update(dt) {
    for (const p of this.puffs) {
      if (p.life <= 0) continue;
      p.life -= dt;
      if (p.life <= 0) {
        p.s.visible = false;
        continue;
      }
      const k = 1 - p.life / p.max;
      p.s.position.addScaledVector(p.vel, dt);
      p.s.scale.setScalar(0.15 + p.grow * k);
      p.s.material.opacity = 0.32 * Math.sin(Math.min(1, k * 4) * Math.PI * 0.5) * (1 - k);
    }
  }
}
