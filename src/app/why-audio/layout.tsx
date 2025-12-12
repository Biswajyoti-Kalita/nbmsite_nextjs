import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Audio",
  description: "Learn the benefits of podcast and digital-audio advertising. See why podcast ads deliver results for advertisers, with key advantages, audience insights and performance proof.",
  openGraph: {
    title: "Why Audio | Next Audio",
    description: "Learn the benefits of podcast and digital-audio advertising. See why podcast ads deliver results for advertisers, with key advantages, audience insights and performance proof.",
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
