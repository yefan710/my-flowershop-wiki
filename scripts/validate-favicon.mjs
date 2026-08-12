#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const projectRoot = path.resolve(process.argv[2] || process.cwd());
const publicDir = path.join(projectRoot, 'public');
const outputDir = path.join(projectRoot, process.env.FAVICON_OUTPUT_DIR || 'out');
const pngPath = path.join(publicDir, 'favicon-96x96.png');
const icoPath = path.join(publicDir, 'favicon.ico');
const htmlPath = path.join(outputDir, 'index.html');
const failures = [];
const checks = {};

function fail(code, detail) {
  failures.push({ code, detail });
}

function readRequired(filePath, code) {
  if (!fs.existsSync(filePath)) {
    fail(code, `Missing ${path.relative(projectRoot, filePath)}`);
    return null;
  }
  const data = fs.readFileSync(filePath);
  if (data.length === 0) {
    fail(code, `Empty ${path.relative(projectRoot, filePath)}`);
    return null;
  }
  return data;
}

const png = readRequired(pngPath, 'missing_png');
if (png) {
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  if (png.length < 24 || !png.subarray(0, 8).equals(signature) || png.toString('ascii', 12, 16) !== 'IHDR') {
    fail('invalid_png', 'favicon-96x96.png is not a valid PNG with an IHDR chunk');
  } else {
    const width = png.readUInt32BE(16);
    const height = png.readUInt32BE(20);
    checks.png = { width, height, bytes: png.length };
    if (width !== 96 || height !== 96) {
      fail('invalid_png_dimensions', `Expected 96x96, received ${width}x${height}`);
    }
  }
}

const ico = readRequired(icoPath, 'missing_ico');
if (ico) {
  if (ico.length < 6 || ico.readUInt16LE(0) !== 0 || ico.readUInt16LE(2) !== 1) {
    fail('invalid_ico', 'favicon.ico does not have a valid ICO header');
  } else {
    const count = ico.readUInt16LE(4);
    const entries = [];
    if (count < 1 || ico.length < 6 + count * 16) {
      fail('invalid_ico_directory', `Invalid ICO directory count: ${count}`);
    } else {
      for (let index = 0; index < count; index += 1) {
        const offset = 6 + index * 16;
        const width = ico[offset] === 0 ? 256 : ico[offset];
        const height = ico[offset + 1] === 0 ? 256 : ico[offset + 1];
        const bytesInResource = ico.readUInt32LE(offset + 8);
        const imageOffset = ico.readUInt32LE(offset + 12);
        entries.push({ width, height, bytesInResource, imageOffset });
        if (bytesInResource < 1 || imageOffset + bytesInResource > ico.length) {
          fail('invalid_ico_entry', `ICO entry ${index} points outside the file`);
        }
      }
      checks.ico = { entries, bytes: ico.length };
      if (!entries.some((entry) => entry.width === entry.height && entry.width >= 48)) {
        fail('missing_ico_48', 'favicon.ico must contain a square layer of at least 48x48');
      }
    }
  }
}

const htmlBuffer = readRequired(htmlPath, 'missing_homepage_html');
if (htmlBuffer) {
  const html = htmlBuffer.toString('utf8');
  const headMatch = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i);
  if (!headMatch) {
    fail('missing_head', 'out/index.html has no readable head element');
  } else {
    const linkTags = headMatch[1].match(/<link\b[^>]*>/gi) || [];
    const iconLinks = linkTags.map((tag) => {
      const attrs = {};
      const attrPattern = /([:\w-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
      for (const match of tag.matchAll(attrPattern)) {
        attrs[match[1].toLowerCase()] = match[2] ?? match[3] ?? match[4] ?? '';
      }
      return attrs;
    }).filter((attrs) => (attrs.rel || '').toLowerCase().split(/\s+/).includes('icon'));

    checks.html = { iconLinks };
    if (iconLinks.length !== 1) {
      fail('ambiguous_icon_links', `Expected exactly one rel=icon declaration, found ${iconLinks.length}`);
    } else {
      const icon = iconLinks[0];
      if (icon.href !== '/favicon-96x96.png') {
        fail('unstable_icon_url', `Expected /favicon-96x96.png, received ${icon.href || '(missing)'}`);
      }
      if ((icon.type || '').toLowerCase() !== 'image/png') {
        fail('invalid_icon_type', `Expected image/png, received ${icon.type || '(missing)'}`);
      }
      if ((icon.sizes || '').toLowerCase() !== '96x96') {
        fail('invalid_icon_sizes', `Expected sizes=96x96, received ${icon.sizes || '(missing)'}`);
      }
    }
  }
}

const result = {
  status: failures.length === 0 ? 'pass' : 'fail',
  projectRoot,
  checks,
  failures,
};

process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
if (failures.length > 0) process.exitCode = 1;
