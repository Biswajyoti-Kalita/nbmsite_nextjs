import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AOSProvider from "../components/AOSProvider";
import CallMeBack from "../components/CallMeBack";
import HubspotFormModal from "../components/HubspotFormModal";
import ShareBrief from "../components/ShareBrief";
import CampaignEnquiryPopup from "../components/CampaignEnquiryPopup";

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
    default: "Podcast Advertising Agency | Global Audio Ads | Next Audio",
    template: "%s | Next Audio",
  },
  description:
    "Podcast and audio advertising for brands and agencies. 850+ campaigns delivered across 55,000+ shows in 90+ markets. Fully managed from strategy to verified measurement.",
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
    description:
      "Podcast and audio advertising for brands and agencies. 850+ campaigns delivered across 55,000+ shows in 90+ markets. Fully managed from strategy to verified measurement.",
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
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-58DTSWTK');`
        }} />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${switzer.variable} antialiased bg-white`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-58DTSWTK"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <AOSProvider>
          {children}
          <CallMeBack />
          <ShareBrief />
          <HubspotFormModal />
          <CampaignEnquiryPopup />
        </AOSProvider>
      </body>
    </html>
  );
}
