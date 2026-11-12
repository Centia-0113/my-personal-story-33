import { motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  Compass,
  Cpu,
  PenLine,
  Puzzle,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { interests, leadership } from "@/content/site";
import { Em, Reveal, Section, SectionHeading } from "./primitives";

const ICONS: Record<(typeof interests)[number]["icon"], LucideIcon> = {
  cpu: Cpu,
  book: BookOpen,
  briefcase: Briefcase,
  users: Users,
  pen: PenLine,
  puzzle: Puzzle,
  compass: Compass,
};

export function BeyondTheCode() {
  const [activeInterest, setActiveInterest] = useState(0);
  const current = interests[activeInterest] ?? interests[0];

  return (
    <Section id="beyond" className="bg-surface">
      <SectionHeading
        id="beyond"
        num="03"
        label="Beyond the Code"
        title={
          <>
            Leadership, people, <Em>and impact.</Em>
          </>
        }
        intro={leadership.intro}
      />

      {/* Leadership */}
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
        <Reveal>
          <div className="glass rounded-3xl p-7 sm:p-9 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              The role
            </p>
            <h3 className="mt-3 font-display text-3xl leading-tight">{leadership.role}</h3>
            <p className="mt-6 text-sm text-muted-foreground">What it built in me</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {leadership.skills.map((s) => (
                <span key={s} className="chip border-accent/30 text-foreground">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <ol className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
          {leadership.experiences.map((e, i) => (
            <motion.li
              key={e.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                "group bg-surface p-6 transition-colors hover:bg-background sm:p-7",
                i === leadership.experiences.length - 1 && "sm:col-span-2",
              )}
            >
              <span className="font-display text-lg italic text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4 className="mt-2 text-base font-semibold">{e.title}</h4>
              <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{e.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>

      {/* Outside the code */}
      <div className="mt-28 lg:mt-36">
        <Reveal>
          <p className="section-label">The person behind the projects</p>
          <h3 className="mt-5 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05]">
            Outside <Em>the code.</Em>
          </h3>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
          <div
            role="tablist"
            aria-label="Interests"
            className="grid grid-cols-2 gap-3 sm:grid-cols-3"
          >
            {interests.map((it, i) => {
              const Icon = ICONS[it.icon];
              const selected = i === activeInterest;
              return (
                <button
                  key={it.title}
                  role="tab"
                  id={`interest-tab-${i}`}
                  aria-selected={selected}
                  aria-controls="interest-panel"
                  onClick={() => setActiveInterest(i)}
                  onMouseEnter={() => setActiveInterest(i)}
                  className={cn(
                    "group flex aspect-square flex-col justify-between rounded-2xl border p-4 text-left transition-all duration-300 sm:p-5",
                    selected
                      ? "border-accent/50 bg-accent/10 shadow-[0_20px_40px_-20px_var(--accent)]"
                      : "border-border hover:-translate-y-1 hover:border-foreground/20",
                  )}
                >
                  <Icon
                    className={cn(
                      "size-6 transition-colors",
                      selected ? "text-accent" : "text-muted-foreground",
                    )}
                    strokeWidth={1.5}
                  />
                  <span className="text-sm font-medium leading-snug">{it.title}</span>
                </button>
              );
            })}
          </div>

          <div
            id="interest-panel"
            role="tabpanel"
            aria-labelledby={`interest-tab-${activeInterest}`}
            className="relative flex min-h-[18rem] flex-col justify-end overflow-hidden rounded-3xl border border-border bg-background p-8 sm:p-10"
          >
            <InterestArt index={activeInterest} />
            <motion.div
              key={activeInterest}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="relative"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {current.title}
              </p>
              <p className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
                “{current.reflection}”
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/** Abstract generative illustration — a different constellation for each interest. */
function InterestArt({ index }: { index: number }) {
  const points = Array.from({ length: 14 }, (_, i) => {
    const a = (i * 137.5 + index * 41) * (Math.PI / 180);
    const r = 30 + ((i * 53 + index * 29) % 120);
    return [220 + Math.cos(a) * r, 120 + Math.sin(a) * r * 0.7] as const;
  });
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 440 240"
      className="pointer-events-none absolute inset-x-0 top-0 h-2/3 w-full opacity-70 [mask-image:linear-gradient(black,transparent)]"
    >
      {points.map(([x, y], i) => {
        const [nx, ny] = points[(i + 3) % points.length]!;
        return (
          <motion.line
            key={`${index}-l${i}`}
            x1={x}
            y1={y}
            x2={nx}
            y2={ny}
            stroke="var(--accent)"
            strokeOpacity={0.25}
            strokeWidth={1}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: i * 0.03 }}
          />
        );
      })}
      {points.map(([x, y], i) => (
        <motion.circle
          key={`${index}-c${i}`}
          cx={x}
          cy={y}
          r={i % 4 === 0 ? 4 : 2}
          fill={i % 4 === 0 ? "var(--accent)" : "var(--foreground)"}
          fillOpacity={i % 4 === 0 ? 0.9 : 0.4}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 + i * 0.03 }}
        />
      ))}
    </svg>
  );
}
