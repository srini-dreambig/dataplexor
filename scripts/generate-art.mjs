import { chromium } from 'playwright-core';
import { mkdirSync, writeFileSync } from 'fs';

// Abstract 3D card artwork generator — wireframe torus, particle grids,
// spheres, plexus networks, helixes, data columns, tunnels and ribbons
// on the dark brand base. Deterministic; regenerate any time.
const W = 900, H = 560;
const OUT = new URL('../public/art', import.meta.url).pathname;
mkdirSync(OUT, { recursive: true });

const HUES = {
  blue: ['#2338ec', '#7b8cff', '#c3ccff'],
  violet: ['#6d3ef2', '#a98cff', '#e0d4ff'],
  cyan: ['#0f6fd9', '#2bb8ff', '#bfeaff'],
  teal: ['#0d9488', '#10dfc2', '#c8fff4'],
};

const SCENES = [
  { name: 'torus-blue', kind: 'torus', hue: 'blue', ax: 1.05, ay: 0.55 },
  { name: 'torus-violet', kind: 'torus', hue: 'violet', ax: 0.8, ay: -0.7 },
  { name: 'grid-cyan', kind: 'grid', hue: 'cyan' },
  { name: 'grid-violet', kind: 'grid', hue: 'violet' },
  { name: 'sphere-teal', kind: 'sphere', hue: 'teal' },
  { name: 'sphere-blue', kind: 'sphere', hue: 'blue' },
  { name: 'plexus-blue', kind: 'plexus', hue: 'blue', seed: 7 },
  { name: 'plexus-violet', kind: 'plexus', hue: 'violet', seed: 21 },
  { name: 'helix-teal', kind: 'helix', hue: 'teal' },
  { name: 'tunnel-blue', kind: 'tunnel', hue: 'blue' },
  { name: 'columns-cyan', kind: 'columns', hue: 'cyan', seed: 4 },
  { name: 'columns-violet', kind: 'columns', hue: 'violet', seed: 11 },
  { name: 'arcs-teal', kind: 'arcs', hue: 'teal' },
  { name: 'ribbon-violet', kind: 'ribbon', hue: 'violet' },
];

