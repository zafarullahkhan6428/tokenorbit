import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getModel, models } from "@/data/models";

export function generateStaticParams() { return models.map((m) => ({ id: m.id })); }

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params; const model = getModel(id);
  return { title: `${model.name} Token Counter & Cost Estimate | TokenOrbit`, description: `Check tokenization method, context window and configurable API cost estimates for ${model.name}.` };
}

export default async function ModelPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; const model = getModel(id);
  if (!model) notFound();
  return <main className="container section"><div className="eyebrow">Model profile</div><h1 style={{fontSize:48}}>{model.name}</h1><p className="section-intro">Provider: {model.provider}. Token method: {model.tokenizer === "openai-o200k" ? "o200k_base local tokenizer" : model.tokenizer === "provider-api" ? "Provider verification API + local estimate fallback" : "Approximation"}.</p><div className="grid"><article className="card"><h3>Context window</h3><p>{model.contextWindow.toLocaleString()} tokens</p></article><article className="card"><h3>Input price</h3><p>{model.inputPerMillion ? `$${model.inputPerMillion} / 1M tokens` : "Verify before launch"}</p></article><article className="card"><h3>Output price</h3><p>{model.outputPerMillion ? `$${model.outputPerMillion} / 1M tokens` : "Verify before launch"}</p></article></div><div className="card" style={{marginTop:24}}><h2>Accuracy</h2><p className="section-intro">{model.note}</p><p className="muted">Pricing registry review: {model.pricingUpdated}</p><p><a href={model.docsSource} target="_blank" rel="noreferrer">Provider documentation →</a></p><p><a href={model.pricingSource} target="_blank" rel="noreferrer">Pricing source →</a></p></div></main>;
}
