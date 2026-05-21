import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcast Advertising Case Studies & Results",
  description:
    "Valentino +34% purchase intention. BEL Group +30% brand interest. P&O Ferries +45% consideration. Podcast advertising results across 25+ brands and sectors.",
  openGraph: {
    title: "Case Study Library | Next Audio",
    description:
      "Valentino +34% purchase intention. BEL Group +30% brand interest. P&O Ferries +45% consideration. Podcast advertising results across 25+ brands and sectors.",
    url: "/case-study-library",
  },
  alternates: {
    canonical: "/case-study-library",
  },
};

export default function CaseStudyLibraryLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }