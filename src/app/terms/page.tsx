import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const LAST_UPDATED = "27 July 2026";

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-white">
      <Navbar bgColor="bg-white" bgColorOnOpen="bg-[#F11F68]" isPrimary />

      <main className="w-full max-w-[800px] px-4 md:px-8 py-[120px] md:py-[140px]">
        <header className="mb-10 md:mb-12">
          <p className="text-[#F11F68] text-[14px] leading-[22px] font-medium mb-3">
            Legal
          </p>
          <h1 className="gradient-text font-semibold text-[34px] md:text-[42px] leading-[42px] md:leading-[50px] tracking-[-0.02em] mb-4">
            Terms of Use
          </h1>
          <p className="text-[#667085] text-[14px] leading-[20px]">
            Last updated: {LAST_UPDATED}
          </p>
        </header>

        <article className="flex flex-col gap-8 text-[#344054] text-[16px] leading-[26px]">
          <section>
            <h2 className="text-[#262626] text-[22px] md:text-[24px] leading-[30px] md:leading-[32px] font-bold mb-3">
              Agreement to these terms
            </h2>
            <p>
              These Terms of Use govern your access to and use of the Next Audio
              website at{" "}
              <Link href="/" className="text-[#F11F68] underline hover:opacity-80">
                nextaud.io
              </Link>{" "}
              and related services (collectively, the &ldquo;Services&rdquo;).
              By using our website, you agree to these terms in full. If you do
              not agree with any part of these terms, you must not use our
              website or Services.
            </p>
          </section>

          <section>
            <h2 className="text-[#262626] text-[22px] md:text-[24px] leading-[30px] md:leading-[32px] font-bold mb-3">
              Licence to use the website
            </h2>
            <p className="mb-4">
              Unless otherwise stated, Next Audio owns the intellectual property
              rights in the website and all material published on it. Subject to
              the licence below, all such rights are reserved.
            </p>
            <p className="mb-4">
              You may view, download for caching purposes only, and print pages
              from the website for your own personal, non-commercial use,
              subject to the restrictions set out in these terms.
            </p>
            <p className="mb-3">You must not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Republish material from this website, including on another
                website.
              </li>
              <li>Sell, rent, or sub-license material from the website.</li>
              <li>Show any material from the website in public.</li>
              <li>
                Reproduce, duplicate, copy, or otherwise exploit material on our
                website for a commercial purpose.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#262626] text-[22px] md:text-[24px] leading-[30px] md:leading-[32px] font-bold mb-3">
              Acceptable use
            </h2>
            <p className="mb-4">
              You must not use this website in any way that causes, or may
              cause, damage to the website or impairment of its availability or
              accessibility, or in any way that is unlawful, illegal, fraudulent,
              or harmful.
            </p>
            <p className="mb-4">
              You must not use this website to copy, store, host, transmit,
              send, use, publish, or distribute any material that consists of
              (or is linked to) spyware, computer viruses, Trojan horses, worms,
              keystroke loggers, rootkits, or other malicious software.
            </p>
            <p>
              You must not conduct any systematic or automated data collection
              activities — including scraping, data mining, data extraction, or
              data harvesting — on or in relation to this website without our
              express written consent.
            </p>
          </section>

          <section>
            <h2 className="text-[#262626] text-[22px] md:text-[24px] leading-[30px] md:leading-[32px] font-bold mb-3">
              Restricted access
            </h2>
            <p>
              We reserve the right to restrict access to any area of our website,
              or the entire website, at our discretion. You must not attempt to
              bypass or circumvent any access restriction measures we put in
              place.
            </p>
          </section>

          <section>
            <h2 className="text-[#262626] text-[22px] md:text-[24px] leading-[30px] md:leading-[32px] font-bold mb-3">
              User content
            </h2>
            <p className="mb-4">
              In these terms, &ldquo;your user content&rdquo; means any material
              (including text, images, audio, video, and audio-visual material)
              that you submit to our website for any purpose.
            </p>
            <p className="mb-4">
              You grant Next Audio a worldwide, irrevocable, non-exclusive,
              royalty-free licence to use, reproduce, adapt, publish, translate,
              and distribute your user content in any existing or future media.
              You also grant us the right to sub-license these rights and to
              bring an action for infringement of these rights.
            </p>
            <p className="mb-4">
              Your user content must not be illegal or unlawful, defamatory,
              offensive, threatening, discriminatory, or infringe any third-party
              rights.
            </p>
            <p>
              We reserve the right to edit or remove any material submitted to
              our website, stored on our servers, or hosted or published on our
              website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-[#262626] text-[22px] md:text-[24px] leading-[30px] md:leading-[32px] font-bold mb-3">
              Indemnity
            </h2>
            <p>
              You agree to indemnify and hold Next Audio harmless against any
              losses, damages, costs, liabilities, and expenses (including
              legal expenses and any amounts paid to a third party in settlement
              of a claim or dispute) incurred or suffered by us arising out of
              any breach by you of any provision of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-[#262626] text-[22px] md:text-[24px] leading-[30px] md:leading-[32px] font-bold mb-3">
              Changes to these terms
            </h2>
            <p>
              We may revise these terms from time to time. Revised terms will
              apply to your use of our website from the date they are published
              on this page. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-[#262626] text-[22px] md:text-[24px] leading-[30px] md:leading-[32px] font-bold mb-3">
              Entire agreement
            </h2>
            <p>
              These Terms of Use, together with our{" "}
              <Link
                href="/privacy-policy"
                className="text-[#F11F68] underline hover:opacity-80"
              >
                Privacy Policy
              </Link>
              , constitute the entire agreement between you and Next Audio in
              relation to your use of our website and supersede all prior
              agreements in respect of your use of the website.
            </p>
          </section>

          <section>
            <h2 className="text-[#262626] text-[22px] md:text-[24px] leading-[30px] md:leading-[32px] font-bold mb-3">
              Contact us
            </h2>
            <p>
              If you have questions about these Terms of Use, please contact us
              at{" "}
              <a
                href="mailto:suzi@nextaud.io"
                className="text-[#F11F68] underline hover:opacity-80"
              >
                suzi@nextaud.io
              </a>
              .
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
