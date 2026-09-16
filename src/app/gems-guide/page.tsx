import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/ContentSection";
import { PageHero } from "@/components/PageHero";
import gameData from "@/data/game-data.json";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "How to get Gems in My Flower Shop",
  description: "Check dated Group Reward, Daily quest, and Main quest Gem sources in My Flower Shop before spending Gems on supplies.",
  alternates: { canonical: "/gems-guide" },
};

export default function GemsGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Gems and Diamonds"
        title="Claim the visible rewards before buying Gems."
        intro="Recent gameplay showed a 200-Gem Group Reward, 20 Gems for playing 20 minutes on the Daily tab, and 20 Gems from the Arrangement Ace Main quest. Reward menus can change, so check the current card before completing a task."
      >
        <div className="inline-actions"><Link className="button button-primary" href="/growth">Compare supply prices</Link><a className="button button-secondary" href={site.gameUrl} target="_blank" rel="noreferrer">Open My Flower Shop</a></div>
      </PageHero>

      <ContentSection eyebrow="Observed sources" title="Three Gem rewards with visible amounts" intro="These fields were read from My Flower Shop menus shown in gameplay published Aug 8 and Aug 13, 2026.">
        <table className="system-table">
          <thead><tr><th>Source</th><th>Action</th><th>Reward</th><th>Repeat status</th><th>Evidence</th></tr></thead>
          <tbody>
            {gameData.gemSources.map((source) => (
              <tr key={source.name}><td>{source.name}</td><td>{source.action}</td><td>{source.reward}</td><td>{source.repeatStatus}</td><td><a className="text-link" href={source.sourceUrl} target="_blank" rel="noreferrer">Gameplay from {source.publishedAt}</a></td></tr>
            ))}
          </tbody>
        </table>
      </ContentSection>

      <ContentSection eyebrow="Spending check" title="Compare the cash option on the same supply card." raised>
        <ol className="step-list">
          <li><div><h3>Claim the rewards you can verify.</h3><p>Open Group Reward and the current Main, Daily, and Weekly quest tabs. Only count a reward when the live card shows the amount and requirements.</p></div></li>
          <li><div><h3>Read both prices.</h3><p>The captured supply cards offered a cash price and a Gem price. Compare both before using Gems on a Watering Can, Lock, Fertilizer, or Silver Watering Can.</p></div></li>
          <li><div><h3>Spend for the current delay.</h3><p>Use the supply effect that matches the timer, yield, or harvest-protection problem in front of you. The available evidence does not support a universal best Gem purchase.</p></div></li>
        </ol>
        <div className="inline-actions"><Link className="button button-primary" href="/growth">Open the supplies table</Link><Link className="button button-secondary" href="/money-guide">Return to the cash loop</Link></div>
      </ContentSection>
    </>
  );
}
