import Link from "next/link";
import React from "react";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

type PillProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "teal" | "outline" | "outline-dark" | "white";
  className?: string;
};

export function PillButton({
  href,
  children,
  variant = "primary",
  className = "",
}: PillProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-150";
  const styles: Record<string, string> = {
    primary: "bg-brand text-white hover:bg-brand-dark",
    teal: "bg-teal text-ink hover:bg-[#0cc9af]",
    outline:
      "border border-white/60 text-white hover:bg-white hover:text-ink",
    "outline-dark":
      "border border-ink/30 text-ink hover:border-brand hover:text-brand",
    white: "bg-white text-ink hover:bg-brand-soft",
  };
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.18em] ${
        dark ? "text-teal" : "text-brand"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-3xl font-bold tracking-tight text-brand sm:text-4xl ${className}`}
    >
      {children}
    </h2>
  );
}

export function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl bg-mist p-6 sm:p-8">
      <p className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        {value}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{label}</p>
    </div>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="M3 13 13 3M6 3h7v7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
