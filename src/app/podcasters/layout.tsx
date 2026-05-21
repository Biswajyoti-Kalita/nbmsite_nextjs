import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monetize Your Podcast With Ads & Sponsorships",
  description:
    "Connect your show to premium advertisers and earn from host-read sponsorships and programmatic ads. Keep full ownership. No brand outreach or relationship management required.",
  openGraph: {
    title: "For Podcasters - Monetize Your Podcast Without Working Harder | Next Audio",
    description:
      "Connect your show to premium advertisers and earn from host-read sponsorships and programmatic ads. Keep full ownership. No brand outreach or relationship management required.",
    url: "/podcasters",
  },
  alternates: {
    canonical: "/podcasters",
  },
};

export default function PodcastersLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }