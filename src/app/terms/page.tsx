import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/ContentSection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Terms of use", description: "Terms and fan-guide limits for My Flower Shop Wiki.", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Terms" title="Use the live game as the final check." intro="This independent fan guide provides general information about My Flower Shop. Roblox or Magic Box Games can change the game, its economy, interface, rewards, and paid products at any time." />
      <ContentSection eyebrow="Guide limits" title="What these pages can and cannot promise">
        <div className="content-grid"><div className="content-card"><h3>Dated external facts</h3><p>Competitor wikis, videos, screenshots, and community pages can support game facts. Prices, recipes, tiers, costs, probabilities, and codes keep their source date and conditions because the game can change.</p></div><div className="content-card"><h3>Original presentation</h3><p>This site keeps factual names and values accurate but does not reproduce another guide&apos;s prose, page order, table layout, or images.</p></div><div className="content-card"><h3>Purchases stay on Roblox</h3><p>Check the Roblox purchase screen before spending Robux. This site does not sell passes or items.</p></div></div>
        <div className="inline-actions"><Link className="button button-primary" href="/sources">Read source notes</Link><Link className="button button-secondary" href="/official-links">Open official links</Link></div>
      </ContentSection>
    </>
  );
}
