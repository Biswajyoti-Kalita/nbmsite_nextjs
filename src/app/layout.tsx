import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AOSProvider from "../components/AOSProvider";

const switzer = localFont({
  src: [
    {
      path: "./../fonts/Switzer-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../fonts/Switzer-Bold.woff2", 
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-switzer",
});

export const metadata: Metadata = {
  title: "Nextbroadcast Media ",
  description: "Nextbroadcast Media is a podcast advertising company that helps brands connect with their audience through podcast advertising.",
  icons: {
    icon: "/assets/images/logo.png",
  },
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
        </AOSProvider>
      </body>
    </html>
  );
}
