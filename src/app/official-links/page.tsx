import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/ContentSection";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Official My Flower Shop Roblox links", description: "Open the correct My Flower Shop Roblox experience by Magic Box Games and check its place ID, universe ID, and genre.", alternates: { canonical: "/official-links" } };

export default function OfficialLinksPage() {
  return (
    <>
      <PageHero eyebrow="Official links" title="Open the correct My Flower Shop." intro={`The target experience is My Flower Shop by the verified ${site.developer} group. Its place ID is ${site.placeId}.`}>
        <div className="inline-actions"><a className="button button-primary" href={site.gameUrl} target="_blank" rel="noreferrer">Play on Roblox</a><Link className="button button-secondary" href="/sources">Read source notes</Link></div>
      </PageHero>
      <ContentSection eyebrow="Identity check" title="The details that separate this game from other flower shops.">
        <table className="system-table"><tbody><tr><td>Developer</td><td>{site.developer} (verified Roblox group)</td></tr><tr><td>Place ID</td><td>{site.placeId}</td></tr><tr><td>Universe ID</td><td>{site.universeId}</td></tr><tr><td>Genre</td><td>{site.genre}</td></tr><tr><td>Last checked</td><td>{site.checkedLabel}</td></tr></tbody></table>
      </ContentSection>
    </>
  );
}
