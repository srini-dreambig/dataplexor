import type { Metadata } from "next";
import Link from "next/link";
import { INDUSTRIES } from "@/lib/site";
import { PageHero, CtaBanner } from "@/components/sections";
import { Container, Eyebrow, PillButton, SectionTitle, ArrowIcon } from "@/components/ui";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Dataplexor serves retail, banking, insurance, healthcare, manufacturing and telecom with data & analytics, AI and agentic solutions built for each domain.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Deep in your domain, not just your data"
        subtitle="Technology only compounds when it meets industry context. Our teams pair data and AI engineering with practitioners who have run the workflows they now transform."
        actions={
          <>
            <PillButton href="/company/contact" variant="teal">
              Talk to an industry lead
            </PillButton>
            <PillButton href="/services" variant="outline">
              How we engage
            </PillButton>
          </>
        }
      />
      <section className="bg-mist">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group flex flex-col rounded-2xl bg-white p-8 ring-1 ring-line transition-shadow hover:shadow-xl"
              >
                <Eyebrow>Industry</Eyebrow>
                <h2 className="mt-3 text-xl font-bold tracking-tight text-ink group-hover:text-brand">
                  {industry.name}
                </h2>
                <p className="mt-2 text-sm font-semibold text-brand">
                  {industry.statement}
                </p>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-soft">
                  {industry.intro}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand">
                  Explore {industry.name} <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-20 sm:py-24">
          <SectionTitle>One method, tuned per domain</SectionTitle>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Domain diagnostic",
                body: "We start from the industry P&L — the workflows, regulations and margin structures that decide where data and AI actually pay.",
              },
              {
                step: "02",
                title: "Reference architectures",
                body: "Proven blueprints per sector — from FHIR-based clinical platforms to real-time retail CDPs — so delivery starts from experience, not a blank page.",
              },
              {
                step: "03",
                title: "Regulated-by-design",
                body: "Model risk, privacy and audit requirements are engineered in from the first sprint — the reason our systems reach production in regulated industries.",
              },
            ].map((phase) => (
              <div key={phase.step}>
                <p className="text-sm font-bold text-brand">{phase.step}</p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink">
                  {phase.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{phase.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Don't see your industry?"
        body="These six are where we go deepest — but our platforms and methods travel. Tell us your context and we'll be straight about fit."
      />
    </>
  );
}
