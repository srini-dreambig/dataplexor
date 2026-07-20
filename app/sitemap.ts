import type { MetadataRoute } from "next";
import { getPosts, getSettings } from "@/lib/content";
import { getIndustries, getProducts, getSolutions } from "@/lib/sitecontent";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = (await getSettings()).siteUrl.replace(/\/$/, "");
  const [SOLUTIONS, INDUSTRIES, PRODUCTS] = await Promise.all([
    getSolutions(),
    getIndustries(),
    getProducts(),
  ]);
  const now = new Date();

  const staticPaths: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/products", priority: 0.9 },
    { path: "/services", priority: 0.9 },
    { path: "/industries", priority: 0.9 },
    { path: "/insights", priority: 0.8 },
    { path: "/company/about", priority: 0.7 },
    { path: "/company/leadership", priority: 0.6 },
    { path: "/company/careers", priority: 0.7 },
    { path: "/company/contact", priority: 0.8 },
    { path: "/legal/privacy", priority: 0.3 },
    { path: "/legal/terms", priority: 0.3 },
    { path: "/legal/cookies", priority: 0.3 },
  ];

  return [
    ...staticPaths.map((p) => ({
      url: `${base}${p.path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: p.priority,
    })),
    ...SOLUTIONS.map((s) => ({
      url: `${base}/solutions/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...INDUSTRIES.map((i) => ({
      url: `${base}/industries/${i.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...PRODUCTS.map((p) => ({
      url: `${base}/products/${p.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...(await getPosts()).map((post) => ({
      url: `${base}/insights/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
