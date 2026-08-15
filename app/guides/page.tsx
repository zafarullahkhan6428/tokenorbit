import Header from '@/components/Header';
import { guides } from '@/app/guides-data';

export const metadata = {
  title: 'AI Token Guides',
  description: 'Practical guides explaining AI tokens, context windows, token pricing and LLM costs.',
};

export default function Guides() {
  return (
    <>
      <Header />
      <main className="container section">
        <div className="eyebrow">Learning hub</div>
        <h1 style={{ fontSize: 52 }}>AI token and cost guides</h1>
        <p className="section-intro">
          Original, practical explanations for developers and AI users who want to
          understand token usage and model costs.
        </p>
        <div className="grid">
          {guides.map((g) => (
            <a className="card" href={`/guides/${g.slug}`} key={g.slug}>
              <div className="badge">Guide</div>
              <h3 style={{ marginTop: 10 }}>{g.title}</h3>
              <p>{g.description}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
