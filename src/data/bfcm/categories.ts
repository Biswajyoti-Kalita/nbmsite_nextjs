import { retailEcommerceContent } from "./retail-ecommerce";
import type { BfcmCategoryContent, BfcmCategoryMeta } from "./types";

/** Registry of all BFCM categories. Add content modules here as they arrive. */
const CONTENT_BY_SLUG: Record<string, BfcmCategoryContent> = {
  [retailEcommerceContent.slug]: retailEcommerceContent,
};

export const BFCM_CATEGORIES: BfcmCategoryMeta[] = [
  { slug: "retail-ecommerce", name: "Retail & E-commerce", icon: "retail", ready: true },
  { slug: "fashion-apparel", name: "Fashion & Apparel", icon: "fashion", ready: false },
  {
    slug: "beauty-health-wellness",
    name: "Beauty, Health & Wellness",
    icon: "beauty",
    ready: false,
  },
  { slug: "finance-fintech", name: "Finance & Fintech", icon: "finance", ready: false },
  { slug: "b2b-saas", name: "B2B & SaaS", icon: "b2b", ready: false },
  {
    slug: "technology-electronics",
    name: "Technology & Electronics",
    icon: "technology",
    ready: false,
  },
  { slug: "telecoms", name: "Telecoms", icon: "telecoms", ready: false },
  {
    slug: "food-beverage-delivery",
    name: "Food, Beverage & Delivery",
    icon: "food",
    ready: false,
  },
  {
    slug: "travel-hospitality",
    name: "Travel & Hospitality",
    icon: "travel",
    ready: false,
  },
  { slug: "automotive", name: "Automotive", icon: "automotive", ready: false },
];

export function getCategoryContent(slug: string): BfcmCategoryContent | null {
  return CONTENT_BY_SLUG[slug] ?? null;
}

export function getCategoryMeta(slug: string): BfcmCategoryMeta | undefined {
  return BFCM_CATEGORIES.find((c) => c.slug === slug);
}

export function getReadyCategorySlugs(): string[] {
  return Object.keys(CONTENT_BY_SLUG);
}
