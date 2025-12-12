import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Production",
  description: "Create branded podcasts with full production support, from concept and scripting to recording, editing, guest booking and distribution. Build shows that grow your brand.",
  openGraph: {
    title: "Production | Next Audio",
    description: "Create branded podcasts with full production support, from concept and scripting to recording, editing, guest booking and distribution. Build shows that grow your brand.",
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