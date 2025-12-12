import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Publishers - Monetize Your Podcast Without Working Harder",
  description: "Grow your podcast network's revenue with premium advertisers, host-read and dynamic ads, real-time insights, and full monetisation support.",
  openGraph: {
    title: "For Publishers - Monetize Your Podcast Without Working Harder | Next Audio",
    description: "Grow your podcast network's revenue with premium advertisers, host-read and dynamic ads, real-time insights, and full monetisation support.",
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