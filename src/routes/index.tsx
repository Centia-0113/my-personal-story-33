import { createFileRoute } from "@tanstack/react-router";
import portrait from "../assets/innocentia-portrait.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Innocentia Bulenda — Personal Profile" },
      {
        name: "description",
        content: "The personal website of Innocentia Bulenda — a quiet portrait of perspective, presence, and becoming.",
      },
      { property: "og:title", content: "Innocentia Bulenda — Personal Profile" },
      {
        property: "og:description",
        content: "A quiet portrait of perspective, presence, and becoming.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20 flex h-20 items-center justify-between px-5 sm:px-10 lg:px-14">
        <a href="#top" className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-foreground">
          IB<span className="text-accent">.</span>
        </a>
        <nav aria-label="Main navigation" className="flex items-center gap-7 font-sans text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
          <a className="transition-colors hover:text-foreground" href="#about">About</a>
          <a className="transition-colors hover:text-foreground" href="#connect">Connect</a>
        </nav>
      </header>

      <section id="top" className="relative min-h-[92svh] border-b border-border px-5 pb-12 pt-28 sm:px-10 lg:px-14 lg:pb-16">
        <div className="mx-auto grid min-h-[calc(92svh-11rem)] max-w-[88rem] grid-cols-1 items-end gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,.72fr)] lg:gap-16">
          <div className="relative z-10 order-2 lg:order-1 lg:pb-8">
            <p className="mb-5 font-sans text-[0.68rem] uppercase tracking-[0.24em] text-accent">A personal portrait</p>
            <h1 className="font-display text-[clamp(4.25rem,10vw,10rem)] font-normal leading-[0.78]">
              Innocentia
              <span className="block pl-[8vw] italic text-accent lg:pl-28">Bulenda</span>
            </h1>
            <div className="mt-10 flex max-w-xl items-start gap-5 border-t border-border pt-6">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              <p className="max-w-md font-sans text-base leading-7 text-muted-foreground sm:text-lg">
                Becoming, creating, and moving through life with intention. This is a small space for my story, my perspective, and what comes next.
              </p>
            </div>
          </div>

          <figure className="relative order-1 mx-auto w-full max-w-[34rem] lg:order-2 lg:mr-0">
            <div className="portrait-frame aspect-[4/5] overflow-hidden">
              <img
                src={portrait.url}
                alt="Portrait of Innocentia Bulenda"
                className="h-full w-full object-cover object-[50%_44%]"
              />
            </div>
            <figcaption className="mt-3 flex justify-between font-sans text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">
              <span>Portrait 01</span>
              <span>In her own light</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="about" className="bg-surface px-5 py-24 sm:px-10 lg:px-14 lg:py-36">
        <div className="mx-auto grid max-w-[88rem] gap-14 lg:grid-cols-[.55fr_1.45fr] lg:gap-24">
          <div>
            <p className="section-label">01 / About</p>
            <div className="mt-8 h-px w-16 bg-accent" />
          </div>
          <div>
            <p className="max-w-4xl font-display text-4xl leading-[1.12] sm:text-5xl lg:text-7xl">
              I am learning to trust my own rhythm—<span className="italic text-accent">to grow without rushing</span> and create a life that feels true.
            </p>
            <div className="mt-14 grid gap-8 border-t border-border pt-8 sm:grid-cols-2 sm:gap-14">
              <p className="body-copy">
                My story is still unfolding. I’m drawn to honest expression, thoughtful details, and the kind of confidence that doesn’t need to announce itself.
              </p>
              <p className="body-copy">
                This space will grow with me—a place for the things I care about, the work I’m proud of, and the moments worth remembering.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="connect" className="px-5 py-24 sm:px-10 lg:px-14 lg:py-32">
        <div className="mx-auto flex max-w-[88rem] flex-col justify-between gap-16 md:flex-row md:items-end">
          <div>
            <p className="section-label">02 / Connect</p>
            <h2 className="mt-7 max-w-3xl font-display text-5xl leading-none sm:text-7xl lg:text-8xl">
              Let’s keep the <span className="italic text-accent">conversation</span> open.
            </h2>
          </div>
          <a href="mailto:hello@example.com" className="contact-link group" aria-label="Send Innocentia an email">
            <span>Say hello</span>
            <ArrowUpRight />
          </a>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-7 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[88rem] items-center justify-between font-sans text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
          <span>Innocentia Bulenda</span>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}