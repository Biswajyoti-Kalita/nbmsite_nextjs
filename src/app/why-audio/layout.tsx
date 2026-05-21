import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Podcast Advertising Works | Data & ROI",
  description:
    "91% listen-through rates. 4x higher ad recall than YouTube. 4.4x ROAS. Here's why podcast advertising outperforms other channels, with the data to prove it.",
  openGraph: {
    title: "Why Audio | Next Audio",
    description:
      "91% listen-through rates. 4x higher ad recall than YouTube. 4.4x ROAS. Here's why podcast advertising outperforms other channels, with the data to prove it.",
    url: "/why-audio",
  },
  alternates: {
    canonical: "/why-audio",
  },
};

export default function WhyAudioLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }
