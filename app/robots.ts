import type { MetadataRoute } from "next";
import { getSettings } from "@/lib/content";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const base = (await getSettings()).siteUrl.replace(/\/$/, "");
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
