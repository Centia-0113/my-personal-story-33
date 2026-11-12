import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { nav, profile } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    nav.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-md bg-accent px-4 py-2 text-accent-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "border-b border-border bg-background/75 backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-[80rem] items-center justify-between px-5 sm:px-10 lg:h-20 lg:px-14">
          <a href="#top" className="text-sm font-bold tracking-[0.2em]">
            MY STORY<span className="text-accent">.</span>
          </a>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                aria-current={active === n.id ? "true" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-[0.8rem] transition-colors",
                  active === n.id
                    ? "bg-accent/10 text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {n.short}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid size-10 place-items-center rounded-full border border-border lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-[55] overflow-y-auto bg-background/95 px-5 pb-10 pt-5 backdrop-blur-xl sm:px-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold tracking-[0.2em]">
                MY STORY<span className="text-accent">.</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid size-10 place-items-center rounded-full border border-border"
                aria-label="Close menu"
                autoFocus
              >
                <X className="size-4" />
              </button>
            </div>
            <p className="mt-10 font-display text-3xl italic text-muted-foreground">
              {profile.tagline}
            </p>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {nav.map((n, i) => (
                <motion.li
                  key={n.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <a
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-5 py-5"
                  >
                    <span className="w-6 text-sm text-accent">{n.num}</span>
                    <span className="flex-1 text-lg">{n.label}</span>
                    <ArrowUpRight className="size-4 text-muted-foreground" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
