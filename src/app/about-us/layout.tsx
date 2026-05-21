import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "About Next Audio | Global Podcast Advertising Company",
  },
  description:
    "Next Audio is the global podcast advertising partner for brands, agencies, publishers, and creators. 55,000+ shows. 90+ markets. 850+ campaigns delivered.",
  openGraph: {
    title: "About Us | Next Audio",
    description:
      "Next Audio is the global podcast advertising partner for brands, agencies, publishers, and creators. 55,000+ shows. 90+ markets. 850+ campaigns delivered.",
    url: "/about-us",
  },
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutUsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }
