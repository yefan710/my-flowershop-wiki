import Link from "next/link";
import Image from "next/image";
import { GameStatus } from "@/components/GameStatus";
import { GameplayVideo } from "@/components/GameplayVideo";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/data/site";

const coreRoutes = [
  {
    href: "/flowers",
    icon: "sparkles" as const,
    label: "Flowers and growth",
    question: "What should I know before planting?",
    inside: "Compare eight dated flower timers, three captured seed costs, unlock levels, and four supply effects.",
    result: "Choose a seed or supply from fields visible in the source.",
    image: "/hero-bg.jpg",
    alt: "Flower beds and a greenhouse in My Flower Shop",
  },
  {
    href: "/bouquets",
    icon: "route" as const,
    label: "Bouquets and crafting",
    question: "When should I craft a bouquet?",
    inside: "Compare eight designs, capacities from 1 to 12 flowers, unlock levels, and nine visible styles.",
    result: "Choose a design that fits your current stock and level.",
    image: "/beginner-guide.png",
    alt: "A bouquet crafting table in My Flower Shop",
  },
  {
    href: "/money-guide",
    icon: "route" as const,
    label: "Cash and spending",
    question: "Where does cash come from?",
    inside: "Use two dated quest rewards, then compare display, staff, Advertising, and expansion costs.",
    result: "Fund the next visible bottleneck without a guessed profit table.",
    image: "/selling-flowers.png",
    alt: "Flowers ready for sale at a shop counter in My Flower Shop",
  },
  {
    href: "/staff-and-upgrades",
    icon: "badge-check" as const,
    label: "Staff and upgrades",
    question: "How does the shop grow?",
    inside: "Compare three 1,500-cash Gardeners, four upgrade offers, and current Roblox pass prices.",
    result: "Compare a dated hire with a specific upgrade cost.",
    image: "/hero-gameplay.jpg",
    alt: "A working flower shop interior in My Flower Shop",
  },
];

const quickRoutes = [
  {
    href: "/updates-and-rewards",
    icon: "sparkles" as const,
    title: "Returning today?",
    summary: "Check how daily streaks and changing rewards are handled.",
  },
  {
    href: "/controls",
    icon: "external-link" as const,
    title: "Cannot find an action?",
    summary: "Open the short controls route and dated visual reference.",
  },
  {
    href: "/official-links",
    icon: "external-link" as const,
    title: "Opening the right game?",
    summary: "Verify the developer, place ID, and official experience.",
  },
  {
    href: "/sources",
    icon: "clock-3" as const,
    title: "Need the evidence?",
    summary: "See source links, check dates, and update limits.",
  },
];

