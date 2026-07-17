"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { NAV } from "@/lib/site";
import { Container } from "@/components/ui";

function Chevron({ open = false }: { open?: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      aria-hidden
    >
      <path
        d="M2 4.5 6 8l4-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header({ announcement, announcementHref }: {
  announcement?: string;
  announcementHref?: string;
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenSection(null);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur">
      {/* top bar */}
      <div className="bg-ink text-white">
        <Container className="flex h-9 items-center justify-between text-xs">
          <p className="hidden truncate pr-6 text-white/80 sm:block">
            {announcement ? (
              <Link
                href={announcementHref || "/insights"}
                className="hover:text-white"
              >
                {announcement}
              </Link>
            ) : null}
          </p>
          <nav className="flex items-center gap-4 whitespace-nowrap text-white/90">
            <Link href="/company/contact" className="hover:text-white">
              Support
            </Link>
            <span className="text-white/30">|</span>
            <Link href="/company/contact" className="hover:text-white">
              Client Log In
            </Link>
            <span className="text-white/30">|</span>
            <Link href="/admin" className="hover:text-white">
              Admin
            </Link>
          </nav>
        </Container>
      </div>

      {/* main nav */}
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="text-ink" aria-label="Dataplexor home">
          <Logo textClassName="text-[22px]" markClassName="h-9 w-9 text-brand" />
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((item) =>
            item.items ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-1.5 rounded-md px-3.5 py-2 text-[15px] font-medium text-ink hover:text-brand"
                >
                  {item.label}
                  <Chevron />
                </button>
                <div className="invisible absolute left-0 top-full z-50 w-80 translate-y-1 rounded-xl border border-line bg-white p-2 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.items.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block rounded-lg px-4 py-3 hover:bg-brand-soft"
                    >
                      <span className="block text-[15px] font-semibold text-ink">
                        {sub.label}
                      </span>
                      {sub.description ? (
                        <span className="mt-0.5 block text-[13px] text-ink-soft">
                          {sub.description}
                        </span>
                      ) : null}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className="rounded-md px-3.5 py-2 text-[15px] font-medium text-ink hover:text-brand"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/company/contact"
            className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark sm:inline-flex"
          >
            Get in touch
          </Link>
          {/* mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
              {mobileOpen ? (
                <path
                  d="M6 6l12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* mobile nav */}
      {mobileOpen ? (
        <div className="border-t border-line bg-white lg:hidden">
          <Container className="max-h-[70vh] overflow-y-auto py-3">
            {NAV.map((item) =>
              item.items ? (
                <div key={item.label} className="border-b border-line/70">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenSection((s) => (s === item.label ? null : item.label))
                    }
                    className="flex w-full items-center justify-between py-3.5 text-left text-[15px] font-semibold text-ink"
                    aria-expanded={openSection === item.label}
                  >
                    {item.label}
                    <Chevron open={openSection === item.label} />
                  </button>
                  {openSection === item.label ? (
                    <div className="pb-3">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block rounded-md px-3 py-2.5 text-[15px] text-ink-soft hover:bg-brand-soft hover:text-ink"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="block border-b border-line/70 py-3.5 text-[15px] font-semibold text-ink"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/company/contact"
              className="mt-4 mb-2 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white"
            >
              Get in touch
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
