import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, extname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const mode = process.argv[2] ?? 'gate2';
const errors = [];

const json = (path) => JSON.parse(readFileSync(join(root, path), 'utf8'));
const fail = (message) => errors.push(message);
const expect = (condition, message) => {
  if (!condition) fail(message);
};

function walk(directory, extensions = null) {
  const absolute = join(root, directory);
  if (!existsSync(absolute)) return [];
  const files = [];
  for (const entry of readdirSync(absolute)) {
    const path = join(absolute, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) files.push(...walk(relative(root, path), extensions));
    else if (!extensions || extensions.has(extname(path))) files.push(path);
  }
  return files.sort();
}

function fingerprint(files) {
  const hash = createHash('sha256');
  for (const file of files.sort()) {
    const rel = relative(root, file).split(sep).join('/');
    hash.update(rel);
    hash.update('\0');
    hash.update(readFileSync(file));
    hash.update('\0');
  }
  return `sha256:${hash.digest('hex')}`;
}

const gate1Files = [
  'work/external-fact-policy.json',
  'work/source-register.json',
  'work/claim-ledger.json',
  'work/page-briefs.json',
].map((path) => join(root, path));

const publicSourceFiles = [
  ...walk('src/app', new Set(['.ts', '.tsx'])),
  ...walk('src/components', new Set(['.ts', '.tsx'])),
  ...walk('src/data', new Set(['.ts', '.tsx'])),
  ...walk('src/lib', new Set(['.ts', '.tsx'])),
];

const currentFingerprints = {
  gate1: fingerprint(gate1Files),
  gate2: fingerprint(publicSourceFiles),
};

function discoverRoutes() {
  const app = join(root, 'src/app');
  const routes = [];
  for (const file of walk('src/app', new Set(['.tsx']))) {
    if (file.endsWith(`${sep}page.tsx`)) {
      const dir = relative(app, dirname(file)).split(sep).join('/');
      routes.push(dir ? `/${dir}` : '/');
    }
  }
  return routes.sort();
}

function allChecksPass(checks, label) {
  expect(checks && typeof checks === 'object', `${label} checks are missing.`);
  if (!checks || typeof checks !== 'object') return;
  for (const [name, value] of Object.entries(checks)) {
    expect(value === true, `${label} check ${name} is not true.`);
  }
}

function validateGate1() {
  const sources = json('work/source-register.json');
  const ledger = json('work/claim-ledger.json');
  const briefs = json('work/page-briefs.json');
  const gate = json('work/content-humanizer/gate-1.json');

  expect(gate.status === 'pass', 'Gate 1 status is not pass.');
  expect(gate.humanizer?.version === '2.9.1', 'Gate 1 must use Humanizer 2.9.1.');
  expect(gate.humanizer?.mode === 'embedded', 'Gate 1 must use embedded mode.');
  expect(gate.humanizer?.packageValidation === 'pass', 'Humanizer package validation is not recorded as pass.');
  expect(gate.inputFingerprint === currentFingerprints.gate1, 'Gate 1 fingerprint is stale. Review the content inputs before updating it.');
  allChecksPass(gate.checks, 'Gate 1');

  const requiredProtected = ['raw evidence', 'code', 'JSON', 'Schema', 'URL', 'numeric fields'];
  for (const item of requiredProtected) {
    expect(gate.protectedArtifactTypes?.includes(item), `Gate 1 does not protect ${item}.`);
  }

  const sourceIds = new Set();
  for (const source of sources.sources ?? []) {
    expect(source.id && !sourceIds.has(source.id), `Source ID is missing or duplicated: ${source.id ?? '(missing)'}.`);
    sourceIds.add(source.id);
    expect(Boolean(source.url || source.paths?.length), `Source ${source.id} has no URL or local path.`);
  }

  const claims = new Map();
  for (const claim of ledger.claims ?? []) {
    expect(claim.id && !claims.has(claim.id), `Claim ID is missing or duplicated: ${claim.id ?? '(missing)'}.`);
    claims.set(claim.id, claim);
    if (['publish', 'qualified', 'current_fact', 'dated_fact', 'listed_status_open', 'conflicted', 'expired_or_historical'].includes(claim.status)) {
      expect(Array.isArray(claim.sourceIds) && claim.sourceIds.length > 0, `Publishable claim ${claim.id} has no sourceIds.`);
      for (const sourceId of claim.sourceIds ?? []) {
        expect(sourceIds.has(sourceId), `Claim ${claim.id} references unknown source ${sourceId}.`);
      }
      if (claim.status === 'listed_status_open') expect(Array.isArray(claim.openFields) && claim.openFields.length > 0, `Open-status claim ${claim.id} has no openFields.`);
    } else if (claim.status === 'blocked') {
      expect(Boolean(claim.reason), `Blocked claim ${claim.id} has no reason.`);
    } else {
      fail(`Claim ${claim.id} has unsupported status ${claim.status}.`);
    }
  }

  const discovered = discoverRoutes();
  const briefRoutes = new Set();
  for (const brief of briefs.routes ?? []) {
    expect(brief.route && !briefRoutes.has(brief.route), `Page brief route is missing or duplicated: ${brief.route ?? '(missing)'}.`);
    briefRoutes.add(brief.route);
    expect(Boolean(brief.userPurpose), `Page brief ${brief.route} has no userPurpose.`);
    expect(Boolean(brief.aboveFoldAnswer), `Page brief ${brief.route} has no aboveFoldAnswer.`);
    expect(Boolean(brief.nextStep?.label && brief.nextStep?.href), `Page brief ${brief.route} has no complete nextStep.`);
    for (const claimId of brief.requiredClaims ?? []) {
      expect(claims.has(claimId), `Page brief ${brief.route} requires unknown claim ${claimId}.`);
      expect(claims.get(claimId)?.status !== 'blocked', `Page brief ${brief.route} requires blocked claim ${claimId}.`);
    }
    for (const claimId of brief.blockedClaims ?? []) {
      expect(claims.get(claimId)?.status === 'blocked', `Page brief ${brief.route} lists ${claimId} as blocked, but the ledger does not.`);
    }
  }

  expect(discovered.length === briefRoutes.size, `Discovered ${discovered.length} public routes but found ${briefRoutes.size} page briefs.`);
  for (const route of discovered) expect(briefRoutes.has(route), `Public route ${route} has no page brief.`);
  for (const route of briefRoutes) expect(discovered.includes(route), `Page brief ${route} has no matching public route.`);
}

