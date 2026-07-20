import type { Metadata } from "next";
import { PageHero, CtaBanner } from "@/components/sections";
import { Container } from "@/components/ui";
import { getLeadership } from "@/lib/sitecontent";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the leadership team of Dataplexor — practitioners leading our data, AI and consulting practices.",
  alternates: { canonical: "/company/leadership" },
};

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export default async function LeadershipPage() {
  const { hero, leaders } = await getLeadership();
  return (
    <>
      <PageHero
        wave="aurora"
        compact
        eyebrow="Company"
        title={hero.title}
        subtitle={hero.subtitle}
      />
      <section className="bg-mist">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="rounded-2xl bg-white p-8 ring-1 ring-line"
              >
                {leader.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={leader.photo}
                    alt={leader.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-xl font-bold text-white">
                    {initials(leader.name)}
                  </div>
                )}
                <h2 className="mt-5 text-xl font-bold tracking-tight text-ink">
                  {leader.name}
                </h2>
                <p className="mt-1 text-sm font-semibold text-brand">
                  {leader.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {leader.bio}
                </p>
                {leader.linkedin ? (
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
                  >
                    LinkedIn
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner
        title="Want to talk to the team?"
        body="Our leadership stays close to delivery. Start a conversation and the right people will be in the room."
      />
    </>
  );
}
