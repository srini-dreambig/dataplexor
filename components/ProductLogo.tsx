import React from "react";

/**
 * Product family marks — siblings of the Dataplexor "dp infinity" monogram.
 *
 * Each shares the parent's visual language: a concentric annulus ring (same
 * stroke weight as the dp rings), rendered in currentColor on a transparent
 * background in the 48×48 grid, with a woven feel achieved through draw order
 * (links tuck under the ring, nodes sit on top).
 *
 * The shared central ring is the "Plexus" — a network hub. Each product adds
 * its own signature:
 *   - PlexusCore: a solid core inside the ring + a symmetric triangular
 *     plexus of nodes → foundation, platform, stability.
 *   - PlexusIQ: an open ring with an ascending diagonal (echoing the dp ∞
 *     axis) tipped by a small "spark" ring → decision intelligence, insight.
 *   - AgentMesh: an interconnected mesh of nodes around a hub → a runtime of
 *     cooperating agents.
 */
export const PRODUCT_LOGO_VIEWBOX = "0 0 48 48";

const LINK = 'stroke="currentColor" stroke-width="2" stroke-linecap="round"';
const MESH = 'stroke="currentColor" stroke-width="1.8" stroke-linecap="round"';

// Central annulus ring, identical weight to the dp mark's rings.
const RING =
  '<path fill-rule="evenodd" d="M15 24 a9 9 0 1 0 18 0 a9 9 0 1 0 -18 0 Z ' +
  'M19.4 24 a4.6 4.6 0 1 0 9.2 0 a4.6 4.6 0 1 0 -9.2 0 Z"/>';

const PLEXUSCORE =
  // spokes (drawn first, tuck under ring + nodes)
  `<line x1="24" y1="14.8" x2="24" y2="8.8" ${LINK}/>` +
  `<line x1="16" y1="28.6" x2="10.84" y2="31.6" ${LINK}/>` +
  `<line x1="32" y1="28.6" x2="37.16" y2="31.6" ${LINK}/>` +
  RING +
  // solid core inside the ring
  '<path d="M21.7 24 a2.3 2.3 0 1 0 4.6 0 a2.3 2.3 0 1 0 -4.6 0 Z"/>' +
  // three nodes in a symmetric triangle
  '<path d="M21.1 6 a2.9 2.9 0 1 0 5.8 0 a2.9 2.9 0 1 0 -5.8 0 Z"/>' +
  '<path d="M5.51 33 a2.9 2.9 0 1 0 5.8 0 a2.9 2.9 0 1 0 -5.8 0 Z"/>' +
  '<path d="M36.69 33 a2.9 2.9 0 1 0 5.8 0 a2.9 2.9 0 1 0 -5.8 0 Z"/>';

const PLEXUSIQ =
  // ascending diagonal links (echoing the dp ∞ axis)
  `<line x1="17.5" y1="30.5" x2="13.25" y2="34.75" ${LINK}/>` +
  `<line x1="30.5" y1="17.5" x2="33.8" y2="14.2" ${LINK}/>` +
  RING +
  // lower-left node
  '<path d="M8.37 36.73 a2.9 2.9 0 1 0 5.8 0 a2.9 2.9 0 1 0 -5.8 0 Z"/>' +
  // upper-right "spark" ring — the insight
  '<path fill-rule="evenodd" d="M32.53 11.27 a4.2 4.2 0 1 0 8.4 0 a4.2 4.2 0 1 0 -8.4 0 Z ' +
  'M34.73 11.27 a2 2 0 1 0 4 0 a2 2 0 1 0 -4 0 Z"/>';

const AGENTMESH =
  // mesh edges between the three nodes (drawn first, tuck under ring + nodes)
  `<line x1="8.41" y1="15" x2="39.59" y2="15" ${MESH}/>` +
  `<line x1="8.41" y1="15" x2="24" y2="42" ${MESH}/>` +
  `<line x1="39.59" y1="15" x2="24" y2="42" ${MESH}/>` +
  RING +
  // hub inside the ring
  '<path d="M22 24 a2 2 0 1 0 4 0 a2 2 0 1 0 -4 0 Z"/>' +
  // three mesh nodes (inverted triangle)
  '<path d="M5.81 15 a2.6 2.6 0 1 0 5.2 0 a2.6 2.6 0 1 0 -5.2 0 Z"/>' +
  '<path d="M36.99 15 a2.6 2.6 0 1 0 5.2 0 a2.6 2.6 0 1 0 -5.2 0 Z"/>' +
  '<path d="M21.4 42 a2.6 2.6 0 1 0 5.2 0 a2.6 2.6 0 1 0 -5.2 0 Z"/>';

const MARKS: Record<string, string> = {
  plexuscore: PLEXUSCORE,
  plexusiq: PLEXUSIQ,
  agentmesh: AGENTMESH,
};

export function hasProductMark(slug: string): boolean {
  return slug in MARKS;
}

export function ProductMark({
  slug,
  className = "h-8 w-8",
}: {
  slug: string;
  className?: string;
}) {
  const markup = MARKS[slug];
  if (!markup) return null;
  return (
    <svg
      viewBox={PRODUCT_LOGO_VIEWBOX}
      fill="currentColor"
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}

/** Mark + product wordmark lockup, matching the Dataplexor Logo lockup. */
export function ProductLogo({
  slug,
  name,
  className = "",
  markClassName = "h-9 w-9",
  textClassName = "text-2xl",
}: {
  slug: string;
  name: string;
  className?: string;
  markClassName?: string;
  textClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <ProductMark slug={slug} className={markClassName} />
      <span
        className={`font-display font-bold tracking-tight leading-none ${textClassName}`}
      >
        {name}
      </span>
    </span>
  );
}
