import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/ContentSection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "My Flower Shop controls",
  description: "Find the main My Flower Shop actions and use a dated gameplay walkthrough as a visual reference for the current interface.",
  alternates: { canonical: "/controls" },
  robots: { index: false, follow: true },
};

export default function ControlsPage() {
  return (
    <>
      <PageHero eyebrow="Controls and interface" title="Find the action before you learn the whole game." intro="The interface can change between updates. Use the action labels in your current server, and compare them with the linked Aug 8 gameplay walkthrough when you need a visual reference.">
        <div className="inline-actions"><a className="button button-primary" href="https://www.youtube.com/watch?v=gmWVnToeDCk" target="_blank" rel="noreferrer">Watch the dated walkthrough</a><Link className="button button-secondary" href="/beginner-guide">Open the full beginner route</Link></div>
      </PageHero>
      <ContentSection eyebrow="Action map" title="Look for the task, not a memorized screen position." intro="Menu positions can move. These are the actions that connect the confirmed game loop.">
        <div className="content-grid">
          <div className="content-card"><h3>Plant and harvest</h3><p>Use the flower or growing area in your current plot. The <Link className="text-link" href="/flowers">flowers page explains what happens before and after harvest</Link>.</p></div>
          <div className="content-card"><h3>Craft an arrangement</h3><p>Open the crafting action shown in your server. Check the live ingredient requirement before using flowers.</p></div>
          <div className="content-card"><h3>Sell to customers</h3><p>Move finished flowers or arrangements into the customer side of the shop loop.</p></div>
          <div className="content-card"><h3>Build, hire, or upgrade</h3><p>Use the current shop interface when you are ready to spend. The <Link className="text-link" href="/staff-and-upgrades">staff and upgrades page separates those choices</Link>.</p></div>
        </div>
        <div className="notice">Video reference: VendoPlus, &quot;How to Play My Flower Shop Roblox Full Guide,&quot; published Aug 8, 2026. Treat the video as a dated interface example and the current game as the final check.</div>
      </ContentSection>
    </>
  );
}
