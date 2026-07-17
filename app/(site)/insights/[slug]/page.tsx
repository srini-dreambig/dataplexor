import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPosts, getSettings } from "@/lib/content";
import { Markdown } from "@/lib/markdown";
import { Container, ArrowIcon } from "@/components/ui";
import { CtaBanner, InsightCard } from "@/components/sections";
import { PlexusBackground } from "@/components/PlexusBackground";

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const settings = getSettings();
  const related = getPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const date = new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: settings.siteName },
    mainEntityOfPage: `${settings.siteUrl}/insights/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative isolate text-white">
        <PlexusBackground />
        <Container className="relative py-20 sm:py-28">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-white"
          >
            <span className="inline-block rotate-[225deg]">
              <ArrowIcon />
            </span>
            All insights
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            {post.category}
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-sm text-white/70">
            {post.author} · {date}
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-xl font-medium leading-relaxed text-ink">
              {post.excerpt}
            </p>
            <div className="prose-dpx mt-8">
              <Markdown text={post.body} />
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="bg-mist">
          <Container className="py-16 sm:py-20">
            <h2 className="text-2xl font-bold tracking-tight text-brand sm:text-3xl">
              Keep reading
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <InsightCard key={p.slug} post={p} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CtaBanner
        title="Discuss this research with our team"
        body="We're happy to walk through the findings and what they mean for your organization."
      />
    </>
  );
}