function scanPublicCopy() {
  const hardPunctuation = /[—–“”‘’]/u;
  const internalTerms = [
    /\bSERP\b/i,
    /\bSEO\b/i,
    /keyword research/i,
    /search intent/i,
    /content gap/i,
    /claim ledger/i,
    /Humanizer/i,
    /\bGate [12]\b/i,
  ];
  const aiSignals = [
    /\b(?:delve|vibrant|pivotal|tapestry|groundbreaking|renowned|breathtaking)\b/i,
    /\b(?:stands|serves) as\b/i,
    /let'?s dive/i,
    /here'?s what you need to know/i,
    /not only[^.]{0,100}but also/i,
    /\b(?:at its core|the real question is|what really matters|future looks bright)\b/i,
  ];

  for (const file of publicSourceFiles) {
    const text = readFileSync(file, 'utf8');
    const copyText = text.replace(/^import .*;\s*$/gm, '');
    const rel = relative(root, file).split(sep).join('/');
    expect(!hardPunctuation.test(copyText), `${rel} contains Humanizer-prohibited punctuation.`);
    for (const pattern of internalTerms) expect(!pattern.test(copyText), `${rel} contains internal workflow language matching ${pattern}.`);
    const matchedSignals = aiSignals.filter((pattern) => pattern.test(copyText));
    expect(matchedSignals.length < 2, `${rel} contains a cluster of high-signal AI writing patterns.`);
  }
}

function validateGate2() {
  validateGate1();
  const gate = json('work/content-humanizer/gate-2.json');
  expect(gate.status === 'pass', 'Gate 2 status is not pass.');
  expect(gate.contentFingerprint === currentFingerprints.gate2, 'Gate 2 fingerprint is stale. Review every changed page before updating it.');
  allChecksPass(gate.checks, 'Gate 2');

  const discovered = discoverRoutes();
  const audits = new Map();
  for (const audit of gate.routeAudits ?? []) {
    expect(audit.route && !audits.has(audit.route), `Gate 2 route audit is missing or duplicated: ${audit.route ?? '(missing)'}.`);
    audits.set(audit.route, audit);
    expect(audit.status === 'pass', `Gate 2 route ${audit.route} is not pass.`);
    for (const key of ['aboveFoldAnswersPurpose', 'internalSeoResearchLanguageAbsent', 'aiPatternClustersAbsent', 'nextStepVisible', 'factsMatchGate1']) {
      expect(audit[key] === true, `Gate 2 route ${audit.route} failed ${key}.`);
    }
  }
  expect(gate.pagesReviewed === discovered.length, `Gate 2 pagesReviewed is ${gate.pagesReviewed}; expected ${discovered.length}.`);
  for (const route of discovered) expect(audits.has(route), `Gate 2 has no audit for ${route}.`);
  for (const route of audits.keys()) expect(discovered.includes(route), `Gate 2 audit ${route} has no matching public route.`);
  scanPublicCopy();
}

if (mode === 'fingerprints') {
  process.stdout.write(`${JSON.stringify(currentFingerprints, null, 2)}\n`);
  process.exit(0);
}

if (mode === 'gate1') validateGate1();
else if (mode === 'gate2') validateGate2();
else fail(`Unknown mode: ${mode}`);

if (errors.length) {
  process.stderr.write(`Humanizer gate failed:\n- ${errors.join('\n- ')}\n`);
  process.exit(1);
}

process.stdout.write(`${mode} passed.\n`);
