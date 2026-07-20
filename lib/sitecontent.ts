import { readDoc } from "@/lib/storage";
import {
  SOLUTIONS,
  INDUSTRIES,
  PRODUCTS,
  TESTIMONIALS,
  ENTRY_OFFERS,
  DELIVERY_PHASES,
  type Solution,
  type Industry,
  type Product,
} from "@/lib/site";

/**
 * Editable page content. Each document is stored in the content backend
 * (Neon in production, content/*.json locally), seeded from the coded
 * defaults in lib/site.ts, and manageable from /admin without code.
 */

export type SectionsContent = {
  testimonials: { quote: string; author: string; org: string }[];
  entryOffers: {
    name: string;
    duration: string;
    body: string;
    deliverables: string[];
    cta: string;
  }[];
  deliveryPhases: { phase: string; title: string; body: string }[];
};

const DEFAULT_SECTIONS: SectionsContent = {
  testimonials: TESTIMONIALS,
  entryOffers: ENTRY_OFFERS,
  deliveryPhases: DELIVERY_PHASES,
};

export async function getSolutions(): Promise<Solution[]> {
  return readDoc<Solution[]>("solutions", SOLUTIONS);
}

export async function getSolution(slug: string): Promise<Solution | undefined> {
  return (await getSolutions()).find((s) => s.slug === slug);
}

export async function getIndustries(): Promise<Industry[]> {
  return readDoc<Industry[]>("industries", INDUSTRIES);
}

export async function getIndustry(slug: string): Promise<Industry | undefined> {
  return (await getIndustries()).find((i) => i.slug === slug);
}

export async function getProducts(): Promise<Product[]> {
  return readDoc<Product[]>("products", PRODUCTS);
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  return (await getProducts()).find((p) => p.slug === slug);
}

export async function getSections(): Promise<SectionsContent> {
  return readDoc<SectionsContent>("sections", DEFAULT_SECTIONS);
}

/** Documents editable through the generic admin content API. */
export const EDITABLE_DOCS = {
  solutions: { kind: "array" as const, label: "Solutions" },
  industries: { kind: "array" as const, label: "Industries" },
  products: { kind: "array" as const, label: "Products" },
  sections: { kind: "object" as const, label: "Shared sections" },
};
