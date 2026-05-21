import type { MetadataRoute } from "next";
import { ROBOTS_DISALLOW, SITE_URL } from "@/lib/site";

const AI_CRAWLERS = ["GPTBot", "PerplexityBot", "ClaudeBot", "bingbot"] as const;

export default function robots(): MetadataRoute.Robots {
  const allowAllRule = {
    allow: "/",
    disallow: ROBOTS_DISALLOW,
  };

  return {
    rules: [
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        ...allowAllRule,
      })),
      {
        userAgent: "*",
        ...allowAllRule,
      },
    ],
    host: SITE_URL,
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
