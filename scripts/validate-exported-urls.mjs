import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const expectedOrigin = process.argv[2]?.replace(/\/$/, "");

if (!expectedOrigin) {
  process.stderr.write("Expected production origin is required.\n");
  process.exit(1);
}

let expectedUrl;
try {
  expectedUrl = new URL(expectedOrigin);
} catch {
  process.stderr.write("Expected production origin must be an absolute URL.\n");
  process.exit(1);
}

if (expectedUrl.protocol !== "https:") {
  process.stderr.write("Expected production origin must use HTTPS.\n");
  process.exit(1);
}

const outDir = path.resolve("out");
const sitemap = await readFile(path.join(outDir, "sitemap.xml"), "utf8");
const robots = await readFile(path.join(outDir, "robots.txt"), "utf8");
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

if (locations.length === 0) {
  process.stderr.write("Exported sitemap contains no URLs.\n");
  process.exit(1);
}

const invalidLocations = locations.filter((location) => {
  try {
    return new URL(location).origin !== expectedUrl.origin;
  } catch {
    return true;
  }
});

if (invalidLocations.length > 0) {
  process.stderr.write(`Exported sitemap contains ${invalidLocations.length} non-production URL(s).\n`);
  process.exit(1);
}

if (!robots.includes(`Sitemap: ${expectedUrl.origin}/sitemap.xml`)) {
  process.stderr.write("Exported robots.txt does not reference the production sitemap.\n");
  process.exit(1);
}

async function findTextFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return findTextFiles(fullPath);
    return /\.(?:html|xml|txt|json)$/i.test(entry.name) ? [fullPath] : [];
  }));
  return nested.flat();
}

for (const file of await findTextFiles(outDir)) {
  const content = await readFile(file, "utf8");
  if (/https?:\/\/(?:localhost|127\.0\.0\.1|\[::1\])(?::\d+)?/i.test(content)) {
    process.stderr.write(`Localhost URL found in exported file: ${path.relative(outDir, file)}\n`);
    process.exit(1);
  }
}

process.stdout.write(`Exported URLs accepted: ${locations.length} sitemap URL(s) on ${expectedUrl.origin}\n`);
