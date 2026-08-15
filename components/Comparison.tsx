 "use client";

import { useEffect, useState } from "react";
import { models } from "@/data/models";
import { calculateEstimate, formatCurrency, formatNumber } from "@/lib/calculator";
import { countTokens } from "@/lib/tokenizer";

export default function Comparison() {
  const [text, setText] = useState("Summarize this technical document in five concise bullet points and identify the three most important implementation risks.");
  const [output, setOutput] = useState(500);
  const [inputTokens, setInputTokens] = useState(0);

  useEffect(() => {
    countTokens(text, "openai-o200k").then((r) => setInputTokens(r.count));
  }, [text]);

  return (
    <section className="section" id="compare">
      <div className="container">
        <div className="eyebrow">Compare</div>
        <h2>Compare the same workload across models</h2>
        <p className="section-intro">OpenAI profiles use the local o200k_base tokenizer. Other providers should only be added after their tokenizer and current pricing are verified.</p>
        <div className="card" style={{marginTop:24}}>
          <div className="field"><label htmlFor="compare-prompt">Prompt</label><textarea id="compare-prompt" value={text} onChange={(e) => setText(e.target.value)} style={{minHeight:130}} /></div>
          <div className="field" style={{maxWidth:280, marginTop:12}}><label htmlFor="compare-output">Expected output tokens</label><input id="compare-output" type="number" min="0" value={output} onChange={(e) => setOutput(Math.max(0, Number(e.target.value) || 0))} /></div>
          <div style={{overflowX:"auto"}}>
            <table className="compare">
              <thead><tr><th>Provider</th><th>Model</th><th>Input tokens</th><th>Cost / run</th><th>Context</th><th>Confidence</th></tr></thead>
              <tbody>
                {models.map((m) => {
                  const e = calculateEstimate(text, m, inputTokens, output, 0, 1, 1);
                  return <tr key={m.id}>
                    <td>{m.provider}</td><td>{m.name}</td><td>{formatNumber(e.inputTokens)}</td><td>{formatCurrency(e.totalCost)}</td><td>{e.contextPercent.toFixed(2)}%</td>
                    <td><span className={`badge ${m.exactLabel ? "exact" : "estimate"}`}>{m.exactLabel ? "Model tokenizer" : "Estimate"}</span></td>
                  </tr>;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
