import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");

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
};

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  company: string;
  topic: string;
  message: string;
  receivedAt: string;
};

function readJson<T>(file: string, fallback: T): T {
  try {
    return JSON.parse(
      fs.readFileSync(path.join(CONTENT_DIR, file), "utf8")
    ) as T;
  } catch {
    return fallback;
  }
}

function writeJson(file: string, data: unknown) {
  fs.mkdirSync(CONTENT_DIR, { recursive: true });
  fs.writeFileSync(
    path.join(CONTENT_DIR, file),
    JSON.stringify(data, null, 2) + "\n",
    "utf8"
  );
}

export function getSettings(): Settings {
  return readJson<Settings>("settings.json", {
    siteName: "Dataplexor",
    tagline: "",
    description: "",
    siteUrl: "https://www.dataplexor.com",
    announcement: "",
    announcementHref: "",
    contact: { email: "", phone: "", address: "" },
    social: { linkedin: "", x: "", github: "", youtube: "" },
  });
}

export function saveSettings(settings: Settings) {
  writeJson("settings.json", settings);
}

export function getHomeContent(): HomeContent {
  return readJson<HomeContent>("home.json", {
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
  });
}

export function saveHomeContent(content: HomeContent) {
  writeJson("home.json", content);
}

export function getPosts(): Post[] {
  const posts = readJson<Post[]>("posts.json", []);
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug);
}

export function savePosts(posts: Post[]) {
  writeJson("posts.json", posts);
}

export function getMessages(): ContactMessage[] {
  return readJson<ContactMessage[]>("messages.json", []);
}

export function addMessage(msg: ContactMessage) {
  const messages = getMessages();
  messages.unshift(msg);
  writeJson("messages.json", messages);
}

export function sanitizePost(data: Partial<Post>): Omit<Post, "slug"> | null {
  const title = String(data.title || "").trim();
  const excerpt = String(data.excerpt || "").trim();
  const body = String(data.body || "").trim();
  const date = String(data.date || "").trim();
  if (!title || !excerpt || !body || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return null;
  }
  return {
    title,
    excerpt,
    body,
    date,
    category: String(data.category || "General").trim(),
    author: String(data.author || "Dataplexor").trim(),
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
