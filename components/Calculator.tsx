"use client";

import { useMemo, useState } from "react";
import { models } from "@/data/models";
import { calculateEstimate, formatCurrency, formatNumber } from "@/lib/calculator";
import { countTokens } from "@/lib/tokenizer";

type Verification = { count: number; provider: string; status: "idle" | "loading" | "success" | "error"; message?: string };

export default function Calculator() {
  const [text, setText] = useState("");
  const [modelId, setModelId] = useState(models[0].id);
  const [outputTokens, setOutputTokens] = useState(750);
  const [runs, setRuns] = useState(100);
  const [days, setDays] = useState(30);
  const [cached, setCached] = useState(0);
  const [verification, setVerification] = useState<Verification>({ count: 0, provider: "", status: "idle" });

  const model = models.find((m) => m.id === modelId) ?? models[0];
  const [localTokenResult, setLocalTokenResult] = useState<{ count: number; mode: string; warning?: string }>({ count: 0, mode: "estimate" });

  const inputTokens = verification.status === "success" ? verification.count : localTokenResult.count;
  const estimate = useMemo(
    () => calculateEstimate(text, model, inputTokens, outputTokens, cached, runs, days),
    [text, model, inputTokens, outputTokens, cached, runs, days]
  );

  const recalc = async (value: string, kind: typeof model.tokenizer) => {
    const result = await countTokens(value, kind);
    setLocalTokenResult(result);
    setVerification({ count: 0, provider: "", status: "idle" });
  };

  const loadExample = () => {
    const example = "Create a concise technical guide explaining how an Android developer can integrate a REST API using Kotlin, Retrofit, coroutines, error handling, and a clean architecture approach. Include a short code example and a checklist.";
    setText(example);
    void recalc(example, model.tokenizer);
  };

  const verifyWithProvider = async () => {
    if (!model.providerApi) return;
    setVerification({ count: 0, provider: model.provider, status: "loading" });
    try {
      const response = await fetch("/api/count", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ modelId: model.id, text }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Provider verification failed.");
      setVerification({ count: Number(data.count), provider: data.provider, status: "success", message: "Provider verified" });
    } catch (error) {
      setVerification({ count: 0, provider: model.provider, status: "error", message: error instanceof Error ? error.message : "Provider verification failed." });
    }
  };

  const copyResults = async () => {
    const value = [
      `TokenOrbit estimate`, `Model: ${model.name}`, `Token method: ${verification.status === "success" ? "Provider verified" : localTokenResult.mode}`,
      `Input tokens: ${estimate.inputTokens}`, `Expected output tokens: ${estimate.outputTokens}`, `Cost per run: ${formatCurrency(estimate.totalCost)}`, `Estimated monthly cost: ${formatCurrency(estimate.monthlyCost)}`
    ].join("\n");
    try { await navigator.clipboard.writeText(value); } catch {}
  };

  const onModelChange = (id: string) => {
    setModelId(id);
    const next = models.find((m) => m.id === id) ?? models[0];
    void recalc(text, next.tokenizer);
  };

  return (
    <div className="tool-card" id="calculator">
      <div className="toolbar">
        <div className="field"><label htmlFor="model">Model / pricing profile</label><select id="model" value={modelId} onChange={(e) => onModelChange(e.target.value)}>{models.map((m) => <option key={m.id} value={m.id}>{m.provider} — {m.name}</option>)}</select></div>
        <div className="field"><label htmlFor="output">Expected output tokens</label><input id="output" type="number" min="0" step="50" value={outputTokens} onChange={(e) => setOutputTokens(Math.max(0, Number(e.target.value) || 0))} /></div>
        <div className="field"><label htmlFor="runs">Runs per day</label><input id="runs" type="number" min="1" value={runs} onChange={(e) => setRuns(Math.max(1, Number(e.target.value) || 1))} /></div>
      </div>

      <div className="field"><label htmlFor="prompt">Prompt or text</label><textarea id="prompt" value={text} onChange={(e) => { setText(e.target.value); void recalc(e.target.value, model.tokenizer); }} placeholder="Paste your prompt, system instructions, RAG context, JSON, code, or other text here..." /></div>

      <div className="actions">
        <button className="btn primary" onClick={loadExample}>Load example</button>
        <button className="btn" onClick={() => { setText(""); setLocalTokenResult({ count: 0, mode: "estimate" }); setVerification({ count: 0, provider: "", status: "idle" }); }}>Clear</button>
        <button className="btn" onClick={copyResults}>Copy results</button>
        {model.providerApi && <button className="btn" onClick={verifyWithProvider} disabled={!text || verification.status === "loading"}>{verification.status === "loading" ? "Verifying…" : `Verify with ${model.provider}`}</button>}
      </div>

      <div className="status-row">
        <span className={verification.status === "success" ? "badge exact" : "badge"}>
          {verification.status === "success" ? `✓ ${verification.provider} verified` : model.tokenizer === "openai-o200k" ? "✓ Local tokenizer" : "≈ Estimated count"}
        </span>
        {verification.status === "error" && <span className="muted">{verification.message}</span>}
        {verification.status !== "error" && localTokenResult.warning && verification.status !== "success" && <span className="muted">{localTokenResult.warning}</span>}
      </div>

      <div className="stats">
        <div className="stat"><div className="label">Input tokens</div><div className="value">{formatNumber(estimate.inputTokens)}</div></div>
        <div className="stat"><div className="label">Words</div><div className="value">{formatNumber(estimate.words)}</div></div>
        <div className="stat"><div className="label">Cost / run</div><div className="value">{formatCurrency(estimate.totalCost)}</div></div>
        <div className="stat"><div className="label">Monthly estimate</div><div className="value">{formatCurrency(estimate.monthlyCost)}</div></div>
      </div>

      <div className="results">
        <div className="panel">
          <h3>Context window usage</h3>
          <div className="meter"><span style={{ width: `${estimate.contextPercent}%` }} /></div>
          <p className="muted">{estimate.contextPercent.toFixed(2)}% used · {formatNumber(estimate.remainingContext)} estimated tokens remaining.</p>
          <div className="notice">{model.note}</div>
        </div>
        <div className="panel">
          <h3>Cost breakdown</h3>
          <p className="muted">Input: {formatCurrency(estimate.uncachedInputCost)}</p>
          <p className="muted">Cached input: {formatCurrency(estimate.cachedInputCost)}</p>
          <p className="muted">Output: {formatCurrency(estimate.outputCost)}</p>
          <div className="field" style={{marginTop:12}}><label htmlFor="cached">Cached input tokens</label><input id="cached" type="number" min="0" max={estimate.inputTokens} value={cached} onChange={(e) => setCached(Math.min(estimate.inputTokens, Math.max(0, Number(e.target.value) || 0)))} /></div>
        </div>
      </div>

      <div className="panel" style={{marginTop:14}}><h3>Estimate range</h3><p className="muted">Low: {formatNumber(estimate.lowTokens)} · Base: {formatNumber(estimate.inputTokens)} · Conservative: {formatNumber(estimate.highTokens)} input tokens. These are estimates unless the provider verification badge is shown.</p></div>
    </div>
  );
}
