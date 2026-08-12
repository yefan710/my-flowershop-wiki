import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/ContentSection";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "My Flower Shop beginner guide", description: "Start My Flower Shop with cheap seeds, early quests, arrangement crafting, customer sales, and dated upgrade choices.", alternates: { canonical: "/beginner-guide" } };

export default function BeginnerGuidePage() {
  return (
    <>
      <PageHero eyebrow="Beginner guide" title="Plant cheap seeds, clear quests, then expand." intro="Start with the 1-cash Tulip or 2-cash Rose shown in Aug 8 gameplay. Harvest, stock the shop, use checkout, and complete the visible early quests before deciding between displays, Advertising, staff, or expansion." media={{ src: "/beginner-gameplay.jpg", alt: "A player planting a tulip seed beside the flower shop in My Flower Shop", credit: "Gameplay frame · Velace · 0:03", href: "https://www.youtube.com/watch?v=GI2Wkuz6z6o&t=3s" }}>
        <div className="inline-actions"><a className="button button-primary" href="#plant">Start with planting</a><a className="button button-secondary" href={site.gameUrl} target="_blank" rel="noreferrer">Play on Roblox</a></div>
      </PageHero>
      <ContentSection id="plant" eyebrow="Step 1" title="Buy a seed you can cycle quickly." intro="The captured menu showed Tulip at 1 cash and 6 seconds, Rose at 2 cash and 15 seconds, and Daisy at 5 cash and 30 seconds.">
        <ol className="step-list">
          <li><div><h3>Plant Tulip or Rose.</h3><p>Both were cheap and fast in the Aug 8 menu. Check the current card before buying because prices and timers can change.</p></div></li>
          <li><div><h3>Harvest and keep the loop moving.</h3><p>Flowers can continue growing while you are offline, according to the official game description. The exact offline rate is not stated.</p></div></li>
          <li><div><h3>Use supplies only for a clear need.</h3><p>A Watering Can reduced grow time by 1 minute, while Fertilizer added 1 flower to harvest yield in the captured supplies menu. Compare all four known supplies in the <Link className="text-link" href="/growth">growth guide</Link>.</p></div></li>
        </ol>
      </ContentSection>
      <ContentSection id="craft" eyebrow="Step 2" title="Choose an arrangement design that fits your stock." intro="Small Bouquet uses 1 flower. Glass Vase uses 2 and unlocks at level 5. Bigger designs use more flowers and unlock later." raised>
        <div className="content-grid"><div className="content-card"><h3>Pick capacity first</h3><p>The captured craft menu goes from 1 flower for Small Bouquet to 12 for Spring Basket. Open the <Link className="text-link" href="/bouquets">full design and unlock table</Link>.</p></div><div className="content-card"><h3>Choose style and flowers</h3><p>The menu lets you choose a style and fill the design from your inventory. It is not a fixed flower-combination recipe.</p></div></div>
      </ContentSection>
      <ContentSection id="sell" eyebrow="Step 3" title="Clear the two observed quest targets." intro="Budding Florist paid 100 cash for planting 3 Rose seeds and harvesting twice. Flower Power paid 150 cash for stocking 5 times and completing 3 checkouts.">
        <div className="content-grid"><div className="content-card"><h3>Finish actions you already need</h3><p>Planting, harvesting, stocking, and checkout all advance the normal shop loop, so check your quest panel before repeating them.</p></div><div className="content-card"><h3>Do not use bonus payouts as base prices</h3><p>The captured sales session had Weekend and Playtime cash bonuses. It cannot support a clean flower price or profit ranking.</p></div></div>
      </ContentSection>
      <ContentSection id="grow" eyebrow="Step 4" title="Spend on the next visible bottleneck." raised>
        <table className="system-table"><thead><tr><th>Problem</th><th>Dated option to inspect</th></tr></thead><tbody><tr><td>Need more customer traffic</td><td>Advertising level 0 to 1 showed 200 cash and says it boosts traffic.</td></tr><tr><td>Need a display</td><td>Captured display prices ranged from 20 to 500 cash.</td></tr><tr><td>Need more garden space</td><td>Garden expansion level 1 to 2 showed 2,000 cash.</td></tr><tr><td>Need more shop space</td><td>Shop expansion level 2 to 3 showed 5,000 cash.</td></tr><tr><td>Considering staff</td><td>Robin, Lily, and Nur each showed a 1,500-cash Gardener hire price.</td></tr></tbody></table>
        <div className="inline-actions"><Link className="button button-primary" href="/staff-and-upgrades">Compare staff and upgrades</Link><Link className="button button-secondary" href="/money-guide">Review quest cash</Link></div>
      </ContentSection>
    </>
  );
}
