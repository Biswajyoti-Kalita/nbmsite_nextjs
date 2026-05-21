import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monetize Your Podcast Catalogue | Publishers",
  description:
    "Monetize your podcast catalogue with global advertiser demand. Access 300+ active brands across 850+ campaigns via programmatic and host-read revenue streams.",
  openGraph: {
    title: "For Publishers - Monetize Your Podcast Without Working Harder | Next Audio",
    description:
      "Monetize your podcast catalogue with global advertiser demand. Access 300+ active brands across 850+ campaigns via programmatic and host-read revenue streams.",
    url: "/publishers",
  },
  alternates: {
    canonical: "/publishers",
  },
};

export default function PublishersLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }