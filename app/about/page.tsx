'use client';

import Header from '@/components/Header';

export default function About() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: '60px' }}>
          <div className="container">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className="crumb-sep">/</span>
              <span>About</span>
            </nav>
            <div className="eyebrow">About</div>
            <h1 style={{ fontSize: 'clamp(42px, 6vw, 64px)' }}>AI usage made easier to understand.</h1>
            <p className="section-intro">
              TokenOrbit is a focused toolkit for developers and AI users who want a clearer picture of token usage,
              context limits and model costs. We believe transparency beats precision when precision is impossible.
            </p>

            <article style={{ maxWidth: '820px', marginTop: '56px', lineHeight: '1.85' }}>
              <section style={{ marginTop: '36px' }}>
                <h2>Our Mission</h2>
                <p>
                  The AI industry moves fast. Token pricing is complex. Context windows vary wildly. And the same prompt
                  can cost different amounts depending on the model, timing, provider, and billing rules you're using.
                </p>
                <p>
                  TokenOrbit exists to help developers and AI users cut through this complexity. We provide transparent,
                  honest estimates that acknowledge their limits instead of pretending to be perfect.
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>Our Approach</h2>
                <p>
                  <strong>Transparency first:</strong> We label estimates as estimates. We show you the assumptions behind
                  our calculations. We tell you when a number is approximate rather than exact.
                </p>
                <p>
                  <strong>Privacy-first:</strong> Basic calculations happen in your browser. We don't need your prompt text,
                  API keys, or AI account details to give you useful estimates. Your data stays on your device unless you
                  explicitly share it.
                </p>
                <p>
                  <strong>Honest disclaimers:</strong> We'd rather show an honest estimate and explain its limits than
                  pretend a simple formula can replace a provider's actual tokenizer and billing dashboard.
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>What We Do</h2>
                <p>TokenOrbit provides practical tools for AI developers and users:</p>
                <ul style={{ color: 'var(--muted)', lineHeight: '1.8' }}>
                  <li>
                    <strong>AI Token Counter:</strong> Estimate how many tokens your prompt will consume
                  </li>
                  <li>
                    <strong>AI Cost Calculator:</strong> Plan your token budget and understand input vs output costs
                  </li>
                  <li>
                    <strong>Context Window Calculator:</strong> See how much of a model's context you're using
                  </li>
                  <li>
                    <strong>Model Cost Comparison:</strong> Compare the same workload across different AI providers
                  </li>
                  <li>
                    <strong>Educational Guides:</strong> Learn about tokens, pricing, and cost optimization
                  </li>
                </ul>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>Why Estimates Matter</h2>
                <p>
                  Different AI models use different tokenizers. OpenAI's GPT-4 tokenizes text differently than Anthropic's
                  Claude. And both differ from Gemini or DeepSeek.
                </p>
                <p>
                  On top of that, providers can price input and output differently. Some cache previous inputs at a
                  discount. Some charge for function calls or tools. Some have regional pricing or promotional rates.
                </p>
                <p>
                  Given all this variation, perfect precision is impossible. So TokenOrbit provides transparent estimates
                  and tells you exactly where they might be wrong. Then we recommend you verify against the provider's
                  official billing dashboard.
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>Who This Is For</h2>
                <p>
                  <strong>Developers:</strong> Building AI applications and need to budget token usage and costs without
                  sending your prompts to a backend.
                </p>
                <p>
                  <strong>Product Managers:</strong> Planning AI-powered features and need to understand cost implications
                  at scale.
                </p>
                <p>
                  <strong>AI Enthusiasts:</strong> Learning about how tokenization and model pricing work under the hood.
                </p>
                <p>
                  <strong>Researchers:</strong> Prototyping workflows and need quick estimates without setting up billing
                  accounts.
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>What We Don't Do</h2>
                <p>
                  <strong>We don't replace provider billing dashboards.</strong> Always verify your actual costs with the
                  official billing dashboard of your AI provider. Our estimates are for planning, not accounting.
                </p>
                <p>
                  <strong>We don't store your prompts.</strong> Unless you explicitly ask to save or share a calculation,
                  everything stays in your browser.
                </p>
                <p>
                  <strong>We don't access your API keys.</strong> You connect directly to your provider's API. We don't
                  store or proxy your credentials.
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>Our Values</h2>
                <p>
                  <strong>Accuracy over Convenience:</strong> We'd rather show you an honest estimate with caveats than a
                  simple answer that might mislead you.
                </p>
                <p>
                  <strong>Privacy by Default:</strong> Your prompts and data stay on your machine. No backend surveillance,
                  no unnecessary data collection.
                </p>
                <p>
                  <strong>Education First:</strong> We create guides to help you understand tokens and costs, not just
                  tools to hide the complexity.
                </p>
                <p>
                  <strong>Transparency:</strong> We label estimates as estimates. We show our work. We tell you when we
                  don't know something.
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>Future Direction</h2>
                <p>
                  TokenOrbit is still evolving. We're planning to:
                </p>
                <ul style={{ color: 'var(--muted)', lineHeight: '1.8' }}>
                  <li>Add more AI providers and model options</li>
                  <li>Improve tokenization accuracy through model-specific tokenizers</li>
                  <li>Create workflow optimization tools for common patterns</li>
                  <li>Build export and reporting features for teams</li>
                  <li>Expand educational content as the AI landscape evolves</li>
                </ul>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>Contact & Feedback</h2>
                <p>
                  We'd love to hear from you. Whether you have feature requests, bug reports, or just want to share how
                  you're using TokenOrbit:
                </p>
                <p style={{ color: 'var(--primary)' }}>
                  <strong>Email:</strong> zafar.pk6427@gmail.com
                  <br />
                  <strong>Twitter:</strong> @ZafarUllah68712
                  <br />
                  <strong>GitHub:</strong> github.com/zafarullahkhan6428
                </p>
              </section>

              <section style={{ marginTop: '36px' }}>
                <h2>Legal</h2>
                <p>
                  TokenOrbit provides estimates only. See our{' '}
                  <a href="/terms" style={{ color: 'var(--primary)' }}>
                    Terms of Use
                  </a>{' '}
                  for the full legal agreement and our{' '}
                  <a href="/privacy" style={{ color: 'var(--primary)' }}>
                    Privacy Policy
                  </a>{' '}
                  for how we handle your data.
                </p>
              </section>
            </article>
          </div>
        </section>

        <section className="section" style={{ borderTop: '1px solid var(--border)', paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Learn More</h2>
            <div className="grid">
              <a
                href="/guides"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  padding: '24px',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  background: 'rgba(13,20,34,.5)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'var(--primary)';
                  el.style.background = 'rgba(124,108,255,.05)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'var(--border)';
                  el.style.background = 'rgba(13,20,34,.5)';
                }}
              >
                <h3 style={{ marginTop: '0' }}>📚 Learning Guides</h3>
                <p style={{ color: 'var(--muted)', marginBottom: '0' }}>
                  Deep dive into tokens, pricing, and cost optimization
                </p>
              </a>
              <a
                href="/"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  padding: '24px',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  background: 'rgba(13,20,34,.5)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'var(--primary)';
                  el.style.background = 'rgba(124,108,255,.05)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'var(--border)';
                  el.style.background = 'rgba(13,20,34,.5)';
                }}
              >
                <h3 style={{ marginTop: '0' }}>🧮 Try the Calculator</h3>
                <p style={{ color: 'var(--muted)', marginBottom: '0' }}>
                  Start estimating tokens and costs right now
                </p>
              </a>
              <a
                href="/privacy"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  padding: '24px',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  background: 'rgba(13,20,34,.5)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'var(--primary)';
                  el.style.background = 'rgba(124,108,255,.05)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'var(--border)';
                  el.style.background = 'rgba(13,20,34,.5)';
                }}
              >
                <h3 style={{ marginTop: '0' }}>🔒 Privacy First</h3>
                <p style={{ color: 'var(--muted)', marginBottom: '0' }}>
                  Learn how we protect your data and privacy
                </p>
              </a>
            </div>
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
