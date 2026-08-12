const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const expectedHost = process.env.EXPECTED_SITE_HOST?.trim().toLowerCase();

if (!value || !expectedHost) {
  process.stderr.write("NEXT_PUBLIC_SITE_URL and EXPECTED_SITE_HOST are required for a release build.\n");
  process.exit(1);
}

let url;
try {
  url = new URL(value);
} catch {
  process.stderr.write("NEXT_PUBLIC_SITE_URL must be a valid absolute URL.\n");
  process.exit(1);
}

if (url.protocol !== "https:" || ["localhost", "127.0.0.1"].includes(url.hostname)) {
  process.stderr.write("NEXT_PUBLIC_SITE_URL must use HTTPS and cannot point to localhost.\n");
  process.exit(1);
}

if (url.hostname.toLowerCase() !== expectedHost) {
  process.stderr.write(`NEXT_PUBLIC_SITE_URL host must exactly match EXPECTED_SITE_HOST (${expectedHost}).\n`);
  process.exit(1);
}

process.stdout.write(`production_url=${url.origin}\n`);
