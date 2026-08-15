import { NextRequest, NextResponse } from "next/server";
import { getModel } from "@/data/models";

export const runtime = "nodejs";

function bad(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const model = getModel(String(body?.modelId ?? ""));
    const text = typeof body?.text === "string" ? body.text : "";
    if (!text) return bad("Text is required.");
    if (text.length > 200_000) return bad("Text is too large for provider verification. Maximum is 200,000 characters.");
    if (!model.providerApi) return bad("This model has no provider verification adapter.");

    if (model.providerApi === "gemini") {
      const key = process.env.GEMINI_API_KEY;
      if (!key) return bad("Gemini provider verification is not configured on this site.", 503);
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model.modelId)}:countTokens`;
      const upstream = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": key },
        body: JSON.stringify({ contents: [{ parts: [{ text }] }] }),
        cache: "no-store"
      });
      const data = await upstream.json();
      if (!upstream.ok) return bad(data?.error?.message || "Gemini token counting failed.", upstream.status);
      return NextResponse.json({ ok: true, provider: "Google", count: Number(data?.totalTokens ?? 0), mode: "provider" });
    }

    if (model.providerApi === "anthropic") {
      const key = process.env.ANTHROPIC_API_KEY;
      if (!key) return bad("Anthropic provider verification is not configured on this site.", 503);
      const upstream = await fetch("https://api.anthropic.com/v1/messages/count_tokens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": key,
          "anthropic-version": "2023-06-01"
        },
        body: JSON.stringify({ model: model.modelId, messages: [{ role: "user", content: text }] }),
        cache: "no-store"
      });
      const data = await upstream.json();
      if (!upstream.ok) return bad(data?.error?.message || "Anthropic token counting failed.", upstream.status);
      return NextResponse.json({ ok: true, provider: "Anthropic", count: Number(data?.input_tokens ?? 0), mode: "provider" });
    }

    return bad("Unsupported provider adapter.");
  } catch {
    return bad("Unable to process provider verification request.", 500);
  }
}
