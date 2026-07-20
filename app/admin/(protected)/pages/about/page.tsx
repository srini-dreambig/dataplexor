import { getAbout } from "@/lib/sitecontent";
import { AdminPageTitle } from "@/components/admin/fields";
import { DocumentEditor } from "@/components/admin/CollectionEditor";

export const metadata = { title: "About page — Admin" };

export default async function AdminAboutPage() {
  const about = await getAbout();
  return (
    <>
      <AdminPageTitle
        title="About page"
        subtitle="Mission, story, timeline, offices, values and your responsible-AI and data-handling commitments."
      />
      <DocumentEditor doc="about" initial={about} />
    </>
  );
}
