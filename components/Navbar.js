"use client";
import { useState } from "react";
import { Icon, Logo } from "./icons";
import { site } from "../lib/site";

const links = [["Services", "/#services"], ["Why us", "/#why"], ["How it works", "/#how"], ["Pricing", "/#pricing"], ["FAQ", "/#faq"], ["Contact", "/#contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleTheme = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
  };
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur dark:border-white/10 dark:bg-[#071426]/85">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3" aria-label="Main">
        <a href="/" aria-label="Maple Tech home"><Logo className="text-navy dark:text-white" /></a>
        <ul className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {links.map(([l, h]) => <li key={h}><a href={h} className="hover:text-brand">{l}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} aria-label="Toggle dark mode" className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-white/10">
            <Icon n="sun" className="hidden h-5 w-5 dark:block" />
            <Icon n="moon" className="h-5 w-5 dark:hidden" />
          </button>
          <a href={site.booking} className="btn btn-cta hidden py-2 sm:inline-flex">Book a call</a>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu" className="rounded-lg p-2 lg:hidden">
            <Icon n={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>
      {open && (
        <ul className="space-y-1 border-t border-slate-200 px-4 py-3 dark:border-white/10 lg:hidden">
          {links.map(([l, h]) => <li key={h}><a href={h} onClick={() => setOpen(false)} className="block rounded-lg px-2 py-2 font-medium">{l}</a></li>)}
          <li><a href={site.booking} onClick={() => setOpen(false)} className="btn btn-cta mt-2 w-full">Book a call</a></li>
        </ul>
      )}
    </header>
  );
}
