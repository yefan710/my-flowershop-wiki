import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/ContentSection";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "My Flower Shop beginner guide",
  description: "Follow the confirmed My Flower Shop loop from planting and harvesting to crafting arrangements, serving customers, and growing the shop.",
  alternates: { canonical: "/beginner-guide" },
};

export default function BeginnerGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Beginner guide"
        title="Plant, craft, sell, then grow."
        intro="Your first goal is to understand one complete loop: grow flowers, harvest them, turn them into arrangements, and sell to customers. Staff, upgrades, decoration, offline growth, and daily streaks extend that loop."
        media={{
          src: "/beginner-gameplay.jpg",
          alt: "A player planting a tulip seed beside the flower shop in My Flower Shop",
          credit: "Gameplay frame · Velace · 0:03",
          href: "https://www.youtube.com/watch?v=GI2Wkuz6z6o&t=3s",
        }}
      >
        <div className="inline-actions">
          <a className="button button-primary" href="#plant">Start with planting</a>
          <a className="button button-secondary" href={site.gameUrl} target="_blank" rel="noreferrer">Play on Roblox</a>
        </div>
      </PageHero>

      <ContentSection id="plant" eyebrow="Step 1" title="Plant flowers and let them grow." intro="Flowers are the starting material for the rest of the shop.">
        <ol className="step-list">
          <li><div><h3>Choose what to plant in the game.</h3><p>Open the current seed list and compare the price and grow time shown in your server. Any dated table added here will keep the game build and conditions beside those values.</p></div></li>
          <li><div><h3>Return when the flowers are ready.</h3><p>The official game description says flowers continue growing while you are offline, so your beds can progress between sessions.</p></div></li>
          <li><div><h3>Harvest the finished flowers.</h3><p>Harvested flowers feed the crafting and customer side of the loop. Open the <Link className="text-link" href="/flowers">flowers guide for the role of planting, growth, and harvesting</Link>.</p></div></li>
        </ol>
      </ContentSection>

      <ContentSection id="craft" eyebrow="Step 2" title="Turn harvested flowers into arrangements." intro="Crafting connects your garden to the products you can present to customers." raised>
        <div className="content-grid">
          <div className="content-card"><h3>Use a dated recipe</h3><p>Recipe requirements can come from gameplay videos, screenshots, or web guides. Use a table only when it records every ingredient, amount, output, and source date.</p></div>
          <div className="content-card"><h3>Keep the next customer in mind</h3><p>The confirmed loop includes both individual flowers and crafted arrangements. Read the <Link className="text-link" href="/bouquets">bouquet guide to understand where arrangements fit</Link>.</p></div>
        </div>
      </ContentSection>

      <ContentSection id="sell" eyebrow="Step 3" title="Sell to customers and repeat the loop." intro="Customers are the end of the confirmed flower-and-arrangement cycle.">
        <div className="content-grid">
          <div className="content-card"><h3>Prepare saleable stock</h3><p>The game description says you can sell flowers and arrangements. This revision has no processed same-build price table, so compare any dated value with the current display.</p></div>
          <div className="content-card"><h3>Use sales to continue</h3><p>Once you understand the loop, decide whether your next question is about flower supply, bouquet crafting, or the systems that grow the shop.</p></div>
        </div>
      </ContentSection>

      <ContentSection id="grow" eyebrow="After the first loop" title="Build a shop that needs less manual attention." intro="The game lists staff, shop upgrades, decoration, daily streaks, and offline flower growth as progression systems." raised>
        <table className="system-table">
          <thead><tr><th>System</th><th>When to inspect it</th></tr></thead>
          <tbody>
            <tr><td>Staff</td><td>When you want to understand which shop tasks the game can help handle.</td></tr>
            <tr><td>Upgrades</td><td>When the current shop setup is limiting your next loop.</td></tr>
            <tr><td>Decoration</td><td>When you want to change the look of the shop or garden.</td></tr>
            <tr><td>Daily streaks</td><td>When you return on consecutive days and want to check the current reward in game.</td></tr>
          </tbody>
        </table>
        <div className="inline-actions"><Link className="button button-primary" href="/staff-and-upgrades">Open the staff and upgrades guide</Link><Link className="button button-secondary" href="/money-guide">Follow the money loop</Link></div>
      </ContentSection>
    </>
  );
}
