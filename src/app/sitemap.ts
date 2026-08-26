import type { MetadataRoute } from "next";
import caseStudies from "@/data/caseStudies.json";
import { SITE_URL } from "@/lib/site";

const STATIC_ROUTES: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/advertisers", changeFrequency: "weekly", priority: 0.9 },
  { path: "/publishers", changeFrequency: "weekly", priority: 0.9 },
  { path: "/podcasters", changeFrequency: "weekly", priority: 0.9 },
  { path: "/why-audio", changeFrequency: "weekly", priority: 0.8 },
  { path: "/about-us", changeFrequency: "monthly", priority: 0.8 },
  { path: "/production", changeFrequency: "monthly", priority: 0.8 },
  { path: "/diaspora", changeFrequency: "monthly", priority: 0.8 },
  { path: "/audio-plan", changeFrequency: "monthly", priority: 0.7 },
  { path: "/knowledge-hub", changeFrequency: "weekly", priority: 0.8 },
  { path: "/case-study-library", changeFrequency: "weekly", priority: 0.8 },
  { path: "/bfcm", changeFrequency: "weekly", priority: 0.85 },
  { path: "/bfcm/retail-ecommerce", changeFrequency: "weekly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = STATIC_ROUTES.map(
    ({ path, changeFrequency, priority }) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority,
    })
  );

  const caseStudyPages: MetadataRoute.Sitemap = Object.keys(caseStudies).map(
    (slug) => ({
      url: `${SITE_URL}/case-studies/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    })
  );

  return [...staticPages, ...caseStudyPages];
}
