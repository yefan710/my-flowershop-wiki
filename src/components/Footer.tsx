import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer" data-surface-family="arena-raised">
      <div className="footer-inner">
        <div>
          <p className="footer-brand">My Flower Shop Wiki</p>
          <p className="footer-copy">
            An independent fan guide. We are not operated by Roblox or {site.developer}.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/sources">Sources</Link>
          <Link href="/official-links">Official links</Link>
          <Link href="/about">About</Link>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </div>
    </footer>
  );
}
