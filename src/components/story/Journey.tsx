import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { photos } from "@/content/photos";
import { journey } from "@/content/site";
import { Em, Reveal, Section, SectionHeading } from "./primitives";

export function Journey() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="journey">
      <SectionHeading
        id="journey"
        num="02"
        label="The Journey"
        title={
          <>
            Milestones, <Em>not a straight line.</Em>
          </>
        }
        intro="Education, experience, and the interests that keep pulling me forward. Select any milestone to open it up."
      />

      <div className="grid gap-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:gap-14">
        <ol className="relative ml-3 border-l border-border sm:ml-5">
          {journey.map((m, i) => {
            const isOpen = open === i;
            const panelId = `milestone-${i}`;
            return (
              <li key={m.title} className="relative pb-6 pl-8 last:pb-0 sm:pl-12">
                <Reveal delay={i * 0.04}>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -left-[7px] top-7 size-3.5 rounded-full border-2 transition-colors",
                      isOpen
                        ? "border-accent bg-accent shadow-[0_0_0_6px_oklch(0.8_0.1_358/0.18)]"
                        : "border-muted-foreground/50 bg-background",
                    )}
                  />
                  <div
                    className={cn(
                      "rounded-2xl border transition-colors",
                      isOpen ? "glass border-accent/30" : "border-transparent hover:border-border",
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full items-start gap-4 p-5 text-left sm:p-6"
                    >
                      <div className="flex-1">
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                          {m.period}
                        </p>
                        <h3 className="mt-2 font-display text-3xl sm:text-4xl">{m.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{m.subtitle}</p>
                      </div>
                      <span
                        className={cn(
                          "mt-1 grid size-9 shrink-0 place-items-center rounded-full border border-border transition-transform duration-300",
                          isOpen && "rotate-45 border-accent/50 text-accent",
                        )}
                      >
                        <Plus className="size-4" />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-6 sm:px-6">
                            <p className="max-w-2xl text-base leading-7">{m.summary}</p>
                            <ul className="mt-5 space-y-2.5">
                              {m.details.map((d) => (
                                <li
                                  key={d}
                                  className="flex gap-3 text-sm leading-6 text-muted-foreground"
                                >
                                  <span
                                    className="mt-2.5 h-px w-3 shrink-0 bg-accent"
                                    aria-hidden="true"
                                  />
                                  <span
                                    className={d.startsWith("[") ? "italic opacity-90" : undefined}
                                  >
                                    {d}
                                  </span>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-5 flex flex-wrap gap-2">
                              {m.tags.map((t) => (
                                <span key={t} className="chip">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>

        <div className="grid grid-cols-2 gap-4 self-start lg:sticky lg:top-28 lg:grid-cols-1 lg:gap-6">
          {[photos.graduation, photos.laptop].map((ph, i) => (
            <Reveal key={ph.caption} delay={0.1 + i * 0.1}>
              <figure className={cn(i === 1 && "lg:ml-10", i === 0 && "lg:mr-10")}>
                <img
                  src={ph.src}
                  alt={ph.alt}
                  loading="lazy"
                  className={cn(
                    "w-full rounded-2xl border border-gold/25 object-cover",
                    i === 0
                      ? "aspect-[3/4] object-[50%_25%]"
                      : "aspect-[3/4] object-[70%_40%] lg:aspect-[4/3]",
                  )}
                />
                <figcaption className="mt-2 text-xs text-muted-foreground">{ph.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
