import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcast Advertising Guides & Playbooks",
  description:
    "Podcast advertising guides and playbooks for media planners and brands. Campaign planning, audience targeting, format selection, and measurement benchmarks.",
  openGraph: {
    title: "Knowledge Hub | Next Audio",
    description:
      "Podcast advertising guides and playbooks for media planners and brands. Campaign planning, audience targeting, format selection, and measurement benchmarks.",
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

