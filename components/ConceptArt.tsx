import React from "react";

/**
 * Concept-driven card illustrations. Each concept renders a soft,
 * geometric scene — a meaningful object over a radial brand/teal glow on a
 * near-white ground — echoing a cozy illustrated feature grid, in the
 * Dataplexor palette. Pure inline SVG: crisp, themeable, no image files.
 */

const VB = "0 0 400 260";

function defs(p: string, glow: string): string {
  return (
    `<defs>` +
    `<linearGradient id="${p}b" x1="0" y1="0" x2="0.3" y2="1">` +
    `<stop offset="0" stop-color="#5b6bff"/><stop offset="1" stop-color="#2338ec"/></linearGradient>` +
    `<linearGradient id="${p}t" x1="0" y1="0" x2="1" y2="1">` +
    `<stop offset="0" stop-color="#4fe9d4"/><stop offset="1" stop-color="#10dfc2"/></linearGradient>` +
    `<linearGradient id="${p}bg" x1="0" y1="0" x2="0" y2="1">` +
    `<stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#eaeeff"/></linearGradient>` +
    `<radialGradient id="${p}g" cx="0.5" cy="0.5" r="0.5">` +
    `<stop offset="0" stop-color="${glow}" stop-opacity="0.5"/>` +
    `<stop offset="1" stop-color="${glow}" stop-opacity="0"/></radialGradient>` +
    `<filter id="${p}s" x="-40%" y="-40%" width="180%" height="180%">` +
    `<feDropShadow dx="0" dy="7" stdDeviation="9" flood-color="#2338ec" flood-opacity="0.18"/></filter>` +
    `</defs>`
  );
}

function frame(p: string, glow: string, body: string): string {
  return (
    defs(p, glow) +
    `<rect width="400" height="260" fill="url(#${p}bg)"/>` +
    `<ellipse cx="200" cy="134" rx="150" ry="106" fill="url(#${p}g)"/>` +
    body
  );
}

function gear(
  cx: number,
  cy: number,
  r: number,
  teeth: number,
  tw: number,
  fill: string,
  holeR: number,
): string {
  let parts = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"/>`;
  for (let i = 0; i < teeth; i++) {
    const a = (i / teeth) * Math.PI * 2;
    const tx = cx + Math.cos(a) * (r + 2);
    const ty = cy + Math.sin(a) * (r + 2);
    const deg = ((a * 180) / Math.PI).toFixed(1);
    parts += `<rect x="${(tx - tw / 2).toFixed(1)}" y="${(ty - tw / 2).toFixed(1)}" width="${tw}" height="${tw}" rx="2" fill="${fill}" transform="rotate(${deg} ${tx.toFixed(1)} ${ty.toFixed(1)})"/>`;
  }
  parts += `<circle cx="${cx}" cy="${cy}" r="${holeR}" fill="#ffffff"/>`;
  return parts;
}

type Scene = (p: string) => string;

