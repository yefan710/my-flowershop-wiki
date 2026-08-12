"use client";

import Image from "next/image";
import { useState } from "react";

type GameplayVideoProps = {
  videoId: string;
  startAt?: number;
  title: string;
  poster: string;
  posterAlt: string;
};

export function GameplayVideo({ videoId, startAt = 0, title, poster, posterAlt }: GameplayVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&start=${startAt}`;

  return (
    <div className="gameplay-video">
      {isPlaying ? (
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          src={playerUrl}
          title={title}
        />
      ) : (
        <button
          aria-label={`Play ${title}`}
          className="gameplay-video-poster"
          onClick={() => setIsPlaying(true)}
          type="button"
        >
          <Image
            alt={posterAlt}
            height={1080}
            sizes="(max-width: 980px) 100vw, 58vw"
            src={poster}
            width={1920}
          />
          <span className="gameplay-video-action">
            <strong>Play video</strong>
            <small>{title}</small>
          </span>
        </button>
      )}
    </div>
  );
}
