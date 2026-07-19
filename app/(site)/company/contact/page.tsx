import type { Metadata } from "next";
import { getSettings } from "@/lib/content";
import { PageHero } from "@/components/sections";
import { Container } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Dataplexor — talk to our team about data & analytics, AI, agentic AI, products, services and consulting.",
  alternates: { canonical: "/company/contact" },
};

export default async function ContactPage() {
  const settings = await getSettings();
  return (
    <>
      <PageHero
        wave="aurora"
        compact
        eyebrow="Contact"
        title="Get in touch"
        subtitle="Tell us what you're trying to build. We respond within one business day — with the right people in the room."
      />
      <section className="bg-mist">
        <Container className="py-16 sm:py-20">
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "We reply within one business day",
                body: "A practitioner reads your message — not a sales queue — and comes back with real questions.",
              },
              {
                step: "02",
                title: "A 30-minute discovery call",
                body: "You talk to the people who would do the work. We listen first; no slideware, no pressure.",
              },
              {
                step: "03",
                title: "A written point of view",
                body: "Within a week: our honest read on your situation and a proposed first step with scope and price.",
              },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl bg-white p-7 ring-1 ring-line">
                <p className="font-display text-sm font-bold text-brand">{s.step}</p>
                <h2 className="mt-2 text-lg font-bold tracking-tight text-ink">
                  {s.title}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
            <div className="rounded-2xl bg-white p-8 ring-1 ring-line sm:p-10">
              <ContactForm />
            </div>
            <aside className="space-y-8">
              <div className="rounded-2xl bg-ink p-8 text-white">
                <h2 className="text-lg font-bold">Headquarters</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {settings.contact.address}
                </p>
                <h2 className="mt-7 text-lg font-bold">Email</h2>
                <a
                  href={`mailto:${settings.contact.email}`}
                  className="mt-2 block text-sm text-teal hover:underline"
                >
                  {settings.contact.email}
                </a>
                <h2 className="mt-7 text-lg font-bold">Phone</h2>
                <p className="mt-2 text-sm text-white/75">
                  {settings.contact.phone}
                </p>
              </div>
              <div className="rounded-2xl bg-white p-8 ring-1 ring-line">
                <h2 className="text-lg font-bold text-ink">Global offices</h2>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
                  <li>
                    <span className="font-semibold text-ink">San Francisco</span>{" "}
                    — headquarters
                  </li>
                  <li>
                    <span className="font-semibold text-ink">New York</span> —
                    Americas consulting hub
                  </li>
                  <li>
                    <span className="font-semibold text-ink">London</span> —
                    EMEA delivery hub
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl bg-brand p-8 text-white">
                <h2 className="text-lg font-bold">Looking for a career?</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  Browse open positions and learn what it&apos;s like to work at
                  Dataplexor.
                </p>
                <a
                  href="/company/careers"
                  className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand"
                >
                  View careers
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
