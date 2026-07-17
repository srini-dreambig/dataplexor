import { PostForm } from "@/components/admin/PostForm";
import { AdminPageTitle } from "@/components/admin/fields";

export default function AdminNewPostPage() {
  return (
    <>
      <AdminPageTitle title="New post" subtitle="Publish a new insight article." />
      <PostForm />
    </>
  );
}
