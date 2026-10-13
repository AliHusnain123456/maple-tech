import { Icon } from "../components/icons";
import { Reveal, Counter } from "../components/Motion";
import ContactForm from "../components/ContactForm";
import { site } from "../lib/site";

// All copy, prices, quotes and stats below are placeholders. Edit freely.
const services = [
  ["support", "Technical Support", "A real person answers fast. Helpdesk, remote and on-site visits, and 24/7 monitoring that catches problems before your team does."],
  ["phone", "VoIP and Business Phones", "Cloud PBX, smart call routing, IVR menus and softphones, so your team takes calls from the office, home or a phone."],
  ["mail", "Business Email", "Custom-domain email on Microsoft 365 or Google Workspace, with painless migration and spam protection."],
  ["cloud", "Cloud and Networking", "Fast, secure Wi-Fi, firewalls, VPN and backups we actually test, so your office stays connected and your data stays safe."],
  ["shield", "Cybersecurity", "Endpoint protection and security audits that find the gaps and close them, explained in plain English."],
  ["globe", "Website and Domain Management", "Hosting, DNS and SSL handled for you, so your website stays fast, secure and online."],
];
const why = [
  ["bolt", "Fast response", "Most requests get a reply in about 15 minutes during business hours."],
  ["tag", "Flat, honest pricing", "One predictable monthly fee. No surprise invoices."],
  ["unlock", "No lock-in contracts", "Month-to-month plans. We earn your business every month."],
  ["heart", "Friendly local team", "Real people who know your name, your office and your setup."],
  ["clock", "Proactive monitoring", "We watch your systems around the clock and fix issues before you notice."],
  ["chat", "Plain-English support", "No jargon. We tell you what happened and what we did about it."],
];
const steps = [
  ["Consult", "A free 30-minute call to learn about your team, your tools and your headaches."],
  ["Setup", "We migrate, secure and configure everything with as little disruption as possible."],
  ["Ongoing Support", "Monitoring, a friendly helpdesk and regular check-ins keep everything running."],
];
const plans = [
  ["Starter", "$199", "Up to 5 users", ["Business-hours helpdesk", "Remote support", "Business email setup", "Endpoint protection"]],
  ["Business", "$499", "Up to 25 users", ["Everything in Starter", "24/7 monitoring", "VoIP phone system", "Network and backup management", "On-site visits"], true],
  ["Enterprise", "$999", "25+ users or multiple sites", ["Everything in Business", "Dedicated account manager", "Quarterly security audits", "Priority response and custom SLA"]],
];
const quotes = [
  ["Maple Tech moved our whole office to Microsoft 365 over a weekend. Monday morning, nobody noticed a thing.", "Jordan Lee, Office Manager, Sample Dental"],
  ["Our phones used to be a mess. Now calls reach the right person and the bill is the same every month.", "Priya Patel, Owner, Example Bakery"],
  ["They answer fast and never talk down to us. That is rare in IT.", "Sam Carter, Partner, Placeholder Law"],
];
const stats = [[150, "+", "Businesses supported"], [15, " min", "Average response time"], [99, ".9%", "Uptime on managed systems"], [4, ".9/5", "Client satisfaction"]];
const faqs = [
  ["Do I have to sign a long-term contract?", "No. Every plan is month-to-month and you can cancel any time."],
  ["Can you work with our existing tools?", "Yes. We start with what you already have and only suggest changes that save time or reduce risk."],
  ["How fast will I get help?", "Most requests get a reply in about 15 minutes during business hours. Business and Enterprise plans add 24/7 monitoring."],
  ["Do you offer on-site support?", "Yes, within our local service area. Most issues are fixed remotely, so you rarely wait for a visit."],
  ["How long does an email migration take?", "Most small teams move to Microsoft 365 or Google Workspace in a weekend, with no lost email."],
];

