import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Read the terms and conditions governing your use of the Next Audio website and services.",
  openGraph: {
    title: "Terms of Use | Next Audio",
    description:
      "Read the terms and conditions governing your use of the Next Audio website and services.",
    url: "/terms-of-use",
  },
  alternates: {
    canonical: "/terms-of-use",
  },
};

export default function TermsOfUseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
