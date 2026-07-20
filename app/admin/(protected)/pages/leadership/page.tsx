import { getLeadership } from "@/lib/sitecontent";
import { AdminPageTitle } from "@/components/admin/fields";
import { DocumentEditor } from "@/components/admin/CollectionEditor";

export const metadata = { title: "Leadership & team — Admin" };

export default async function AdminLeadershipPage() {
  const leadership = await getLeadership();
  return (
    <>
      <AdminPageTitle
        title="Leadership & team"
        subtitle="Add or remove team members, edit roles and bios, and upload a photo for each person."
      />
      <DocumentEditor doc="leadership" initial={leadership} />
    </>
  );
}
