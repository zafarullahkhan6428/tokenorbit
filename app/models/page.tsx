import { models } from "@/data/models";

export const metadata = {
  title: "AI Model Pricing Profiles",
  description: "Current AI model pricing profiles used by TokenOrbit for cost estimation."
};

export default function Models() {
  return (
    <main className="container section">
      <div className="eyebrow">Model data</div>
      <h1 style={{ fontSize: 52 }}>AI model pricing profiles</h1>
      <p className="section-intro">
        These are planning profiles used by TokenOrbit. Pricing changes frequently,
        so always check the provider's official pricing before making financial decisions.
      </p>
      <div className="grid">
        {models.map((m) => (
          <article className="card" key={m.id}>
            <span className="badge">Updated {m.pricingUpdated}</span>
            <h3 style={{ marginTop: 12 }}>
              {m.provider} — {m.name}
            </h3>
            <p>
              <strong>Context Window:</strong> {m.contextWindow.toLocaleString()} tokens
            </p>
            <p>
              <strong>Pricing:</strong> Input ${m.inputPerMillion}/1M · Output ${m.outputPerMillion}/1M
            </p>
            {m.cachedInputPerMillion > 0 && (
              <p>
                <strong>Cached Input:</strong> ${m.cachedInputPerMillion}/1M
              </p>
            )}
            <p style={{ color: "var(--muted)", fontSize: "12px", marginTop: 10 }}>
              Tokenizer: {m.tokenizer}
            </p>
            {m.pricingSource && (
              <p style={{ marginTop: 10 }}>
                <a href={m.pricingSource} target="_blank" rel="noreferrer">
                  → View provider pricing
                </a>
              </p>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}