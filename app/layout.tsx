import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "TokenOrbit — AI Token Counter & Cost Calculator", template: "%s | TokenOrbit" },
  description: "Estimate AI tokens, context usage, prompt costs and monthly LLM spending with a fast, privacy-first calculator.",
  keywords: ["AI token counter", "AI cost calculator", "LLM cost calculator", "token calculator", "context window calculator"],
  openGraph: { title: "TokenOrbit — AI Token Counter & Cost Calculator", description: "Estimate AI tokens and LLM costs before you send your request.", type: "website", url: siteUrl },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  twitter: { card: 'summary_large_image', title: 'TokenOrbit — AI Token Counter & Cost Calculator', description: 'Estimate AI tokens, context usage and LLM costs.' },
  icons: { icon: '/icon.svg' }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
