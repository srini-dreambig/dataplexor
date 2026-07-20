import { getIndustries } from "@/lib/sitecontent";
import { AdminPageTitle } from "@/components/admin/fields";
import { CollectionEditor } from "@/components/admin/CollectionEditor";

export const metadata = { title: "Industries — Admin" };

export default async function AdminIndustriesPage() {
  const industries = await getIndustries();
  return (
    <>
      <AdminPageTitle
        title="Industries"
        subtitle="Every industry page — hero copy, challenges, burning use cases, outcomes and FAQs. Changes go live on save."
      />
      <CollectionEditor doc="industries" itemNoun="industry" initial={industries} />
    </>
  );
}
