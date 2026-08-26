import type { Metadata } from "next";
import Footer from "@/components/Footer";
import CategorySelector from "@/components/bfcm/CategorySelector";

export const metadata: Metadata = {
  title: {
    absolute: "Discover your BFCM podcast mix | Next Audio",
  },
  description:
    "See where your audience could be listening. Choose your business category and get a tailored BFCM podcast mix from Next Audio.",
  alternates: {
    canonical: "/bfcm",
  },
};

export default function BfcmPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <CategorySelector />
      <Footer />
    </div>
  );
}
