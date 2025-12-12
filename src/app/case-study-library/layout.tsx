import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study Library",
  description: "Explore podcast case studies across industries, formats and markets. See how brands used host-read, dynamic and branded content campaigns to deliver results.",
  openGraph: {
    title: "Case Study Library | Next Audio",
    description: "Explore podcast case studies across industries, formats and markets. See how brands used host-read, dynamic and branded content campaigns to deliver results.",
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