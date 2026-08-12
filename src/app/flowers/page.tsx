import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/ContentSection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "My Flower Shop flowers guide",
  description: "Understand planting, flower growth, harvesting, and offline progress in My Flower Shop, with dated sources for changing prices and timers.",
  alternates: { canonical: "/flowers" },
};

export default function FlowersPage() {
  return (
    <>
      <PageHero
        eyebrow="Flowers guide"
        title="Flowers start every shop loop."
        intro="Plant flowers, wait for them to grow, then harvest them for direct sales or crafting. The official game description also says flowers grow while you are offline."
        media={{
          src: "/hero-bg.jpg",
          alt: "Flower beds, a greenhouse, and an offline growth message in My Flower Shop",
          credit: "Official My Flower Shop media · offline growth",
          href: "https://www.roblox.com/games/93028168925975/My-Flower-Shop",
        }}
      >
        <div className="inline-actions"><Link className="button button-primary" href="/beginner-guide#plant">Follow the planting route</Link><Link className="button button-secondary" href="/bouquets">See how crafting follows</Link></div>
      </PageHero>
      <ContentSection eyebrow="The confirmed flow" title="Planting leads to two next decisions." intro="After harvesting, decide whether a flower stays as sale stock or becomes part of an arrangement.">
        <div className="content-grid">
          <div className="content-card"><h3>Plant and grow</h3><p>Use the price and timer shown in the current seed list. When this page adds a value table, each number will keep its source date and game build so you can spot an outdated entry.</p></div>
          <div className="content-card"><h3>Harvest and route the stock</h3><p>Harvested flowers can feed customer sales or the bouquet and arrangement system described by the game.</p></div>
        </div>
      </ContentSection>
      <ContentSection eyebrow="Offline progress" title="Your beds can keep growing between sessions." intro="Offline growth is part of the official description. The description does not state a multiplier, cap, or exact timing rule." raised>
        <div className="notice">Check the growth state shown after you rejoin. Do not plan around a fixed offline rate unless the current game interface gives you one.</div>
        <div className="inline-actions"><Link className="button button-primary" href="/bouquets">Continue to bouquet crafting</Link><Link className="button button-secondary" href="/sources">Check the source notes</Link></div>
      </ContentSection>
    </>
  );
}
