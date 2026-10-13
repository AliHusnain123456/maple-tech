const esc = (s) => String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));

export async function POST(req) {
  const d = await req.json().catch(() => ({}));
  if (d.website) return Response.json({ ok: true }); // honeypot caught a bot
  const { name, email, phone = "", service = "", message } = d;
  if (!name || !email || !message) return Response.json({ ok: false }, { status: 400 });
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || "Maple Tech Website <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO || "hello@mapletech.world"],
      reply_to: email,
      subject: `New enquiry: ${service || "General"} from ${name}`,
      html: `<p><b>${esc(name)}</b> | ${esc(email)} | ${esc(phone)}</p><p>Service: ${esc(service)}</p><p>${esc(message).replace(/\n/g, "<br>")}</p>`,
    }),
  });
  return Response.json({ ok: res.ok }, { status: res.ok ? 200 : 502 });
}
