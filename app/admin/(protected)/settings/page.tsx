import { getSettings } from "@/lib/content";
import { SettingsForm } from "@/components/admin/SettingsForm";
import { AdminPageTitle } from "@/components/admin/fields";

export default async function AdminSettingsPage() {
  return (
    <>
      <AdminPageTitle
        title="Site settings"
        subtitle="Global settings used across the website: identity, SEO, contact details and social links."
      />
      <SettingsForm initial={await getSettings()} />
    </>
  );
}
