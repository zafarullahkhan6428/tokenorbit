export type TokenizerKind = "openai-o200k" | "provider-api" | "estimate";
export type ProviderApi = "gemini" | "anthropic";

export type ModelProfile = {
  id: string;
  provider: string;
  name: string;
  modelId: string;
  inputPerMillion: number;
  cachedInputPerMillion: number;
  outputPerMillion: number;
  contextWindow: number;
  tokenizer: TokenizerKind;
  providerApi?: ProviderApi;
  exactLabel: boolean;
  pricingSource: string;
  docsSource: string;
  pricingUpdated: string;
  note: string;
};

// Pricing is intentionally centralized here. Update this registry after verifying
// each provider's official pricing/model documentation. Do not scatter prices in UI components.
export const models: ModelProfile[] = [
  {
    id: "gpt-5.6-luna", provider: "OpenAI", name: "GPT-5.6 Luna", modelId: "gpt-5.6-luna",
    inputPerMillion: 1, cachedInputPerMillion: 0.1, outputPerMillion: 6, contextWindow: 1_050_000,
    tokenizer: "openai-o200k", exactLabel: true,
    pricingSource: "https://openai.com/api/pricing/", docsSource: "https://developers.openai.com/api/docs/models",
    pricingUpdated: "2026-08-15", note: "Local o200k_base tokenization for plain text. Provider request envelopes, tools and other inputs can change actual usage."
  },
  {
    id: "gpt-5-mini", provider: "OpenAI", name: "GPT-5 mini", modelId: "gpt-5-mini",
    inputPerMillion: 0.25, cachedInputPerMillion: 0.025, outputPerMillion: 2, contextWindow: 400_000,
    tokenizer: "openai-o200k", exactLabel: true,
    pricingSource: "https://openai.com/api/pricing/", docsSource: "https://developers.openai.com/api/docs/models/gpt-5-mini",
    pricingUpdated: "2026-08-15", note: "Local o200k_base tokenization for plain text."
  },
  {
    id: "gpt-5-nano", provider: "OpenAI", name: "GPT-5 nano", modelId: "gpt-5-nano",
    inputPerMillion: 0.05, cachedInputPerMillion: 0.005, outputPerMillion: 0.4, contextWindow: 400_000,
    tokenizer: "openai-o200k", exactLabel: true,
    pricingSource: "https://openai.com/api/pricing/", docsSource: "https://developers.openai.com/api/docs/models/gpt-5-nano",
    pricingUpdated: "2026-08-15", note: "Local o200k_base tokenization for plain text."
  },
  {
    id: "gemini-3.6-flash", provider: "Google", name: "Gemini 3.6 Flash", modelId: "gemini-3.6-flash",
    inputPerMillion: 0, cachedInputPerMillion: 0, outputPerMillion: 0, contextWindow: 1_000_000,
    tokenizer: "provider-api", providerApi: "gemini", exactLabel: true,
    pricingSource: "https://ai.google.dev/gemini-api/docs/pricing", docsSource: "https://ai.google.dev/api/tokens",
    pricingUpdated: "2026-08-15", note: "Exact count is available through Google's models.countTokens API when GEMINI_API_KEY is configured on the server. Pricing must be verified before launch."
  },
  {
    id: "claude-sonnet-example", provider: "Anthropic", name: "Claude Sonnet — configurable profile", modelId: "claude-sonnet",
    inputPerMillion: 3, cachedInputPerMillion: 0.3, outputPerMillion: 15, contextWindow: 200_000,
    tokenizer: "provider-api", providerApi: "anthropic", exactLabel: true,
    pricingSource: "https://www.anthropic.com/pricing#api", docsSource: "https://docs.anthropic.com/",
    pricingUpdated: "2026-08-15", note: "Exact token counting can be delegated to Anthropic's token-counting endpoint when ANTHROPIC_API_KEY is configured. Replace this profile's pricing/model ID with a verified current model before launch."
  },
  {
    id: "deepseek-estimate", provider: "DeepSeek", name: "DeepSeek — estimate", modelId: "deepseek",
    inputPerMillion: 0, cachedInputPerMillion: 0, outputPerMillion: 0, contextWindow: 128_000,
    tokenizer: "estimate", exactLabel: false,
    pricingSource: "https://api-docs.deepseek.com/quick_start/pricing", docsSource: "https://api-docs.deepseek.com/",
    pricingUpdated: "2026-08-15", note: "No provider-specific exact counter is wired into this release. Treat token count and cost as estimates until a verified tokenizer/counting method is configured."
  },
  {
    id: "generic-estimate", provider: "Generic", name: "Generic estimate", modelId: "generic",
    inputPerMillion: 2, cachedInputPerMillion: 0.5, outputPerMillion: 8, contextWindow: 128_000,
    tokenizer: "estimate", exactLabel: false,
    pricingSource: "", docsSource: "", pricingUpdated: "2026-08-15",
    note: "Approximation only. No provider-specific tokenizer or pricing is claimed."
  }
];

export const getModel = (id: string) => models.find((m) => m.id === id) ?? models[0];
