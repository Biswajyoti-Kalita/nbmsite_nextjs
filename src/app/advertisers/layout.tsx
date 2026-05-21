import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcast Ad Campaigns for Brands & Agencies",
  description:
    "Managed podcast advertising for brands and agencies. 850+ campaigns delivered across 90+ markets. Independent measurement and verified results included as standard.",
  openGraph: {
    title: "For Advertisers - High-Impact Audio Ads Made Easy | Next Audio",
    description:
      "Managed podcast advertising for brands and agencies. 850+ campaigns delivered across 90+ markets. Independent measurement and verified results included as standard.",
    url: "/advertisers",
  },
  alternates: {
    canonical: "/advertisers",
  },
};


export default function AdvertisersLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }

