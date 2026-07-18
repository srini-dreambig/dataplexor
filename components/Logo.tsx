import React from "react";

/**
 * Dataplexor brand mark — the "dp infinity" monogram: the bowls of a
 * lowercase d (lower left) and p (upper right) interlock into a tilted
 * infinity loop, threaded on a shared stem (d's ascender / p's
 * descender). 180° rotationally symmetric; endless data, in and out.
 *
 * Rendered with currentColor on a transparent background so it adapts
 * to any surface. The weave effect uses SVG masks; instances may share
 * identical def ids safely since the definitions are identical.
 */
export const LOGO_VIEWBOX = "0 0 48 48";

export function logoGlyphMarkup(p: string): string {
  return (
    `<defs>` +
    `<clipPath id="${p}hA"><path d="M-54.1 86.5 L102.1 -38.5 L164.6 39.6 L8.4 164.6 Z"/></clipPath>` +
    `<clipPath id="${p}hB"><path d="M-54.1 86.5 L102.1 -38.5 L39.6 -116.6 L-116.6 8.4 Z"/></clipPath>` +
    `<clipPath id="${p}lo"><rect x="-60" y="30" width="170" height="170"/></clipPath>` +
    `<clipPath id="${p}up"><rect x="-60" y="-60" width="170" height="78"/></clipPath>` +
    `<mask id="${p}r1"><rect x="-60" y="-60" width="170" height="170" fill="#fff"/>` +
    `<path fill-rule="evenodd" d="M19.9 18 a11.6 11.6 0 1 0 23.2 0 a11.6 11.6 0 1 0 -23.2 0 Z M28 18 a3.5 3.5 0 1 0 7 0 a3.5 3.5 0 1 0 -7 0 Z" fill="#000" clip-path="url(#${p}hA)"/></mask>` +
    `<mask id="${p}r2"><rect x="-60" y="-60" width="170" height="170" fill="#fff"/>` +
    `<path fill-rule="evenodd" d="M4.9 30 a11.6 11.6 0 1 0 23.2 0 a11.6 11.6 0 1 0 -23.2 0 Z M13 30 a3.5 3.5 0 1 0 7 0 a3.5 3.5 0 1 0 -7 0 Z" fill="#000" clip-path="url(#${p}hB)"/></mask>` +
    `<mask id="${p}sp"><rect x="-60" y="-60" width="170" height="170" fill="#fff"/>` +
    `<path fill-rule="evenodd" d="M4.9 30 a11.6 11.6 0 1 0 23.2 0 a11.6 11.6 0 1 0 -23.2 0 Z M13 30 a3.5 3.5 0 1 0 7 0 a3.5 3.5 0 1 0 -7 0 Z" fill="#000" clip-path="url(#${p}lo)"/>` +
    `<path fill-rule="evenodd" d="M19.9 18 a11.6 11.6 0 1 0 23.2 0 a11.6 11.6 0 1 0 -23.2 0 Z M28 18 a3.5 3.5 0 1 0 7 0 a3.5 3.5 0 1 0 -7 0 Z" fill="#000" clip-path="url(#${p}up)"/></mask>` +
    `</defs>` +
    `<path d="M21.8 6.4 a2.4 2.4 0 0 1 2.4 -2.4 a2.4 2.4 0 0 1 2.4 2.4 v35.2 a2.4 2.4 0 0 1 -2.4 2.4 a2.4 2.4 0 0 1 -2.4 -2.4 Z" mask="url(#${p}sp)"/>` +
    `<path fill-rule="evenodd" d="M6.5 30 a10 10 0 1 0 20 0 a10 10 0 1 0 -20 0 Z M11.4 30 a5.1 5.1 0 1 0 10.2 0 a5.1 5.1 0 1 0 -10.2 0 Z" mask="url(#${p}r1)"/>` +
    `<path fill-rule="evenodd" d="M21.5 18 a10 10 0 1 0 20 0 a10 10 0 1 0 -20 0 Z M26.4 18 a5.1 5.1 0 1 0 10.2 0 a5.1 5.1 0 1 0 -10.2 0 Z" mask="url(#${p}r2)"/>`
  );
}

export function LogoMark({
  className = "h-8 w-8",
  idPrefix = "lm",
}: {
  className?: string;
  idPrefix?: string;
}) {
  return (
    <svg
      viewBox={LOGO_VIEWBOX}
      fill="currentColor"
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: logoGlyphMarkup(idPrefix) }}
    />
  );
}

export function Logo({
  className = "",
  markClassName = "h-8 w-8",
  textClassName = "text-xl",
  idPrefix = "lg",
}: {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  idPrefix?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName} idPrefix={idPrefix} />
      <span
        className={`font-display font-bold tracking-tight leading-none ${textClassName}`}
      >
        dataplexor
      </span>
    </span>
  );
}

/**
 * Decorative section backdrop built from the logo glyph.
 * Absolutely positioned inside a `relative overflow-hidden` section;
 * inherits currentColor so it works on any surface.
 */
export function MarkBackdrop({
  className = "right-[-6%] top-1/2 h-[160%] -translate-y-1/2",
  opacity = 0.05,
  idPrefix = "mb",
}: {
  className?: string;
  opacity?: number;
  idPrefix?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      style={{ opacity }}
    >
      <svg
        viewBox={LOGO_VIEWBOX}
        fill="currentColor"
        className="h-full w-auto"
        dangerouslySetInnerHTML={{ __html: logoGlyphMarkup(idPrefix) }}
      />
    </div>
  );
}
