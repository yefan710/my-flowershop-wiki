import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/ContentSection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "My Flower Shop bouquets and arrangements",
  description: "See how bouquets and other arrangements connect harvested flowers to customer sales in My Flower Shop.",
  alternates: { canonical: "/bouquets" },
};

export default function BouquetsPage() {
  return (
    <>
      <PageHero
        eyebrow="Bouquets and arrangements"
        title="Crafting sits between harvest and sale."
        intro="My Flower Shop lets you craft bouquets and other floral arrangements from the flowers you grow. Those finished products can then move into customer sales."
        media={{
          src: "/beginner-guide.png",
          alt: "A bouquet crafting table with flowers and tools in My Flower Shop",
          credit: "Official My Flower Shop media · bouquet crafting",
          href: "https://www.roblox.com/games/93028168925975/My-Flower-Shop",
        }}
      >
        <div className="inline-actions"><Link className="button button-primary" href="/beginner-guide#craft">Follow the crafting step</Link><Link className="button button-secondary" href="/flowers">Review flower supply</Link></div>
      </PageHero>
      <ContentSection eyebrow="Before you craft" title="Use a recipe tied to a date or game build." intro="A gameplay video, screenshot, community guide, or independent wiki can support an ingredient table. This revision has not yet processed a complete recipe set.">
        <ol className="step-list">
          <li><div><h3>Check the arrangement you want to make.</h3><p>Read its current ingredient requirement in the crafting interface.</p></div></li>
          <li><div><h3>Compare the requirement with your harvested flowers.</h3><p>Only commit the stock after the game shows that you have enough.</p></div></li>
          <li><div><h3>Return the finished arrangement to the customer loop.</h3><p>The game description confirms that arrangements can be sold to customers.</p></div></li>
        </ol>
        <div className="notice">When a recipe is added here, its ingredients, amounts, output, source, and check date stay together. The wording and page layout are written for this guide rather than copied from the source.</div>
      </ContentSection>
      <ContentSection eyebrow="Next question" title="Fix the side of the loop that is slowing down." raised>
        <div className="content-grid">
          <div className="content-card"><h3>Short on flowers?</h3><p>Return to the <Link className="text-link" href="/flowers">flowers guide for planting, harvesting, and offline growth</Link>.</p></div>
          <div className="content-card"><h3>Ready to expand?</h3><p>Open the <Link className="text-link" href="/staff-and-upgrades">shop growth guide for staff, upgrades, decoration, and streaks</Link>.</p></div>
        </div>
      </ContentSection>
    </>
  );
}
