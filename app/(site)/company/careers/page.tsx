import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CtaBanner } from "@/components/sections";
import { Container, SectionTitle, ArrowIcon } from "@/components/ui";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Careers at Dataplexor — join a team building data platforms, production AI and agentic systems for the world's most demanding enterprises.",
  alternates: { canonical: "/company/careers" },
};

const OPENINGS = [
  { title: "Senior Data Engineer", team: "Platform Engineering", location: "San Francisco / Remote", type: "Full-time" },
  { title: "Machine Learning Engineer", team: "AI Practice", location: "Remote (US/EU)", type: "Full-time" },
  { title: "Agentic Systems Engineer", team: "AgentMesh Product", location: "San Francisco", type: "Full-time" },
  { title: "Principal Consultant, Data Strategy", team: "Consulting & Advisory", location: "New York / Remote", type: "Full-time" },
  { title: "Analytics Engineer", team: "PlexusIQ Product", location: "Remote (US)", type: "Full-time" },
  { title: "Engagement Manager", team: "Consulting & Advisory", location: "London", type: "Full-time" },
];

const BENEFITS = [
  { title: "Work on the frontier", body: "Ship production AI and agentic systems most engineers only read about — with the guardrails to do it responsibly." },
  { title: "Practitioners lead", body: "Your managers still write code, run models and sit with clients. Career paths reward craft, not just headcount." },
  { title: "Flexible by design", body: "Remote-first with hubs in San Francisco, New York and London. Async-friendly, meeting-light." },
  { title: "Invest in you", body: "Annual learning budget, conference time, and 10% time for research and open source." },
  { title: "Own the upside", body: "Founding-stage equity for every early hire — join now and own a real piece of what we build." },
  { title: "Health, fully covered", body: "Comprehensive medical, dental and vision for you and your dependents, plus generous parental leave." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        wave="aurora"
        eyebrow="Careers"
        title="Do the best work of your career on problems that matter"
        subtitle="We are a founding team hiring our first colleagues. Join people with decades in the field, at the moment everything is still being shaped — and shape it with us."
      />

      <section>
        <Container className="py-20 sm:py-24">
          <SectionTitle>Why Dataplexor</SectionTitle>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => (
              <div key={b.title} className="rounded-2xl border border-line p-7">
                <h3 className="text-lg font-bold tracking-tight text-ink">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist" id="openings">
        <Container className="py-20 sm:py-24">
          <SectionTitle>Open positions</SectionTitle>
          <div className="mt-10 divide-y divide-line overflow-hidden rounded-2xl bg-white ring-1 ring-line">
            {OPENINGS.map((job) => (
              <Link
                key={job.title}
                href="/company/contact"
                className="group flex flex-col gap-2 p-6 transition-colors hover:bg-brand-soft sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-bold text-ink group-hover:text-brand">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">
                    {job.team} · {job.location} · {job.type}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Apply <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-soft">
            Don&apos;t see your role? We always want to hear from exceptional
            people —{" "}
            <Link href="/company/contact" className="font-semibold text-brand underline underline-offset-4">
              send us a note
            </Link>
            .
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-20 sm:py-24">
          <SectionTitle>How we hire</SectionTitle>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Four steps, two to three weeks end to end, and feedback at every
            stage — because how a company hires is how it works.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-4">
            {[
              { step: "01", title: "Intro conversation", body: "Thirty minutes with the hiring lead about your work, your goals and whether the role fits. No trick questions." },
              { step: "02", title: "Craft session", body: "A working session in your discipline — real problems from our practice, done together, not on a whiteboard from memory." },
              { step: "03", title: "Team round", body: "Meet the people you would work with, including someone outside your discipline. You interview us as much as we interview you." },
              { step: "04", title: "Offer & onboarding", body: "A clear offer with compensation transparency, and a first-quarter plan that puts you on real client work with a dedicated buddy." },
            ].map((s) => (
              <div key={s.step}>
                <p className="text-sm font-bold text-brand">{s.step}</p>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Ready to apply?"
        body="Tell us about yourself and the work you're proudest of. A human reads every application."
        ctaLabel="Get in touch"
      />
    </>
  );
}
