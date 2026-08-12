import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/ContentSection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "My Flower Shop staff and upgrades",
  description: "Understand staff, upgrades, decoration, and shop growth in My Flower Shop, with current-game checks for every changing cost and effect.",
  alternates: { canonical: "/staff-and-upgrades" },
};

export default function StaffAndUpgradesPage() {
  return (
    <>
      <PageHero
        eyebrow="Staff and upgrades"
        title="Choose the shop problem before the purchase."
        intro="Start with the bottleneck: manual work, storage, growth speed, or appearance. Then compare the live role, cost, and effect before spending cash or Robux."
        media={{
          src: "/hero-gameplay.jpg",
          alt: "A working flower shop interior with displays, a checkout, and players in My Flower Shop",
          credit: "Gameplay frame · AccelToWin · 12:04",
          href: "https://www.youtube.com/watch?v=ab6vz83v4d4&t=724s",
        }}
      >
        <div className="inline-actions"><a className="button button-primary" href="https://www.youtube.com/watch?v=51A1WZMnf_c" target="_blank" rel="noreferrer">Watch the dated staff guide</a><Link className="button button-secondary" href="/money-guide">Return to the cash loop</Link></div>
      </PageHero>
      <ContentSection eyebrow="Decision guide" title="Match the system to the job you need done.">
        <div className="content-grid">
          <div className="content-card"><h3>Staff</h3><p>Inspect staff when manual shop work is the problem. A VendoPlus tutorial published Aug 8 can supply visible role and cost fields for that build once they are extracted with their context.</p></div>
          <div className="content-card"><h3>Upgrades</h3><p>Inspect upgrades when a current shop limit is stopping the next loop. Read the live effect before buying.</p></div>
          <div className="content-card"><h3>Decoration</h3><p>Use decoration when your goal is appearance or layout. Do not assume that a decorative change has a numeric effect unless the game says so.</p></div>
          <div className="content-card"><h3>Game passes</h3><p>Roblox currently lists Bigger Backpack, 2X Cash, 2X Grow Speed, and Customize. Check the live Roblox purchase screen for current prices and full terms.</p></div>
        </div>
      </ContentSection>
      <ContentSection eyebrow="Before buying" title="Keep every cost tied to its date." intro="The pass names and dated prices come from Roblox. Other upgrade values may come from videos, screenshots, or web guides. The site keeps exact values but rebuilds the explanation and table structure." raised>
        <div className="inline-actions"><Link className="button button-primary" href="/game-passes">Open the game pass names</Link><Link className="button button-secondary" href="/official-links">Open the official experience</Link></div>
      </ContentSection>
    </>
  );
}
