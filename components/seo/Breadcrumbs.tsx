import JsonLd from './JsonLd';
import { breadcrumbSchema } from '@/lib/seo';
export default function Breadcrumbs({ items }: { items: Array<{ name: string; path: string }> }) {
  return <>
    <JsonLd data={breadcrumbSchema(items)} />
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, i) => <span key={item.path}>{i > 0 && <span className="crumb-sep">/</span>}<a href={item.path}>{item.name}</a></span>)}
    </nav>
  </>;
}
