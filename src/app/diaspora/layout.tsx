import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diaspora",
  description: "Reach global cultural audiences with podcast advertising using premium shows, language and regional targeting, and brand-safe delivery across international communities.",
  openGraph: {
    title: "Diaspora | Next Audio",
    description: "Reach global cultural audiences with podcast advertising using premium shows, language and regional targeting, and brand-safe delivery across international communities.",
    url: "/diaspora",
  },
  alternates: {
    canonical: "/diaspora",
  },
};

export default function DiasporaLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }