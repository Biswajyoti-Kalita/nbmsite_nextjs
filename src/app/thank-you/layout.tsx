import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Thank You | Next Audio",
  },
  description: "Thank you for contacting Next Audio. Our team will be in touch shortly.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/thank-you",
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
