import { becoming } from "@/content/site";
import { Em, Reveal, Section } from "./primitives";

export function Becoming() {
  return (
    <Section id="becoming" className="py-20 lg:py-28">
      <Reveal className="glass relative overflow-hidden rounded-[2rem] p-7 sm:p-10 lg:p-14">
        <div className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-accent/15 blur-[90px]" />
        <div className="relative flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-label flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              Live · updated {becoming.updated}
            </p>
            <h2
              id="becoming-title"
              className="mt-5 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05]"
            >
              Things I'm <Em>becoming.</Em>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A living notebook of what I'm learning, exploring, and working towards. This part of the
            site grows with me.
          </p>
        </div>

        <div className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {becoming.columns.map((col, i) => (
            <div key={col.label} className="border-t border-border pt-5">
              <p className="flex items-baseline gap-3">
                <span className="font-display text-xl italic text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold uppercase tracking-[0.14em]">
                  {col.label}
                </span>
              </p>
              <ul className="mt-4 space-y-3">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className={
                      item.startsWith("[")
                        ? "text-sm italic leading-6 text-muted-foreground/85"
                        : "text-sm leading-6 text-muted-foreground"
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
