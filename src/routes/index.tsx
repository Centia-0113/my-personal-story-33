import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "framer-motion";
import { AskMe } from "@/components/AskMe";
import { BeyondTheCode } from "@/components/story/BeyondTheCode";
import { Becoming } from "@/components/story/Becoming";
import { BiggerPicture } from "@/components/story/BiggerPicture";
import { Connect } from "@/components/story/Connect";
import { Hero } from "@/components/story/Hero";
import { Introduction } from "@/components/story/Introduction";
import { Journey } from "@/components/story/Journey";
import { Projects } from "@/components/story/Projects";
import { Research } from "@/components/story/Research";
import { SiteFooter } from "@/components/story/SiteFooter";
import { SiteHeader } from "@/components/story/SiteHeader";
import { contact, profile } from "@/content/site";

const title = `${profile.siteTitle} — ${profile.name}`;
const description = `${profile.name} — software developer focused on software testing and data analytics, and an aspiring author. ${profile.tagline}`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  description,
  jobTitle: "Software Developer",
  alumniOf: { "@type": "CollegeOrUniversity", name: "Durban University of Technology" },
  knowsAbout: [
    "Software Testing",
    "Data Analytics",
    "Software Development",
    "Artificial Intelligence",
    "Machine Learning",
  ],
  sameAs: [contact.github, contact.linkedin].filter(Boolean),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: profile.closingTagline },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(personJsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <MotionConfig reducedMotion="user">
      <SiteHeader />
      <main id="main" className="overflow-x-clip bg-background text-foreground">
        <Hero />
        <Introduction />
        <Journey />
        <BeyondTheCode />
        <Research />
        <Projects />
        <Becoming />
        <BiggerPicture />
        <AskMe />
        <Connect />
      </main>
      <SiteFooter />
    </MotionConfig>
  );
}
