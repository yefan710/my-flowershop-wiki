import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static";

const routes = ["", "/beginner-guide", "/flowers", "/bouquets", "/money-guide", "/staff-and-upgrades", "/updates-and-rewards", "/official-links", "/sources", "/about", "/privacy-policy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({ url: `${site.siteUrl}${route}`, lastModified: new Date("2026-08-11T18:42:00+08:00"), changeFrequency: index === 0 ? "daily" : "weekly", priority: index === 0 ? 1 : route.includes("privacy") || route === "/terms" ? 0.2 : 0.7 }));
}
