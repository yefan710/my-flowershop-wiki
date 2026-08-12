import Link from "next/link";

export default function NotFound() {
  return <section className="page-hero surface-base" data-surface-family="arena-base"><div className="page-shell page-hero-inner"><p className="eyebrow">Page not found</p><h1>This path has not bloomed yet.</h1><p className="page-lead">Return to the guide and choose the player question that matches your current game.</p><div className="inline-actions"><Link className="button button-primary" href="/">Return home</Link><Link className="button button-secondary" href="/beginner-guide">Open the beginner guide</Link></div></div></section>;
}