const loopFrames = [
  {
    src: "/hero-bg.jpg",
    alt: "Flower beds and a greenhouse in My Flower Shop",
    step: "01",
    title: "Grow and harvest",
    detail: "Flowers are the supply for direct sales and crafting, and the game supports offline growth.",
  },
  {
    src: "/beginner-guide.png",
    alt: "Bouquet crafting table in My Flower Shop",
    step: "02",
    title: "Craft arrangements",
    detail: "Choose an arrangement design, style, and enough flowers for its capacity in the craft menu.",
  },
  {
    src: "/selling-flowers.png",
    alt: "Flowers at a customer checkout counter in My Flower Shop",
    step: "03",
    title: "Sell to customers",
    detail: "Return flowers and finished arrangements to the customer loop, then decide what the shop needs next.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: site.name,
          url: site.siteUrl,
          description: site.description,
        }}
      />

      <section className="game-hero" data-surface-family="image-veil" aria-labelledby="home-title">
        <div className="hero-content">
          <div className="hero-copy">
            <span className="source-chip"><Icon name="badge-check" size={16} /> Checked {site.checkedLabel}</span>
            <p className="eyebrow">Independent Roblox player wiki</p>
            <h1 className="hero-title" id="home-title">My Flower <span>Shop Wiki</span></h1>
            <p className="hero-decision">
              Learn the flower-to-customer loop, find the right guide when a new system appears, and open the official game without digging through unrelated florist results.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/beginner-guide">
                Start the beginner guide <Icon name="chevron-right" size={18} />
              </Link>
              <Link className="button button-secondary" href="/flowers">Understand flowers</Link>
              <a className="button button-secondary" href={site.gameUrl} target="_blank" rel="noreferrer">
                Open Roblox <Icon name="external-link" size={17} />
              </a>
            </div>
            <p className="hero-disclosure">Fan-made guide. Not operated by Roblox or Magic Box Games.</p>
          </div>
        </div>
      </section>

      <section className="home-section surface-base" data-surface-family="arena-base" aria-labelledby="beginner-heading">
        <div className="page-shell">
          <div className="beginner-feature">
            <div className="beginner-media">
              <GameplayVideo
                poster="/beginner-gameplay.jpg"
                posterAlt="A player planting a tulip seed beside the flower shop in My Flower Shop"
                startAt={3}
                title="the beginner planting walkthrough"
                videoId="GI2Wkuz6z6o"
              />
            </div>
            <div className="beginner-copy">
              <p className="eyebrow">Your first route</p>
              <h2 id="beginner-heading">Learn one complete shop loop.</h2>
              <p>
                The guide starts with planting and harvesting, then follows those flowers into arrangements and customer sales. It also shows where staff, upgrades, decoration, offline growth, and daily streaks fit.
              </p>
              <div className="topic-links">
                <Link href="/beginner-guide#plant"><span>Beginner guide</span> Plant and grow <Icon name="chevron-right" size={16} /></Link>
                <Link href="/beginner-guide#craft"><span>Beginner guide</span> Craft an arrangement <Icon name="chevron-right" size={16} /></Link>
                <Link href="/beginner-guide#sell"><span>Beginner guide</span> Sell to customers <Icon name="chevron-right" size={16} /></Link>
                <Link href="/beginner-guide#grow"><span>Beginner guide</span> Grow the shop <Icon name="chevron-right" size={16} /></Link>
              </div>
              <Link className="button button-primary" href="/beginner-guide">Open the full beginner guide</Link>
            </div>
          </div>
        </div>
      </section>

      <GameStatus />

      <section className="home-section surface-base" data-surface-family="arena-base" aria-labelledby="route-heading">
        <div className="page-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Pick the question you have now</p>
              <h2 id="route-heading">Solve the task in front of you.</h2>
            </div>
            <p>The strongest player questions cluster around flowers, crafting, cash, and shop growth. Choose the block that matches what is slowing you down.</p>
          </div>
          <div className="route-grid">
            {coreRoutes.map((route) => (
              <Link className="route-card" href={route.href} key={route.href}>
                <span className="route-card-media">
                  <Image src={route.image} alt={route.alt} width={1536} height={864} sizes="(max-width: 640px) 100vw, 50vw" />
                </span>
                <span className="route-card-body">
                  <span className="route-card-label"><Icon name={route.icon} size={17} /> {route.label}</span>
                  <h3>{route.question}</h3>
                  <p>{route.inside}</p>
                  <span className="result"><strong>Result:</strong> {route.result}</span>
                </span>
              </Link>
            ))}
          </div>
          <div className="quick-routes" aria-label="More useful routes">
            {quickRoutes.map((route) => (
              <Link href={route.href} key={route.href}>
                <span className="card-icon"><Icon name={route.icon} size={18} /></span>
                <span><strong>{route.title}</strong><small>{route.summary}</small></span>
                <Icon name="chevron-right" size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section surface-raised" data-surface-family="arena-raised" aria-labelledby="system-heading">
        <div className="page-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Game loop at a glance</p>
              <h2 id="system-heading">See how one loop becomes a shop.</h2>
            </div>
            <p>These official experience images show the three jobs players repeat. Exact prices, recipes, and timings stay tied to their source date and game build.</p>
          </div>
          <div className="loop-gallery">
            {loopFrames.map((frame) => (
              <figure key={frame.step}>
                <Image src={frame.src} alt={frame.alt} width={1536} height={864} sizes="(max-width: 640px) 100vw, 33vw" />
                <figcaption>
                  <span>{frame.step}</span>
                  <div><h3>{frame.title}</h3><p>{frame.detail}</p></div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="progression-strip">
            <p><strong>Keep growing</strong><span>Flowers continue growing while you are offline.</span></p>
            <p><strong>Build the shop</strong><span>Staff, upgrades, and decoration extend the loop.</span></p>
            <p><strong>Return each day</strong><span>Daily streak rewards give you a reason to check back.</span></p>
          </div>
        </div>
      </section>

      <section className="home-section surface-raised" data-surface-family="arena-raised" aria-labelledby="source-heading">
        <div className="page-shell">
          <p className="eyebrow">Sources and corrections</p>
          <h2 id="source-heading">Game facts change. The source link stays visible.</h2>
          <p className="section-lead">
            Roblox is the final check for the game identity and live counters. Guide details may also use clearly named gameplay videos or community references when the official page does not explain a mechanic.
          </p>
          <div className="inline-actions">
            <Link className="button button-primary" href="/sources">Read the source policy</Link>
            <Link className="button button-secondary" href="/about">About this fan guide</Link>
          </div>
        </div>
      </section>
    </>
  );
}
