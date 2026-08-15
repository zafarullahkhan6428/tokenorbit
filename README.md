# TokenOrbit

AI token and cost estimation toolkit for developers and AI users.

TokenOrbit helps you estimate tokens, context usage, and LLM costs without sending your prompts to a backend. All calculations happen locally in your browser.

## Features

- **AI Token Counter** - Estimate how many tokens your prompt will consume
- **AI Cost Calculator** - Plan your token budget and understand input vs output costs
- **Context Window Calculator** - See how much of a model's context you're using
- **Model Cost Comparison** - Compare the same workload across different AI providers
- **Prompt Cost Calculator** - Plan repeated workflows by changing runs, output length and days
- **Monthly AI Budget Calculator** - Forecast monthly token volume and approximate spend
- **Learning Guides** - Educational content on tokens, pricing, and cost optimization
- **Privacy-First** - Browser-side calculations, no backend storage of prompts
- **Model Support** - OpenAI, Anthropic, Google Gemini, DeepSeek, and more

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/zafarullahkhan6428/tokenorbit.git
cd tokenorbit
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Then edit `.env.local` if you need to add API keys for provider verification features.

4. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run validate:pricing` - Validate pricing dataset integrity

## Project Structure

```
tokenorbit/
├── app/                      # Next.js app directory
│   ├── api/                  # API routes
│   ├── guides/               # Learning guides
│   ├── tools/                # Tool pages
│   ├── about/                # About page
│   ├── privacy/              # Privacy policy
│   ├── terms/                # Terms of use
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   ├── globals.css           # Global styles
│   ├── not-found.tsx         # 404 page
│   └── error.tsx             # Error boundary
├── components/               # React components
│   ├── Calculator.tsx        # Token calculator
│   ├── Comparison.tsx        # Model comparison
│   ├── Header.tsx            # Site header
│   ├── AdSlot.tsx            # Ad placeholder
│   └── seo/                  # SEO components
├── data/                     # Data files
│   ├── models.ts             # Model pricing data
│   └── pricing.json          # Pricing configuration
├── lib/                      # Utility functions
│   ├── calculator.ts         # Calculation logic
│   ├── tokenizer.ts          # Tokenization logic
│   └── seo.ts                # SEO utilities
├── public/                   # Static assets
├── scripts/                  # Build scripts
│   └── validate-pricing.mjs  # Pricing validator
├── .env.example              # Environment variables template
├── .gitignore                # Git ignore rules
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## Deployment

### Deploy to Vercel (Recommended)

