import Link from "next/link";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { Logo } from "@/components/Logo";
import { LogoutButton } from "@/components/admin/LogoutButton";
import { AdminNav, AdminMobileNav } from "@/components/admin/AdminNav";

export default async function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-mist md:flex">
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col bg-ink text-white md:flex">
        <div className="border-b border-white/10 p-6">
          <Link href="/admin" className="text-white">
            <Logo textClassName="text-lg" markClassName="h-7 w-7" />
          </Link>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">
            Content admin
          </p>
        </div>
        <AdminNav />
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

      <div className="min-w-0 flex-1">
        {/* mobile bar */}
        <div className="sticky top-0 z-20 bg-ink p-4 text-white md:hidden">
          <div className="flex items-center justify-between">
            <Link href="/admin">
              <Logo textClassName="text-base" markClassName="h-6 w-6" />
            </Link>
            <div className="w-24 shrink-0">
              <LogoutButton />
            </div>
          </div>
          <AdminMobileNav />
        </div>
        <div className="p-4 sm:p-6">
          <div className="mx-auto w-full max-w-4xl">{children}</div>
        </div>
      </div>
    </div>
  );
}
