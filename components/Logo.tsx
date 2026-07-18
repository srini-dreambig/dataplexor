import React from "react";

/**
 * Dataplexor brand mark — a capital "D" split into two interlocking
 * pieces by a jogged diagonal channel: two data streams multiplexed
 * through one core. Rendered with currentColor on a transparent
 * background so it adapts to any surface: ink on light, white on dark,
 * brand blue where accented.
 */
export const LOGO_VIEWBOX = "0 0 48 48";

export const LOGO_PATHS = [
  "M8 7 A3 3 0 0 1 11 4 H26 A20 20 0 0 1 38.56 8.44 L23.5 23.5 L26.5 26.5 L9.0 44 H8 Z",
  "M42.0 12.0 L25.9 28.1 L28.9 31.1 L16.0 44 H26 A20 20 0 0 0 42.0 12.0 Z",
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
