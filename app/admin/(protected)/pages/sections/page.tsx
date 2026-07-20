import { getSections } from "@/lib/sitecontent";
import { AdminPageTitle } from "@/components/admin/fields";
import { DocumentEditor } from "@/components/admin/CollectionEditor";

export const metadata = { title: "Shared sections — Admin" };

export default async function AdminSectionsPage() {
  const sections = await getSections();
  return (
    <>
      <AdminPageTitle
        title="Shared sections"
        subtitle="Testimonials, entry offers and the delivery timeline — reused across the home, services and solution pages."
      />
      <DocumentEditor doc="sections" initial={sections} />
    </>
  );
}
