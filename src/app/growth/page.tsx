import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/ContentSection";
import { PageHero } from "@/components/PageHero";
import gameData from "@/data/game-data.json";

export const metadata: Metadata = {
  title: "My Flower Shop growth supplies and prices",
  description: "Compare dated Watering Can, Lock, Fertilizer, and Silver Watering Can effects and costs in My Flower Shop.",
  alternates: { canonical: "/growth" },
};

export default function GrowthPage() {
  return (
    <>
      <PageHero eyebrow="Growth and supplies" title="Choose a supply for one specific job." intro="Watering cans reduce the displayed grow time, Fertilizer adds one flower to a harvest, and Lock protects a favourite flower from harvesting. These values come from an Aug 8 gameplay menu and may change in a later build.">
        <div className="inline-actions"><Link className="button button-primary" href="/flowers">Compare flower timers</Link><a className="button button-secondary" href="https://www.youtube.com/watch?v=02kx7GcM-kA" target="_blank" rel="noreferrer">Watch the supplies source</a></div>
      </PageHero>

      <ContentSection eyebrow="Supplies table" title="Effects and two payment options" intro={`Observed ${gameData.observedAt} from the supplies menu in a video published Aug 8, 2026. Cash and gems are alternative prices shown on the same cards.`}>
        <table className="system-table">
          <thead><tr><th>Supply</th><th>Observed effect</th><th>Cash</th><th>Gems</th><th>Source</th></tr></thead>
          <tbody>
            {gameData.supplies.map((supply) => (
              <tr key={supply.name}>
                <td>{supply.name}</td><td>{supply.effect}{supply.note ? ` ${supply.note}` : ""}</td><td>{supply.cashCost}</td><td>{supply.gemCost}</td>
                <td><a className="text-link" href={supply.sourceUrl} target="_blank" rel="noreferrer">Video at {supply.timestamp}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </ContentSection>

      <ContentSection eyebrow="Decision check" title="Match the tool to the timer in front of you." raised>
        <ol className="step-list">
          <li><div><h3>Read the remaining grow time.</h3><p>A one-minute Watering Can has a different value on a 30-second Daisy than on a 15-minute Peony. Confirm how the current interface handles extra time reduction.</p></div></li>
          <li><div><h3>Use Fertilizer when yield is the constraint.</h3><p>The captured card says it adds one flower. It does not establish the normal yield or the sale value of that extra flower.</p></div></li>
          <li><div><h3>Protect stock with Lock only if needed.</h3><p>The menu says Lock prevents harvesting. Its visible 20x label is not explained in the source, so this guide does not assign that number a meaning.</p></div></li>
        </ol>
        <div className="notice">Quality Fertilizer and Golden Watering Can names were visible lower in the menu, but their complete cards were not readable. Their effects and costs remain unpublished.</div>
      </ContentSection>
    </>
  );
}
