import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diaspora Podcast Advertising | North America",
  description:
    "Target Middle Eastern, South Asian, African, and Asian diaspora audiences in North America. Host-read and programmatic podcast ads for multicultural campaigns.",
  openGraph: {
    title: "Diaspora | Next Audio",
    description:
      "Target Middle Eastern, South Asian, African, and Asian diaspora audiences in North America. Host-read and programmatic podcast ads for multicultural campaigns.",
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