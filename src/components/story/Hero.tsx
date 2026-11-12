import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { photos } from "@/content/photos";
import { profile } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative isolate overflow-hidden px-5 pb-20 pt-28 sm:px-10 lg:px-14 lg:pb-28 lg:pt-36"
    >
      {/* backdrop */}
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -right-40 -top-40 -z-10 size-[36rem] rounded-full bg-accent/15 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 size-[28rem] rounded-full bg-gold/10 blur-[120px]" />

      <div className="mx-auto grid max-w-[80rem] items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
        <div>
          <motion.p
            className="section-label"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            {profile.tagline}
          </motion.p>

          <motion.h1
            className="mt-7 font-display text-[clamp(3.2rem,8.5vw,7.5rem)] leading-[0.95] tracking-[-0.02em]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
          >
            Hello, I'm <span className="italic text-accent">{profile.firstName}.</span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-2xl text-xl font-medium leading-snug sm:text-2xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
          >
            {profile.heroLine}
          </motion.p>

          <motion.p
            className="body-copy mt-5 max-w-xl sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
          >
            {profile.heroSupport}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease }}
          >
            <a
              href="#story"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-[0_10px_30px_-10px_var(--accent)] transition-transform hover:-translate-y-0.5"
            >
              Explore My Story
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-accent/60 hover:bg-accent/5"
            >
              View My Work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.ul
            className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-6 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {profile.roles.map((r) => (
              <li key={r} className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-accent" aria-hidden="true" />
                {r}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.figure
          className="relative mx-auto w-full max-w-[26rem] lg:max-w-none"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease }}
        >
          <div
            className="absolute -inset-3 rounded-[999px_999px_1.5rem_1.5rem] border border-gold/40"
            aria-hidden="true"
          />
          <div className="portrait-frame aspect-[4/5] overflow-hidden bg-surface">
            <img
              src={photos.hero.src}
              alt={photos.hero.alt}
              className="h-full w-full object-cover object-[50%_22%]"
              fetchPriority="high"
            />
          </div>
          <figcaption className="absolute rounded-2xl border border-gold/30 bg-background/90 shadow-xl backdrop-blur-md -bottom-5 left-4 px-5 py-4 sm:-left-6">
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              Currently
            </p>
            <p className="mt-1 text-sm font-medium">Always becoming.</p>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
