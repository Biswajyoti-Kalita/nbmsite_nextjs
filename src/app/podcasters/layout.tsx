import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Podcasters - Monetize Your Podcast Without Working Harder",
  description: "Monetise your podcast with host-read ads and dynamic insertion. Connect with quality advertisers, manage sponsorships easily, and earn from your content with transparent payouts.",
  openGraph: {
    title: "For Podcasters - Monetize Your Podcast Without Working Harder | Next Audio",
    description: "Monetise your podcast with host-read ads and dynamic insertion. Connect with quality advertisers, manage sponsorships easily, and earn from your content with transparent payouts.",
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