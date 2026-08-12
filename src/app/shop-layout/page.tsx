import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/ContentSection";
import { PageHero } from "@/components/PageHero";
import gameData from "@/data/game-data.json";

export const metadata: Metadata = {
  title: "My Flower Shop displays, build costs and layout",
  description: "Compare dated display and flower-box build costs in My Flower Shop without treating one community layout as universally best.",
  alternates: { canonical: "/shop-layout" },
};

export default function ShopLayoutPage() {
  return (
    <>
      <PageHero eyebrow="Building and layout" title="Budget the displays before changing the floor." intro="The captured Display tab ranged from a 20-cash Small Flower Display to a 500-cash Tall Bouquet Shelf. Pick the stock type and cost first. There is no verified layout that is best for every shop.">
        <div className="inline-actions"><a className="button button-primary" href={gameData.displaySourceUrl} target="_blank" rel="noreferrer">Watch the dated building guide</a><Link className="button button-secondary" href="/money-guide">Return to the cash plan</Link></div>
      </PageHero>
      <ContentSection eyebrow="Display costs" title="Eleven items observed in the Build menu" intro={`Observed ${gameData.observedAt} in gameplay published Aug 8, 2026. These are Build menu prices from that captured version.`}>
        <table className="system-table"><thead><tr><th>Display</th><th>Build cost</th><th>Source</th></tr></thead><tbody>{gameData.displays.map((display) => <tr key={display.name}><td>{display.name}</td><td>{display.cost}</td><td><a className="text-link" href={gameData.displaySourceUrl} target="_blank" rel="noreferrer">Video at {display.timestamp}</a></td></tr>)}</tbody></table>
      </ContentSection>
      <ContentSection eyebrow="Layout check" title="Separate stock capacity from appearance." raised>
        <div className="content-grid">
          <div className="content-card"><h3>Start with what you sell</h3><p>Flower displays, bouquet displays, boxes, tables, and shelves are separate menu choices. Match the object to the stock you need to place.</p></div>
          <div className="content-card"><h3>Check the live placement preview</h3><p>The dated video is useful for finding Build and Remove actions. Interface position and placement rules may change.</p></div>
          <div className="content-card"><h3>Do not invent a profit bonus</h3><p>The captured cards establish names and prices. They do not prove that a more expensive display increases payout or customer traffic.</p></div>
          <div className="content-card"><h3>Use Advertising for stated traffic</h3><p>The upgrade menu explicitly says Advertising boosts customer traffic. Read its current level and cost in the <Link className="text-link" href="/staff-and-upgrades">upgrade guide</Link>.</p></div>
        </div>
      </ContentSection>
    </>
  );
}
