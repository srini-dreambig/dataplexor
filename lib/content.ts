import { readDoc, writeDoc } from "@/lib/storage";

export type Cta = { label: string; href: string };

export type Settings = {
  siteName: string;
  tagline: string;
  description: string;
  siteUrl: string;
  announcement: string;
  announcementHref: string;
  contact: { email: string; phone: string; address: string };
  social: { linkedin: string; x: string; github: string; youtube: string };
};

export type HomeContent = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: Cta;
    secondaryCta: Cta;
    tertiaryCta: Cta;
  };
  stats: { value: string; label: string }[];
  advantage: {
    title: string;
    intro: string;
    items: { title: string; body: string }[];
  };
};

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  body: string;
  takeaways?: string[];
};

export function readingTime(body: string): number {
  return Math.max(2, Math.round(body.split(/\s+/).length / 220));
}

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  company: string;
  topic: string;
  message: string;
  receivedAt: string;
};

const DEFAULT_SETTINGS: Settings = {
  siteName: "Dataplexor",
  tagline: "",
  description: "",
  siteUrl: "https://www.dataplexor.com",
  announcement: "",
  announcementHref: "",
  contact: { email: "", phone: "", address: "" },
  social: { linkedin: "", x: "", github: "", youtube: "" },
};

const DEFAULT_HOME: HomeContent = {
  hero: {
    eyebrow: "",
    title: "Dataplexor",
    subtitle: "",
    primaryCta: { label: "Get in touch", href: "/company/contact" },
    secondaryCta: { label: "", href: "" },
    tertiaryCta: { label: "", href: "" },
  },
  stats: [],
  advantage: { title: "", intro: "", items: [] },
};

export async function getSettings(): Promise<Settings> {
  return readDoc<Settings>("settings", DEFAULT_SETTINGS);
}

export async function saveSettings(settings: Settings): Promise<void> {
  await writeDoc("settings", settings);
}

export async function getHomeContent(): Promise<HomeContent> {
  return readDoc<HomeContent>("home", DEFAULT_HOME);
}

export async function saveHomeContent(content: HomeContent): Promise<void> {
  await writeDoc("home", content);
}

export async function getPosts(): Promise<Post[]> {
  const posts = await readDoc<Post[]>("posts", []);
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post | undefined> {
  return (await getPosts()).find((p) => p.slug === slug);
}

export async function savePosts(posts: Post[]): Promise<void> {
  await writeDoc("posts", posts);
}

export async function getMessages(): Promise<ContactMessage[]> {
  return readDoc<ContactMessage[]>("messages", []);
}

export async function addMessage(msg: ContactMessage): Promise<void> {
  const messages = await getMessages();
  messages.unshift(msg);
  await writeDoc("messages", messages);
}

export function sanitizePost(data: Partial<Post>): Omit<Post, "slug"> | null {
  const title = String(data.title || "").trim();
  const excerpt = String(data.excerpt || "").trim();
  const body = String(data.body || "").trim();
  const date = String(data.date || "").trim();
  if (!title || !excerpt || !body || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return null;
  }
  const takeaways = Array.isArray(data.takeaways)
    ? data.takeaways.map((t) => String(t).trim()).filter(Boolean).slice(0, 8)
    : undefined;
  return {
    title,
    excerpt,
    body,
    date,
    category: String(data.category || "General").trim(),
    author: String(data.author || "Dataplexor").trim(),
    ...(takeaways && takeaways.length ? { takeaways } : {}),
  };
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
