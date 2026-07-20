import type { Metadata } from "next";
import { PageHero, CtaBanner } from "@/components/sections";
import { Container, Eyebrow, PillButton, SectionTitle, StatTile } from "@/components/ui";
import { MarkBackdrop } from "@/components/Logo";
import { getAbout } from "@/lib/sitecontent";
import { IllustrationCard } from "@/components/ConceptArt";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Dataplexor is a data & analytics, AI and agentic AI company. Learn about our mission, values and the way we work.",
  alternates: { canonical: "/company/about" },
};

export default async function AboutPage() {
  const about = await getAbout();
  return (
    <>
      <PageHero
        wave="aurora"
        eyebrow="Company"
        title={about.hero.title}
        subtitle={about.hero.subtitle}
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
            {about.mission}
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-20 sm:py-24">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionTitle>Our story</SectionTitle>
              <div className="mt-6 space-y-5 leading-relaxed text-ink-soft">
                {about.story.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="grid content-start gap-5 sm:grid-cols-2">
              {about.stats.map((s) => (
                <StatTile key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ink text-white">
        <Container className="py-20 sm:py-24">
          <Eyebrow dark>{about.timeline.eyebrow}</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {about.timeline.title}
          </h2>
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {about.timeline.milestones.map((m) => (
              <div key={m.year} className="border-t-2 border-teal pt-5">
                <p className="font-display text-2xl font-bold text-teal">
                  {m.year}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {m.event}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-20 sm:py-24">
          <SectionTitle>Where we are</SectionTitle>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {about.locations.map((o) => (
              <div key={o.city} className="rounded-2xl border border-line p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                  {o.role}
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink">
                  {o.city}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {o.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist">
        <Container className="py-20 sm:py-24">
          <SectionTitle>What we believe</SectionTitle>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {about.values.map((value) => (
              <IllustrationCard
                key={value.title}
                title={value.title}
                body={value.body}
                label={value.title}
              />
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-20 sm:py-24">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionTitle>{about.responsibleAi.title}</SectionTitle>
              <p className="mt-5 leading-relaxed text-ink-soft">
                {about.responsibleAi.intro}
              </p>
              <ul className="mt-6 space-y-4">
                {about.responsibleAi.commitments.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-ink-soft">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionTitle>{about.dataHandling.title}</SectionTitle>
              <p className="mt-5 leading-relaxed text-ink-soft">
                {about.dataHandling.intro}
              </p>
              <ul className="mt-6 space-y-4">
                {about.dataHandling.commitments.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-ink-soft">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
