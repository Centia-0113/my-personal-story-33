import { ArrowUpRight, Check, Download, Github, Linkedin, Loader2, Mail, Send } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { contact } from "@/content/site";
import { Em, Reveal, Section, SectionHeading } from "./primitives";

type FormState = "idle" | "sending" | "sent" | "fallback" | "error";

const isPlaceholder = (v: string) => !v || v.startsWith("[");

export function Connect() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<Record<"name" | "email" | "message", string>>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const get = (k: string) => String(fd.get(k) ?? "");
    const data = {
      name: get("name"),
      email: get("email"),
      subject: get("subject"),
      message: get("message"),
      company: get("company"),
    };

    const next: typeof errors = {};
    if (!data.name.trim()) next.name = "Please tell me your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) next.email = "Please enter a valid email.";
    if (data.message.trim().length < 10)
      next.message = "A little more detail, please (10+ characters).";
    setErrors(next);
    if (Object.keys(next).length) return;

    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setState("sent");
        form.reset();
        return;
      }
      // Email service not configured yet — hand off to the visitor's mail app.
      if (res.status === 503 && !isPlaceholder(contact.email)) {
        const subject = encodeURIComponent(data.subject || `Hello from ${data.name}`);
        const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
        window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
        setState("fallback");
        return;
      }
      setState("error");
    } catch {
      setState("error");
    }
  }

  return (
    <Section id="connect">
      <SectionHeading
        id="connect"
        num="07"
        label="Let's Connect"
        title={
          <>
            Let's start a <Em>conversation.</Em>
          </>
        }
        intro="Recruiters, collaborators, researchers, fellow students: if something here resonated, I'd love to hear from you."
      />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <Reveal className="space-y-3">
          <ContactRow
            icon={<Mail className="size-5" />}
            label="Email"
            value={contact.email}
            href={isPlaceholder(contact.email) ? undefined : `mailto:${contact.email}`}
          />
          <ContactRow
            icon={<Linkedin className="size-5" />}
            label="LinkedIn"
            value={
              contact.linkedin
                ? contact.linkedin.replace(/^https?:\/\/(www\.)?/, "")
                : "[LinkedIn profile coming soon]"
            }
            href={contact.linkedin || undefined}
          />
          <ContactRow
            icon={<Github className="size-5" />}
            label="GitHub"
            value={contact.github.replace("https://", "")}
            href={contact.github}
          />

          {contact.cvUrl ? (
            <a
              href={contact.cvUrl}
              download
              className="group mt-6 flex items-center justify-between rounded-2xl bg-accent px-6 py-5 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Download my CV
              <Download className="size-5 transition-transform group-hover:translate-y-0.5" />
            </a>
          ) : (
            <div
              aria-disabled="true"
              className="mt-6 flex items-center justify-between rounded-2xl border border-dashed border-border px-6 py-5 text-muted-foreground"
            >
              CV coming soon
              <Download className="size-5" />
            </div>
          )}
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="glass rounded-3xl p-6 sm:p-9"
            aria-describedby="form-status"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Input name="name" label="Your name" autoComplete="name" error={errors.name} />
              <Input
                name="email"
                label="Email"
                type="email"
                autoComplete="email"
                error={errors.email}
              />
            </div>
            <div className="mt-5">
              <Input name="subject" label="Subject (optional)" />
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                maxLength={4000}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={fieldClass(!!errors.message)}
              />
              {errors.message && <FieldError id="message-error">{errors.message}</FieldError>}
            </div>
            {/* Honeypot — hidden from people, tempting to bots */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={state === "sending"}
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-opacity disabled:opacity-60"
              >
                {state === "sending" ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <Send className="size-4" />
                )}
                {state === "sending" ? "Sending…" : "Send message"}
              </button>
              <p id="form-status" role="status" className="text-sm">
                {state === "sent" && (
                  <span className="inline-flex items-center gap-2 text-gold">
                    <Check className="size-4" /> Thank you. I'll be in touch soon.
                  </span>
                )}
                {state === "fallback" && (
                  <span className="text-muted-foreground">
                    Opening your email app to finish sending…
                  </span>
                )}
                {state === "error" && (
                  <span className="text-destructive">
                    Something went wrong. Please reach me on{" "}
                    <a className="underline" href={contact.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>{" "}
                    in the meantime.
                  </span>
                )}
              </p>
            </div>
          </form>
        </Reveal>
      </div>

      <Reveal className="mt-24 text-center">
        <p className="mx-auto max-w-4xl font-display text-[clamp(1.8rem,4vw,3.4rem)] leading-[1.15]">
          {contact.closing}
        </p>
      </Reveal>
    </Section>
  );
}

const fieldClass = (invalid: boolean) =>
  cn(
    "mt-2 w-full rounded-xl border bg-background/60 px-4 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent",
    invalid ? "border-destructive" : "border-border",
  );

function FieldError({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} className="mt-1.5 text-sm text-destructive">
      {children}
    </p>
  );
}

function Input({
  name,
  label,
  type = "text",
  autoComplete,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string | undefined;
  error?: string | undefined;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        maxLength={200}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={fieldClass(!!error)}
      />
      {error && <FieldError id={`${name}-error`}>{error}</FieldError>}
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string | undefined;
}) {
  const inner = (
    <>
      <span className="grid size-11 place-items-center rounded-xl border border-border bg-background text-accent">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">
          {label}
        </span>
        <span className={cn("block truncate", !href && "italic text-muted-foreground")}>
          {value}
        </span>
      </span>
      {href && (
        <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
      )}
    </>
  );
  const cls =
    "group flex items-center gap-4 rounded-2xl border border-border p-4 transition-colors";
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={cn(cls, "hover:border-accent/40 hover:bg-accent/5")}
    >
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}
