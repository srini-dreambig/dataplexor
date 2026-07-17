import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { getSettings } from "@/lib/content";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const settings = getSettings();
  return {
    metadataBase: new URL(settings.siteUrl),
    title: {
      default: `${settings.siteName} — Data & Analytics, AI and Agentic AI`,
      template: `%s | ${settings.siteName}`,
    },
    description: settings.description,
    keywords: [
      "data analytics",
      "artificial intelligence",
      "agentic AI",
      "AI consulting",
      "data platform",
      "data engineering",
      "AI products",
      "Dataplexor",
    ],
    openGraph: {
      type: "website",
      siteName: settings.siteName,
      title: `${settings.siteName} — Data & Analytics, AI and Agentic AI`,
      description: settings.description,
      url: settings.siteUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: `${settings.siteName} — Data & Analytics, AI and Agentic AI`,
      description: settings.description,
    },
    robots: { index: true, follow: true },
    icons: { icon: "/icon.svg" },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
