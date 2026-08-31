import { automotiveContent } from "./automotive";
import { b2bSaasContent } from "./b2b-saas";
import { beautyHealthWellnessContent } from "./beauty-health-wellness";
import { fashionApparelContent } from "./fashion-apparel";
import { financeFintechContent } from "./finance-fintech";
import { foodBeverageDeliveryContent } from "./food-beverage-delivery";
import { retailEcommerceContent } from "./retail-ecommerce";
import { telecomsContent } from "./telecoms";
import { travelHospitalityContent } from "./travel-hospitality";
import { technologyElectronicsContent } from "./technology-electronics";
import type { BfcmCategoryContent, BfcmCategoryMeta } from "./types";

/** Registry of all BFCM categories. Add content modules here as they arrive. */
const CONTENT_BY_SLUG: Record<string, BfcmCategoryContent> = {
  [retailEcommerceContent.slug]: retailEcommerceContent,
  [fashionApparelContent.slug]: fashionApparelContent,
  [beautyHealthWellnessContent.slug]: beautyHealthWellnessContent,
  [financeFintechContent.slug]: financeFintechContent,
  [technologyElectronicsContent.slug]: technologyElectronicsContent,
  [b2bSaasContent.slug]: b2bSaasContent,
  [telecomsContent.slug]: telecomsContent,
  [foodBeverageDeliveryContent.slug]: foodBeverageDeliveryContent,
  [travelHospitalityContent.slug]: travelHospitalityContent,
  [automotiveContent.slug]: automotiveContent,
};

export const BFCM_CATEGORIES: BfcmCategoryMeta[] = [
  { slug: "retail-ecommerce", name: "Retail & E-commerce", icon: "retail", ready: true },
  { slug: "fashion-apparel", name: "Fashion & Apparel", icon: "fashion", ready: true },
  {
    slug: "beauty-health-wellness",
    name: "Beauty, Health & Wellness",
    icon: "beauty",
    ready: true,
  },
  {
    slug: "finance-fintech",
    name: "Financial Services & Fintech",
    icon: "finance",
    ready: true,
  },
  {
    slug: "b2b-saas",
    name: "B2B, SaaS & Business Services",
    icon: "b2b",
    ready: true,
  },
  {
    slug: "technology-electronics",
    name: "Technology & Consumer Electronics",
    icon: "technology",
    ready: true,
  },
  { slug: "telecoms", name: "Telecoms", icon: "telecoms", ready: true },
  {
    slug: "food-beverage-delivery",
    name: "Food, Beverage & Delivery",
    icon: "food",
    ready: true,
  },
  {
    slug: "travel-hospitality",
    name: "Travel & Hospitality",
    icon: "travel",
    ready: true,
  },
  { slug: "automotive", name: "Automotive", icon: "automotive", ready: true },
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
