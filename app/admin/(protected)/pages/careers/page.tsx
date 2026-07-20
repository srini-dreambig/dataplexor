import { getCareers } from "@/lib/sitecontent";
import { AdminPageTitle } from "@/components/admin/fields";
import { DocumentEditor } from "@/components/admin/CollectionEditor";

export const metadata = { title: "Careers & jobs — Admin" };

export default async function AdminCareersPage() {
  const careers = await getCareers();
  return (
    <>
      <AdminPageTitle
        title="Careers & job postings"
        subtitle="Edit the careers hero and benefits, and manage open positions — add a role, set its team, location and application link."
      />
      <DocumentEditor doc="careers" initial={careers} />
    </>
  );
}
