import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/ContentSection";
import { PageHero } from "@/components/PageHero";
import gameData from "@/data/game-data.json";

export const metadata: Metadata = {
  title: "My Flower Shop flowers, seed costs and grow times",
  description: "Check dated My Flower Shop seed costs, grow times, rarities, and unlock levels, then continue to supplies or bouquet crafting.",
  alternates: { canonical: "/flowers" },
};

export default function FlowersPage() {
  return (
    <>
      <PageHero
        eyebrow="Flowers guide"
        title="Pick a seed by time and unlock level."
        intro="The first three visible seed cards cost 1, 2, and 5 cash. Later flowers take longer and unlock from level 3 onward. The table below records exactly what appeared in Aug 8 gameplay, with the video time beside every row."
        media={{
          src: "/hero-bg.jpg",
          alt: "Flower beds, a greenhouse, and an offline growth message in My Flower Shop",
        }}
      >
        <div className="inline-actions"><Link className="button button-primary" href="/beginner-guide#plant">Follow the planting route</Link><Link className="button button-secondary" href="/growth">Compare growth supplies</Link></div>
      </PageHero>

      <ContentSection eyebrow="Seed list" title="Dated seed costs, timers, and unlocks" intro={`Observed ${gameData.observedAt} from gameplay published Aug 8, 2026. A missing cost means the captured menu did not show a usable price, not that the seed is free.`}>
        <table className="system-table">
          <thead><tr><th>Flower</th><th>Rarity</th><th>Grow time</th><th>Seed cost</th><th>Unlock</th><th>Source</th></tr></thead>
          <tbody>
            {gameData.flowers.map((flower) => (
              <tr key={flower.name}>
                <td>{flower.name}</td><td>{flower.rarity}</td><td>{flower.growthTime}</td><td>{flower.seedCost ?? "Not captured"}</td><td>{flower.unlockLevel}</td>
                <td><a className="text-link" href={flower.sourceUrl} target="_blank" rel="noreferrer">Video at {flower.timestamp}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="notice">A Daisy harvest showed 4 flowers at 0:44 in the growth-supplies video. The session may have included bonuses, so 4 is an observed result, not a confirmed base yield or profit input.</div>
      </ContentSection>

      <ContentSection eyebrow="How to use the list" title="Do not choose by grow time alone." raised>
        <div className="content-grid">
          <div className="content-card"><h3>Starting with little cash</h3><p>Tulip and Rose were the cheapest visible seeds in the captured menu. Their 6-second and 15-second timers make them easy to test before committing more cash.</p></div>
          <div className="content-card"><h3>Waiting for later unlocks</h3><p>Dandelion through Peony show level requirements. Their seed prices were not visible in the same captured cards, so the table leaves those cells open.</p></div>
          <div className="content-card"><h3>Speeding up one crop</h3><p>Use the <Link className="text-link" href="/growth">growth guide</Link> to compare Watering Can and Silver Watering Can time reductions with the timer you see now.</p></div>
          <div className="content-card"><h3>Using the harvest</h3><p>Move flowers into direct sales or open the <Link className="text-link" href="/bouquets">arrangement design list</Link> to see how many flowers each design accepts.</p></div>
        </div>
      </ContentSection>
    </>
  );
}
