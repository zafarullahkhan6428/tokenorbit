'use client';

import Header from '@/components/Header';

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ paddingTop: '120px', paddingBottom: '120px', textAlign: 'center' }}>
          <div className="container">
            <h1 style={{ fontSize: '120px', margin: '0 0 16px', lineHeight: '1', color: 'var(--primary)' }}>404</h1>
            <h2 style={{ fontSize: '36px', margin: '0 0 16px', letterSpacing: '-0.04em' }}>Page Not Found</h2>
            <p style={{ color: 'var(--muted)', maxWidth: '600px', margin: '0 auto 40px', fontSize: '18px', lineHeight: '1.7' }}>
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="/"
                style={{
                  display: 'inline-block',
                  padding: '12px 24px',
                  background: 'linear-gradient(135deg,var(--primary),var(--primary-2))',
                  color: 'var(--text)',
                  borderRadius: '12px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  border: '1px solid transparent',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateY(-2px)';
                  el.style.boxShadow = '0 8px 20px rgba(124,108,255,.3)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = 'none';
                }}
              >
                Back to Home
              </a>
              <a
                href="/guides"
                style={{
                  display: 'inline-block',
                  padding: '12px 24px',
                  background: 'var(--surface-2)',
                  color: 'var(--text)',
                  borderRadius: '12px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  border: '1px solid var(--border)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateY(0)';
                }}
              >
                Explore Guides
              </a>
            </div>
          </div>
        </section>

        <section className="section" style={{ borderTop: '1px solid var(--border)', paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="container">
            <h3 style={{ fontSize: '20px', marginBottom: '20px' }}>Quick Links</h3>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              <a href="/" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '16px', padding: '12px 0' }}>
                → Home
              </a>
              <a href="/#calculator" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '16px', padding: '12px 0' }}>
                → Token Calculator
              </a>
              <a href="/#compare" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '16px', padding: '12px 0' }}>
                → Compare Models
              </a>
              <a href="/guides" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '16px', padding: '12px 0' }}>
                → Learning Guides
              </a>
              <a href="/about" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '16px', padding: '12px 0' }}>
                → About
              </a>
              <a href="/privacy" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '16px', padding: '12px 0' }}>
                → Privacy
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
