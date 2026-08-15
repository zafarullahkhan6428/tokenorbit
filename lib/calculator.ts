import type { ModelProfile } from "@/data/models";

export type Estimate = {
  characters: number;
  words: number;
  inputTokens: number;
  lowTokens: number;
  highTokens: number;
  outputTokens: number;
  uncachedInputCost: number;
  cachedInputCost: number;
  outputCost: number;
  totalCost: number;
  contextPercent: number;
  remainingContext: number;
  dailyCost: number;
  monthlyCost: number;
  monthlyInputTokens: number;
  monthlyOutputTokens: number;
};

export function countWords(text: string) {
  const trimmed = text.trim();
  return trimmed ? trimmed.split(/\s+/u).length : 0;
}

export function calculateEstimate(
  text: string,
  model: ModelProfile,
  inputTokens: number,
  outputTokens: number,
  cachedInputTokens: number,
  runsPerDay: number,
  days: number
): Estimate {
  const characters = text.length;
  const words = countWords(text);
  const safeInput = Math.max(0, inputTokens);
  const safeCached = Math.min(safeInput, Math.max(0, cachedInputTokens));
  const safeOutput = Math.max(0, outputTokens);

  const lowTokens = Math.max(0, Math.floor(safeInput * 0.9));
  const highTokens = Math.ceil(safeInput * 1.1);

  const uncachedInputTokens = safeInput - safeCached;
  const uncachedInputCost = (uncachedInputTokens / 1_000_000) * model.inputPerMillion;
  const cachedInputCost = (safeCached / 1_000_000) * model.cachedInputPerMillion;
  const outputCost = (safeOutput / 1_000_000) * model.outputPerMillion;
  const totalCost = uncachedInputCost + cachedInputCost + outputCost;
  const dailyCost = totalCost * Math.max(1, runsPerDay);
  const monthlyCost = dailyCost * Math.max(1, days);
  const monthlyInputTokens = safeInput * Math.max(1, runsPerDay) * Math.max(1, days);
  const monthlyOutputTokens = safeOutput * Math.max(1, runsPerDay) * Math.max(1, days);

  const totalContext = safeInput + safeOutput;
  const contextPercent = Math.min(100, (totalContext / model.contextWindow) * 100);

  return {
    characters, words, inputTokens: safeInput, lowTokens, highTokens, outputTokens: safeOutput,
    uncachedInputCost, cachedInputCost, outputCost, totalCost, contextPercent,
    remainingContext: Math.max(0, model.contextWindow - totalContext),
    dailyCost, monthlyCost, monthlyInputTokens, monthlyOutputTokens
  };
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(Math.round(value));
}

export function formatCurrency(value: number) {
  if (value === 0) return "$0.00";
  if (Math.abs(value) < 0.000001) return `$${value.toFixed(10)}`;
  if (Math.abs(value) < 0.001) return `$${value.toFixed(6)}`;
  return `$${value.toFixed(4)}`;
}
