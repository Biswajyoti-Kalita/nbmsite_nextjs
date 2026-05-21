export const SITE_URL = "https://nextaud.io";

/** Paths that must not be crawled (admin, APIs, analytics proxy, Next internals). */
export const ROBOTS_DISALLOW = [
  "/admin",
  "/api/",
  "/ingest/",
  "/_next/",
];
