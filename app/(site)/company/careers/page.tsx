import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CtaBanner } from "@/components/sections";
import { Container, SectionTitle, ArrowIcon } from "@/components/ui";
import { getCareers } from "@/lib/sitecontent";
import { IllustrationCard } from "@/components/ConceptArt";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Careers at Dataplexor — join a team building data platforms, production AI and agentic systems for the world's most demanding enterprises.",
  alternates: { canonical: "/company/careers" },
};

export default async function CareersPage() {
  const { hero, benefits, openings, hiringProcess } = await getCareers();
  return (
    <>
      <PageHero
        wave="aurora"
        eyebrow="Careers"
        title={hero.title}
        subtitle={hero.subtitle}
      />

      <section>
        <Container className="py-20 sm:py-24">
          <SectionTitle>Why Dataplexor</SectionTitle>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <IllustrationCard key={b.title} title={b.title} body={b.body} label={b.title} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist" id="openings">
        <Container className="py-20 sm:py-24">
          <SectionTitle>Open positions</SectionTitle>
          {openings.length > 0 ? (
            <div className="mt-10 divide-y divide-line overflow-hidden rounded-2xl bg-white ring-1 ring-line">
              {openings.map((job) => (
                <Link
                  key={job.title}
                  href={job.applyHref || "/company/contact"}
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
          ) : (
            <p className="mt-8 text-lg text-ink-soft">
              We don&apos;t have open roles posted right now — but we always want
              to hear from exceptional people.
            </p>
          )}
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
            {hiringProcess.map((s) => (
              <IllustrationCard
                key={s.step}
                eyebrow={`Step ${s.step}`}
                title={s.title}
                body={s.body}
                label={s.title}
                aspect="aspect-[16/9]"
              />
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
