import JsonLd from './JsonLd';
import { faqSchema } from '@/lib/seo';
export default function Faq({ items }: { items: Array<{ question: string; answer: string }> }) {
  return <section className="faq-section">
    <JsonLd data={faqSchema(items)} />
    <h2>Frequently asked questions</h2>
    <div className="faq-list">
      {items.map((item) => <details className="faq-item" key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
    </div>
  </section>;
}
