import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Calculator from '@/components/Calculator';
import Comparison from '@/components/Comparison';
import Faq from '@/components/seo/Faq';
import JsonLd from '@/components/seo/JsonLd';
import { softwareToolSchema } from '@/lib/seo';
import { seoPages } from '@/app/seo-pages';

export function generateStaticParams() { return seoPages.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{slug:string}> }): Promise<Metadata> {
  const { slug } = await params; const page = seoPages.find((p) => p.slug === slug); if (!page) return {};
  return { title: `${page.title} — Free Online Tool`, description: page.description, alternates: { canonical: `/tools/${slug}` }, openGraph: { title: `${page.title} | TokenOrbit`, description: page.description, type:'website' } };
}

export default async function ToolPage({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params; const page = seoPages.find((p) => p.slug === slug); if (!page) notFound();
  const faq = [
    { question: `What does the ${page.title.toLowerCase()} do?`, answer: page.intro },
    { question: 'Are token counts always exact?', answer: 'No. Tokenization differs by model. TokenOrbit labels provider-backed or local tokenizer results and clearly identifies estimates.' },
    { question: 'Does TokenOrbit store my prompt?', answer: 'The basic browser-side calculator is designed to process text locally. Optional provider verification can send the text to the selected provider through the TokenOrbit server.' },
    { question: 'Can I use the result for billing?', answer: 'Use it for planning. Provider billing can include message structure, tools, caching rules, rounding and other request details that a simple text calculator may not reproduce.' }
  ];
  return <>
    <Header />
    <main className="container section">
      <JsonLd data={softwareToolSchema(page.title, page.description, `/tools/${slug}`)} />
      <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span className="crumb-sep">/</span><a href="/tools">Tools</a><span className="crumb-sep">/</span><span>{page.title}</span></nav>
      <div className="eyebrow">{page.eyebrow}</div>
      <h1 style={{fontSize:'clamp(42px,6vw,64px)'}}>{page.title}</h1>
      <p className="section-intro">{page.intro}</p>
      <Calculator />
      <div className="grid">
        {page.points.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
      </div>
      <div className="card content-block"><h2>How this tool should be used</h2><p>Start with a representative request, choose the closest supported model profile, and treat the result as a planning estimate unless TokenOrbit explicitly reports a provider-backed count. For production budgeting, compare the estimate with the provider’s current pricing and usage dashboard.</p><p>For related workflows, explore the <a className="text-link" href="/tools/model-cost-comparison">model cost comparison</a>, <a className="text-link" href="/tools/context-window-calculator">context window calculator</a> and <a className="text-link" href="/methodology">token methodology</a>.</p></div>
      <Faq items={faq} />
    </main>
  </>;
}
