"use client";
import { useState } from "react";

const services = ["Technical Support", "VoIP and Business Phones", "Business Email", "Cloud and Networking", "Cybersecurity", "Website and Domain", "Not sure yet"];
const field = "mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 dark:border-white/20 dark:bg-[#0B1F3A] dark:text-white";

export default function ContactForm() {
  const [state, setState] = useState("idle");
  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      setState(res.ok ? "ok" : "error");
      if (res.ok) form.reset();
    } catch { setState("error"); }
  }
  return (
    <form onSubmit={submit} className="card grid gap-4 sm:grid-cols-2">
      <label className="text-sm font-medium">Name<input name="name" required autoComplete="name" className={field} /></label>
      <label className="text-sm font-medium">Email<input name="email" type="email" required autoComplete="email" className={field} /></label>
      <label className="text-sm font-medium">Phone<input name="phone" type="tel" autoComplete="tel" className={field} /></label>
      <label className="text-sm font-medium">Service needed<select name="service" className={field}>{services.map((s) => <option key={s}>{s}</option>)}</select></label>
      <label className="text-sm font-medium sm:col-span-2">Message<textarea name="message" rows={4} required className={field} /></label>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button disabled={state === "sending"} className="btn btn-cta sm:col-span-2">{state === "sending" ? "Sending..." : "Send message"}</button>
      <p role="status" className="text-sm sm:col-span-2">
        {state === "ok" && "Thanks! We will reply within one business day."}
        {state === "error" && "That did not send. Please email hello@mapletech.world instead."}
      </p>
    </form>
  );
}
