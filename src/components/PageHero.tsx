import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroMedia = {
  src: string;
  alt: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
  media?: PageHeroMedia;
};

export function PageHero({ eyebrow, title, intro, children, media }: PageHeroProps) {
  return (
    <section className={media ? "page-hero page-hero--media surface-base" : "page-hero surface-base"} data-surface-family="arena-base">
      <div className={media ? "page-shell page-hero-grid" : "page-shell page-hero-inner"}>
        <div className="page-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-lead">{intro}</p>
          {children}
        </div>
        {media ? (
          <figure className="page-hero-media">
            <Image src={media.src} alt={media.alt} width={1920} height={1080} priority sizes="(max-width: 980px) 100vw, 42vw" />
          </figure>
        ) : null}
      </div>
    </section>
  );
}
