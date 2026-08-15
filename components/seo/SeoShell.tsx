import Header from '@/components/Header';
import JsonLd from './JsonLd';
import Breadcrumbs from './Breadcrumbs';
import { organizationSchema, websiteSchema } from '@/lib/seo';
export default function SeoShell({ children, breadcrumbs }: { children: React.ReactNode; breadcrumbs: Array<{name:string;path:string}> }) {
  return <><Header /><JsonLd data={organizationSchema} /><JsonLd data={websiteSchema} /><main className="container section"><Breadcrumbs items={breadcrumbs} />{children}</main></>;
}
