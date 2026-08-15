import Header from "@/components/Header";
import Calculator from "@/components/Calculator";
import Comparison from "@/components/Comparison";
import AdSlot from "@/components/AdSlot";

const tools = [
  ["AI Token Counter", "Estimate prompt size, words, characters and token usage locally."],
  ["AI Cost Calculator", "Estimate input, output, per-run and monthly AI API costs."],
  ["Context Window Calculator", "See how much of a model context window your request may consume."],
  ["Model Cost Comparison", "Compare the same workload across configurable model pricing profiles."],
  ["Prompt Cost Calculator", "Plan repeated workflows by changing runs, output length and days."],
  ["Monthly AI Budget Calculator", "Forecast monthly token volume and approximate spend."]
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container">
            <div className="eyebrow">Private · Fast · No signup</div>
            <h1>Know your AI token cost before you generate.</h1>
            <p>TokenOrbit helps developers and AI users estimate tokens, context usage and LLM costs without sending prompt text to a backend.</p>
            <Calculator />
          </div>
        </section>

        <div className="container"><AdSlot label="Advertisement" /></div>

        <Comparison />

        <section className="section" id="tools">
          <div className="container">
            <div className="eyebrow">Toolkit</div>
            <h2>Useful AI cost tools, built around one problem</h2>
            <p className="section-intro">Start with the calculator. The architecture is designed to grow into a focused AI usage toolkit instead of a generic collection of unrelated utilities.</p>
            <div className="grid">
              {tools.map(([title, desc]) => <article className="card" key={title}><h3>{title}</h3><p>{desc}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section" id="learn">
          <div className="container">
            <div className="eyebrow">Learn</div>
            <h2>Understand tokens, not just the number</h2>
            <div className="grid">
              <article className="card"><h3>What is an AI token?</h3><p>Tokens are pieces of text processed by language models. A token is not always the same as a word, so word count alone is not enough for billing estimates.</p></article>
              <article className="card"><h3>Why are estimates approximate?</h3><p>Different models and providers use different tokenizers and request formats. This MVP uses transparent character-based estimates instead of pretending to provide exact billing counts.</p></article>
              <article className="card"><h3>Why does output matter?</h3><p>Many APIs price input and output separately. A short prompt can still become expensive when the generated response is long or the workflow runs repeatedly.</p></article>
            </div>
            <div style={{textAlign: 'center', marginTop: '2rem'}}>
              <a href="/guides" className="guide-button">Explore Guides</a>
            </div>
          </div>
        </section>

        <section className="section" id="methodology">
          <div className="container">
            <div className="eyebrow">Methodology</div>
            <h2>Transparent estimates instead of fake precision</h2>
            <div className="grid">
              <article className="card"><h3>1. Estimate input tokens</h3><p>TokenOrbit uses a lightweight browser-side heuristic based on characters, words and code-like text. It gives a range rather than pretending every provider uses the same tokenizer.</p></article>
              <article className="card"><h3>2. Apply pricing</h3><p>Input, cached-input and output rates are kept in a separate model dataset so pricing can be updated without changing calculator logic.</p></article>
              <article className="card"><h3>3. Show context usage</h3><p>The estimated input plus expected output is compared with the selected model profile's context window.</p></article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="card">
              <h2 style={{fontSize:30}}>Privacy-first by default</h2>
              <p className="section-intro">Basic calculations happen in your browser. TokenOrbit does not need your prompt text, API key or AI account to provide this first version.</p>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <div className="eyebrow">FAQ</div>
            <h2>AI token calculator questions</h2>
            <div className="grid">
              <article className="card"><h3>What is a token?</h3><p>A token is a piece of text processed by a language model. It can be part of a word, a whole short word, punctuation or other text.</p></article>
              <article className="card"><h3>Is the token count exact?</h3><p>Not in this MVP. TokenOrbit clearly labels its browser-side count as an estimate. Exact counts depend on the model's tokenizer and request format.</p></article>
              <article className="card"><h3>Why can API cost differ?</h3><p>Providers can have different input, cached-input and output prices, discounts, billing rules and pricing changes. Always verify against the provider's current documentation.</p></article>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <div>© 2026 TokenOrbit. Estimates only; verify provider pricing and usage.</div>
          <div><a href="/privacy">Privacy</a> · <a href="/terms">Terms</a> · <a href="/about">About</a></div>
        </div>
      </footer>
    </>
  );
}