function Section({ id, title, sub, alt, children }) {
  return (
    <section id={id} className={`py-20 ${alt ? "bg-white dark:bg-[#0A1A30]" : ""}`}>
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy dark:text-white sm:text-4xl">{title}</h2>
          {sub && <p className="mt-3 text-lg">{sub}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Reliable IT, Rooted in Service.</h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">Helpdesk, phones, email, networking and security for small and medium businesses, from one friendly team for one flat monthly price. No in-house IT department needed.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-cta">Get a Free Consultation</a>
              <a href="#services" className="btn border border-white/30 hover:bg-white/10">View Services</a>
            </div>
            <ul className="mt-8 grid max-w-md grid-cols-2 gap-3 text-sm text-slate-200">
              {["24/7 monitoring", "15-minute response", "No lock-in contracts", "Flat monthly pricing"].map((t) => (
                <li key={t} className="flex items-center gap-2"><Icon n="check" className="h-4 w-4 text-sky-400" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <p className="font-semibold">Your systems, right now</p>
            <ul className="mt-4 divide-y divide-white/10">
              {["Helpdesk", "Cloud phone system", "Business email", "Firewall and VPN", "Nightly backups"].map((t) => (
                <li key={t} className="flex items-center justify-between py-3 text-sm">
                  <span>{t}</span>
                  <span className="flex items-center gap-2 text-emerald-400"><span className="h-2 w-2 rounded-full bg-emerald-400" />Operational</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Section id="services" title="Everything your business needs, handled" sub="Six core services, one team, one predictable monthly fee.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([i, t, d], n) => (
            <Reveal key={t} delay={n * 60} className="card">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand"><Icon n={i} /></span>
              <h3 className="mt-4 text-lg font-semibold text-navy dark:text-white">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed">{d}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="why" alt title="Why choose Maple Tech" sub="Small-business IT should be simple, fast and fairly priced.">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {why.map(([i, t, d]) => (
            <Reveal key={t} className="flex gap-4">
              <span className="mt-1 text-brand"><Icon n={i} /></span>
              <div><h3 className="font-semibold text-navy dark:text-white">{t}</h3><p className="mt-1 text-sm">{d}</p></div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="how" title="How it works" sub="Getting started takes three simple steps.">
        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map(([t, d], n) => (
            <li key={t}>
              <Reveal delay={n * 100} className="card h-full">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-navy font-bold text-white dark:bg-brand">{n + 1}</span>
                <h3 className="mt-4 text-lg font-semibold text-navy dark:text-white">{t}</h3>
                <p className="mt-2 text-sm">{d}</p>
              </Reveal>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center"><a href={site.booking} className="btn btn-cta">Book a call</a></div>
      </Section>

      <Section id="pricing" alt title="Simple, flat pricing" sub="One monthly price per business. Cancel any time.">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map(([name, price, who, feats, hot]) => (
            <Reveal key={name} className={`card flex flex-col ${hot ? "ring-2 ring-brand" : ""}`}>
              <h3 className="text-lg font-semibold text-navy dark:text-white">
                {name}{hot && <span className="ml-2 rounded-full bg-brand px-2 py-0.5 text-xs font-medium text-white">Most popular</span>}
              </h3>
              <p className="mt-1 text-sm">{who}</p>
              <p className="mt-4 text-4xl font-extrabold text-navy dark:text-white">{price}<span className="text-base font-medium text-slate-500">/month</span></p>
              <ul className="mt-6 flex-1 space-y-2 text-sm">
                {feats.map((f) => <li key={f} className="flex gap-2"><Icon n="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />{f}</li>)}
              </ul>
              <a href="#contact" className={`btn mt-6 ${hot ? "btn-cta" : "btn-ghost"}`}>Get started</a>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-mist p-6 text-center ring-1 ring-slate-200 dark:bg-[#0F2747] dark:ring-white/10 sm:flex-row sm:text-left">
          <p><strong className="text-navy dark:text-white">Need something different?</strong> Tell us what you need and we will put together a custom quote.</p>
          <a href="#contact" className="btn btn-ghost shrink-0">Contact us</a>
        </Reveal>
      </Section>

      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Trusted by growing local businesses</h2>
          <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {stats.map(([n, s, l]) => (
              <div key={l}>
                <p className="text-4xl font-extrabold sm:text-5xl"><Counter to={n} suffix={s} /></p>
                <p className="mt-1 text-sm text-slate-300">{l}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {quotes.map(([q, a]) => (
              <Reveal key={a}>
                <figure className="h-full rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <div className="flex text-sky-400" role="img" aria-label="5 out of 5 stars">{[0, 1, 2, 3, 4].map((i) => <Icon key={i} n="star" className="h-4 w-4 fill-current" />)}</div>
                  <blockquote className="mt-4 text-slate-100">“{q}”</blockquote>
                  <figcaption className="mt-4 text-sm text-slate-400">{a}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Section id="faq" title="Frequently asked questions">
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="group card p-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-navy dark:text-white">
                {q}<Icon n="close" className="h-5 w-5 shrink-0 rotate-45 text-brand transition group-open:rotate-0" />
              </summary>
              <p className="px-5 pb-5">{a}</p>
            </details>
          ))}
        </div>
      </Section>

      <section className="bg-navy py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold tracking-tight">Ready for IT you can rely on?</h2>
          <p className="mt-3 text-slate-300">Book a free 30-minute call and we will map out the right setup for your team.</p>
          <a href={site.booking} className="btn btn-cta mt-6">Book a call</a>
        </div>
      </section>

      <Section id="contact" title="Talk to a human" sub="Tell us what you need and we will reply within one business day.">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            {[["phone", "Phone", site.phone, `tel:${site.tel}`], ["mail", "Email", site.email, `mailto:${site.email}`], ["pin", "Visit us", site.address]].map(([i, l, v, h]) => (
              <div key={l} className="flex gap-3">
                <span className="text-brand"><Icon n={i} /></span>
                <div><p className="font-semibold text-navy dark:text-white">{l}</p>{h ? <a href={h} className="hover:text-brand">{v}</a> : <p>{v}</p>}</div>
              </div>
            ))}
            <a href={`https://wa.me/${site.whatsapp}?text=Hi%20Maple%20Tech%2C%20I%20need%20help%20with%20IT.`} target="_blank" rel="noopener noreferrer" className="btn bg-[#25D366] text-slate-900 hover:brightness-95">Message us on WhatsApp</a>
          </div>
          <div className="lg:col-span-3"><ContactForm /></div>
        </div>
      </Section>
    </main>
  );
}
