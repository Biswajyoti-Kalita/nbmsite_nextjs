import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "is1-ssl.mzstatic.com",
        pathname: "/image/thumb/**",
      },
      {
        protocol: "https",
        hostname: "is2-ssl.mzstatic.com",
        pathname: "/image/thumb/**",
      },
      {
        protocol: "https",
        hostname: "is3-ssl.mzstatic.com",
        pathname: "/image/thumb/**",
      },
      {
        protocol: "https",
        hostname: "is4-ssl.mzstatic.com",
        pathname: "/image/thumb/**",
      },
      {
        protocol: "https",
        hostname: "is5-ssl.mzstatic.com",
        pathname: "/image/thumb/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
