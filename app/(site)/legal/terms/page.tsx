import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the Dataplexor website and content.",
  alternates: { canonical: "/legal/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="July 1, 2026">
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of the
        website operated by Dataplexor, Inc. at www.dataplexor.com. By accessing
        the site you agree to these Terms. Services delivered to clients are
        governed by separate written agreements, which prevail over these Terms.
      </p>

      <h2>Use of the site</h2>
      <p>
        You may use this site for lawful purposes only. You agree not to
        interfere with its operation, attempt unauthorized access to any
        systems, scrape content at scale, or use the site to transmit malicious
        code.
      </p>

      <h2>Intellectual property</h2>
      <p>
        All content on this site — including text, graphics, logos, product
        names and software — is owned by or licensed to Dataplexor and protected
        by intellectual property laws. Dataplexor, PlexusCore, PlexusIQ and
        AgentMesh are trademarks of Dataplexor, Inc. You may view and download
        content for your internal, non-commercial use, provided you retain all
        proprietary notices.
      </p>

      <h2>Content and no advice</h2>
      <p>
        Content on this site, including research and insights, is provided for
        general information only. It does not constitute professional,
        investment or legal advice, and should not be relied upon as such.
      </p>

      <h2>Third-party links</h2>
      <p>
        Links to third-party sites are provided for convenience. We are not
        responsible for their content or practices.
      </p>

      <h2>Disclaimers and limitation of liability</h2>
      <p>
        The site is provided &quot;as is&quot; without warranties of any kind,
        express or implied. To the maximum extent permitted by law, Dataplexor
        will not be liable for any indirect, incidental, special or
        consequential damages arising from your use of the site.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these Terms at any time by posting a revised version on
        this page. Continued use of the site after changes constitutes
        acceptance.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of the State of California, without
        regard to conflict-of-law principles. Questions may be directed to
        info@dataplexor.com.
      </p>
    </LegalPage>
  );
}
