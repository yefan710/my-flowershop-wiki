import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

const adsterraBannerHtml = `<script type="text/javascript">atOptions = {'key' : 'e1720d76d8e926cb317cb2690000460f','format' : 'iframe','height' : 250,'width' : 300,'params' : {}};</script><script type="text/javascript" src="https://www.highperformanceformat.com/e1720d76d8e926cb317cb2690000460f/invoke.js"></script>`;

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: site.name,
    description: site.description,
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "My Flower Shop Wiki" }],
  },
  icons: {
    icon: [{ url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://pl30949389.effectivecpmnetwork.com/6b/f8/ab/6bf8ab603b8273c44943ed513110afd7.js" strategy="beforeInteractive" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1QNSJGN604" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});gtag('js',new Date());gtag('config','G-1QNSJGN604');` }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <div id="adsterra-banner-300x250" aria-label="Advertisement" style={{ width: 300, height: 250, margin: "24px auto" }} dangerouslySetInnerHTML={{ __html: adsterraBannerHtml }} />
        <Footer />
      </body>
    </html>
  );
}
