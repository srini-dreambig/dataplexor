"use client";

export const fieldCls =
  "w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

export function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink">{label}</span>
      {children}
    </label>
  );
}

export function SaveButton({
  busy,
  saved,
  error,
}: {
  busy: boolean;
  saved: boolean;
  error: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <button
        type="submit"
        disabled={busy}
        className="rounded-full bg-brand px-7 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-60"
      >
        {busy ? "Saving…" : "Save changes"}
      </button>
      {saved ? (
        <span className="text-sm font-medium text-green-700">Saved ✓</span>
      ) : null}
      {error ? (
        <span className="text-sm font-medium text-red-600">{error}</span>
      ) : null}
    </div>
  );
}

export function AdminPageTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="mb-8">
      <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
        {title}
      </h1>
      {subtitle ? <p className="mt-2 text-sm text-ink-soft">{subtitle}</p> : null}
    </header>
  );
}
