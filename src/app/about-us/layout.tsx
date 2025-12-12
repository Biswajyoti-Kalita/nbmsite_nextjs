import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us ",
  description: "Next Audio is a global podcast and digital-audio advertising company servicing advertisers, creators and publishers through trusted tools, premium inventory and data-driven expertise.",
  openGraph: {
    title: "About Us | Next Audio",
    description: "Next Audio is a global podcast and digital-audio advertising company servicing advertisers, creators and publishers through trusted tools, premium inventory and data-driven expertise.",
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
