import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

/**
 * Contact form endpoint.
 *
 * Sends messages through Resend (https://resend.com) when these secrets are set:
 *   RESEND_API_KEY   – your Resend API key
 *   CONTACT_TO_EMAIL – where messages should be delivered
 *   CONTACT_FROM_EMAIL (optional) – verified sender, defaults to Resend's test sender
 *
 * Until they're configured it returns 503 and the form falls back to the
 * visitor's email app.
 */
const schema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(200),
  subject: z.string().trim().max(200).optional().default(""),
  message: z.string().trim().min(10).max(4000),
  company: z.string().optional(), // honeypot
});

const escape = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }
        const parsed = schema.safeParse(body);
        if (!parsed.success) return Response.json({ error: "Invalid form data" }, { status: 400 });

        const { name, email, subject, message, company } = parsed.data;
        if (company) return Response.json({ ok: true }); // silently drop bots

        const key = process.env["RESEND_API_KEY"];
        const to = process.env["CONTACT_TO_EMAIL"];
        if (!key || !to) return Response.json({ error: "Email not configured" }, { status: 503 });

        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            from: process.env["CONTACT_FROM_EMAIL"] || "MY STORY <onboarding@resend.dev>",
            to: [to],
            reply_to: email,
            subject: subject || `New message from ${name}`,
            html: `<p><strong>${escape(name)}</strong> &lt;${escape(email)}&gt; wrote:</p><p style="white-space:pre-wrap">${escape(message)}</p>`,
            text: `${name} <${email}> wrote:\n\n${message}`,
          }),
        });

        if (!res.ok) {
          console.error("Resend error", res.status, await res.text());
          return Response.json({ error: "Failed to send" }, { status: 502 });
        }
        return Response.json({ ok: true });
      },
    },
  },
});