Vercel is the recommended hosting platform for Next.js applications:

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to [vercel.com](https://vercel.com) and sign up/log in

3. Click "Add New Project" and select your GitHub repository

4. Configure environment variables:
   - `NEXT_PUBLIC_SITE_URL` - Your production URL (e.g., https://tokenorbit.example.com)
   - `GEMINI_API_KEY` - Optional, for Gemini API verification
   - `ANTHROPIC_API_KEY` - Optional, for Anthropic API verification

5. Click "Deploy"

Your site will be live at a Vercel URL immediately.

### Deploy to Other Platforms

#### Netlify
```bash
npm run build
# Upload the `out/` directory to Netlify
```

#### Docker
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
EXPOSE 3000
CMD ["npm", "start"]
```

Build and push:
```bash
docker build -t tokenorbit:latest .
docker push your-registry/tokenorbit:latest
```

#### Self-Hosted (VPS/Linux Server)
```bash
# On your server
git clone https://github.com/zafarullahkhan6428/tokenorbit.git
cd tokenorbit
npm install
npm run build

# Start with PM2 or similar process manager
npm install -g pm2
pm2 start npm --name "tokenorbit" -- start
```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Site URL (required for production)
NEXT_PUBLIC_SITE_URL=https://tokenorbit.example.com

# Optional API keys for provider verification (server-side only)
GEMINI_API_KEY=your_gemini_key_here
ANTHROPIC_API_KEY=your_anthropic_key_here
```

**Important**: Never commit `.env.local` to version control. Use `.env.example` as a template.

## Development

### Tech Stack
- **Framework**: Next.js 15.5
- **Language**: TypeScript
- **Styling**: CSS (no frameworks)
- **Tokenization**: js-tiktoken (OpenAI o200k_base)
- **Runtime**: React 19.1

### Adding New Models

Edit `data/models.ts` to add new pricing profiles:

```typescript
{
  id: 'provider-model-id',
  name: 'Provider Model Name',
  inputPrice: 0.001,        // per 1K tokens
  outputPrice: 0.002,       // per 1K tokens
  cachedInputPrice: 0.0005, // optional
  contextWindow: 128000,
  description: 'Model description',
  source: 'https://provider.com/pricing',
  updateDate: '2026-08-15'
}
```

Then validate:
```bash
npm run validate:pricing
```

### Adding New Guides

1. Add guide metadata to `app/guides-data.ts`:
```typescript
{
  slug: 'guide-slug',
  title: 'Guide Title',
  description: 'Short description'
}
```

2. Add guide content to `app/guides/[slug]/page.tsx` in the `content` object

### Building

```bash
npm run build
```

This creates an optimized production build. The `.next` directory contains the build output.

## Important Notes

### Token Accuracy

TokenOrbit uses browser-side heuristics and the OpenAI `o200k_base` tokenizer. It is **not** a provider-exact tokenizer for all models. Always verify exact token counts with:
- Your AI provider's official API tokenization endpoints
- Your provider's billing dashboard for actual charges

### Pricing Verification

Model pricing changes frequently. Before deployment:

1. Update `data/models.ts` with current pricing from provider docs
2. Run validation: `npm run validate:pricing`
3. Include source URLs and update dates for each model
4. Never add pricing from memory

### Privacy & Compliance

- Basic calculator inputs are processed in your browser
- We do not store prompt text on our servers
- For production deployments, update:
  - Privacy Policy (`app/privacy/page.tsx`)
  - Terms of Use (`app/terms/page.tsx`)
  - Contact information throughout

### Ad Network Setup

Ad slots are intentionally non-functional placeholders. To enable advertising:

1. Replace `<AdSlot />` components with your ad network code
2. Update Privacy Policy with ad vendor details
3. Implement cookie consent if required
4. Do not click your own ads

## Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Support

- **Issues**: GitHub Issues
- **Email**: hello@tokenorbit.io
- **Twitter**: @tokenorbit
- **GitHub**: https://github.com/zafarullahkhan6428/tokenorbit

## Changelog

### V1.4 (Current)
- SEO optimization with sitemap, robots.txt, and metadata
- Learning guides hub with 5 comprehensive guides
- Error boundary pages (404, error)
- Privacy, Terms, and About pages
- Guide button in navigation and homepage
- Breadcrumb navigation

### V1.2
- Browser-side o200k_base tokenizer (OpenAI)
- Provider tokenizer vs estimate labels
- Pricing source URLs and update dates

### V1.1
- Expanded model dataset
- Cached input pricing
- Code-aware tokenization heuristic
- Estimate ranges
- Context window calculation
- Monthly forecasting
- CSV export

V1.4 adds an SEO-first content architecture based on Google's current Search Central guidance: descriptive topical URLs, canonical metadata, XML sitemap coverage, robots directives, useful internal links, breadcrumbs and page-specific structured data. Structured data can make pages eligible for supported search features but does not guarantee a rich result or higher ranking.

New landing pages:
- /tools/ai-token-counter
- /tools/ai-cost-calculator
- /tools/llm-cost-calculator
- /tools/context-window-calculator
- /tools/prompt-cost-calculator
- /tools/monthly-ai-cost-calculator
- /tools/model-cost-comparison

New guide hub:
- /guides
- /guides/what-are-ai-tokens
- /guides/how-ai-token-pricing-works
- /guides/context-windows-explained
- /guides/input-vs-output-tokens
- /guides/how-to-reduce-ai-api-cost

Before launch, set NEXT_PUBLIC_SITE_URL to the real HTTPS domain. Do not submit localhost URLs to Search Console.

SEO note: Google recommends useful, original, up-to-date, people-first content and logical site organization. Avoid creating many near-identical pages just to target keyword variants.

AdSense note: V1.4 does not activate AdSense. Google says sites should have unique, relevant content, clear navigation and a good user experience before applying. Keep the calculator usable and avoid intrusive ad placements.

## V1.4 launch checklist

1. Set `NEXT_PUBLIC_SITE_URL` to the production HTTPS domain.
2. Verify every model price and context-window value against the provider's current official documentation.
3. Run `npm run validate:pricing` before deployment.
4. Deploy to production and verify `robots.txt`, `sitemap.xml`, canonical URLs and every internal link.
5. Add the property to Google Search Console and submit the sitemap.
6. Inspect representative URLs in Search Console and request indexing where appropriate.
7. Publish additional genuinely useful guides based on search demand; avoid creating near-duplicate keyword pages.
8. Add AdSense only after the site has substantial original content, clear navigation and a good user experience.
