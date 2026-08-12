import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/ContentSection";
import { PageHero } from "@/components/PageHero";
import gameData from "@/data/game-data.json";

export const metadata: Metadata = {
  title: "How to make money in My Flower Shop",
  description: "Use dated quest rewards and known costs to plan early cash in My Flower Shop without relying on an unverified profit ranking.",
  alternates: { canonical: "/money-guide" },
};

export default function MoneyGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Cash and shop spending"
        title="Use early quests to fund the next part of the loop."
        intro="Two captured quests paid 100 and 150 cash for basic planting, harvesting, stocking, and checkout actions. Treat those as dated targets, then compare each purchase with the price shown in your current server."
        media={{ src: "/selling-flowers.png", alt: "Flowers placed at the checkout counter in My Flower Shop" }}
      >
        <div className="inline-actions"><Link className="button button-primary" href="/beginner-guide#sell">Start at the sales step</Link><a className="button button-secondary" href="https://www.youtube.com/watch?v=-P-g5GgpWFM" target="_blank" rel="noreferrer">Watch the dated cash guide</a></div>
      </PageHero>

      <ContentSection eyebrow="Quest cash" title="Two early quest cards observed in one session" intro={`Observed ${gameData.observedAt} at 3:43 in gameplay published Aug 8, 2026. Quest availability may depend on your progress or the current game build.`}>
        <table className="system-table">
          <thead><tr><th>Quest</th><th>Requirements</th><th>Reward</th><th>Source</th></tr></thead>
          <tbody>{gameData.quests.map((quest) => <tr key={quest.name}><td>{quest.name}</td><td>{quest.requirements.join("; ")}</td><td>{quest.reward}</td><td><a className="text-link" href={quest.sourceUrl} target="_blank" rel="noreferrer">Video at {quest.timestamp}</a></td></tr>)}</tbody>
        </table>
      </ContentSection>

      <ContentSection eyebrow="Spending order" title="Buy for the bottleneck you can identify." raised>
        <ol className="step-list">
          <li><div><h3>Complete the visible quest tasks.</h3><p>Budding Florist asks for 3 Rose seeds planted and 2 harvests. Flower Power asks for 5 stocks and 3 checkouts.</p></div></li>
          <li><div><h3>Keep enough cash for seed supply.</h3><p>The captured starting seeds cost 1, 2, and 5 cash. Later seed prices remain open because their cards did not show a usable amount.</p></div></li>
          <li><div><h3>Compare expansion and display costs.</h3><p>Advertising started at 200 cash in the captured upgrade menu. Displays ranged from 20 to 500 cash. Garden and shop expansion examples cost 2,000 and 5,000 cash.</p></div></li>
        </ol>
        <div className="notice">The sale footage shows Weekend +10% Cash and Playtime +5% Cash bonuses. Those payouts cannot reveal a base flower price, so this guide does not publish profit per minute or a best flower ranking yet.</div>
        <div className="inline-actions"><Link className="button button-primary" href="/shop-layout">Compare display costs</Link><Link className="button button-secondary" href="/staff-and-upgrades">Compare staff and upgrades</Link></div>
      </ContentSection>
    </>
  );
}
