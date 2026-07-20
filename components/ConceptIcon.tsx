import React from "react";

/**
 * Small concept icon in a soft glow chip, chosen from a card's title by
 * keyword. Gives text feature/step grids a visual anchor consistent with
 * the ConceptArt illustrations, in the brand palette.
 */

// Each icon is inner SVG for a 24×24 viewBox, stroke = currentColor.
const ICONS: Record<string, string> = {
  schema:
    '<rect x="3" y="4" width="7" height="6" rx="1"/><rect x="14" y="14" width="7" height="6" rx="1"/><path d="M10 7h4a3 3 0 0 1 3 3v4"/>',
  flow: '<circle cx="5" cy="12" r="2"/><circle cx="12" cy="7" r="2"/><circle cx="19" cy="12" r="2"/><path d="M6.6 11 10.4 8M13.6 8 17.4 11"/>',
  database:
    '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/>',
  chart:
    '<path d="M4 20V4M4 20h16"/><rect x="7" y="12" width="3" height="5"/><rect x="12" y="9" width="3" height="8"/><rect x="17" y="6" width="3" height="11"/>',
  gauge:
    '<path d="M4 15a8 8 0 0 1 16 0"/><path d="M12 15l3.5-3.5"/><circle cx="12" cy="15" r="1.2"/>',
  beaker:
    '<path d="M9 3h6M10 3v6l-4.2 8.4A2 2 0 0 0 7.6 20h8.8a2 2 0 0 0 1.8-2.6L14 9V3"/><path d="M8 14h8"/>',
  search: '<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.3-4.3"/>',
  chat: '<path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-4 3v-3H6a2 2 0 0 1-2-2z"/>',
  checklist:
    '<path d="M9 6h11M9 12h11M9 18h11"/><path d="M3 6l1.4 1.4L7 5M3 12l1.4 1.4L7 11M3 18l1.4 1.4L7 17"/>',
  cube: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12v9M4 7.5l8 4.5 8-4.5"/>',
  gear: '<circle cx="12" cy="12" r="3.2"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>',
  rocket:
    '<path d="M12 3c3 2 5 6 5 10l-2.5 2.5h-5L7 13c0-4 2-8 5-10z"/><circle cx="12" cy="10" r="1.6"/><path d="M9.5 15.5 7 20M14.5 15.5 17 20"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="2.6"/>',
  git: '<circle cx="6" cy="6" r="2.2"/><circle cx="6" cy="18" r="2.2"/><circle cx="18" cy="9" r="2.2"/><path d="M6 8.2v7.6M6 12a6 6 0 0 0 6-6h3.8"/>',
  lock: '<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><circle cx="12" cy="15" r="1.3"/>',
  key: '<circle cx="8" cy="8" r="4"/><path d="M10.8 10.8 19 19M16 16l2-2M18 18l2-2"/>',
  shield: '<path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/>',
  shieldCheck:
    '<path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/><path d="M9 12l2 2 4-4"/>',
  network:
    '<circle cx="12" cy="5" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><path d="M11 6.5 6 16.5M13 6.5 18 16.5M7 18h10"/>',
  chip: '<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 3v3M14 3v3M10 18v3M14 18v3M3 10h3M3 14h3M18 10h3M18 14h3"/>',
  bulb: '<path d="M9.5 18h5M10.5 21h3"/><path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/>',
  plug: '<path d="M9 3v6M15 3v6M7 9h10v2.5a5 5 0 0 1-10 0z"/><path d="M12 16.5V21"/>',
  users:
    '<circle cx="9" cy="8" r="3"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M16 5.2a3 3 0 0 1 0 5.6M20.5 20a5.5 5.5 0 0 0-4-5.3"/>',
  growth: '<path d="M4 20h16M4 16l5-5 4 3 6-7"/><path d="M18 7h3v3"/>',
  cloud: '<path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.4A3.6 3.6 0 0 1 18 18z"/>',
  doc: '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M9.5 12h5M9.5 16h5"/>',
  clock: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4.2l3 2"/>',
  code: '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5.5l-3 13"/>',
  sync: '<path d="M4 12a8 8 0 0 1 13.7-5.6M20 5.5V10h-4.5"/><path d="M20 12a8 8 0 0 1-13.7 5.6M4 18.5V14h4.5"/>',
  target:
    '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.6"/>',
  sparkle: '<path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7z"/>',
};

// Keyword → icon, ordered by specificity (first match wins).
const RULES: [RegExp, string][] = [
  [/schema|dimensional|star schema|\bmodel your|data model|\bmodel\b/i, "schema"],
  [/pipeline|ingest|extract|\bload\b|move your|orchestrat/i, "flow"],
  [/warehouse|lakehouse|storage|data platform|\bdatabase/i, "database"],
  [/sync|bidirectional|two-way|refresh/i, "sync"],
  [/quality|monitor|profil|freshness|drift|observab/i, "gauge"],
  [/test|assert|validat|check/i, "beaker"],
  [/\bask\b|describe what|plain language|plain english|conversational|dialogue|discuss/i, "chat"],
  [/explore|answer|question|query|natural.language|search/i, "search"],
  [/advis|consult/i, "chat"],
  [/lineage|depend|graph/i, "network"],
  [/metric|analytic|dashboard|\bbi\b|report|semantic/i, "chart"],
  [/lineage & metrics|track/i, "network"],
  [/plan|step|method|roadmap|blueprint|diagnostic/i, "checklist"],
  [/\bbuild\b|develop|application|product build|construct|architect/i, "cube"],
  [/automat|dataops|ci\/cd|engineer/i, "gear"],
  [/ship|deploy|launch|production|git|pull request|version/i, "rocket"],
  [/review|approv|human oversight|inbox/i, "eye"],
  [/audit|\blog\b|trail|record|proof|verif/i, "checklist"],
  [/govern|policy|control|regulat|compliance|risk/i, "shieldCheck"],
  [/secret|credential|vault|encrypt|privacy/i, "lock"],
  [/access|sso|rbac|role|identity|\bauth|mfa|provision/i, "key"],
  [/secur|trust|guardrail|safe/i, "shield"],
  [/connect|integration|source|connector/i, "plug"],
  [/agent|autonom|mesh|orchestrat|runtime/i, "network"],
  [/\bai\b|intelligen|machine learning|\bml\b|generative|learning/i, "chip"],
  [/insight|decision|idea|inspir/i, "bulb"],
  [/team|engineer|analyst|leader|people|\buser|who it|owner|talent|hire|career/i, "users"],
  [/scale|growth|backlog|headcount|margin|revenue|roi|cost/i, "growth"],
  [/cloud|tenancy|deploy to/i, "cloud"],
  [/time|week|fast|speed|hour|day/i, "clock"],
  [/doc|guide|content|article|research|report/i, "doc"],
  [/code|sql|dbt|dialect/i, "code"],
  [/skill|reusable|repeatable|certif|target|outcome|result/i, "target"],
];

export function iconForLabel(label: string): string {
  for (const [re, key] of RULES) if (re.test(label)) return key;
  return "sparkle";
}

export function ConceptIcon({
  label,
  icon,
  dark = false,
  className = "",
}: {
  label?: string;
  icon?: string;
  dark?: boolean;
  className?: string;
}) {
  const key = icon ?? iconForLabel(label ?? "");
  const inner = ICONS[key] ?? ICONS.sparkle;
  return (
    <span
      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
        dark
          ? "bg-white/10 text-teal ring-1 ring-white/15"
          : "bg-brand-soft text-brand ring-1 ring-brand/10"
      } ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: inner }}
      />
    </span>
  );
}
