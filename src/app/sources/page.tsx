import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";
import { Icon } from "@/components/Icon";
import { site, sourceLinks } from "@/data/site";

export const metadata: Metadata = { title: "Sources and corrections", description: "See the Roblox, gameplay, video, screenshot, and web sources used by My Flower Shop Wiki, plus how facts are processed and dated.", alternates: { canonical: "/sources" } };

export default function SourcesPage() {
  return (
    <>
      <PageHero eyebrow="Sources and corrections" title="A usable fact can come from more than one kind of source." intro="Roblox, gameplay videos, video frames, community guides, and independent wikis can all supply facts. Before a value appears here, we separate it from the source wording, record its object, unit, conditions, and date, then check for conflicts. Use the live purchase screen before spending." />
      <ContentSection eyebrow="Current references" title="Links used across this guide">
        <div className="source-list">
          {sourceLinks.map((source) => <div className="source-row" key={source.url}><div><strong>{source.name}</strong><small>{source.publisher}</small></div><p>{source.use}</p><a className="text-link" href={source.url} target="_blank" rel="noreferrer">Open <Icon name="external-link" size={15} /></a></div>)}
        </div>
      </ContentSection>
      <ContentSection eyebrow="How details are processed" title="Facts stay exact; the page is written again from the player task." intro="A recipe, price, Tier, upgrade cost, probability, or code may come from a non-official page. Source type alone does not disqualify it. What matters is whether the fields are readable, dated, tied to the right game build, and free of unresolved conflicts." raised>
        <div className="content-grid"><div className="content-card"><h3>Extract the fields</h3><p>We record the name, value, unit or ingredients, conditions, source URL, and date before writing the page.</p></div><div className="content-card"><h3>Keep the time context</h3><p>Changing values are current facts or dated facts. When sources disagree, the page shows the difference instead of blending the numbers.</p></div><div className="content-card"><h3>Write an original answer</h3><p>We do not reproduce another guide&apos;s sentences, heading order, paragraph order, table layout, or images. The facts remain exact while the explanation and page structure are rebuilt here.</p></div></div>
        <div className="notice">Current source review date: {site.checkedLabel}. If a dated value conflicts with your live server, use the live value and revisit this source list.</div>
      </ContentSection>
    </>
  );
}
