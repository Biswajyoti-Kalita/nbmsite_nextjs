import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audio Plan Framework | Next Audio",
  description: "Pressure-test your media plan. See where audio drives impact across awareness, performance, expansion and growth objectives.",
  openGraph: {
    title: "Audio Plan: A Strategic Framework for Impact",
    description: "A practical framework to evaluate where audio fits across awareness, consideration, performance, retention and growth objectives.",
  },
  alternates: {
    canonical: "/audio-plan",
  },
};


export default function AudioPlanLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }

