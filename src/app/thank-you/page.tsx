import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ThankYouPageContent from "@/components/ThankYouPageContent";
import { Suspense } from "react";

function ThankYouFallback() {
  return (
    <div className="w-full max-w-[720px] h-[320px] rounded-[16px] bg-[#FFFEFF] border border-[#E8E8E8] animate-pulse" />
  );
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#FFF9FE]">
      <Navbar bgColor="bg-white" bgColorOnOpen="bg-[#F11F68]" isPrimary />

      <main className="w-full flex-1 flex flex-col items-center justify-center px-4 md:px-[80px] py-[96px] md:py-[120px]">
        <Suspense fallback={<ThankYouFallback />}>
          <ThankYouPageContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
