import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { STATUS_LABEL, type Status } from "@/content/site";

/** Fades content up into view once, as the visitor scrolls. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Section({
  id,
  children,
  className,
  labelledBy,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy ?? `${id}-title`}
      className={cn("relative px-5 py-24 sm:px-10 lg:px-14 lg:py-32", className)}
    >
      <div className="mx-auto max-w-[80rem]">{children}</div>
    </section>
  );
}

export function SectionHeading({
  id,
  num,
  label,
  title,
  intro,
  tone = "dark",
}: {
  id: string;
  num: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <Reveal className="mb-14 grid gap-6 lg:mb-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
      <div>
        <p
          className={cn(
            "section-label flex items-center gap-3",
            tone === "light" && "text-gold-deep",
          )}
        >
          <span className="font-display text-base italic tracking-normal normal-case">{num}</span>
          <span className="h-px w-8 bg-current opacity-60" />
          {label}
        </p>
        <h2
          id={`${id}-title`}
          className="mt-6 font-display text-[clamp(2.6rem,6vw,5rem)] leading-[1.02] tracking-[-0.01em]"
        >
          {title}
        </h2>
      </div>
      {intro && (
        <p
          className={cn(
            "max-w-xl text-base leading-8 sm:text-lg",
            tone === "light" ? "text-ink-muted" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}

const STATUS_STYLE: Record<Status, string> = {
  completed: "border-gold/40 bg-gold/10 text-gold",
  ongoing: "border-accent/40 bg-accent/10 text-accent",
  interest: "border-foreground/25 bg-foreground/5 text-foreground/80",
};

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.12em]",
        STATUS_STYLE[status],
      )}
    >
      <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
      {STATUS_LABEL[status]}
    </span>
  );
}

/** Small italic serif accent used inside headings. */
export function Em({ children }: { children: ReactNode }) {
  return <span className="italic text-accent">{children}</span>;
}
