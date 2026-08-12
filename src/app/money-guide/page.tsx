import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/ContentSection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "How to make money in My Flower Shop",
  description: "Trace cash in My Flower Shop from planted flowers and crafted arrangements to customer sales and shop spending without a guessed profit table.",
  alternates: { canonical: "/money-guide" },
};

export default function MoneyGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Cash and shop spending"
        title="Money follows the flower-to-customer loop."
        intro="Grow and harvest flowers, craft arrangements when the current recipe makes sense, and sell to customers. Before buying an upgrade, compare its live cost with the cash shown in your server."
        media={{
          src: "/selling-flowers.png",
          alt: "Flowers placed at the checkout counter in My Flower Shop",
          credit: "Official My Flower Shop media · customer sales",
          href: "https://www.roblox.com/games/93028168925975/My-Flower-Shop",
        }}
      >
        <div className="inline-actions"><Link className="button button-primary" href="/beginner-guide#sell">Start at the sales step</Link><a className="button button-secondary" href="https://www.youtube.com/watch?v=-P-g5GgpWFM" target="_blank" rel="noreferrer">Watch the dated cash guide</a></div>
      </PageHero>
      <ContentSection eyebrow="Cash loop" title="Find the weak link before spending more.">
        <ol className="step-list">
          <li><div><h3>Check flower supply.</h3><p>If you cannot keep the sales loop moving, start with planting, growth, and harvesting.</p></div></li>
          <li><div><h3>Check the recipe date.</h3><p>A recipe from a video, screenshot, or web guide is usable when every ingredient, amount, output, and build date is recorded. Compare older recipes with the current interface.</p></div></li>
          <li><div><h3>Complete customer sales.</h3><p>The official description confirms that flowers and arrangements can be sold to customers.</p></div></li>
          <li><div><h3>Compare the next cost in game.</h3><p>Decide whether the next purchase supports flower supply, customer flow, staff, or another shop goal.</p></div></li>
        </ol>
        <div className="notice">The Aug 8 VendoPlus cash tutorial is a dated gameplay source. Any extracted price or rate belongs to that date. A &quot;best money&quot; claim also needs a same-build comparison across the available options.</div>
      </ContentSection>
      <ContentSection eyebrow="Calculator input status" title="A profit planner needs one same-build data set." intro="A useful calculator needs flower costs, growth times, recipes, sale values, and upgrade costs tied to the same game version. External pages can supply those inputs, but this revision has not completed the field set." raised>
        <div className="inline-actions"><Link className="button button-primary" href="/staff-and-upgrades">Compare the next shop system</Link><Link className="button button-secondary" href="/sources">Review source dates</Link></div>
      </ContentSection>
    </>
  );
}
