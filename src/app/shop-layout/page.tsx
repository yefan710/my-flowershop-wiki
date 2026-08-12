import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/ContentSection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "My Flower Shop building and layout",
  description: "Use the build and decoration systems in My Flower Shop without treating one community layout as the only correct design.",
  alternates: { canonical: "/shop-layout" },
  robots: { index: false, follow: true },
};

export default function ShopLayoutPage() {
  return (
    <>
      <PageHero eyebrow="Building and layout" title="Build for the shop you want to run." intro="The game supports shop and garden decoration. A dated gameplay tutorial also covers adding and removing buildings, but there is no verified single best layout for every player.">
        <div className="inline-actions"><a className="button button-primary" href="https://www.youtube.com/watch?v=N_3ZvYuxGiY" target="_blank" rel="noreferrer">Watch the dated building guide</a><Link className="button button-secondary" href="/staff-and-upgrades">Review shop growth</Link></div>
      </PageHero>
      <ContentSection eyebrow="Layout check" title="Keep actions readable and changes reversible when possible.">
        <div className="content-grid">
          <div className="content-card"><h3>Find the build action</h3><p>Use the label shown in your current interface. The Aug 8 VendoPlus tutorial provides a dated visual reference for adding and removing buildings.</p></div>
          <div className="content-card"><h3>Separate looks from confirmed effects</h3><p>Decoration is confirmed. Do not assume an object improves earnings, growth, or staff unless the live game states that effect.</p></div>
        </div>
      </ContentSection>
    </>
  );
}
