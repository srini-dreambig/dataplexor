import React from "react";

/**
 * Dataplexor brand mark — two interlocking flow shapes (client-supplied).
 * Rendered with currentColor on a transparent background so it adapts to
 * any surface: ink on light, white on dark, brand blue where accented.
 */
export const LOGO_VIEWBOX = "0 0 46 51";

export const LOGO_PATHS = [
  "M35.4 30.5L42.4 23.5C42.4 18.7 41.2 14.1 39 10.1L22.7 25.2V50.3H25.8C36.7 50.3 45.6 41.5 45.6 30.5H35.4Z",
  "M10.2 19.8L3.2 26.8C3.2 31.6 4.4 36.2 6.6 40.2L22.9 25.1V0H19.8C8.9 0 0 8.8 0 19.8H10.2Z",
];

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox={LOGO_VIEWBOX}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {LOGO_PATHS.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

export function Logo({
  className = "",
  markClassName = "h-8 w-8",
  textClassName = "text-xl",
}: {
  className?: string;
  markClassName?: string;
  textClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName} />
      <span
        className={`font-display font-bold tracking-tight leading-none ${textClassName}`}
      >
        dataplexor
      </span>
    </span>
  );
}

/**
 * Decorative section backdrop built from the logo shapes.
 * Absolutely positioned inside a `relative overflow-hidden` section;
 * inherits currentColor so it works on any surface.
 */
export function MarkBackdrop({
  className = "right-[-6%] top-1/2 h-[160%] -translate-y-1/2",
  opacity = 0.05,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      style={{ opacity }}
    >
      <svg viewBox={LOGO_VIEWBOX} fill="currentColor" className="h-full w-auto">
        {LOGO_PATHS.map((d) => (
          <path key={d} d={d} />
        ))}
      </svg>
    </div>
  );
}
