import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const outputDir = path.resolve('out');
const siteDomain = 'my-flowershop.wiki';
const popunderUrl = 'https://globalimmaturelunatic.com/6b/f8/ab/6bf8ab603b8273c44943ed513110afd7.js';
const bannerKey = 'e1720d76d8e926cb317cb2690000460f';
const bannerUrl = `https://globalimmaturelunatic.com/${bannerKey}/invoke.js`;

async function findHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? findHtmlFiles(entryPath) : [entryPath];
  }));
  return files.flat().filter((file) => file.endsWith('.html'));
}

const htmlFiles = await findHtmlFiles(outputDir);
if (htmlFiles.length === 0) throw new Error(`No exported HTML files found in ${outputDir}`);
const failures = [];

for (const htmlFile of htmlFiles) {
  const html = await readFile(htmlFile, 'utf8');
  const route = path.relative(outputDir, htmlFile);
  const head = html.match(/<head[^>]*>[\s\S]*?<\/head>/i)?.[0] ?? '';
  const body = html.match(/<body[^>]*>[\s\S]*?<\/body>/i)?.[0] ?? '';
  const compactBody = body.replace(/\s+/g, '');
  const popCodes = [...html.matchAll(/https:\/\/globalimmaturelunatic\.com\/(?:[0-9a-f]{2}\/){3}[0-9a-f]+\.js/g)].map((match) => match[0]);
  const bannerCodes = [...html.matchAll(/https:\/\/globalimmaturelunatic\.com\/[0-9a-f]+\/invoke\.js/g)].map((match) => match[0]);

  if (!head.includes(popunderUrl)) failures.push(`${route}: Popunder is missing from <head>`);
  if (!head.includes('id="adsterra-pop-telemetry"')) failures.push(`${route}: Popunder telemetry loader is missing from <head>`);
  for (const eventName of ['adsterra_pop_script_loaded', 'adsterra_pop_script_failed', 'adsterra_pop_user_interaction']) {
    if (!head.includes(eventName)) failures.push(`${route}: telemetry event ${eventName} is missing from <head>`);
  }
  const gaConfigIndex = head.indexOf("gtag('config'");
  const telemetryIndex = head.indexOf('id="adsterra-pop-telemetry"');
  if (gaConfigIndex < 0 || gaConfigIndex > telemetryIndex) failures.push(`${route}: GA config must be queued before Popunder telemetry`);
  if (!body.includes(bannerUrl)) failures.push(`${route}: Banner invoke script is missing from <body>`);
  if (!compactBody.includes(`'key':'${bannerKey}'`) || !compactBody.includes("'format':'iframe'") || !compactBody.includes("'height':250") || !compactBody.includes("'width':300")) failures.push(`${route}: 300x250 Banner config is incomplete`);
  if (popCodes.some((url) => url !== popunderUrl)) failures.push(`${route}: contains another domain's Anti-Adblock Popunder code`);
  if (bannerCodes.some((url) => url !== bannerUrl)) failures.push(`${route}: contains another domain's Banner code`);
}

if (failures.length > 0) throw new Error(`Adsterra export validation failed for ${siteDomain}:\n${failures.join('\n')}`);
console.log(`Adsterra export validation passed for ${siteDomain} (${htmlFiles.length} HTML files).`);
