import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcast Production Services | Brands & Creators",
  description:
    "Podcast production for brands and independent creators. Scripting, recording, sound design, and distribution, from concept to your first published episode.",
  openGraph: {
    title: "Production | Next Audio",
    description:
      "Podcast production for brands and independent creators. Scripting, recording, sound design, and distribution, from concept to your first published episode.",
    url: "/production",
  },
  alternates: {
    canonical: "/production",
  },
};

export default function ProductionLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }