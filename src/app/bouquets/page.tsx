import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/ContentSection";
import { PageHero } from "@/components/PageHero";
import gameData from "@/data/game-data.json";

export const metadata: Metadata = {
  title: "My Flower Shop bouquet designs and unlock levels",
  description: "See the flower capacity and unlock level for bouquet, vase, pot, and basket designs observed in My Flower Shop gameplay.",
  alternates: { canonical: "/bouquets" },
};

export default function BouquetsPage() {
  return (
    <>
      <PageHero
        eyebrow="Bouquets and arrangements"
        title="Choose the design first, then fill its flower slots."
        intro="The craft table does not show one fixed ingredient recipe for each design. It lets you choose a design, a style, and flowers from your inventory. The useful numbers are flower capacity and unlock level."
        media={{
          src: "/beginner-guide.png",
          alt: "A bouquet crafting table with flowers and tools in My Flower Shop",
          credit: "Official My Flower Shop media · bouquet crafting",
          href: "https://www.roblox.com/games/93028168925975/My-Flower-Shop",
        }}
      >
        <div className="inline-actions"><Link className="button button-primary" href="/beginner-guide#craft">Follow the crafting step</Link><Link className="button button-secondary" href="/flowers">Review flower supply</Link></div>
      </PageHero>

      <ContentSection eyebrow="Design list" title="Flower capacity rises with later unlocks" intro={`Observed ${gameData.observedAt} from a crafting video published Aug 8, 2026. Small Bouquet had no visible lock badge, so its exact unlock level stays open.`}>
        <table className="system-table">
          <thead><tr><th>Design</th><th>Flowers required</th><th>Unlock level</th><th>Source</th></tr></thead>
          <tbody>
            {gameData.arrangementDesigns.map((design) => (
              <tr key={design.name}>
                <td>{design.name}</td><td>{design.flowersRequired}</td><td>{design.unlockLevel ?? "No level shown"}</td>
                <td><a className="text-link" href={design.sourceUrl} target="_blank" rel="noreferrer">Video at {design.timestamp}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </ContentSection>

      <ContentSection eyebrow="Style choices" title="The captured menu showed nine arrangement styles." intro="Styles shown across the menu were Classic, Romantic, Elegant, Spring, Autumn, Blush, Tropical, Midnight, and Vintage." raised>
        <div className="content-grid">
          <div className="content-card"><h3>1. Pick a design</h3><p>The design sets how many flowers you need. A Glass Vase takes 2, while the level-50 Spring Basket takes 12.</p></div>
          <div className="content-card"><h3>2. Pick a style</h3><p>Choose among the styles visible in your current craft menu. This source does not prove that one style sells for more.</p></div>
          <div className="content-card"><h3>3. Fill the flower slots</h3><p>The captured inventory included Tulip, Rose, and Daisy color variants. That inventory belongs to one player session and is not a complete flower catalog.</p></div>
          <div className="content-card"><h3>4. Check the sale in game</h3><p>The video shows crafting and display placement, but no stable sale-value field. Arrangement profit stays open until a clean payout is captured without bonuses.</p></div>
        </div>
      </ContentSection>
    </>
  );
}
