import { AnimatePresence, motion } from "framer-motion";
import { Activity, Brain, Leaf, ShieldCheck, ChevronDown, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { research, type Status } from "@/content/site";
import { Em, Reveal, Section, SectionHeading, StatusBadge } from "./primitives";

const ICONS: LucideIcon[] = [Brain, Activity, ShieldCheck, Leaf];
const STATUSES: Status[] = ["completed", "ongoing", "interest"];

export function Research() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section id="research">
      <SectionHeading
        id="research"
        num="04"
        label="Research & Innovation"
        title={
          <>
            Questions worth <Em>chasing.</Em>
          </>
        }
        intro="My research interests sit where technology meets real-world stakes: health, safety, security, and sustainability."
      />

      <Reveal className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
        <span>Key:</span>
        {STATUSES.map((s) => (
          <StatusBadge key={s} status={s} />
        ))}
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {research.map((r, i) => {
          const Icon = ICONS[i % ICONS.length] ?? Brain;
          const isOpen = open === i;
          return (
            <Reveal key={r.title} delay={(i % 2) * 0.08}>
              <article
                className={cn(
                  "group relative h-full overflow-hidden rounded-3xl border p-7 transition-all duration-300 sm:p-8",
                  isOpen
                    ? "glass border-accent/30"
                    : "border-border hover:-translate-y-1 hover:border-foreground/20",
                )}
              >
                <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between gap-4">
                  <span className="grid size-12 place-items-center rounded-2xl border border-border bg-background">
                    <Icon className="size-5 text-accent" strokeWidth={1.5} />
                  </span>
                  <StatusBadge status={r.status} />
                </div>
                <p className="relative mt-6 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  {r.field}
                </p>
                <h3 className="relative mt-2 font-display text-3xl leading-tight">{r.title}</h3>
                <p className="relative mt-4 leading-7 text-muted-foreground">{r.overview}</p>

                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`research-${i}`}
                  className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                >
                  {isOpen ? "Show less" : "Objectives & technologies"}
                  <ChevronDown
                    className={cn("size-4 transition-transform", isOpen && "rotate-180")}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`research-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="relative overflow-hidden"
                    >
                      <div className="mt-6 border-t border-border pt-6">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.16em]">
                          Research objectives
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {r.objectives.map((o) => (
                            <li
                              key={o}
                              className="flex gap-3 text-sm leading-6 text-muted-foreground"
                            >
                              <span
                                className="mt-2.5 h-px w-3 shrink-0 bg-accent"
                                aria-hidden="true"
                              />
                              {o}
                            </li>
                          ))}
                        </ul>
                        <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.16em]">
                          Technologies involved
                        </h4>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {r.technologies.map((t) => (
                            <span key={t} className="chip">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
