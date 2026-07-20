"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { NAV } from "@/lib/site";
import { Container, ArrowIcon } from "@/components/ui";
import { ProductMark, hasProductMark } from "@/components/ProductLogo";
import { ConceptArt, conceptForHref } from "@/components/ConceptArt";

/** Product slug for a menu href, when it points at a product with a mark. */
function productMarkSlug(href: string): string | null {
  if (!href.startsWith("/products/")) return null;
  const slug = href.split("/")[2];
  return slug && hasProductMark(slug) ? slug : null;
}

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
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  const closeAll = () => {
    setOpenMenu(null);
    setHoveredHref(null);
    setMobileOpen(false);
    setOpenSection(null);
  };

  // close on navigation
  useEffect(() => {
    setOpenMenu(null);
    setHoveredHref(null);
    setMobileOpen(false);
    setOpenSection(null);
  }, [pathname]);

  // close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  setOpenMenu(item.label);
                  setHoveredHref(item.items![0].href);
                }}
                onMouseLeave={() => {
                  setOpenMenu((m) => (m === item.label ? null : m));
                }}
              >
                <button
                  type="button"
                  aria-expanded={openMenu === item.label}
                  onClick={() =>
                    setOpenMenu((m) => (m === item.label ? null : item.label))
                  }
                  className={`flex items-center gap-1.5 rounded-md px-3.5 py-2 text-[15px] font-medium transition-colors ${
                    openMenu === item.label ? "text-brand" : "text-ink hover:text-brand"
                  }`}
                >
                  {item.label}
                  <Chevron open={openMenu === item.label} />
                </button>

                {openMenu === item.label ? (
                  <div className="absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 pt-2">
                    <div className="grid grid-cols-[1fr_250px] gap-2 rounded-2xl border border-line bg-white p-2.5 shadow-xl">
                      {/* links */}
                      <div>
                        {item.items.map((sub) => {
                          const markSlug = productMarkSlug(sub.href);
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={closeAll}
                              onMouseEnter={() => setHoveredHref(sub.href)}
                              onFocus={() => setHoveredHref(sub.href)}
                              className={`flex items-start gap-3 rounded-xl px-4 py-3 transition-colors ${
                                hoveredHref === sub.href ? "bg-brand-soft" : ""
                              }`}
                            >
                              {markSlug ? (
                                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand ring-1 ring-brand/10">
                                  <ProductMark slug={markSlug} className="h-6 w-6" />
                                </span>
                              ) : null}
                              <span className="min-w-0">
                                <span className="block text-[15px] font-semibold text-ink">
                                  {sub.label}
                                </span>
                                {sub.description ? (
                                  <span className="mt-0.5 block text-[13px] text-ink-soft">
                                    {sub.description}
                                  </span>
                                ) : null}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                      {/* artwork preview panel */}
                      {(() => {
                        const active =
                          item.items.find((s) => s.href === hoveredHref) ??
                          item.items[0];
                        return (
                          <Link
                            href={active.href}
                            onClick={closeAll}
                            className="group flex flex-col overflow-hidden rounded-xl bg-mist ring-1 ring-line"
                          >
                            <div className="relative aspect-[16/10] overflow-hidden">
                              <ConceptArt
                                concept={conceptForHref(active.href)}
                                className="absolute inset-0 h-full w-full transition-transform duration-300 group-hover:scale-[1.04]"
                              />
                            </div>
                            <div className="flex flex-1 flex-col p-4">
                              <p className="flex items-center gap-2 text-sm font-bold text-ink group-hover:text-brand">
                                {productMarkSlug(active.href) ? (
                                  <ProductMark
                                    slug={productMarkSlug(active.href)!}
                                    className="h-5 w-5 shrink-0 text-brand"
                                  />
                                ) : null}
                                {active.label}
                              </p>
                              <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-xs font-semibold text-brand">
                                Explore <ArrowIcon className="h-3 w-3" />
                              </span>
                            </div>
                          </Link>
                        );
                      })()}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                onClick={closeAll}
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
                      {item.items.map((sub) => {
                        const markSlug = productMarkSlug(sub.href);
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={closeAll}
                            className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-[15px] text-ink-soft hover:bg-brand-soft hover:text-ink"
                          >
                            {markSlug ? (
                              <ProductMark slug={markSlug} className="h-5 w-5 shrink-0 text-brand" />
                            ) : null}
                            {sub.label}
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  onClick={closeAll}
                  className="block border-b border-line/70 py-3.5 text-[15px] font-semibold text-ink"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/company/contact"
              onClick={closeAll}
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
