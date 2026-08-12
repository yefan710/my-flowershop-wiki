"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { Icon } from "./Icon";

type Metrics = {
  playing: number;
  favorites: number;
  checked: string;
  live: boolean;
};

const compact = new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 });
const exact = new Intl.NumberFormat("en-US");

export function GameStatus() {
  const [metrics, setMetrics] = useState<Metrics>({
    playing: site.playing,
    favorites: site.favorites,
    checked: site.checkedLabel,
    live: false,
  });

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://games.roblox.com/v1/games?universeIds=${site.universeId}`, {
      signal: controller.signal,
      cache: "no-store",
    })
      .then((response) => {
        if (!response.ok) throw new Error("Roblox request failed");
        return response.json();
      })
      .then((payload) => {
        const game = payload?.data?.[0];
        if (typeof game?.playing !== "number" || typeof game?.favoritedCount !== "number") return;
        setMetrics({
          playing: game.playing,
          favorites: game.favoritedCount,
          checked: new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "short" }).format(new Date()),
          live: true,
        });
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  return (
    <section className="status-section surface-raised" id="game-status" data-surface-family="arena-raised" aria-labelledby="status-heading">
      <div className="status-copy">
        <span className="source-chip"><Icon name="badge-check" size={16} /> Official Roblox data</span>
        <div>
          <p className="eyebrow">Open now</p>
          <h2 id="status-heading">Check the game, then jump in.</h2>
          <p>{metrics.live ? "Live data loaded from Roblox." : `Saved Roblox snapshot from ${site.checkedLabel}.`} Checked {metrics.checked}.</p>
        </div>
      </div>
      <dl className="status-metrics">
        <div>
          <dt>Playing</dt>
          <dd title={exact.format(metrics.playing)}>{compact.format(metrics.playing)}</dd>
        </div>
        <div>
          <dt>Favorites</dt>
          <dd title={exact.format(metrics.favorites)}>{compact.format(metrics.favorites)}</dd>
        </div>
      </dl>
      <a className="button button-primary" href={site.gameUrl} target="_blank" rel="noreferrer">
        Play on Roblox <Icon name="external-link" size={18} />
      </a>
    </section>
  );
}
