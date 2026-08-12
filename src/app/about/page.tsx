import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/ContentSection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "About My Flower Shop Wiki", description: "Learn what My Flower Shop Wiki covers, how it handles changing game information, and where to check original sources.", alternates: { canonical: "/about" } };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About this guide" title="A fan-made route through My Flower Shop." intro="This site helps Roblox players move from a question to the right game action. It is independent and is not operated by Roblox or Magic Box Games.">
        <div className="inline-actions"><Link className="button button-primary" href="/beginner-guide">Start the beginner guide</Link><Link className="button button-secondary" href="/sources">Check the sources</Link></div>
      </PageHero>
      <ContentSection eyebrow="What belongs here" title="Useful answers with dates and sources.">
        <div className="content-grid"><div className="content-card"><h3>Player routes</h3><p>Guides are organized around planting, crafting, selling, cash, staff, upgrades, controls, and shop growth.</p></div><div className="content-card"><h3>External facts</h3><p>Videos, screenshots, community guides, and independent wikis can supply prices, recipes, timers, and other game data. We extract the fields, keep their date and conditions, check conflicts, and write our own explanation.</p></div></div>
      </ContentSection>
    </>
  );
}
