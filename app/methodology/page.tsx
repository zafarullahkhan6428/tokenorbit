import JsonLd from '@/components/seo/JsonLd';
import { softwareToolSchema } from '@/lib/seo';
export const metadata = { title: 'TokenOrbit Methodology', description: 'Learn how TokenOrbit estimates tokens, costs and context usage.' };
export default function Methodology() {
  return <>
    <JsonLd data={softwareToolSchema("TokenOrbit Methodology", "How TokenOrbit estimates tokens, costs and context usage.", "/methodology")} />
    <main className="container section">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span className="crumb-sep">/</span><span>Methodology</span></nav>
      <div className="eyebrow">Methodology</div><h1 style={{fontSize:48}}>How TokenOrbit counts and estimates tokens</h1>
      <p className="section-intro">TokenOrbit separates three modes instead of presenting every number as equally precise.</p>
      <div className="grid">
        <article className="card"><h3>1. Local tokenizer</h3><p>When a compatible tokenizer is available in the browser, TokenOrbit counts the supplied text locally. The current OpenAI path uses o200k_base through js-tiktoken.</p></article>
        <article className="card"><h3>2. Provider verification</h3><p>For providers with a supported counting API, users can explicitly request verification. The server calls the provider using a server-side API key. The text is not sent unless the user presses the verification button.</p></article>
        <article className="card"><h3>3. Estimate</h3><p>When neither method is available, TokenOrbit uses a transparent approximation and labels it as an estimate.</p></article>
      </div>
      <div className="card content-block"><h2>Why this matters</h2><p>Provider-specific tokenization and billing can differ from a generic character ratio. TokenOrbit therefore distinguishes local tokenizer results, provider verification and approximate counts rather than presenting all results as exact billing data.</p></div>
    </main>
  </>;
}
