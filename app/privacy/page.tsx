import Header from '@/components/Header';

export const metadata = {
  title: 'Privacy Policy',
  description: 'TokenOrbit privacy policy - how we handle your data and protect your privacy.',
};

export default function Privacy() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: '60px' }}>
          <div className="container">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className="crumb-sep">/</span>
              <span>Privacy Policy</span>
            </nav>
            <h1 style={{ fontSize: 'clamp(42px, 6vw, 64px)' }}>Privacy Policy</h1>
            <p className="section-intro">
              TokenOrbit respects your privacy. This policy explains how we handle your information and protect your data.
              Last updated: August 2026.
            </p>

            <article style={{ maxWidth: '820px', marginTop: '36px', lineHeight: '1.85' }}>
              <section style={{ marginTop: '36px' }}>
                <h2>Overview</h2>
                <p>
                  TokenOrbit is a privacy-first AI token calculator. Our primary principle is to process calculations
                  locally in your browser without uploading your prompt text or personal information to our servers.
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>What Data We Collect</h2>
                <p>
                  <strong>Calculator Inputs:</strong> Your prompt text and calculation parameters are processed entirely
                  in your browser and are not sent to TokenOrbit servers by default.
                </p>
                <p>
                  <strong>Usage Analytics:</strong> We may collect anonymized usage data such as:
                </p>
                <ul style={{ color: 'var(--muted)', lineHeight: '1.8' }}>
                  <li>Page views and referrer information</li>
                  <li>Browser type and operating system</li>
                  <li>General geographic location (country level)</li>
                  <li>Time spent on pages</li>
                  <li>Features used (without content details)</li>
                </ul>
                <p>
                  <strong>Error Logging:</strong> When errors occur, we may log anonymized error details to improve
                  service reliability.
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>Local Processing</h2>
                <p>
                  TokenOrbit uses browser-side tokenization and cost calculations. Your prompts and calculations remain on
                  your device unless you explicitly choose to share them. We do not access or store your prompt text on our
                  servers.
                </p>
                <p>
                  <strong>Important:</strong> Some advanced features may require optional backend integration. If you use
                  these features, additional data may be transmitted, and we will request your explicit consent first.
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>Cookies and Tracking</h2>
                <p>
                  TokenOrbit uses minimal cookies and tracking technologies. We may use:
                </p>
                <ul style={{ color: 'var(--muted)', lineHeight: '1.8' }}>
                  <li>
                    <strong>Essential Cookies:</strong> Required for site functionality
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> To understand usage patterns and improve the service
                  </li>
                  <li>
                    <strong>Advertising Cookies:</strong> From third-party ad networks (if applicable)
                  </li>
                </ul>
                <p>You can disable cookies in your browser settings. The site will still work, though some features may be limited.</p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>Third-Party Services</h2>
                <p>TokenOrbit may use third-party services for:</p>
                <ul style={{ color: 'var(--muted)', lineHeight: '1.8' }}>
                  <li>
                    <strong>Analytics:</strong> To measure site performance and user behavior
                  </li>
                  <li>
                    <strong>Advertising:</strong> To display relevant ads and support the service
                  </li>
                  <li>
                    <strong>Hosting:</strong> To serve the website and store non-sensitive data
                  </li>
                </ul>
                <p>
                  These third parties have their own privacy policies. We recommend reviewing them. We do not share your
                  prompt text or calculator inputs with these services unless you explicitly request it.
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>API Provider Integration</h2>
                <p>
                  If you use TokenOrbit to test or verify against actual AI provider APIs, your requests go directly to
                  those providers. We do not store or relay your API keys. You are responsible for managing your API
                  credentials and understanding the privacy policies of the AI providers you use.
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>Data Security</h2>
                <p>
                  We implement reasonable security measures to protect against unauthorized access, disclosure, or
                  modification. These include:
                </p>
                <ul style={{ color: 'var(--muted)', lineHeight: '1.8' }}>
                  <li>HTTPS encryption for all communications</li>
                  <li>Regular security assessments and updates</li>
                  <li>Minimal data retention in server logs</li>
                </ul>
                <p>
                  However, no security system is perfect. If you suspect a breach, please contact us immediately.
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>Data Retention</h2>
                <p>
                  <strong>Browser Data:</strong> Calculations and prompts exist only in your browser session. We do not
                  automatically store them.
                </p>
                <p>
                  <strong>Server Logs:</strong> We retain anonymized server logs for up to 30 days for security and
                  performance monitoring.
                </p>
                <p>
                  <strong>Analytics:</strong> Aggregated analytics data may be retained longer for trend analysis.
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>Your Rights</h2>
                <p>Depending on your location, you may have the right to:</p>
                <ul style={{ color: 'var(--muted)', lineHeight: '1.8' }}>
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data (right to be forgotten)</li>
                  <li>Opt-out of analytics and advertising cookies</li>
                  <li>Receive your data in a portable format</li>
                </ul>
                <p>To exercise these rights, contact us at privacy@tokenorbit.io</p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>Children's Privacy</h2>
                <p>
                  TokenOrbit is not intended for users under 13. We do not knowingly collect personal information from
                  children. If we discover we have inadvertently done so, we will delete such information immediately.
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify users of material changes by
                  updating the "Last updated" date at the top of this page and, if necessary, by email.
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>Contact Us</h2>
                <p>
                  If you have questions about this privacy policy or our privacy practices, please contact us at:
                </p>
                <p style={{ color: 'var(--primary)' }}>
                  <strong>Email:</strong> privacy@tokenorbit.io
                  <br />
                  <strong>Address:</strong> TokenOrbit, San Francisco, CA
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
