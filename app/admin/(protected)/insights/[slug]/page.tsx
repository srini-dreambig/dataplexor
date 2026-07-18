import { notFound } from "next/navigation";
import { getPost } from "@/lib/content";
import { PostForm } from "@/components/admin/PostForm";
import { DeletePostButton } from "@/components/admin/DeletePostButton";
import { AdminPageTitle } from "@/components/admin/fields";

export default async function AdminEditPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <AdminPageTitle title="Edit post" subtitle={post.title} />
        <DeletePostButton slug={post.slug} />
      </div>
      <PostForm initial={post} />
    </>
  );
}
