import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPosts, getSettings, readingTime } from "@/lib/content";
import { Markdown } from "@/lib/markdown";
import { Container, ArrowIcon } from "@/components/ui";
import { JsonLd, breadcrumbList } from "@/lib/seo";
import { CtaBanner, InsightCard } from "@/components/sections";
import { WaveBackground } from "@/components/WaveBackground";

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
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
  const post = await getPost(slug);
  if (!post) notFound();
  const settings = await getSettings();
  const related = (await getPosts())
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
      <JsonLd
        data={breadcrumbList(settings.siteUrl, [
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: post.title, path: `/insights/${post.slug}` },
        ])}
      />
      <section className="relative isolate text-white">
        {post.cover ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.cover}
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-ink/70" />
          </>
        ) : (
          <WaveBackground variant="calm" idPrefix="insight-hero" />
        )}
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
            {post.author} · {date} · {readingTime(post.body)} min read
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-xl font-medium leading-relaxed text-ink">
              {post.excerpt}
            </p>
            {post.takeaways?.length ? (
              <aside className="mt-10 rounded-2xl border-l-4 border-brand bg-brand-soft p-7 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
                  Key takeaways
                </p>
                <ul className="mt-4 space-y-3">
                  {post.takeaways.map((t) => (
                    <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-ink">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {t}
                    </li>
                  ))}
                </ul>
              </aside>
            ) : null}
            <div className="prose-dpx mt-8">
              <Markdown text={post.body} />
            </div>
            <div className="mt-12 flex items-center gap-4 rounded-2xl bg-mist p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-white">
                {post.author
                  .split(/\s+/)
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((w) => w[0]?.toUpperCase() ?? "")
                  .join("")}
              </span>
              <div>
                <p className="font-bold text-ink">{post.author}</p>
                <p className="mt-0.5 text-sm text-ink-soft">
                  {post.authorRole ||
                    "Research and field perspectives from the practitioners who design, build and run these systems for our clients."}
                </p>
              </div>
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
