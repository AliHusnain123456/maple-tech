"use client";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => { try { if (!localStorage.getItem("cookies")) setShow(true); } catch {} }, []);
  const choose = (v) => { try { localStorage.setItem("cookies", v); } catch {} setShow(false); };
  if (!show) return null;
  return (
    <div role="dialog" aria-label="Cookie notice" className="fixed inset-x-3 bottom-3 z-50 max-w-md rounded-2xl bg-navy p-4 text-sm text-white shadow-2xl ring-1 ring-white/10 sm:right-auto">
      <p>We use essential cookies, plus optional analytics to improve the site. See our <a href="/privacy" className="underline">Privacy Policy</a>.</p>
      <div className="mt-3 flex gap-2">
        <button onClick={() => choose("all")} className="rounded-lg bg-white px-3 py-1.5 font-semibold text-navy">Accept all</button>
        <button onClick={() => choose("essential")} className="rounded-lg border border-white/30 px-3 py-1.5">Essential only</button>
      </div>
    </div>
  );
}
