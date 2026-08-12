import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/ContentSection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Privacy policy", description: "Privacy information for My Flower Shop Wiki.", alternates: { canonical: "/privacy-policy" } };

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="This guide does not require an account." intro="The current site is a public reference site. It does not ask for your Roblox password, game cookie, or account credentials." />
      <ContentSection eyebrow="Current site behavior" title="Information handled by this site">
        <div className="content-grid"><div className="content-card"><h3>Google Analytics</h3><p>The site measures page visits, traffic sources, and interactions to improve the guides. Analytics loads automatically, while advertising storage, advertising user data, and ad personalization stay disabled.</p></div><div className="content-card"><h3>Server logs</h3><p>The hosting provider may process routine request data such as an IP address, browser details, requested page, and time for security and delivery.</p></div><div className="content-card"><h3>Roblox game counters</h3><p>The homepage requests current player and favorite counts from the public Roblox game information API. If that request fails, the page keeps its dated saved snapshot.</p></div><div className="content-card"><h3>External links</h3><p>Roblox and YouTube apply their own privacy policies when the site requests a Roblox counter or when you open either service.</p></div></div>
        <p className="notice">Do not submit Roblox credentials to a fan guide. This site does not need them.</p>
        <div className="inline-actions"><Link className="button button-primary" href="/">Return home</Link></div>
      </ContentSection>
    </>
  );
}
