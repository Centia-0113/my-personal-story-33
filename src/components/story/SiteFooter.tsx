import { ArrowUp, Github } from "lucide-react";
import { contact, nav, profile } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border px-5 pb-10 pt-20 sm:px-10 lg:px-14">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      <div className="relative mx-auto max-w-[80rem]">
        <p className="font-display text-[clamp(2.4rem,7vw,6rem)] leading-[1] tracking-[-0.02em]">
          A story <span className="italic text-accent">still being written.</span>
        </p>
        <p className="mt-6 max-w-xl text-muted-foreground">{profile.closingTagline}</p>

        <div className="mt-14 grid gap-10 border-t border-border pt-10 sm:grid-cols-[1fr_auto]">
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-muted-foreground sm:grid-cols-4">
              {nav.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="transition-colors hover:text-foreground">
                    <span className="mr-2 text-accent">{n.num}</span>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-start gap-3">
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="grid size-11 place-items-center rounded-full border border-border transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Github className="size-4" />
            </a>
            <a
              href="#top"
              aria-label="Back to top"
              className="grid size-11 place-items-center rounded-full border border-border transition-colors hover:border-accent/50 hover:text-accent"
            >
              <ArrowUp className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-between gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span>
            {profile.siteTitle} {profile.name}
          </span>
          <span>© {new Date().getFullYear()} · Always becoming</span>
        </div>
      </div>
    </footer>
  );
}
