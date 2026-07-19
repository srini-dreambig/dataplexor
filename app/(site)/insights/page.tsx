import type { Metadata } from "next";
import { getPosts } from "@/lib/content";
import { PageHero, InsightCard } from "@/components/sections";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Insights & Research",
  description:
    "Research and perspectives from Dataplexor on data & analytics, artificial intelligence, agentic AI and technology consulting.",
  alternates: { canonical: "/insights" },
};

export default async function InsightsPage() {
  const posts = await getPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        wave="calm"
        compact
        eyebrow="Research & Insights"
        title="Stay ahead of changing technology"
        subtitle="Practical research and field perspectives on data, analytics, AI and the agentic enterprise — written by the people who build these systems."
      />
      <section className="bg-mist">
        <Container className="py-16 sm:py-20">
          {posts.length === 0 ? (
            <p className="text-ink-soft">No insights published yet.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2">
              {featured ? <InsightCard post={featured} featured /> : null}
              {rest.map((post) => (
                <InsightCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
