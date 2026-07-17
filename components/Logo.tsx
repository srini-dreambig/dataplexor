import React from "react";

/**
 * Dataplexor plexus mark — a network of nodes converging on a core,
 * representing connected data turned into intelligence.
 * Draws with currentColor so it works on light and dark surfaces;
 * the accent node uses the teal brand accent unless `mono` is set.
 */
export function LogoMark({
  className = "h-8 w-8",
  mono = false,
}: {
  className?: string;
  mono?: boolean;
}) {
  const accent = mono ? "currentColor" : "#10dfc2";
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.6" opacity="0.55">
        <path d="M24 24 24 6M24 24 39.6 15M24 24 39.6 33M24 24 24 42M24 24 8.4 33M24 24 8.4 15" />
        <path d="M24 6 39.6 15 39.6 33 24 42 8.4 33 8.4 15 24 6" />
      </g>
      <circle cx="24" cy="24" r="5.2" fill="currentColor" />
      <circle cx="24" cy="6" r="2.6" fill="currentColor" />
      <circle cx="39.6" cy="15" r="2.6" fill="currentColor" />
      <circle cx="39.6" cy="33" r="2.6" fill={accent} />
      <circle cx="24" cy="42" r="2.6" fill="currentColor" />
      <circle cx="8.4" cy="33" r="2.6" fill="currentColor" />
      <circle cx="8.4" cy="15" r="2.6" fill="currentColor" />
    </svg>
  );
}

export function Logo({
  className = "",
  markClassName = "h-8 w-8",
  textClassName = "text-xl",
  mono = false,
}: {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  mono?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName} mono={mono} />
      <span
        className={`font-bold tracking-tight leading-none ${textClassName}`}
      >
        dataplexor
      </span>
    </span>
  );
}
