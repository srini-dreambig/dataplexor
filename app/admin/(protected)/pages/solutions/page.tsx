import { getSolutions } from "@/lib/sitecontent";
import { AdminPageTitle } from "@/components/admin/fields";
import { CollectionEditor } from "@/components/admin/CollectionEditor";

export const metadata = { title: "Solutions — Admin" };

export default async function AdminSolutionsPage() {
  const solutions = await getSolutions();
  return (
    <>
      <AdminPageTitle
        title="Solutions"
        subtitle="Every solution page — hero copy, pillars, capabilities, stats, case study, technologies and FAQs. Changes go live on save."
      />
      <CollectionEditor doc="solutions" itemNoun="solution" initial={solutions} />
    </>
  );
}
