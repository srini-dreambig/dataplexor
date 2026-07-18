import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Dataplexor collects, uses and protects personal information.",
  alternates: { canonical: "/legal/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 1, 2026">
      <p>
        Dataplexor, Inc. (&quot;Dataplexor&quot;, &quot;we&quot;, &quot;us&quot;)
        respects your privacy. This policy explains what personal information we
        collect through our website and services, how we use it, and the choices
        you have.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Information you provide</strong> — such as your name, email
          address, company and message content when you contact us, request a
          demo, subscribe to updates or apply for a role.
        </li>
        <li>
          <strong>Usage information</strong> — standard technical data such as
          IP address, browser type, pages visited and referring URLs, collected
          through server logs and cookies (see our Cookie Policy).
        </li>
        <li>
          <strong>Business contact information</strong> — obtained in the course
          of providing services to our clients, handled under the relevant
          client agreement.
        </li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>To respond to enquiries and provide requested services</li>
        <li>To operate, secure and improve our website and products</li>
        <li>To send communications you have requested, which you may opt out of at any time</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2>Legal bases</h2>
      <p>
        Where the GDPR or similar laws apply, we process personal data on the
        bases of consent, performance of a contract, our legitimate interests in
        operating and promoting our business, and compliance with legal
        obligations.
      </p>

      <h2>Sharing</h2>
      <p>
        We do not sell personal information. We share it only with service
        providers who process it on our behalf under contract, with professional
        advisers, in connection with a corporate transaction, or where required
        by law.
      </p>

      <h2>Retention and security</h2>
      <p>
        We retain personal information only as long as needed for the purposes
        described above and protect it with administrative, technical and
        organizational safeguards appropriate to its sensitivity.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct,
        delete, restrict or port your personal information, and to object to
        certain processing. To exercise these rights, contact us at
        info@dataplexor.com. You may also lodge a complaint with your local
        supervisory authority.
      </p>

      <h2>International transfers</h2>
      <p>
        Where personal data is transferred across borders, we rely on
        appropriate safeguards such as standard contractual clauses.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy can be sent to info@dataplexor.com or to
        our headquarters address listed on the Contact page. We may update this
        policy from time to time; material changes will be posted on this page.
      </p>
    </LegalPage>
  );
}
