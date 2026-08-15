import Header from '@/components/Header';

export const metadata = {
  title: 'Terms of Use',
  description: 'TokenOrbit terms of use - the legal agreement for using our service.',
};

export default function Terms() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: '60px' }}>
          <div className="container">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className="crumb-sep">/</span>
              <span>Terms of Use</span>
            </nav>
            <h1 style={{ fontSize: 'clamp(42px, 6vw, 64px)' }}>Terms of Use</h1>
            <p className="section-intro">
              By using TokenOrbit, you agree to these terms. Please read them carefully before accessing our service.
              Last updated: August 2026.
            </p>

            <article style={{ maxWidth: '820px', marginTop: '36px', lineHeight: '1.85' }}>
              <section style={{ marginTop: '36px' }}>
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing or using TokenOrbit ("the Service"), you agree to be bound by these Terms of Use and all
                  applicable laws and regulations. If you do not agree with any part of these terms, you may not use the
                  Service.
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>2. Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials (information or software) on
                  TokenOrbit for personal, non-commercial transitory viewing only. This is the grant of a license, not a
                  transfer of title, and under this license you may not:
                </p>
                <ul style={{ color: 'var(--muted)', lineHeight: '1.8' }}>
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software</li>
                  <li>Remove any copyright or other proprietary notations</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>3. Disclaimer of Warranties</h2>
                <p>
                  <strong>ESTIMATES ONLY:</strong> TokenOrbit provides estimates for planning purposes only. All
                  calculations, token counts, cost projections, and other outputs are approximations and should not be
                  relied upon as exact.
                </p>
                <p>
                  The materials on TokenOrbit are provided on an "as is" basis. TokenOrbit makes no warranties, expressed
                  or implied, and hereby disclaims and negates all other warranties including, without limitation, implied
                  warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
                  intellectual property or other violation of rights.
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>4. Limitations of Liability</h2>
                <p>
                  In no event shall TokenOrbit or its suppliers be liable for any damages (including, without limitation,
                  damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                  to use the materials on TokenOrbit, even if TokenOrbit or an authorized representative has been notified
                  orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>5. Accuracy of Materials</h2>
                <p>
                  The materials appearing on TokenOrbit could include technical, typographical, or photographic errors.
                  TokenOrbit does not warrant that any of the materials on its website are accurate, complete, or current.
                  TokenOrbit may make changes to the materials contained on its website at any time without notice.
                </p>
                <p>
                  <strong>Important:</strong> Token counts and cost estimates are not precise and may differ from actual
                  provider billing due to:
                </p>
                <ul style={{ color: 'var(--muted)', lineHeight: '1.8' }}>
                  <li>Different tokenization methods used by different AI providers</li>
                  <li>Request envelope costs, tools, and API overhead</li>
                  <li>Caching, batching, and other billing rules</li>
                  <li>Pricing changes and regional variations</li>
                  <li>Taxes, discounts, and promotional rates</li>
                </ul>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>6. Use of AI Provider APIs</h2>
                <p>
                  If you connect TokenOrbit to third-party AI provider APIs (such as OpenAI, Anthropic, Google, etc.):
                </p>
                <ul style={{ color: 'var(--muted)', lineHeight: '1.8' }}>
                  <li>You are solely responsible for managing your API credentials and keys</li>
                  <li>You agree to comply with each provider's terms of service</li>
                  <li>You are responsible for all charges incurred through your use of their APIs</li>
                  <li>TokenOrbit does not store or have access to your API keys</li>
                </ul>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>7. No Billing Guarantee</h2>
                <p>
                  <strong>TokenOrbit estimates are for planning only.</strong> Do not use the Service as a substitute for:
                </p>
                <ul style={{ color: 'var(--muted)', lineHeight: '1.8' }}>
                  <li>An AI provider's official pricing page</li>
                  <li>A provider's billing dashboard or billing API</li>
                  <li>Professional financial or accounting advice</li>
                </ul>
                <p>
                  Always verify your actual costs with your AI provider's official billing and usage dashboards before
                  making budget decisions.
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>8. Acceptable Use Policy</h2>
                <p>You agree not to use TokenOrbit in ways that:</p>
                <ul style={{ color: 'var(--muted)', lineHeight: '1.8' }}>
                  <li>Violate any applicable law or regulation</li>
                  <li>Infringe upon the rights of others, including intellectual property rights</li>
                  <li>Attempt to gain unauthorized access to our systems or services</li>
                  <li>Introduce viruses, malware, or other harmful code</li>
                  <li>Abuse the Service with excessive requests or scraping</li>
                  <li>Engage in harassment, threats, or illegal activity</li>
                  <li>Interfere with or disrupt the integrity or performance of the Service</li>
                </ul>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>9. Rate Limiting and Abuse</h2>
                <p>
                  TokenOrbit may impose rate limits and usage restrictions to ensure fair access and service stability. We
                  reserve the right to suspend or terminate access for users who:
                </p>
                <ul style={{ color: 'var(--muted)', lineHeight: '1.8' }}>
                  <li>Violate rate limits or usage policies</li>
                  <li>Engage in abusive or malicious behavior</li>
                  <li>Violate any terms in this agreement</li>
                </ul>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>10. Modifications to the Service</h2>
                <p>
                  TokenOrbit may modify or discontinue the Service (or any part thereof) at any time with or without notice.
                  We will not be liable to you or any third party for any modification, suspension, or discontinuance of
                  the Service.
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>11. Termination</h2>
                <p>
                  TokenOrbit may terminate or suspend your access to the Service immediately, without prior notice or
                  liability, for any reason whatsoever, including if you breach the Terms.
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>12. Third-Party Links</h2>
                <p>
                  TokenOrbit may contain links to third-party websites and services. We are not responsible for the
                  content, accuracy, or practices of these external sites. Your use of third-party websites is governed by
                  their own terms and privacy policies.
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>13. Intellectual Property</h2>
                <p>
                  All content, features, and functionality on TokenOrbit (including but not limited to all text, graphics,
                  logos, and code) are the exclusive property of TokenOrbit and are protected by copyright and other
                  intellectual property laws.
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>14. User-Generated Content</h2>
                <p>
                  By using TokenOrbit, you retain all rights to any content you generate or provide. However, by using the
                  Service, you grant us a limited license to use this content to improve our estimates and service quality
                  (while maintaining your privacy and security).
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>15. Governing Law</h2>
                <p>
                  These Terms and Conditions and all related documents are governed by and construed in accordance with the
                  laws of the State of California, without regard to its conflict of law provisions.
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>16. Dispute Resolution</h2>
                <p>
                  Any dispute arising out of or relating to these Terms or your use of TokenOrbit shall be resolved through
                  binding arbitration under the American Arbitration Association rules, or through small claims court if you
                  prefer.
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>17. Contact Information</h2>
                <p>If you have questions about these Terms of Use, please contact us at:</p>
                <p style={{ color: 'var(--primary)' }}>
                  <strong>Email:</strong> legal@tokenorbit.io
                  <br />
                  <strong>Address:</strong> TokenOrbit, San Francisco, CA
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>18. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting
                  to the website. Your continued use of TokenOrbit after changes are posted constitutes your acceptance of
                  the modified terms.
                </p>
              </section>
            </article>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <div>© 2026 TokenOrbit. Estimates only; verify provider pricing and usage.</div>
          <div>
            <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a> · <a href="/about">About</a>
          </div>
        </div>
      </footer>
    </>
  );
}
