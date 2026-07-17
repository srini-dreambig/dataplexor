import { getHomeContent } from "@/lib/content";
import { HomeForm } from "@/components/admin/HomeForm";
import { AdminPageTitle } from "@/components/admin/fields";

export default function AdminHomePage() {
  return (
    <>
      <AdminPageTitle
        title="Home page"
        subtitle="Edit the hero, stats and advantage section shown on the front page."
      />
      <HomeForm initial={getHomeContent()} />
    </>
  );
}
