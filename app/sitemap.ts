import type { MetadataRoute } from 'next';
import { seoPages } from './seo-pages';
import { guides } from './guides-data';
import { models } from '@/data/models';

const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    '/',
    '/tools',
    '/tools/model-cost-comparison',
    '/models',
    '/guides',
    '/methodology',
    '/about',
    '/privacy',
    '/terms'
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => {
    const isTools = path.includes('tools');
    const isHome = path === '/';
    return {
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: isTools ? ('weekly' as const) : ('monthly' as const),
      priority: isHome ? 1 : isTools ? 0.8 : 0.6
    };
  });

  const seoEntries: MetadataRoute.Sitemap = seoPages.map((p) => ({
    url: `${base}/tools/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9
  }));

  const guideEntries: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${base}/guides/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75
  }));

  const modelEntries: MetadataRoute.Sitemap = models.map((m) => ({
    url: `${base}/models/${m.id}`,
    lastModified: new Date(m.pricingUpdated),
    changeFrequency: 'weekly' as const,
    priority: 0.7
  }));

  return [...staticEntries, ...seoEntries, ...guideEntries, ...modelEntries];
}
