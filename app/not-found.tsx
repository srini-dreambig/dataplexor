import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#05050f] px-6 py-24 text-center text-white">
      <LogoMark className="h-16 w-16 text-brand-light" />
      <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-teal">
        404 — Page not found
      </p>
      <h1 className="mt-4 max-w-xl text-3xl font-bold tracking-tight sm:text-5xl">
        This node isn&apos;t in our network
      </h1>
      <p className="mt-5 max-w-md text-white/70">
        The page you&apos;re looking for may have moved or no longer exists.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-teal px-6 py-3 text-sm font-semibold text-ink"
        >
          Back to home
        </Link>
        <Link
          href="/company/contact"
          className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-ink"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
