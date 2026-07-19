import { chromium } from 'playwright-core';
import { mkdirSync, writeFileSync } from 'fs';

const W = 2400, H = 1100;
const OUT = new URL('../public/waves', import.meta.url).pathname;
mkdirSync(OUT, { recursive: true });

// Each variant: background gradient stops, glow spots, ribbons.
// A ribbon is a ruled surface between two Bezier "rails"; N thin lines
// interpolate between the rails, stroked with one shared canvas-wide
// gradient so color flows across the surface like the reference image.
const VARIANTS = {
  flow: {
    bg: [[0, '#05050f'], [0.45, '#0a1233'], [1, '#04040c']],
    glows: [
      { x: 0.72, y: 0.28, r: 0.55, c: 'rgba(59,80,255,0.30)' },
      { x: 0.15, y: 0.95, r: 0.45, c: 'rgba(122,80,255,0.16)' },
    ],
    ribbons: [{
      railA: [[-100, 620], [500, 560], [1000, 1030], [2500, 240]],
      railB: [[-100, 1160], [600, 1150], [1250, 1010], [2500, 700]],
      n: 44, width: 2.1, alpha: 0.95,
      grad: [[0, '#b48cff'], [0.42, '#e8ecff'], [0.75, '#3ee6d0'], [1, '#2bb8ff']],
      gradLine: [[0.02, 0.9], [0.98, 0.25]],
    }],
  },
  pulse: {
    bg: [[0, '#04040c'], [0.5, '#0a1233'], [1, '#05050f']],
    glows: [
      { x: 0.8, y: 0.15, r: 0.5, c: 'rgba(59,80,255,0.32)' },
      { x: 0.2, y: 0.9, r: 0.4, c: 'rgba(16,223,194,0.10)' },
    ],
    ribbons: [
      {
        railA: [[-100, 780], [700, 380], [1600, 1050], [2500, 420]],
        railB: [[-100, 1000], [800, 660], [1700, 1180], [2500, 720]],
        n: 34, width: 2.0, alpha: 0.9,
        grad: [[0, '#7a8cff'], [0.5, '#dff7ff'], [1, '#2fe3c9']],
        gradLine: [[0.05, 0.85], [0.95, 0.3]],
      },
      {
        railA: [[-100, 420], [800, 700], [1600, 300], [2500, 640]],
        railB: [[-100, 560], [850, 830], [1650, 430], [2500, 780]],
        n: 18, width: 1.6, alpha: 0.35,
        grad: [[0, '#4d5eff'], [1, '#9fb0ff']],
        gradLine: [[0.1, 0.3], [0.9, 0.6]],
      },
    ],
  },
  horizon: {
    bg: [[0, '#05050f'], [0.6, '#091027'], [1, '#0b1440']],
    glows: [
      { x: 0.5, y: 1.05, r: 0.75, c: 'rgba(35,56,236,0.45)' },
      { x: 0.5, y: 1.0, r: 0.35, c: 'rgba(16,223,194,0.18)' },
    ],
    ribbons: [{
      railA: [[-100, 800], [700, 720], [1600, 860], [2500, 700]],
      railB: [[-100, 1180], [800, 1060], [1600, 1220], [2500, 1040]],
      n: 40, width: 2.0, alpha: 0.85,
      grad: [[0, '#5b6bff'], [0.5, '#cfeaff'], [1, '#2fe3c9']],
      gradLine: [[0.05, 0.95], [0.95, 0.75]],
    }],
  },
  orbit: {
    bg: [[0, '#04040c'], [0.5, '#0a1233'], [1, '#05050f']],
    glows: [
      { x: 0.85, y: 0.85, r: 0.6, c: 'rgba(35,56,236,0.40)' },
      { x: 0.1, y: 0.1, r: 0.4, c: 'rgba(91,107,255,0.18)' },
    ],
    arcs: {
      cx: 0.82, cy: 1.25, rStart: 380, rStep: 26, count: 26,
      width: 2.2, alpha: 0.85,
      grad: [[0, '#8d7bff'], [0.5, '#dff2ff'], [1, '#2fe3c9']],
      gradLine: [[0.35, 1.0], [1.0, 0.2]],
    },
  },
  rise: {
    bg: [[0, '#05050f'], [0.5, '#0a1233'], [1, '#04040c']],
    glows: [
      { x: 0.88, y: 0.1, r: 0.55, c: 'rgba(59,80,255,0.32)' },
      { x: 0.1, y: 0.85, r: 0.4, c: 'rgba(122,80,255,0.14)' },
    ],
    ribbons: [{
      railA: [[-100, 1150], [700, 1060], [1500, 560], [2500, 60]],
      railB: [[-100, 1350], [900, 1320], [1700, 900], [2500, 460]],
      n: 40, width: 2.1, alpha: 0.92,
      grad: [[0, '#b48cff'], [0.5, '#e8ecff'], [1, '#2fe3c9']],
      gradLine: [[0.02, 1.0], [0.98, 0.1]],
    }],
  },
  aurora: {
    bg: [[0, '#04040c'], [0.5, '#0a1233'], [1, '#05050f']],
    glows: [
      { x: 0.3, y: 0.05, r: 0.55, c: 'rgba(47,75,255,0.30)' },
      { x: 0.85, y: 0.9, r: 0.5, c: 'rgba(16,223,194,0.12)' },
    ],
    ribbons: [
      {
        railA: [[-100, 300], [700, 620], [1600, 260], [2500, 620]],
        railB: [[-100, 520], [800, 840], [1700, 460], [2500, 860]],
        n: 30, width: 1.9, alpha: 0.75, blur: 0,
        grad: [[0, '#7a8cff'], [0.5, '#d8f6ef'], [1, '#3ee6d0']],
        gradLine: [[0.05, 0.35], [0.95, 0.55]],
      },
      {
        railA: [[-100, 700], [900, 980], [1700, 700], [2500, 1000]],
        railB: [[-100, 820], [950, 1120], [1750, 830], [2500, 1140]],
        n: 16, width: 1.6, alpha: 0.3,
        grad: [[0, '#4d5eff'], [1, '#2fe3c9']],
        gradLine: [[0.1, 0.75], [0.9, 0.9]],
      },
    ],
  },
  calm: {
    bg: [[0, '#05050f'], [0.55, '#091027'], [1, '#0a1233']],
    glows: [{ x: 0.5, y: 0.0, r: 0.6, c: 'rgba(59,80,255,0.25)' }],
    ribbons: [{
      railA: [[-100, 880], [800, 800], [1600, 940], [2500, 820]],
      railB: [[-100, 1060], [850, 960], [1650, 1120], [2500, 990]],
      n: 26, width: 1.8, alpha: 0.6,
      grad: [[0, '#7a8cff'], [0.55, '#cfe0ff'], [1, '#3ee6d0']],
      gradLine: [[0.05, 0.85], [0.95, 0.8]],
    }],
  },
};

