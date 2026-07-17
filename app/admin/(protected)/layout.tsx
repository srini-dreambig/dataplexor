import Link from "next/link";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { Logo } from "@/components/Logo";
import { LogoutButton } from "@/components/admin/LogoutButton";

const ADMIN_NAV = [
  { label: "Dashboard", href: "/admin" },
  { label: "Site settings", href: "/admin/settings" },
  { label: "Home page", href: "/admin/home" },
  { label: "Insights", href: "/admin/insights" },
  { label: "Messages", href: "/admin/messages" },
];

export default async function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }

  return (
    <div className="flex min-h-screen bg-mist">
      <aside className="hidden w-64 shrink-0 flex-col bg-ink text-white md:flex">
        <div className="border-b border-white/10 p-6">
          <Link href="/admin" className="text-white">
            <Logo textClassName="text-lg" markClassName="h-7 w-7" />
          </Link>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">
            Content admin
          </p>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          {ADMIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-4 py-2.5 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="space-y-2 border-t border-white/10 p-4">
          <Link
            href="/"
            className="block rounded-lg px-4 py-2 text-sm text-white/70 hover:text-white"
          >
            ← View website
          </Link>
          <LogoutButton />
        </div>
      </aside>

      <div className="flex-1">
        {/* mobile bar */}
        <div className="flex items-center justify-between bg-ink p-4 text-white md:hidden">
          <Link href="/admin">
            <Logo textClassName="text-base" markClassName="h-6 w-6" />
          </Link>
          <div className="flex items-center gap-3 text-sm">
            {ADMIN_NAV.slice(1).map((i) => (
              <Link key={i.href} href={i.href} className="text-white/80">
                {i.label.split(" ")[0]}
              </Link>
            ))}
          </div>
        </div>
        <div className="p-6 sm:p-10">{children}</div>
      </div>
    </div>
  );
}
