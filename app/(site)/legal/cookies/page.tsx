import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Dataplexor uses cookies and similar technologies.",
  alternates: { canonical: "/legal/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie Policy" updated="July 1, 2026">
      <p>
        This policy explains how Dataplexor, Inc. uses cookies and similar
        technologies on www.dataplexor.com.
      </p>

      <h2>What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device by your browser.
        They help websites function, remember preferences and understand how
        visitors use the site.
      </p>

      <h2>Cookies we use</h2>
      <ul>
        <li>
          <strong>Strictly necessary cookies</strong> — required for core site
          functionality, such as security and session management (for example,
          the authentication cookie used by our content administrators). These
          cannot be disabled.
        </li>
        <li>
          <strong>Preference cookies</strong> — remember choices you make, such
          as region or dismissed notices.
        </li>
        <li>
          <strong>Analytics cookies</strong> — if enabled, help us understand
          aggregate site usage so we can improve content. We configure analytics
          to avoid collecting more personal data than necessary.
        </li>
      </ul>

      <h2>Managing cookies</h2>
      <p>
        Most browsers let you refuse or delete cookies through their settings.
        Blocking strictly necessary cookies may affect how the site functions.
        For more information about cookies generally, visit
        allaboutcookies.org.
      </p>

      <h2>Changes and contact</h2>
      <p>
        We may update this policy from time to time; the latest version will
        always be available on this page. Questions can be sent to
        info@dataplexor.com.
      </p>
    </LegalPage>
  );
}
