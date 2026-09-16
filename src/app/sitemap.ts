import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static";

const routes = ["", "/beginner-guide", "/flowers", "/growth", "/bouquets", "/money-guide", "/gems-guide", "/shop-layout", "/staff-and-upgrades", "/updates-and-rewards", "/official-links", "/sources", "/about", "/privacy-policy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({ url: `${site.siteUrl}${route}`, lastModified: new Date(["/money-guide", "/growth", "/gems-guide", "/shop-layout", "/staff-and-upgrades"].includes(route) ? "2026-08-24T02:30:00+08:00" : route === "" ? "2026-08-17T11:30:06+08:00" : "2026-08-11T18:42:00+08:00"), changeFrequency: index === 0 ? "daily" : "weekly", priority: index === 0 ? 1 : route.includes("privacy") || route === "/terms" ? 0.2 : 0.7 }));
}

