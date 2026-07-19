/**
 * Abstract wave hero backgrounds. One generator, six tuned variants so
 * each section of the site gets its own composition while staying in
 * one visual family: deep navy base, silk-like brand-blue waves, a
 * single teal accent line, soft radial glows.
 *
 * All geometry is deterministic (no randomness) so server and client
 * render identically.
 */

export type WaveVariant =
  | "flow" // home — broad layered silk
  | "pulse" // solutions — tighter, energetic ripples
  | "horizon" // industries — calm horizon swell with sunrise glow
  | "orbit" // products — concentric orbital rings
  | "rise" // services & consulting — ascending diagonals
  | "aurora" // company — soft blurred ribbons
  | "calm"; // insights, legal — one quiet line

const W = 1440;
const H = 620;

function smoothPath(pts: [number, number][]): string {
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(pts.length - 1, i + 2)];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d;
}

function wave(
  yBase: number,
  amp: number,
  cycles: number,
  phase: number,
  mod = 0.3
): string {
  const n = 36;
  const pts: [number, number][] = [];
  for (let i = 0; i <= n; i++) {
    const x = -30 + ((W + 60) * i) / n;
    const t = (i / n) * cycles * Math.PI * 2 + phase;
    const envelope = 1 + mod * Math.sin(t * 0.37 + phase * 1.7);
    pts.push([x, yBase + amp * envelope * Math.sin(t)]);
  }
  return smoothPath(pts);
}

function fillWave(
  yBase: number,
  amp: number,
  cycles: number,
  phase: number,
  mod?: number
): string {
  return `${wave(yBase, amp, cycles, phase, mod)} L ${W + 30} ${H + 20} L -30 ${H + 20} Z`;
}

type Layer =
  | { kind: "fill"; d: string; from: string; opacity: number }
  | { kind: "line"; d: string; stroke: string; width: number; opacity: number; blur?: boolean };

function layersFor(variant: WaveVariant): Layer[] {
  switch (variant) {
    case "flow":
      return [
        { kind: "line", d: wave(200, 60, 1.3, 5.5, 0.35), stroke: "#3f52d6", width: 60, opacity: 0.22, blur: true },
        { kind: "fill", d: fillWave(300, 60, 1.15, 0.4), from: "#5b6bff", opacity: 0.18 },
        { kind: "fill", d: fillWave(385, 74, 1.55, 2.4), from: "#2338ec", opacity: 0.24 },
        { kind: "fill", d: fillWave(470, 48, 2.1, 4.6), from: "#0a1440", opacity: 0.55 },
        { kind: "line", d: wave(377, 70, 1.55, 2.4), stroke: "#10dfc2", width: 2, opacity: 0.55 },
        { kind: "line", d: wave(292, 57, 1.15, 0.4), stroke: "#8d9aff", width: 1.4, opacity: 0.4 },
      ];
    case "pulse":
      return [
        { kind: "fill", d: fillWave(360, 34, 3.2, 1.1, 0.5), from: "#5b6bff", opacity: 0.14 },
        { kind: "fill", d: fillWave(430, 42, 4.1, 3.3, 0.5), from: "#2338ec", opacity: 0.2 },
        { kind: "fill", d: fillWave(500, 30, 5.2, 5.2, 0.5), from: "#0a1440", opacity: 0.5 },
        { kind: "line", d: wave(352, 32, 3.2, 1.1, 0.5), stroke: "#10dfc2", width: 1.8, opacity: 0.45 },
        { kind: "line", d: wave(424, 40, 4.1, 3.3, 0.5), stroke: "#8d9aff", width: 1.2, opacity: 0.3 },
      ];
    case "horizon":
      return [
        { kind: "fill", d: fillWave(430, 26, 0.9, 0.2, 0.15), from: "#5b6bff", opacity: 0.18 },
        { kind: "fill", d: fillWave(480, 32, 1.3, 2.1, 0.15), from: "#2338ec", opacity: 0.24 },
        { kind: "fill", d: fillWave(535, 22, 1.7, 4.0, 0.15), from: "#0a1440", opacity: 0.6 },
        { kind: "line", d: wave(424, 25, 0.9, 0.2, 0.15), stroke: "#10dfc2", width: 2, opacity: 0.55 },
      ];
    case "rise":
      return [
        { kind: "fill", d: fillWave(330, 48, 1.4, 0.9, 0.4), from: "#5b6bff", opacity: 0.15 },
        { kind: "fill", d: fillWave(420, 60, 1.9, 2.9, 0.4), from: "#2338ec", opacity: 0.22 },
        { kind: "line", d: wave(316, 46, 1.4, 0.9, 0.4), stroke: "#10dfc2", width: 1.8, opacity: 0.45 },
        { kind: "line", d: wave(410, 58, 1.9, 2.9, 0.4), stroke: "#8d9aff", width: 1.2, opacity: 0.3 },
      ];
    case "aurora":
      return [
        { kind: "line", d: wave(300, 70, 1.2, 0.7), stroke: "#2f4bff", width: 90, opacity: 0.3, blur: true },
        { kind: "line", d: wave(400, 55, 1.5, 3.1), stroke: "#10dfc2", width: 60, opacity: 0.16, blur: true },
        { kind: "line", d: wave(298, 68, 1.2, 0.7), stroke: "#8d9aff", width: 1.4, opacity: 0.4 },
        { kind: "line", d: wave(398, 54, 1.5, 3.1), stroke: "#10dfc2", width: 1.4, opacity: 0.35 },
      ];
    case "calm":
      return [
        { kind: "fill", d: fillWave(470, 28, 1.1, 1.6, 0.2), from: "#2338ec", opacity: 0.18 },
        { kind: "line", d: wave(462, 27, 1.1, 1.6, 0.2), stroke: "#8d9aff", width: 1.5, opacity: 0.4 },
        { kind: "line", d: wave(508, 20, 1.4, 3.4, 0.2), stroke: "#10dfc2", width: 1.5, opacity: 0.3 },
      ];
    case "orbit":
      return []; // rendered separately
  }
}

