import type { Metadata } from "next";
import { PageHero, CtaBanner } from "@/components/sections";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the leadership team of Dataplexor — practitioners leading our data, AI and consulting practices.",
  alternates: { canonical: "/company/leadership" },
};

const LEADERS = [
  {
    name: "Srinivas Rao",
    role: "Founder & Chief Executive Officer",
    bio: "Two decades in enterprise data and analytics. Srinivas founded Dataplexor to close the gap between data strategy and the systems that deliver it.",
    initials: "SR",
  },
  {
    name: "Elena Vasquez",
    role: "Chief Technology Officer",
    bio: "Former principal engineer on planet-scale data infrastructure. Elena leads engineering and the architecture of the Plexus product family.",
    initials: "EV",
  },
  {
    name: "Marcus Chen",
    role: "Chief AI Officer",
    bio: "Applied ML researcher turned builder. Marcus leads our AI and agentic practices, including evaluation methodology and AI safety standards.",
    initials: "MC",
  },
  {
    name: "Priya Sharma",
    role: "Chief Consulting Officer",
    bio: "Priya leads advisory and delivery, bringing fifteen years of transformation experience across financial services and healthcare.",
    initials: "PS",
  },
  {
    name: "David Okafor",
    role: "Chief Operating Officer",
    bio: "David runs global operations and managed services, with a background scaling technology services organizations across four continents.",
    initials: "DO",
  },
  {
    name: "Anna Lindqvist",
    role: "VP, Research & Insights",
    bio: "Anna directs Dataplexor Research — the team behind our published insights, benchmarks and points of view.",
    initials: "AL",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        wave="aurora"
        compact
        eyebrow="Company"
        title="Leadership"
        subtitle="Practitioners first. Everyone who leads at Dataplexor still works the craft they lead."
      />
      <section className="bg-mist">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LEADERS.map((leader) => (
              <div
                key={leader.name}
                className="rounded-2xl bg-white p-8 ring-1 ring-line"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-xl font-bold text-white">
                  {leader.initials}
                </div>
                <h2 className="mt-5 text-xl font-bold tracking-tight text-ink">
                  {leader.name}
                </h2>
                <p className="mt-1 text-sm font-semibold text-brand">
                  {leader.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {leader.bio}
                </p>
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
