import type { Metadata } from "next";
import { PageHero, CtaBanner } from "@/components/sections";
import { Container, Eyebrow, PillButton, SectionTitle, StatTile } from "@/components/ui";
import { MarkBackdrop } from "@/components/Logo";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Dataplexor is a data & analytics, AI and agentic AI company. Learn about our mission, values and the way we work.",
  alternates: { canonical: "/company/about" },
};

const VALUES = [
  {
    title: "Evidence over opinion",
    body: "Every recommendation is benchmarked against real data. If we can't measure it, we won't claim it.",
  },
  {
    title: "Build what we advise",
    body: "Strategy and engineering are one practice. Advice that cannot survive contact with production is not advice we give.",
  },
  {
    title: "Skills transfer by default",
    body: "Success means your teams are more capable when we leave than when we arrived.",
  },
  {
    title: "Trust is the product",
    body: "Governed data, evaluated models, guardrailed agents — everything we ship is built to be trusted, audited and explained.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        wave="aurora"
        eyebrow="Company"
        title="We defy the disciplines to mobilize your data"
        subtitle="Dataplexor works at the crossroads of data engineering, applied AI and business strategy to understand, structure and solve the problems that matter most."
        actions={
          <>
            <PillButton href="/company/careers" variant="teal">
              Join our team
            </PillButton>
            <PillButton href="/company/leadership" variant="outline">
              Meet our leadership
            </PillButton>
          </>
        }
      />

      <section className="relative overflow-hidden bg-brand text-white">
        <MarkBackdrop
          className="right-[-5%] top-1/2 h-[220%] -translate-y-1/2"
          opacity={0.08}
        />
        <Container className="relative py-20 sm:py-24">
          <Eyebrow dark>Our mission</Eyebrow>
          <p className="mt-6 max-w-4xl text-3xl font-semibold leading-snug tracking-tight sm:text-4xl">
            We unlock the value of data to build products and intelligence that
            move enterprises — from insight to decision to autonomous action.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-20 sm:py-24">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionTitle>Our story</SectionTitle>
              <div className="mt-6 space-y-5 leading-relaxed text-ink-soft">
                <p>
                  Dataplexor was founded on a simple observation: every real
                  business problem leads across disciplinary boundaries. Data
                  engineering without strategy builds platforms nobody uses.
                  Strategy without engineering produces decks nobody can ship.
                  AI without governance creates risk nobody can carry.
                </p>
                <p>
                  So we built a company where those disciplines work as one
                  practice. Our consultants write code. Our engineers sit in
                  steering committees. Our researchers test their ideas in
                  production, on real client systems, under real constraints.
                </p>
                <p>
                  Today we serve enterprises across finance, healthcare, retail,
                  manufacturing and the public sector — designing data
                  platforms, shipping AI systems and deploying governed
                  autonomous agents that our clients run their businesses on.
                </p>
              </div>
            </div>
            <div className="grid content-start gap-5 sm:grid-cols-2">
              <StatTile value="2016" label="Founded in San Francisco" />
              <StatTile value="150+" label="Specialists across four continents" />
              <StatTile value="18" label="Industries served worldwide" />
              <StatTile value="3" label="Products born from client delivery" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-mist">
        <Container className="py-20 sm:py-24">
          <SectionTitle>What we believe</SectionTitle>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {VALUES.map((value) => (
              <div key={value.title} className="rounded-2xl bg-white p-8 ring-1 ring-line">
                <h3 className="text-xl font-bold tracking-tight text-ink">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{value.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Work with us — or come work here"
        body="Whether you have a problem to solve or a career to build, we'd like to hear from you."
      />
    </>
  );
}
