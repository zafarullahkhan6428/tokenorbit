import type { TokenizerKind } from "@/data/models";

export type TokenizationResult = {
  count: number;
  mode: "exact" | "estimate" | "provider";
  encoding?: string;
  warning?: string;
};

export async function countTokens(text: string, kind: TokenizerKind): Promise<TokenizationResult> {
  if (!text) return { count: 0, mode: kind === "estimate" ? "estimate" : kind === "provider-api" ? "provider" : "exact", encoding: kind === "openai-o200k" ? "o200k_base" : undefined };

  if (kind === "openai-o200k") {
    try {
      const mod = await import("js-tiktoken");
      const encoding = mod.getEncoding("o200k_base");
      return { count: encoding.encode(text).length, mode: "exact", encoding: "o200k_base" };
    } catch {
      return { count: Math.max(1, Math.ceil(text.length / 4)), mode: "estimate", encoding: "o200k_base", warning: "Exact tokenizer data could not be loaded. Showing an approximate count." };
    }
  }

  return {
    count: Math.max(1, Math.ceil(text.length / 4)),
    mode: kind === "provider-api" ? "estimate" : "estimate",
    warning: kind === "provider-api"
      ? "This provider supports an official counting API, but this browser calculation is only an estimate. Use Verify with Provider for an exact count when server configuration is available."
      : "This model does not have a provider-specific tokenizer configured."
  };
}
