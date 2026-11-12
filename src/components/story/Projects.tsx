import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import {
  PROJECT_CATEGORIES,
  contact,
  projects,
  type Project,
  type ProjectCategory,
} from "@/content/site";
import { Em, Reveal, Section, SectionHeading, StatusBadge } from "./primitives";

type Filter = "All" | ProjectCategory;

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...PROJECT_CATEGORIES];
  const counts = useMemo(() => {
    const c: Record<string, number> = { All: projects.length };
    for (const cat of PROJECT_CATEGORIES)
      c[cat] = projects.filter((p) => p.categories.includes(cat)).length;
    return c;
  }, []);
  const visible =
    filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <Section id="work" className="bg-surface">
      <SectionHeading
        id="work"
        num="05"
        label="Things I've Built"
        title={
          <>
            Ideas, <Em>made real.</Em>
          </>
        }
        intro="Projects, experiments, and technical exploration. Each one taught me something, and the list keeps growing."
      />

      <Reveal>
        <div
          role="group"
          aria-label="Filter projects by category"
          className="-mx-5 mb-10 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm transition-colors",
                filter === f
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground",
              )}
            >
              {f}
              <span className={cn("ml-2 text-xs", filter === f ? "opacity-70" : "opacity-50")}>
                {counts[f]}
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div layout className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </AnimatePresence>
        {visible.length === 0 && (
          <p className="rounded-3xl border border-dashed border-border p-10 text-center text-muted-foreground md:col-span-2">
            Nothing here yet — this is one of the things I'm becoming. Check back soon.
          </p>
        )}
      </motion.div>

      <Reveal className="mt-12 flex justify-center">
        <a
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-3 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-accent/60"
        >
          <Github className="size-4" />
          See everything on GitHub
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </Reveal>
    </Section>
  );
}

function Field({ label, children }: { label: string; children: string }) {
  const placeholder = children.startsWith("[");
  return (
    <div>
      <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-foreground/80">
        {label}
      </dt>
      <dd
        className={cn(
          "mt-1 text-sm leading-6 text-muted-foreground",
          placeholder && "italic opacity-90",
        )}
      >
        {children}
      </dd>
    </div>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col rounded-3xl border border-border bg-background p-7 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-[0_30px_60px_-30px_oklch(0.8_0.1_358/0.35)] sm:p-8"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <StatusBadge status={p.status} />
        <p className="text-xs text-muted-foreground">{p.categories.join(" · ")}</p>
      </div>
      <h3 className="mt-5 font-display text-3xl leading-tight">{p.name}</h3>
      <p
        className={cn(
          "mt-3 leading-7 text-muted-foreground",
          p.description.startsWith("[") && "italic opacity-90",
        )}
      >
        {p.description}
      </p>

      <dl className="mt-6 grid gap-4 border-t border-border pt-6">
        <Field label="The problem">{p.problem}</Field>
        <Field label="My contribution">{p.contribution}</Field>
      </dl>

      <div className="mt-6 flex flex-wrap gap-2">
        {p.technologies.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>

      {(p.repo || p.demo) && (
        <div className="mt-auto flex flex-wrap gap-5 pt-7">
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              <Github className="size-4" /> Repository <span className="sr-only">for {p.name}</span>
            </a>
          )}
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              <ArrowUpRight className="size-4" /> Live demo{" "}
              <span className="sr-only">for {p.name}</span>
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}
