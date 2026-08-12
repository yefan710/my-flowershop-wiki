import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/ContentSection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "My Flower Shop updates and daily rewards",
  description: "Check the confirmed daily streak system and use the official My Flower Shop Roblox page for the latest update and reward details.",
  alternates: { canonical: "/updates-and-rewards" },
};

export default function UpdatesAndRewardsPage() {
  return (
    <>
      <PageHero eyebrow="Updates and rewards" title="Read rewards with their date or version." intro="My Flower Shop includes daily streak rewards. Exact rewards and update changes can be collected from dated videos, screenshots, community guides, or Roblox records. This revision has not yet processed a complete reward calendar.">
        <div className="inline-actions"><Link className="button button-primary" href="/official-links">Open official links</Link></div>
      </PageHero>
      <ContentSection eyebrow="Daily return" title="The streak exists; the current reward is shown in game.">
        <div className="content-grid">
          <div className="content-card"><h3>Return on consecutive days</h3><p>The official description confirms rewards for daily streaks.</p></div>
          <div className="content-card"><h3>Read the source date before planning</h3><p>A reward calendar is usable when each day, amount or item, source, and version date stay together. Compare older entries with the current streak screen.</p></div>
        </div>
      </ContentSection>
      <ContentSection eyebrow="Next check" title="Keep permanent guides separate from changing values." intro="Mechanic explainers remain useful across updates. Reward amounts, shop costs, timers, and other numeric values need a fresh check when the game changes." raised>
        <div className="inline-actions"><Link className="button button-primary" href="/beginner-guide">Return to the stable game loop</Link><Link className="button button-secondary" href="/sources">See the current source dates</Link></div>
      </ContentSection>
    </>
  );
}
