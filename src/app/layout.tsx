import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AOSProvider from "../components/AOSProvider";
import CallMeBack from "../components/CallMeBack";
import ShareBrief from "../components/ShareBrief";

const switzer = localFont({
  src: [
    { path: "./../fonts/Switzer-Thin.woff2", weight: "100", style: "normal" },
    { path: "./../fonts/Switzer-Extralight.woff2", weight: "200", style: "normal" },
    { path: "./../fonts/Switzer-Light.woff2", weight: "300", style: "normal" },
    { path: "./../fonts/Switzer-Regular.woff2", weight: "400", style: "normal" },
    { path: "./../fonts/Switzer-Medium.woff2", weight: "500", style: "normal" },
    { path: "./../fonts/Switzer-Semibold.woff2", weight: "600", style: "normal" },
    { path: "./../fonts/Switzer-Bold.woff2", weight: "700", style: "normal" },
    { path: "./../fonts/Switzer-Extrabold.woff2", weight: "800", style: "normal" },
    { path: "./../fonts/Switzer-Black.woff2", weight: "900", style: "normal" },
    
  ],
  variable: "--font-switzer",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nextaud.io"),
  title: {
    default: "Next Audio ",
    template: "%s | Next Audio",
  },
  description: "Next Audio is a podcast and digital-audio advertising company that helps brands run targeted, measurable ad campaigns and enables podcasters and publishers to monetise content.",
  keywords: [
    "podcast advertising",
    "digital audio advertising",
    "podcast advertising company",
    "podcast ad campaigns",
    "host-read podcast ads",
    "dynamic podcast ads",
    "branded podcast production",
    "podcast monetisation",
    "podcast sponsorships",
    "premium podcast inventory",
    "podcast audience targeting",
    "language targeting",
    "regional targeting",
    "cultural audience targeting",
    "podcast measurement",
    "audio ad reporting",
    "podcast case studies",
    "digital audio campaigns",
    "podcast advertising resources",
  ],
  authors: [{ name: "Next Audio" }],
  creator: "Next Audio",
  publisher: "Next Audio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/logo.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Next Audio",
    title: "Next Audio",
    description: "Next Audio is a podcast advertising company that helps brands connect with their audience through podcast advertising. Reach millions of listeners with targeted podcast ads.",
    images: [
      {
        url: "/assets/images/og-image.jpg", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "Next Audio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "/",
  },
  category: "Advertising",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${switzer.variable} antialiased bg-white`}
      >
        <AOSProvider>
          {children}
          <CallMeBack />
          <ShareBrief />
        </AOSProvider>
      </body>
    </html>
  );
}
