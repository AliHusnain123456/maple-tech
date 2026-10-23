import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatButton from "../components/ChatButton";
import CookieBanner from "../components/CookieBanner";
import { site } from "../lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const title = "Maple Tech | IT Support, VoIP, Email and Cybersecurity for Small Business";
const description = "Reliable managed IT for small and medium businesses: helpdesk, VoIP phones, business email, networking, cybersecurity and website management. Flat pricing, no lock-in.";

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | Maple Tech" },
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: site.url, siteName: site.name, type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image", title, description },
};
export const viewport = { themeColor: "#0B1F3A" };

const ld = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  slogan: site.tagline,
  description,
  url: site.url,
  logo: `${site.url}/icon.svg`,
  email: site.email,
  telephone: site.tel,
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT services",
    itemListElement: ["Technical Support", "VoIP and Business Phone Systems", "Business Email", "Cloud and Networking", "Cybersecurity", "Website and Domain Management"]
      .map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <noscript><style>{`.reveal{opacity:1!important;transform:none!important}`}</style></noscript>
      </head>
      <body className="font-sans">
        <a href="#top" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3 focus:text-navy">Skip to content</a>
        <Navbar />
        <div id="top">{children}</div>
        <Footer />
        <ChatButton />
        <CookieBanner />
      </body>
    </html>
  );
}
