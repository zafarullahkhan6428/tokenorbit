'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ paddingTop: '120px', paddingBottom: '120px', textAlign: 'center' }}>
          <div className="container">
            <h1 style={{ fontSize: '120px', margin: '0 0 16px', lineHeight: '1', color: 'var(--danger)' }}>⚠️</h1>
            <h2 style={{ fontSize: '36px', margin: '0 0 16px', letterSpacing: '-0.04em' }}>Something Went Wrong</h2>
            <p style={{ color: 'var(--muted)', maxWidth: '600px', margin: '0 auto 24px', fontSize: '18px', lineHeight: '1.7' }}>
              We encountered an unexpected error. This has been logged, and our team will look into it.
            </p>
            {error.message && (
              <div
                style={{
                  background: 'rgba(255, 107, 122, 0.1)',
                  border: '1px solid rgba(255, 107, 122, 0.2)',
                  borderRadius: '12px',
                  padding: '16px',
                  maxWidth: '600px',
                  margin: '0 auto 40px',
                  textAlign: 'left',
                  color: 'var(--muted)',
                  fontSize: '14px',
                  fontFamily: 'monospace',
                }}
              >
                <strong style={{ color: 'var(--danger)' }}>Error Details:</strong>
                <pre style={{ margin: '8px 0 0', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                  {error.message}
                </pre>
              </div>
            )}
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => reset()}
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
                  cursor: 'pointer',
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
                Try Again
              </button>
              <a
                href="/"
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
                Back to Home
              </a>
            </div>
          </div>
        </section>

        <section className="section" style={{ borderTop: '1px solid var(--border)', paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="container">
            <h3 style={{ fontSize: '20px', marginBottom: '20px' }}>What You Can Do</h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px',
                marginTop: '20px',
              }}
            >
              <div style={{ padding: '20px', background: 'var(--surface-2)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <h4 style={{ marginTop: '0' }}>Try Again</h4>
                <p style={{ color: 'var(--muted)', marginBottom: '0' }}>
                  Click the "Try Again" button above to refresh the page and retry the operation.
                </p>
              </div>
              <div style={{ padding: '20px', background: 'var(--surface-2)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <h4 style={{ marginTop: '0' }}>Clear Cache</h4>
                <p style={{ color: 'var(--muted)', marginBottom: '0' }}>
                  Try clearing your browser cache or using an incognito window if the error persists.
                </p>
              </div>
              <div style={{ padding: '20px', background: 'var(--surface-2)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <h4 style={{ marginTop: '0' }}>Return Home</h4>
                <p style={{ color: 'var(--muted)', marginBottom: '0' }}>
                  Visit the home page and try your request again or explore other features.
                </p>
              </div>
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
