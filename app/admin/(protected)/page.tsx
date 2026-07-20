import Link from "next/link";
import { getMessages, getPosts, getSettings } from "@/lib/content";
import { getIndustries, getProducts, getSolutions } from "@/lib/sitecontent";
import { AdminPageTitle } from "@/components/admin/fields";

export default async function AdminDashboard() {
  const [posts, messages, settings, solutions, industries, products] =
    await Promise.all([
      getPosts(),
      getMessages(),
      getSettings(),
      getSolutions(),
      getIndustries(),
      getProducts(),
    ]);

  const cards = [
    {
      title: "Site settings",
      href: "/admin/settings",
      body: "Site name, SEO description, announcement bar, contact details and social links.",
      stat: settings.siteName,
    },
    {
      title: "Home page",
      href: "/admin/home",
      body: "Hero headline, calls to action, stats and the advantage section.",
      stat: "Hero + stats",
    },
    {
      title: "Solutions",
      href: "/admin/pages/solutions",
      body: "Solution pages — hero copy, pillars, capabilities, case studies, technologies and FAQs.",
      stat: `${solutions.length} pages`,
    },
    {
      title: "Industries",
      href: "/admin/pages/industries",
      body: "Industry pages — challenges, burning use cases, outcomes and FAQs per domain.",
      stat: `${industries.length} pages`,
    },
    {
      title: "Products",
      href: "/admin/pages/products",
      body: "Product pages — positioning, capabilities, stats and FAQs.",
      stat: `${products.length} pages`,
    },
    {
      title: "Shared sections",
      href: "/admin/pages/sections",
      body: "Testimonials, entry offers and the delivery timeline reused across the site.",
      stat: "3 blocks",
    },
    {
      title: "Insights",
      href: "/admin/insights",
      body: "Create, edit and delete research articles and blog posts.",
      stat: `${posts.length} published`,
    },
    {
      title: "Messages",
      href: "/admin/messages",
      body: "Enquiries submitted through the contact form.",
      stat: `${messages.length} received`,
    },
  ];

  return (
    <>
      <AdminPageTitle
        title="Dashboard"
        subtitle="Manage the content of the Dataplexor website. Changes go live immediately."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group rounded-2xl bg-white p-6 ring-1 ring-line card-hover"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-ink group-hover:text-brand">
                {card.title}
              </h2>
              <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                {card.stat}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {card.body}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}
