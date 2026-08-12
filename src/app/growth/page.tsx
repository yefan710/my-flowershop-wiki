import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/ContentSection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "My Flower Shop flower growth and offline progress",
  description: "Understand flower growth, supplies, harvesting, and offline progress in My Flower Shop, with dated gameplay references and no fixed guessed timers.",
  alternates: { canonical: "/growth" },
  robots: { index: false, follow: true },
};

export default function GrowthPage() {
  return (
    <>
      <PageHero eyebrow="Growth and supplies" title="Plan with a timer tied to a game build." intro="Flowers grow and can continue growing while you are offline. Exact timers, supply effects, and caps may come from dated videos, screenshots, or web guides. This revision has not yet processed those values into one same-build table.">
        <div className="inline-actions"><Link className="button button-primary" href="/flowers">Open the flower loop</Link><a className="button button-secondary" href="https://www.youtube.com/watch?v=02kx7GcM-kA" target="_blank" rel="noreferrer">Watch the supplies reference</a></div>
      </PageHero>
      <ContentSection eyebrow="A safe planning loop" title="Check, plant, leave, then verify when you return.">
        <ol className="step-list">
          <li><div><h3>Read the date on any growth table.</h3><p>A fixed timer is usable when its flower, conditions, source, and game-build date stay together. Compare an older value with the current display.</p></div></li>
          <li><div><h3>Check any supply effect before using it.</h3><p>A dated Aug 8 tutorial covers supplies used to make plants grow faster. Visible values from that source belong to the Aug 8 build unless a newer source updates them.</p></div></li>
          <li><div><h3>Verify offline progress after rejoining.</h3><p>The official description confirms offline growth, but it does not publish the exact rate or limit.</p></div></li>
        </ol>
      </ContentSection>
    </>
  );
}
