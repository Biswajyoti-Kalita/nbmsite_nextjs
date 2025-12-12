import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knowledge Hub",
  description: "Podcast advertising advice, practical guides and downloadable resources for advertisers, podcasters and publishers from the Next Audio experts.",
  openGraph: {
    title: "Knowledge Hub | Next Audio",
    description: "Podcast advertising advice, practical guides and downloadable resources for advertisers, podcasters and publishers from the Next Audio experts.",
    url: "/knowledge-hub",
  },
  alternates: {
    canonical: "/knowledge-hub",
  },
};


export default function KnowledgeHubLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }

