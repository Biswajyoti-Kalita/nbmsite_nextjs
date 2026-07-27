import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const LAST_UPDATED = "27 July 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-white">
      <Navbar bgColor="bg-white" bgColorOnOpen="bg-[#F11F68]" isPrimary />

      <main className="w-full max-w-[800px] px-4 md:px-8 py-[120px] md:py-[140px]">
        <header className="mb-10 md:mb-12">
          <p className="text-[#F11F68] text-[14px] leading-[22px] font-medium mb-3">
            Legal
          </p>
          <h1 className="gradient-text font-semibold text-[34px] md:text-[42px] leading-[42px] md:leading-[50px] tracking-[-0.02em] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#667085] text-[14px] leading-[20px]">
            Last updated: {LAST_UPDATED}
          </p>
        </header>

        <article className="flex flex-col gap-8 text-[#344054] text-[16px] leading-[26px]">
          <section>
            <h2 className="text-[#262626] text-[22px] md:text-[24px] leading-[30px] md:leading-[32px] font-bold mb-3">
              Our commitment
            </h2>
            <p>
              This Privacy Policy explains how Next Audio (&ldquo;we&rdquo;,
              &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, stores,
              and shares personal information when you visit{" "}
              <Link href="/" className="text-[#F11F68] underline hover:opacity-80">
                nextaud.io
              </Link>{" "}
              or use our podcast and digital audio advertising services
              (collectively, the &ldquo;Services&rdquo;).
            </p>
            <p className="mt-4">
              We may update this policy from time to time. When we do, we will
              revise the &ldquo;Last updated&rdquo; date at the top of this
              page. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-[#262626] text-[22px] md:text-[24px] leading-[30px] md:leading-[32px] font-bold mb-3">
              Information we collect
            </h2>
            <p className="mb-4">
              We collect personal information — information that can reasonably
              identify you — in the following ways:
            </p>

            <h3 className="text-[#262626] text-[18px] leading-[28px] font-semibold mb-2">
              Information you provide directly
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                <strong>Contact details</strong> — such as your name, business
                name, email address, phone number, and location when you submit a
                brief, request a callback, download a media kit, or contact us.
              </li>
              <li>
                <strong>Campaign and business information</strong> — such as
                advertising objectives, budget, targeting preferences, and files
                you upload as part of a brief or enquiry.
              </li>
              <li>
                <strong>Correspondence</strong> — including messages, feedback,
                or complaints you send to us, which we use to respond to your
                requests.
              </li>
            </ul>

            <h3 className="text-[#262626] text-[18px] leading-[28px] font-semibold mb-2">
              Information collected automatically
            </h3>
            <p className="mb-3">
              When you use our website or Services, we and our partners may
              automatically collect certain technical and usage information,
              including through cookies, pixel tags, and similar technologies.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Cookies</strong> — small text files stored on your
                device that help us recognise your browser and improve site
                functionality. You can adjust your browser settings to refuse or
                alert you to cookies.
              </li>
              <li>
                <strong>Pixel tags</strong> — small code snippets that allow us
                or third parties to collect information such as your IP address
                when you view a page.
              </li>
              <li>
                <strong>Device and usage data</strong> — such as IP address,
                browser type, operating system, referring URLs, pages viewed,
                and interactions with our website or advertisements.
              </li>
              <li>
                <strong>Advertising identifiers</strong> — including identifiers
                assigned by third parties (for example, Google advertising IDs)
                used for measurement, analytics, and ad delivery. See{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F11F68] underline hover:opacity-80"
                >
                  Google&apos;s Privacy Policy
                </a>{" "}
                for more information on how Google uses data received from
                partner sites.
              </li>
            </ul>
            <p>
              Where we work with advertising networks and platforms, we follow
              their applicable privacy policies and use data to group audiences
              into relevant categories and deliver more effective advertising.
            </p>
          </section>

          <section>
            <h2 className="text-[#262626] text-[22px] md:text-[24px] leading-[30px] md:leading-[32px] font-bold mb-3">
              How we use your information
            </h2>
            <p className="mb-4">
              We use personal information collected from you directly,
              automatically, or from third parties to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, troubleshoot, and improve our Services.</li>
              <li>Respond to enquiries, complaints, and other communications.</li>
              <li>Manage your account and process your requests.</li>
              <li>
                Send service-related communications, including updates about
                your subscription or account.
              </li>
              <li>
                Send promotional communications where you have opted in (you
                may unsubscribe at any time).
              </li>
              <li>
                Analyse website and campaign performance, customer needs, and
                service effectiveness.
              </li>
              <li>
                Deliver and measure advertising, including ads we believe may be
                relevant to you.
              </li>
              <li>
                Personalise your experience on our website and Services.
              </li>
              <li>
                Detect fraud, enforce our terms, and comply with legal
                obligations.
              </li>
            </ul>
            <p className="mt-4">
              We may combine information collected from different sources to
              tailor communications, improve our Services, and develop content.
              This policy does not cover the practices of third parties who
              disclose information to us independently. Where we combine such
              information with data we collect, we apply this Privacy Policy
              unless we have disclosed otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-[#262626] text-[22px] md:text-[24px] leading-[30px] md:leading-[32px] font-bold mb-3">
              Data security, storage, and retention
            </h2>
            <p>
              We use industry-standard safeguards to protect personal information
              against unauthorised access, disclosure, alteration, or destruction.
              The level of protection corresponds to the sensitivity of the data.
              No security measure is completely infallible, and we cannot
              guarantee absolute security.
            </p>
            <p className="mt-4">
              Your information may be stored and processed by Next Audio or on
              our behalf by trusted service providers. We retain information for
              as long as necessary to fulfil the purposes described in this
              policy, or as required by applicable law and contractual
              obligations.
            </p>
          </section>

          <section>
            <h2 className="text-[#262626] text-[22px] md:text-[24px] leading-[30px] md:leading-[32px] font-bold mb-3">
              How we share information
            </h2>
            <p className="mb-4">
              We may share personal information with advertisers, partners,
              vendors, and service providers in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                With service providers who help us deliver our products and
                Services, under agreements requiring appropriate privacy
                protections and use limitations.
              </li>
              <li>
                With business and promotional partners to send you information
                about products or services that may interest you, where
                permitted and subject to your opt-out rights.
              </li>
              <li>
                In connection with a merger, acquisition, restructuring, or
                sale of assets, where personal information may be transferred as
                part of that transaction.
              </li>
              <li>
                Where required by law, regulation, legal process, or to protect
                our rights, users, or others — and only after verifying the
                lawful authority of the request where applicable.
              </li>
              <li>
                To prevent fraud or other unlawful activity, where permitted by
                law.
              </li>
            </ul>
            <p className="mt-4">
              Except as described above, we do not sell your personal
              information or disclose data that directly identifies you without
              your consent, unless we are legally required to do so.
            </p>
          </section>

          <section>
            <h2 className="text-[#262626] text-[22px] md:text-[24px] leading-[30px] md:leading-[32px] font-bold mb-3">
              Third-party links
            </h2>
            <p>
              Our website may contain links to third-party websites, including
              social media platforms. This Privacy Policy applies only to
              information collected by Next Audio. We are not responsible for
              the privacy practices of other websites and encourage you to read
              their privacy policies before providing personal information.
            </p>
          </section>

          <section>
            <h2 className="text-[#262626] text-[22px] md:text-[24px] leading-[30px] md:leading-[32px] font-bold mb-3">
              Your choices
            </h2>

            <h3 className="text-[#262626] text-[18px] leading-[28px] font-semibold mb-2">
              Marketing communications
            </h3>
            <p className="mb-4">
              You may opt out of promotional emails at any time by clicking
              &ldquo;unsubscribe&rdquo; in any marketing email we send, or by
              contacting us at{" "}
              <a
                href="mailto:suzi@nextaud.io"
                className="text-[#F11F68] underline hover:opacity-80"
              >
                suzi@nextaud.io
              </a>
              . If you opt out of marketing emails, we may still send you
              important administrative messages relating to our business
              relationship.
            </p>

            <h3 className="text-[#262626] text-[18px] leading-[28px] font-semibold mb-2">
              Advertising preferences
            </h3>
            <p className="mb-4">
              If you opt out of interest-based advertising, you may still see ads
              from Next Audio on other websites or applications, but those ads
              will not be tailored based on your interests.
            </p>

            <h3 className="text-[#262626] text-[18px] leading-[28px] font-semibold mb-2">
              Cookies
            </h3>
            <p>
              You can manage or disable cookies through your browser settings.
              Please note that disabling cookies may affect certain website
              features. If you clear cookies after opting out, your preferences
              may need to be set again.
            </p>
          </section>

          <section>
            <h2 className="text-[#262626] text-[22px] md:text-[24px] leading-[30px] md:leading-[32px] font-bold mb-3">
              Contact us
            </h2>
            <p>
              If you have questions about this Privacy Policy or how we handle
              your personal information, please contact us at{" "}
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
