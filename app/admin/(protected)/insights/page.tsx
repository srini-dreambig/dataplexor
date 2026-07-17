import Link from "next/link";
import { getPosts } from "@/lib/content";
import { AdminPageTitle } from "@/components/admin/fields";

export default function AdminInsightsPage() {
  const posts = getPosts();
  return (
    <>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <AdminPageTitle
          title="Insights"
          subtitle={`${posts.length} published article${posts.length === 1 ? "" : "s"}.`}
        />
        <Link
          href="/admin/insights/new"
          className="rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          + New post
        </Link>
      </div>
      <div className="max-w-4xl divide-y divide-line overflow-hidden rounded-2xl bg-white ring-1 ring-line">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="min-w-0">
              <p className="truncate font-semibold text-ink">{post.title}</p>
              <p className="mt-0.5 text-xs text-ink-soft">
                {post.category} · {post.date} · /insights/{post.slug}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <Link
                href={`/insights/${post.slug}`}
                className="text-sm font-semibold text-ink-soft hover:text-ink"
              >
                View
              </Link>
              <Link
                href={`/admin/insights/${post.slug}`}
                className="rounded-full bg-brand-soft px-4 py-1.5 text-sm font-semibold text-brand hover:bg-brand hover:text-white"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
        {posts.length === 0 ? (
          <p className="p-6 text-sm text-ink-soft">No posts yet.</p>
        ) : null}
      </div>
    </>
  );
}
