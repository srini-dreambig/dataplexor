"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavLink = { label: string; href: string };
export type NavGroup = { heading: string; links: NavLink[] };

export const ADMIN_NAV: NavGroup[] = [
  {
    heading: "Overview",
    links: [{ label: "Dashboard", href: "/admin" }],
  },
  {
    heading: "Site",
    links: [
      { label: "Site settings", href: "/admin/settings" },
      { label: "Home page", href: "/admin/home" },
    ],
  },
  {
    heading: "Pages",
    links: [
      { label: "Solutions", href: "/admin/pages/solutions" },
      { label: "Industries", href: "/admin/pages/industries" },
      { label: "Products", href: "/admin/pages/products" },
      { label: "Shared sections", href: "/admin/pages/sections" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/admin/pages/about" },
      { label: "Leadership & team", href: "/admin/pages/leadership" },
      { label: "Careers & jobs", href: "/admin/pages/careers" },
    ],
  },
  {
    heading: "Publishing",
    links: [
      { label: "Insights", href: "/admin/insights" },
      { label: "Messages", href: "/admin/messages" },
    ],
  },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/admin") return pathname === "/admin";
  return pathname === href || pathname.startsWith(href + "/");
}

export function AdminNav() {
  const pathname = usePathname();
  return (
    <nav className="flex-1 space-y-5 overflow-y-auto p-4">
      {ADMIN_NAV.map((group) => (
        <div key={group.heading}>
          <p className="px-4 pb-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35">
            {group.heading}
          </p>
          <div className="space-y-0.5">
            {group.links.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-brand text-white"
                      : "text-white/75 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}

export function AdminMobileNav() {
  const pathname = usePathname();
  const links = ADMIN_NAV.flatMap((g) => g.links);
  return (
    <div className="mt-3 flex items-center gap-1 overflow-x-auto whitespace-nowrap text-sm">
      {links.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`shrink-0 rounded-full px-3 py-1.5 font-medium ${
              active ? "bg-brand text-white" : "text-white/75"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
