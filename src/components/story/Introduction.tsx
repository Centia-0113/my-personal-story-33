import { BarChart3, Bug } from "lucide-react";
import { photos } from "@/content/photos";
import { focusAreas, profile, story } from "@/content/site";
import { Reveal, Section, SectionHeading } from "./primitives";

const FOCUS_ICONS = [Bug, BarChart3];

export function Introduction() {
  return (
    <Section id="story" className="bg-paper text-ink">
      <SectionHeading
        id="story"
        num="01"
        label="The Introduction"
        tone="light"
        title={
          <>
            Who I am, <span className="italic text-rose-deep">beyond the title.</span>
          </>
        }
      />

      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <figure>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border border-gold-deep/50"
                />
                <img
                  src={photos.portrait.src}
                  alt={photos.portrait.alt}
                  loading="lazy"
                  className="relative aspect-[4/5] w-full rounded-[2rem] object-cover object-[50%_35%] shadow-[0_30px_60px_-30px_oklch(0.3_0.08_350/0.6)]"
                />
              </div>
              <figcaption className="mt-3 text-xs uppercase tracking-[0.18em] text-ink-muted">
                {photos.portrait.caption}
              </figcaption>
            </figure>
            <blockquote className="mt-10 border-l-2 border-rose-deep pl-6 font-display text-3xl leading-[1.2]">
              “{story.lead}”
            </blockquote>
          </div>
        </Reveal>

        <div>
          <div className="space-y-6">
            {story.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p
                  className={
                    i === 0
                      ? "text-lg leading-8 text-ink first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.85] first-letter:text-rose-deep"
                      : "text-lg leading-8 text-ink-muted"
                  }
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          {/* Core areas of interest */}
          <Reveal className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
              My areas of interest
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {focusAreas.map((f, i) => {
                const Icon = FOCUS_ICONS[i] ?? Bug;
                return (
                  <article
                    key={f.title}
                    className="group relative overflow-hidden rounded-2xl bg-ink p-6 text-paper transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-accent/25 blur-2xl transition-opacity group-hover:opacity-100 sm:opacity-60" />
                    <Icon className="relative size-6 text-gold" strokeWidth={1.5} />
                    <h3 className="relative mt-4 font-display text-3xl">{f.title}</h3>
                    <p className="relative mt-1 text-sm italic text-accent">{f.tagline}</p>
                    <p className="relative mt-3 text-sm leading-6 text-paper/75">{f.text}</p>
                    <div className="relative mt-4 flex flex-wrap gap-1.5">
                      {f.skills.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-gold/30 px-2.5 py-0.5 text-[0.7rem] text-paper/80"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </Reveal>

          <Reveal className="mt-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
              What I stand for
            </p>
            <dl className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
              {story.values.map((v) => (
                <div key={v.title} className="group bg-paper p-6 transition-colors hover:bg-white">
                  <dt className="font-display text-2xl">{v.title}</dt>
                  <dd className="mt-1 text-sm text-ink-muted">{v.text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="mt-12">
            <p className="font-display text-2xl italic text-ink-muted">{profile.theme}</p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
