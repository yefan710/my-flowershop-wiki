import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/ContentSection";
import { PageHero } from "@/components/PageHero";
import { gamePasses, site } from "@/data/site";

export const metadata: Metadata = {
  title: "My Flower Shop game passes",
  description: "Check the My Flower Shop game pass names listed by Roblox and open the official experience for current prices and purchase terms.",
  alternates: { canonical: "/game-passes" },
  robots: { index: false, follow: true },
};

export default function GamePassesPage() {
  return (
    <>
      <PageHero eyebrow="Game passes" title="Check the pass name, then verify the purchase in Roblox." intro="Roblox currently lists five passes for sale, including VIP at 199 Robux in the Aug 17 check. The live purchase screen is the final source for price, availability, effects, and terms.">
        <div className="inline-actions"><a className="button button-primary" href={site.gameUrl} target="_blank" rel="noreferrer">Open the official experience</a><Link className="button button-secondary" href="/staff-and-upgrades">Compare shop systems first</Link></div>
      </PageHero>
      <ContentSection eyebrow="Listed by Roblox" title="Current pass names">
        <table className="system-table"><thead><tr><th>Game pass</th><th>Listed price</th><th>Before you buy</th></tr></thead><tbody>{gamePasses.map((pass) => <tr key={pass.id}><td>{pass.name}</td><td>{pass.isForSale && pass.priceRobux !== null ? `${pass.priceRobux} Robux` : "Not for sale"}</td><td>{pass.name === "VIP" ? "VIP was listed for sale at 199 Robux in the Aug 17 check, but Roblox still needs to provide the current benefits inside the live purchase screen." : pass.isForSale ? "Open the live Roblox purchase screen for the current price and full effect." : "Open the live Roblox purchase screen before assuming this pass is available."}</td></tr>)}</tbody></table>
        <div className="notice">Last source check: {site.checkedLabel}. A pass name does not prove a permanent price, multiplier behavior, or compatibility with a later update.</div>
      </ContentSection>
    </>
  );
}

