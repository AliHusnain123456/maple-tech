import { Icon, Logo } from "./icons";
import { site } from "../lib/site";

const social = [["linkedin", "LinkedIn", "https://linkedin.com"], ["facebook", "Facebook", "https://facebook.com"], ["x", "X", "https://x.com"], ["instagram", "Instagram", "https://instagram.com"]];
const quick = [["Services", "/#services"], ["Pricing", "/#pricing"], ["FAQ", "/#faq"], ["Book a call", site.booking]];

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <Logo className="text-white" />
          <p className="mt-3 max-w-xs text-sm">{site.tagline}</p>
          <div className="mt-4 flex gap-3">
            {social.map(([n, l, h]) => (
              <a key={n} href={h} aria-label={l} target="_blank" rel="noopener noreferrer" className="rounded-lg p-2 ring-1 ring-white/15 hover:bg-white/10"><Icon n={n} className="h-5 w-5" /></a>
            ))}
          </div>
        </div>
        <nav aria-label="Quick links">
          <h2 className="font-semibold text-white">Quick links</h2>
          <ul className="mt-3 space-y-2 text-sm">{quick.map(([l, h]) => <li key={l}><a href={h} className="hover:text-white">{l}</a></li>)}</ul>
        </nav>
        <div>
          <h2 className="font-semibold text-white">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
            <li><a href={`tel:${site.tel}`} className="hover:text-white">{site.phone}</a></li>
            <li>{site.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3">
          <p>© {new Date().getFullYear()} Maple Tech. All rights reserved.</p>
          <p className="flex gap-4"><a href="/privacy" className="hover:text-white">Privacy Policy</a><a href="/terms" className="hover:text-white">Terms</a></p>
        </div>
      </div>
    </footer>
  );
}
