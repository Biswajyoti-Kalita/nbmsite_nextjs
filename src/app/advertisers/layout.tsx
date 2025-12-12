import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Advertisers - High-Impact Audio Ads Made Easy",
  description: "Buy podcast advertising with premium global inventory, precise targeting, host-read or dynamic formats, and transparent campaign measurement.",
  openGraph: {
    title: "For Advertisers - High-Impact Audio Ads Made Easy | Next Audio",
    description: "Buy podcast advertising with premium global inventory, precise targeting, host-read or dynamic formats, and transparent campaign measurement.",
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