const script = `
function mulberry(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function hex2rgb(h) {
  return [parseInt(h.slice(1,3),16), parseInt(h.slice(3,5),16), parseInt(h.slice(5,7),16)];
}
function mix(a, b, t) {
  const A = hex2rgb(a), B = hex2rgb(b);
  const c = A.map((v,i) => Math.round(v + (B[i]-v)*t));
  return 'rgb(' + c.join(',') + ')';
}
function rot(p, ax, ay) {
  let [x,y,z] = p;
  let c = Math.cos(ax), s = Math.sin(ax);
  [y,z] = [y*c - z*s, y*s + z*c];
  c = Math.cos(ay); s = Math.sin(ay);
  [x,z] = [x*c + z*s, -x*s + z*c];
  return [x,y,z];
}
function render(cfg, W, H, hues) {
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const ctx = cv.getContext('2d');
  const [dark, mid, light] = hues;

  // background + glow
  const bg = ctx.createLinearGradient(0, 0, W*0.7, H);
  bg.addColorStop(0, '#04040c'); bg.addColorStop(0.55, '#0a1030'); bg.addColorStop(1, '#04040c');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
  const gl = ctx.createRadialGradient(W*0.68, H*0.4, 0, W*0.68, H*0.4, W*0.55);
  gl.addColorStop(0, mix(dark, '#000000', 0) .replace('rgb','rgba').replace(')', ',0.5)'));
  gl.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = gl; ctx.fillRect(0, 0, W, H);

  const F = 3.2;
  const proj = (p, scale, cx, cy) => {
    const k = F / (F + p[2]);
    return [W*cx + p[0]*scale*k, H*cy + p[1]*scale*k, k];
  };
  const depthColor = (k) => mix(mid, light, Math.min(1, Math.max(0, (k-0.7)*2.2)));
  ctx.lineCap = 'round';

  function polyline(pts, width, alpha) {
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i+1];
      ctx.strokeStyle = depthColor((a[2]+b[2])/2);
      ctx.globalAlpha = alpha * Math.min(1, (a[2]+b[2])/2 + 0.15);
      ctx.lineWidth = width * (a[2]+b[2]) / 2;
      ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke();
    }
  }
  function dot(p, r, alpha) {
    ctx.globalAlpha = alpha * Math.min(1, p[2] + 0.1);
    ctx.fillStyle = depthColor(p[2]);
    ctx.beginPath(); ctx.arc(p[0], p[1], r * p[2], 0, 7); ctx.fill();
  }

  if (cfg.kind === 'torus') {
    const R = 1, r = 0.45, U = 44, V = 20;
    const S = H * 0.75, cx = 0.66, cy = 0.42;
    const pt = (u, v) => rot([
      (R + r*Math.cos(v)) * Math.cos(u),
      (R + r*Math.cos(v)) * Math.sin(u),
      r * Math.sin(v),
    ], cfg.ax, cfg.ay);
    for (let i = 0; i < U; i++) {
      const u = (i/U) * Math.PI * 2;
      const ring = [];
      for (let j = 0; j <= V; j++) ring.push(proj(pt(u, (j/V)*Math.PI*2), S, cx, cy));
      polyline(ring, 0.9, 0.5);
    }
    for (let j = 0; j < V; j++) {
      const v = (j/V) * Math.PI * 2;
      const line = [];
      for (let i = 0; i <= U; i++) line.push(proj(pt((i/U)*Math.PI*2, v), S, cx, cy));
      polyline(line, 0.7, 0.3);
    }
    for (let i = 0; i < U; i += 2)
      for (let j = 0; j < V; j += 2)
        dot(proj(pt((i/U)*Math.PI*2, (j/V)*Math.PI*2), S, cx, cy), 2.4, 0.9);
  }

  if (cfg.kind === 'grid') {
    const NX = 34, NZ = 16, S = H * 0.62, cx = 0.52, cy = 0.34;
    const pt = (i, j) => {
      const x = (i/NX - 0.5) * 3.4, z = (j/NZ) * 2.6;
      const y = 0.5 + 0.3*Math.sin(2.2*x + 1.4*z) + 0.18*Math.sin(1.3*z + 2) - z*0.12;
      return rot([x, y, z], 0.55, 0.12);
    };
    for (let j = 0; j <= NZ; j++) {
      const row = [];
      for (let i = 0; i <= NX; i++) row.push(proj(pt(i, j), S, cx, cy));
      polyline(row, 1.0, 0.55);
    }
    for (let j = 0; j <= NZ; j += 2)
      for (let i = 0; i <= NX; i += 2) dot(proj(pt(i, j), S, cx, cy), 2.0, 0.85);
  }

  if (cfg.kind === 'sphere') {
    const S = H * 0.62, cx = 0.64, cy = 0.46;
    const pt = (lat, lon) => rot([
      Math.cos(lat) * Math.cos(lon),
      Math.sin(lat),
      Math.cos(lat) * Math.sin(lon),
    ], 0.35, 0.5);
    for (let a = 1; a < 10; a++) {
      const lat = (a/10 - 0.5) * Math.PI, ring = [];
      for (let b = 0; b <= 48; b++) ring.push(proj(pt(lat, (b/48)*Math.PI*2), S, cx, cy));
      polyline(ring, 0.9, 0.5);
    }
    for (let b = 0; b < 16; b++) {
      const lon = (b/16) * Math.PI * 2, line = [];
      for (let a = 0; a <= 40; a++) line.push(proj(pt((a/40 - 0.5)*Math.PI, lon), S, cx, cy));
      polyline(line, 0.7, 0.3);
    }
    for (let a = 1; a < 10; a++)
      for (let b = 0; b < 16; b++)
        dot(proj(pt((a/10 - 0.5)*Math.PI, (b/16)*Math.PI*2), S, cx, cy), 2.2, 0.85);
  }

  if (cfg.kind === 'plexus') {
    const rnd = mulberry(cfg.seed || 1);
    const N = 46, pts3 = [];
    for (let i = 0; i < N; i++) {
      const p = rot([(rnd()-0.5)*2.6, (rnd()-0.5)*1.8, (rnd()-0.5)*2.0], 0.4, 0.3);
      pts3.push(p);
    }
    const P = pts3.map(p => proj(p, H*0.62, 0.55, 0.5));
    for (let i = 0; i < N; i++)
      for (let j = i+1; j < N; j++) {
        const d = Math.hypot(pts3[i][0]-pts3[j][0], pts3[i][1]-pts3[j][1], pts3[i][2]-pts3[j][2]);
        if (d < 0.85) polyline([P[i], P[j]], 0.8, 0.85 * (1 - d/0.85));
      }
    P.forEach(p => dot(p, 2.6, 0.9));
  }

  if (cfg.kind === 'helix') {
    const S = H * 0.6, cx = 0.55, cy = 0.5, T = 4.2*Math.PI, N = 160;
    const strand = (phase) => {
      const line = [];
      for (let i = 0; i <= N; i++) {
        const t = (i/N) * T;
        line.push(proj(rot([Math.cos(t+phase)*0.55, (i/N - 0.5)*2.6, Math.sin(t+phase)*0.55], 0.25, 1.35), S, cx, cy));
      }
      return line;
    };
    const A = strand(0), B = strand(Math.PI);
    for (let i = 0; i <= N; i += 8) polyline([A[i], B[i]], 0.8, 0.4);
    polyline(A, 1.5, 0.8); polyline(B, 1.5, 0.55);
    for (let i = 0; i <= N; i += 8) { dot(A[i], 2.4, 0.95); dot(B[i], 2.4, 0.7); }
  }

  if (cfg.kind === 'tunnel') {
    const S = H * 0.72, cx = 0.6, cy = 0.45;
    for (let zi = 0; zi <= 14; zi++) {
      const z = zi * 0.32;
      const drift = Math.sin(zi*0.4) * 0.25;
      const ring = [];
      for (let b = 0; b <= 56; b++) {
        const a = (b/56) * Math.PI * 2;
        ring.push(proj([Math.cos(a) + drift, Math.sin(a)*0.9, z], S, cx, cy));
      }
      polyline(ring, 1.1, 0.55);
    }
    for (let b = 0; b < 28; b += 1) {
      const a = (b/28) * Math.PI * 2, line = [];
      for (let zi = 0; zi <= 14; zi++) {
        const z = zi * 0.32, drift = Math.sin(zi*0.4) * 0.25;
        line.push(proj([Math.cos(a) + drift, Math.sin(a)*0.9, z], S, cx, cy));
      }
      polyline(line, 0.6, 0.22);
    }
  }

  if (cfg.kind === 'columns') {
    const rnd = mulberry(cfg.seed || 1);
    const NX = 20, NZ = 10, S = H * 0.66, cx = 0.52, cy = 0.62;
    const pts = [];
    for (let j = 0; j < NZ; j++)
      for (let i = 0; i < NX; i++) {
        const x = (i/NX - 0.5) * 3.0, z = (j/NZ) * 2.2;
        const h = 0.15 + 0.85 * Math.abs(Math.sin(i*0.7 + j) * (0.4 + rnd()*0.6));
        pts.push({ base: rot([x, 0, z], 0.42, 0.2), top: rot([x, -h, z], 0.42, 0.2) });
      }
    for (const c of pts) {
      const a = proj(c.base, S, cx, cy), b = proj(c.top, S, cx, cy);
      polyline([a, b], 1.1, 0.5);
      dot(b, 2.2, 0.95);
    }
  }

  if (cfg.kind === 'arcs') {
    const cx = W * 0.78, cy = H * 1.25;
    for (let i = 0; i < 22; i++) {
      const r = 220 + i * 26;
      ctx.globalAlpha = 0.75 - i * 0.02;
      const g = ctx.createLinearGradient(cx - r, cy - r, cx + r*0.4, cy);
      g.addColorStop(0, mid); g.addColorStop(0.6, light); g.addColorStop(1, mid);
      ctx.strokeStyle = g;
      ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.arc(cx, cy, r, Math.PI, 2.1*Math.PI); ctx.stroke();
    }
  }

  if (cfg.kind === 'ribbon') {
    const bez = (p, t) => {
      const [p0,p1,p2,p3] = p, u = 1 - t;
      return [
        u*u*u*p0[0] + 3*u*u*t*p1[0] + 3*u*t*t*p2[0] + t*t*t*p3[0],
        u*u*u*p0[1] + 3*u*u*t*p1[1] + 3*u*t*t*p2[1] + t*t*t*p3[1],
      ];
    };
    const railA = [[-40, 420], [260, 180], [620, 560], [960, 160]];
    const railB = [[-40, 620], [300, 420], [660, 740], [960, 380]];
    const g = ctx.createLinearGradient(0, H, W, 0);
    g.addColorStop(0, mid); g.addColorStop(0.55, light); g.addColorStop(1, mid);
    ctx.strokeStyle = g; ctx.lineWidth = 1.3;
    for (let li = 0; li < 30; li++) {
      const f = li / 29;
      ctx.globalAlpha = 0.75;
      ctx.beginPath();
      for (let s = 0; s <= 90; s++) {
        const t = s / 90, a = bez(railA, t), b = bez(railB, t);
        const x = a[0] + (b[0]-a[0])*f, y = a[1] + (b[1]-a[1])*f;
        if (s === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  }

  ctx.globalAlpha = 1;
  return cv.toDataURL('image/jpeg', 0.85);
}
`;

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell' });
const page = await browser.newPage();
await page.setContent('<body></body>');
await page.addScriptTag({ content: script });

for (const scene of SCENES) {
  const dataUrl = await page.evaluate(
    ([cfg, W, H, hues]) => render(cfg, W, H, hues),
    [scene, W, H, HUES[scene.hue]]
  );
  const buf = Buffer.from(dataUrl.split(',')[1], 'base64');
  writeFileSync(`${OUT}/${scene.name}.jpg`, buf);
  console.log(scene.name, Math.round(buf.length / 1024) + 'KB');
}
await browser.close();
