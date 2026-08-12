import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/ContentSection";
import { PageHero } from "@/components/PageHero";
import gameData from "@/data/game-data.json";

export const metadata: Metadata = {
  title: "My Flower Shop staff, hire costs and upgrades",
  description: "Check dated gardener hire costs, expansion prices, Advertising costs, and current Roblox game pass prices for My Flower Shop.",
  alternates: { canonical: "/staff-and-upgrades" },
};

export default function StaffAndUpgradesPage() {
  return (
    <>
      <PageHero eyebrow="Staff and upgrades" title="Compare a 1,500-cash hire with the next upgrade." intro="The captured staff menu showed three Gardeners at 1,500 cash each. The upgrade menu showed cheaper Advertising levels and larger expansion costs. Their exact effects are not equally complete, so use the tables as a cost check rather than a best-buy ranking." media={{ src: "/hero-gameplay.jpg", alt: "A working flower shop interior with displays, a checkout, and players in My Flower Shop", credit: "Gameplay frame · AccelToWin · 12:04", href: "https://www.youtube.com/watch?v=ab6vz83v4d4&t=724s" }}>
        <div className="inline-actions"><a className="button button-primary" href="https://www.youtube.com/watch?v=51A1WZMnf_c" target="_blank" rel="noreferrer">Watch the dated staff guide</a><Link className="button button-secondary" href="/money-guide">Return to the cash loop</Link></div>
      </PageHero>

      <ContentSection eyebrow="Staff menu" title="Gardeners shown at the same hire cost" intro={`Observed ${gameData.observedAt} at 0:27 in a gameplay video published Aug 8, 2026. The level-2 session showed Gardener and Cashier categories with 0/1 slots.`}>
        <table className="system-table"><thead><tr><th>Name</th><th>Role</th><th>Hire cost</th><th>Source</th></tr></thead><tbody>{gameData.staff.map((member) => <tr key={member.name}><td>{member.name}</td><td>{member.role}</td><td>{member.hireCost}</td><td><a className="text-link" href={member.sourceUrl} target="_blank" rel="noreferrer">Video at {member.timestamp}</a></td></tr>)}</tbody></table>
        <div className="notice">The source does not clearly show what a Gardener performs after hiring. It also never opens the Cashier hire dialog. Exact Gardener behaviour, Cashier names, Cashier prices, and slot progression remain open.</div>
      </ContentSection>

      <ContentSection eyebrow="Upgrade menu" title="Four dated upgrade offers" raised>
        <table className="system-table"><thead><tr><th>Upgrade</th><th>Level</th><th>Cost</th><th>Visible effect</th><th>Source</th></tr></thead><tbody>{gameData.upgrades.map((upgrade) => <tr key={`${upgrade.name}-${upgrade.level}`}><td>{upgrade.name}</td><td>{upgrade.level}</td><td>{upgrade.cost}</td><td>{upgrade.effect ?? "Not stated on captured card"}</td><td><a className="text-link" href={upgrade.sourceUrl} target="_blank" rel="noreferrer">Video at {upgrade.timestamp}</a></td></tr>)}</tbody></table>
      </ContentSection>

      <ContentSection eyebrow="Robux options" title="Use Roblox as the final pass price check." intro="At the Aug 11 check, Roblox listed Bigger Backpack at 79 Robux, 2X Cash at 499, 2X Grow Speed at 299, and Customize at 149. Prices and terms can change." raised>
        <div className="inline-actions"><Link className="button button-primary" href="/game-passes">Open the pass list</Link><Link className="button button-secondary" href="/official-links">Open the official experience</Link></div>
      </ContentSection>
    </>
  );
}
