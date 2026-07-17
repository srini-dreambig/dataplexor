import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui";
import { FOOTER_LINKS } from "@/lib/site";
import type { Settings } from "@/lib/content";

function SocialIcon({ name }: { name: "linkedin" | "x" | "github" | "youtube" }) {
  const paths: Record<string, string> = {
    linkedin:
      "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-8.5c0-2.03-.04-4.64-2.83-4.64-2.83 0-3.27 2.2-3.27 4.5V24H8V8z",
    x: "M18.9 1.15h3.68l-8.04 9.2L24 22.85h-7.4l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93zm-1.3 19.5h2.04L6.5 3.24H4.3l13.3 17.4z",
    github:
      "M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.26.8-.58v-2.04c-3.34.72-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.5 1 .1-.78.4-1.3.74-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.3.47-2.38 1.24-3.22-.13-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.9 1.23 3.22 0 4.6-2.8 5.63-5.48 5.92.42.36.8 1.1.8 2.2v3.26c0 .32.2.7.82.58A12 12 0 0 0 12 .3z",
    youtube:
      "M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.87.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z",
  };
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d={paths[name]} />
    </svg>
  );
}

export function Footer({ settings }: { settings: Settings }) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link href="/" aria-label="Dataplexor home" className="text-white">
              <Logo textClassName="text-2xl" markClassName="h-9 w-9" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {settings.tagline}
            </p>
            <div className="mt-6 space-y-1.5 text-sm text-white/70">
              <p>{settings.contact.address}</p>
              <p>
                <a
                  href={`mailto:${settings.contact.email}`}
                  className="hover:text-white"
                >
                  {settings.contact.email}
                </a>
              </p>
              <p>{settings.contact.phone}</p>
            </div>
            <div className="mt-6 flex gap-4">
              {(
                [
                  ["linkedin", settings.social.linkedin, "LinkedIn"],
                  ["x", settings.social.x, "X (Twitter)"],
                  ["github", settings.social.github, "GitHub"],
                  ["youtube", settings.social.youtube, "YouTube"],
                ] as const
              )
                .filter(([, href]) => href)
                .map(([name, href, label]) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-white/60 transition-colors hover:text-white"
                  >
                    <SocialIcon name={name} />
                  </a>
                ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {FOOTER_LINKS.map((group) => (
              <div key={group.heading}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                  {group.heading}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/80 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {settings.siteName}, Inc. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Legal">
            <Link href="/legal/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/legal/cookies" className="hover:text-white">
              Cookie Policy
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white">
              Sitemap
            </Link>
          </nav>
        </Container>
      </div>
    </footer>
  );
}
