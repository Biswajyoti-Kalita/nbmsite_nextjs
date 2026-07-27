import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Next Audio collects, uses, stores, and protects your personal information when you use our website and services.",
  openGraph: {
    title: "Privacy Policy | Next Audio",
    description:
      "Learn how Next Audio collects, uses, stores, and protects your personal information when you use our website and services.",
    url: "/privacy-policy",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