const SCENES: Record<string, Scene> = {
  "data-analytics": (p) =>
    frame(
      p,
      "#2338ec",
      `<rect x="126" y="74" width="148" height="114" rx="16" fill="#ffffff" filter="url(#${p}s)"/>` +
        `<rect x="150" y="140" width="20" height="30" rx="5" fill="url(#${p}b)"/>` +
        `<rect x="182" y="118" width="20" height="52" rx="5" fill="url(#${p}b)"/>` +
        `<rect x="214" y="96" width="20" height="74" rx="5" fill="url(#${p}b)"/>` +
        `<polyline points="160,128 192,108 224,86" fill="none" stroke="#10dfc2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>` +
        `<circle cx="160" cy="128" r="5" fill="#10dfc2"/><circle cx="192" cy="108" r="5" fill="#10dfc2"/><circle cx="224" cy="86" r="5" fill="#10dfc2"/>`,
    ),

  ai: (p) =>
    frame(
      p,
      "#10dfc2",
      `<ellipse cx="200" cy="130" rx="94" ry="34" fill="none" stroke="#2338ec" stroke-opacity="0.25" stroke-width="2" transform="rotate(-18 200 130)"/>` +
        `<circle cx="200" cy="130" r="42" fill="url(#${p}b)" filter="url(#${p}s)"/>` +
        `<ellipse cx="186" cy="114" rx="15" ry="9" fill="#ffffff" opacity="0.3"/>` +
        `<circle cx="108" cy="146" r="7" fill="#10dfc2"/><circle cx="292" cy="114" r="7" fill="#10dfc2"/>` +
        `<circle cx="230" cy="176" r="6" fill="#5b6bff"/><circle cx="160" cy="86" r="5" fill="#10dfc2"/>`,
    ),

  "agentic-ai": (p) =>
    frame(
      p,
      "#2338ec",
      `<line x1="200" y1="130" x2="128" y2="86" stroke="#2338ec" stroke-opacity="0.32" stroke-width="2.5"/>` +
        `<line x1="200" y1="130" x2="272" y2="86" stroke="#2338ec" stroke-opacity="0.32" stroke-width="2.5"/>` +
        `<line x1="200" y1="130" x2="128" y2="178" stroke="#2338ec" stroke-opacity="0.32" stroke-width="2.5"/>` +
        `<line x1="200" y1="130" x2="272" y2="178" stroke="#2338ec" stroke-opacity="0.32" stroke-width="2.5"/>` +
        `<circle cx="128" cy="86" r="11" fill="#ffffff" stroke="#2338ec" stroke-width="2.5"/>` +
        `<circle cx="272" cy="86" r="11" fill="#ffffff" stroke="#2338ec" stroke-width="2.5"/>` +
        `<circle cx="128" cy="178" r="11" fill="#ffffff" stroke="#2338ec" stroke-width="2.5"/>` +
        `<circle cx="272" cy="178" r="11" fill="#ffffff" stroke="#2338ec" stroke-width="2.5"/>` +
        `<circle cx="200" cy="130" r="21" fill="url(#${p}b)" filter="url(#${p}s)"/>` +
        `<circle cx="200" cy="130" r="7" fill="#10dfc2"/>`,
    ),

  "app-building": (p) =>
    frame(
      p,
      "#2338ec",
      `<rect x="152" y="66" width="118" height="96" rx="12" fill="#e6eaff"/>` +
        `<rect x="118" y="88" width="140" height="94" rx="12" fill="#ffffff" filter="url(#${p}s)"/>` +
        `<circle cx="132" cy="104" r="3.5" fill="#2338ec"/><circle cx="144" cy="104" r="3.5" fill="#10dfc2"/><circle cx="156" cy="104" r="3.5" fill="#e3e5f0"/>` +
        `<rect x="132" y="120" width="112" height="9" rx="4.5" fill="url(#${p}b)"/>` +
        `<rect x="132" y="136" width="90" height="8" rx="4" fill="#e3e5f0"/>` +
        `<rect x="132" y="150" width="70" height="8" rx="4" fill="#e3e5f0"/>` +
        `<circle cx="250" cy="164" r="16" fill="#10dfc2" filter="url(#${p}s)"/>` +
        `<path d="M250 157 v14 M243 164 h14" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>`,
    ),

  "product-building": (p) =>
    frame(
      p,
      "#2338ec",
      `<g filter="url(#${p}s)">` +
        `<path d="M200 84 L248 111 L200 138 L152 111 Z" fill="#8b96ff"/>` +
        `<path d="M152 111 L200 138 L200 190 L152 163 Z" fill="url(#${p}b)"/>` +
        `<path d="M248 111 L200 138 L200 190 L248 163 Z" fill="#1626b8"/>` +
        `</g>` +
        `<path d="M258 78 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3 Z" fill="#10dfc2"/>`,
    ),

  retail: (p) =>
    frame(
      p,
      "#10dfc2",
      `<path d="M172 100 v-6 a28 28 0 0 1 56 0 v6" fill="none" stroke="#1626b8" stroke-width="7" stroke-linecap="round"/>` +
        `<path d="M158 100 h84 l7 74 a12 12 0 0 1 -12 13 H163 a12 12 0 0 1 -12 -13 Z" fill="url(#${p}b)" filter="url(#${p}s)"/>` +
        `<circle cx="200" cy="140" r="13" fill="none" stroke="#10dfc2" stroke-width="4"/>`,
    ),

  banking: (p) =>
    frame(
      p,
      "#2338ec",
      `<g filter="url(#${p}s)">` +
        `<path d="M200 76 L150 104 H250 Z" fill="url(#${p}b)"/>` +
        `<rect x="150" y="106" width="100" height="9" rx="2" fill="url(#${p}b)"/>` +
        `<rect x="158" y="120" width="13" height="56" fill="url(#${p}b)"/>` +
        `<rect x="181" y="120" width="13" height="56" fill="url(#${p}b)"/>` +
        `<rect x="206" y="120" width="13" height="56" fill="url(#${p}b)"/>` +
        `<rect x="229" y="120" width="13" height="56" fill="url(#${p}b)"/>` +
        `<rect x="146" y="178" width="108" height="12" rx="3" fill="url(#${p}b)"/>` +
        `</g>` +
        `<circle cx="200" cy="92" r="4" fill="#10dfc2"/>`,
    ),

  insurance: (p) =>
    frame(
      p,
      "#2338ec",
      `<path d="M200 76 l46 17 v33 c0 35 -23 54 -46 64 c-23 -10 -46 -29 -46 -64 v-33 Z" fill="url(#${p}b)" filter="url(#${p}s)"/>` +
        `<path d="M180 132 l13 13 l26 -28" fill="none" stroke="#ffffff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`,
    ),

  healthcare: (p) =>
    frame(
      p,
      "#10dfc2",
      `<rect x="187" y="92" width="26" height="78" rx="9" fill="url(#${p}t)" filter="url(#${p}s)"/>` +
        `<rect x="161" y="118" width="78" height="26" rx="9" fill="url(#${p}t)"/>` +
        `<path d="M170 131 h14 l6 -12 l8 24 l6 -12 h16" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`,
    ),

  manufacturing: (p) =>
    frame(
      p,
      "#2338ec",
      `<g filter="url(#${p}s)">` +
        gear(184, 124, 40, 9, 14, "#2338ec", 15) +
        `</g>` +
        gear(248, 166, 26, 8, 11, "#10dfc2", 9),
    ),

  "telecom-media": (p) =>
    frame(
      p,
      "#10dfc2",
      `<path d="M158 152 a42 42 0 0 1 84 0" fill="none" stroke="#5b6bff" stroke-width="5" stroke-linecap="round" opacity="0.5"/>` +
        `<path d="M170 152 a30 30 0 0 1 60 0" fill="none" stroke="#10dfc2" stroke-width="5" stroke-linecap="round" opacity="0.8"/>` +
        `<path d="M182 152 a18 18 0 0 1 36 0" fill="none" stroke="#2338ec" stroke-width="5" stroke-linecap="round"/>` +
        `<circle cx="200" cy="154" r="13" fill="url(#${p}b)" filter="url(#${p}s)"/>` +
        `<circle cx="140" cy="150" r="4" fill="#10dfc2"/><circle cx="260" cy="150" r="4" fill="#10dfc2"/>`,
    ),

  plexuscore: (p) =>
    frame(
      p,
      "#2338ec",
      `<path d="M150 150 C186 150 182 104 214 104 C244 104 244 150 262 150" fill="none" stroke="url(#${p}b)" stroke-width="12" stroke-linecap="round"/>` +
        `<circle cx="150" cy="150" r="12" fill="#ffffff" stroke="#2338ec" stroke-width="3"/>` +
        `<circle cx="214" cy="104" r="9" fill="#ffffff" stroke="#2338ec" stroke-width="3"/>` +
        `<circle cx="264" cy="118" r="17" fill="#10dfc2" filter="url(#${p}s)"/>` +
        `<path d="M257 118 l5 6 l9 -11" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
    ),

  plexusiq: (p) =>
    frame(
      p,
      "#10dfc2",
      `<rect x="150" y="128" width="100" height="52" rx="10" fill="#ffffff" filter="url(#${p}s)"/>` +
        `<rect x="164" y="150" width="14" height="20" rx="3" fill="url(#${p}b)"/>` +
        `<rect x="186" y="140" width="14" height="30" rx="3" fill="url(#${p}b)"/>` +
        `<rect x="208" y="132" width="14" height="38" rx="3" fill="url(#${p}b)"/>` +
        `<circle cx="200" cy="96" r="22" fill="url(#${p}t)" filter="url(#${p}s)"/>` +
        `<path d="M200 84 v8 M200 92 l0 10" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>` +
        `<rect x="192" y="114" width="16" height="7" rx="2" fill="#1626b8"/>`,
    ),

  agentmesh: (p) =>
    frame(
      p,
      "#2338ec",
      `<circle cx="200" cy="132" r="60" fill="none" stroke="#2338ec" stroke-opacity="0.18" stroke-width="3"/>` +
        `<line x1="200" y1="96" x2="164" y2="164" stroke="#2338ec" stroke-opacity="0.35" stroke-width="3"/>` +
        `<line x1="200" y1="96" x2="236" y2="164" stroke="#2338ec" stroke-opacity="0.35" stroke-width="3"/>` +
        `<line x1="164" y1="164" x2="236" y2="164" stroke="#2338ec" stroke-opacity="0.35" stroke-width="3"/>` +
        `<circle cx="200" cy="96" r="13" fill="url(#${p}b)" filter="url(#${p}s)"/>` +
        `<circle cx="164" cy="164" r="13" fill="url(#${p}b)" filter="url(#${p}s)"/>` +
        `<circle cx="236" cy="164" r="13" fill="url(#${p}b)" filter="url(#${p}s)"/>` +
        `<circle cx="200" cy="132" r="7" fill="#10dfc2"/>`,
    ),

  consulting: (p) =>
    frame(
      p,
      "#2338ec",
      `<path d="M146 96 h84 a16 16 0 0 1 16 16 v30 a16 16 0 0 1 -16 16 h-44 l-20 18 v-18 h-20 a16 16 0 0 1 -16 -16 v-30 a16 16 0 0 1 16 -16 Z" fill="url(#${p}b)" filter="url(#${p}s)"/>` +
        `<circle cx="168" cy="127" r="4.5" fill="#ffffff"/><circle cx="188" cy="127" r="4.5" fill="#ffffff"/><circle cx="208" cy="127" r="4.5" fill="#ffffff"/>` +
        `<path d="M236 150 h34 a12 12 0 0 1 12 12 v20 a12 12 0 0 1 -12 12 h-6 v12 l-14 -12 h-14 a12 12 0 0 1 -12 -12 v-2" fill="url(#${p}t)" filter="url(#${p}s)"/>`,
    ),

  insight: (p) =>
    frame(
      p,
      "#2338ec",
      `<rect x="150" y="74" width="100" height="118" rx="12" fill="#ffffff" filter="url(#${p}s)"/>` +
        `<rect x="226" y="68" width="14" height="36" rx="3" fill="#10dfc2"/>` +
        `<rect x="164" y="96" width="60" height="10" rx="5" fill="url(#${p}b)"/>` +
        `<rect x="164" y="118" width="72" height="7" rx="3.5" fill="#e3e5f0"/>` +
        `<rect x="164" y="132" width="72" height="7" rx="3.5" fill="#e3e5f0"/>` +
        `<rect x="164" y="146" width="56" height="7" rx="3.5" fill="#e3e5f0"/>` +
        `<rect x="164" y="166" width="40" height="7" rx="3.5" fill="#e3e5f0"/>`,
    ),
};

export type Concept = keyof typeof SCENES;

export function conceptForSolution(slug: string): string {
  return slug in SCENES ? slug : "insight";
}
export function conceptForIndustry(slug: string): string {
  return slug in SCENES ? slug : "insight";
}
export function conceptForProduct(slug: string): string {
  return slug in SCENES ? slug : "product-building";
}

const CATEGORY_CONCEPT: Record<string, string> = {
  "Data & Analytics": "data-analytics",
  AI: "ai",
  "Agentic AI": "agentic-ai",
  Products: "product-building",
  Consulting: "consulting",
  Retail: "retail",
  Banking: "banking",
  Insurance: "insurance",
  Healthcare: "healthcare",
  Manufacturing: "manufacturing",
  "Telecom & Media": "telecom-media",
};
export function conceptForCategory(category: string): string {
  return CATEGORY_CONCEPT[category] ?? "insight";
}

export function conceptForHref(href: string): string {
  const parts = href.split("/").filter(Boolean);
  const [section, slug] = parts;
  if (slug && slug in SCENES) return slug;
  if (section === "solutions") return "data-analytics";
  if (section === "industries") return "retail";
  if (section === "products") return "plexuscore";
  if (section === "services") return "consulting";
  return "insight";
}

export function ConceptArt({
  concept,
  className = "",
}: {
  concept: string;
  className?: string;
}) {
  const scene = SCENES[concept] ?? SCENES.insight;
  // Prefix ids per concept so multiple instances never collide across scenes.
  const markup = scene(`c${concept.replace(/[^a-z]/g, "")}_`);
  return (
    <svg
      viewBox={VB}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
