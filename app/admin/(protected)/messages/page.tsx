import { getMessages } from "@/lib/content";
import { AdminPageTitle } from "@/components/admin/fields";

export default async function AdminMessagesPage() {
  const messages = await getMessages();
  return (
    <>
      <AdminPageTitle
        title="Messages"
        subtitle={`${messages.length} enquir${messages.length === 1 ? "y" : "ies"} received through the contact form.`}
      />
      <div className="space-y-4">
        {messages.length === 0 ? (
          <p className="text-sm text-ink-soft">No messages yet.</p>
        ) : null}
        {messages.map((msg) => (
          <div key={msg.id} className="rounded-2xl bg-white p-6 ring-1 ring-line">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-bold text-ink">
                {msg.name}
                {msg.company ? (
                  <span className="font-normal text-ink-soft"> · {msg.company}</span>
                ) : null}
              </p>
              <p className="text-xs text-ink-soft">
                {new Date(msg.receivedAt).toLocaleString("en-US")}
              </p>
            </div>
            <p className="mt-1 text-sm">
              <a href={`mailto:${msg.email}`} className="font-medium text-brand">
                {msg.email}
              </a>
              <span className="ml-3 rounded-full bg-brand-soft px-2.5 py-0.5 text-xs font-semibold text-brand">
                {msg.topic}
              </span>
            </p>
            <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-ink-soft">
              {msg.message}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