const script = `
function bez(p, t) {
  const [p0, p1, p2, p3] = p;
  const u = 1 - t;
  return [
    u*u*u*p0[0] + 3*u*u*t*p1[0] + 3*u*t*t*p2[0] + t*t*t*p3[0],
    u*u*u*p0[1] + 3*u*u*t*p1[1] + 3*u*t*t*p2[1] + t*t*t*p3[1],
  ];
}
function render(cfg, W, H) {
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const ctx = cv.getContext('2d');

  // background
  const bg = ctx.createLinearGradient(0, 0, W * 0.6, H);
  cfg.bg.forEach(([o, c]) => bg.addColorStop(o, c));
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // glows
  for (const g of cfg.glows) {
    const r = g.r * W;
    const rg = ctx.createRadialGradient(g.x*W, g.y*H, 0, g.x*W, g.y*H, r);
    rg.addColorStop(0, g.c);
    rg.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = rg;
    ctx.fillRect(0, 0, W, H);
  }

  ctx.lineCap = 'round';

  function strokeGrad(spec, lineSpec) {
    const [[x1, y1], [x2, y2]] = lineSpec;
    const g = ctx.createLinearGradient(x1*W, y1*H, x2*W, y2*H);
    spec.forEach(([o, c]) => g.addColorStop(o, c));
    return g;
  }

  // ribbons (ruled surface between two bezier rails)
  for (const rb of (cfg.ribbons || [])) {
    ctx.globalAlpha = rb.alpha;
    ctx.strokeStyle = strokeGrad(rb.grad, rb.gradLine);
    ctx.lineWidth = rb.width;
    const S = 140;
    for (let i = 0; i < rb.n; i++) {
      const f = i / (rb.n - 1);
      ctx.beginPath();
      for (let s = 0; s <= S; s++) {
        const t = s / S;
        const a = bez(rb.railA, t);
        const b = bez(rb.railB, t);
        const x = a[0] + (b[0] - a[0]) * f;
        const y = a[1] + (b[1] - a[1]) * f;
        if (s === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  }

  // concentric arcs (orbit variant)
  if (cfg.arcs) {
    const a = cfg.arcs;
    ctx.globalAlpha = a.alpha;
    ctx.strokeStyle = strokeGrad(a.grad, a.gradLine);
    ctx.lineWidth = a.width;
    for (let i = 0; i < a.count; i++) {
      ctx.beginPath();
      ctx.arc(a.cx*W, a.cy*H, a.rStart + i*a.rStep, Math.PI, 2.05*Math.PI);
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

for (const [name, cfg] of Object.entries(VARIANTS)) {
  const dataUrl = await page.evaluate(
    ([cfg, W, H]) => render(cfg, W, H),
    [cfg, W, H]
  );
  const buf = Buffer.from(dataUrl.split(',')[1], 'base64');
  writeFileSync(`${OUT}/${name}.jpg`, buf);
  console.log(name, Math.round(buf.length / 1024) + 'KB');
}
await browser.close();
