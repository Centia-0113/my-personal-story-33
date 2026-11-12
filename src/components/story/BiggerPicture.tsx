import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { photos } from "@/content/photos";
import { vision } from "@/content/site";
import { Reveal, Section, SectionHeading, Em } from "./primitives";

export function BiggerPicture() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const words = vision.statement.split(" ");

  return (
    <Section id="vision" className="overflow-hidden bg-surface">
      <SectionHeading
        id="vision"
        num="06"
        label="The Bigger Picture"
        title={
          <>
            A journey <Em>still unfolding.</Em>
          </>
        }
        intro={vision.intro}
      />

      <div ref={ref} className="relative py-10 lg:py-16">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]" />
        <blockquote className="relative mx-auto max-w-5xl text-center font-display text-[clamp(2rem,4.8vw,4.25rem)] leading-[1.12]">
          {words.map((w, i) => (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[0.15 + (i / words.length) * 0.35, 0.2 + (i / words.length) * 0.35]}
            >
              {w}
            </Word>
          ))}
        </blockquote>
      </div>

      <div className="mt-16 grid items-stretch gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8">
        <Reveal>
          <figure className="relative h-full min-h-[22rem] overflow-hidden rounded-3xl border border-gold/25">
            <img
              src={photos.waterfall.src}
              alt={photos.waterfall.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-[50%_40%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
            <figcaption className="absolute bottom-5 left-6 font-display text-2xl italic text-foreground">
              {photos.waterfall.caption}
            </figcaption>
          </figure>
        </Reveal>
        <div className="grid gap-5">
          {vision.aspirations.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-border bg-background p-7 transition-colors hover:border-accent/40">
                <span className="font-display text-4xl italic text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 leading-7 text-muted-foreground">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.4, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block pr-[0.25em]">
      {children}
    </motion.span>
  );
}