function OrbitRings() {
  const rings = [200, 280, 360, 450, 550];
  return (
    <g>
      {rings.map((r, i) => (
        <ellipse
          key={r}
          cx={1050}
          cy={640}
          rx={r * 1.35}
          ry={r}
          fill="none"
          stroke={i === 2 ? "#10dfc2" : "#5b6bff"}
          strokeWidth={i === 2 ? 1.8 : 1.2}
          opacity={i === 2 ? 0.5 : 0.28 - i * 0.03}
        />
      ))}
      <ellipse cx={1050} cy={640} rx={340} ry={252} fill="none" stroke="#2338ec" strokeWidth={54} opacity={0.18} />
      <circle cx={716} cy={430} r={5} fill="#10dfc2" opacity={0.9} />
      <circle cx={1050} cy={104} r={4} fill="#8d9aff" opacity={0.8} />
    </g>
  );
}

const GLOWS: Record<WaveVariant, string[]> = {
  flow: [
    "radial-gradient(ellipse 70% 55% at 18% 8%, rgba(59,80,255,0.4), transparent 70%)",
    "radial-gradient(ellipse 55% 45% at 88% 78%, rgba(16,223,194,0.12), transparent 65%)",
  ],
  pulse: [
    "radial-gradient(ellipse 65% 60% at 80% 6%, rgba(59,80,255,0.42), transparent 70%)",
    "radial-gradient(ellipse 45% 40% at 8% 85%, rgba(16,223,194,0.1), transparent 65%)",
  ],
  horizon: [
    "radial-gradient(ellipse 75% 55% at 50% 96%, rgba(35,56,236,0.5), transparent 72%)",
    "radial-gradient(ellipse 40% 30% at 50% 100%, rgba(16,223,194,0.16), transparent 65%)",
  ],
  orbit: [
    "radial-gradient(ellipse 60% 60% at 74% 92%, rgba(35,56,236,0.45), transparent 70%)",
    "radial-gradient(ellipse 40% 40% at 12% 10%, rgba(91,107,255,0.22), transparent 65%)",
  ],
  rise: [
    "radial-gradient(ellipse 70% 60% at 90% 12%, rgba(59,80,255,0.4), transparent 70%)",
    "radial-gradient(ellipse 50% 40% at 6% 70%, rgba(16,223,194,0.1), transparent 60%)",
  ],
  aurora: [
    "radial-gradient(ellipse 70% 55% at 30% 0%, rgba(47,75,255,0.35), transparent 70%)",
    "radial-gradient(ellipse 50% 45% at 85% 90%, rgba(16,223,194,0.1), transparent 65%)",
  ],
  calm: [
    "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(59,80,255,0.32), transparent 72%)",
  ],
};

export function WaveBackground({
  variant = "flow",
  idPrefix = "wb",
}: {
  variant?: WaveVariant;
  idPrefix?: string;
}) {
  const layers = layersFor(variant);
  const tilt = variant === "rise" ? "rotate(-7 720 310) translate(0 40)" : undefined;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* base */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(155deg, #05050f 0%, #091027 55%, #05050f 100%)" }}
      />
      {/* glows */}
      {GLOWS[variant].map((g, i) => (
        <div key={i} className="absolute inset-0" style={{ background: g }} />
      ))}
      {/* waves */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          {layers.map((l, i) =>
            l.kind === "fill" ? (
              <linearGradient key={i} id={`${idPrefix}g${i}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={l.from} stopOpacity={l.opacity} />
                <stop offset="100%" stopColor={l.from} stopOpacity={0} />
              </linearGradient>
            ) : null
          )}
          <filter id={`${idPrefix}blur`} x="-30%" y="-100%" width="160%" height="300%">
            <feGaussianBlur stdDeviation="26" />
          </filter>
        </defs>
        <g transform={tilt}>
          {variant === "orbit" ? <OrbitRings /> : null}
          {layers.map((l, i) =>
            l.kind === "fill" ? (
              <path key={i} d={l.d} fill={`url(#${idPrefix}g${i})`} />
            ) : (
              <path
                key={i}
                d={l.d}
                stroke={l.stroke}
                strokeWidth={l.width}
                opacity={l.opacity}
                filter={l.blur ? `url(#${idPrefix}blur)` : undefined}
              />
            )
          )}
        </g>
      </svg>
      {/* legibility fade */}
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#05050f] to-transparent" />
    </div>
  );
}
