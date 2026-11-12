// Portfolio content the "Ask about me" assistant answers from.
// Generated from src/content/site.ts so it always matches the page.
import {
  STATUS_LABEL,
  becoming,
  contact,
  focusAreas,
  interests,
  journey,
  leadership,
  profile,
  projects,
  research,
  story,
  vision,
} from "@/content/site";

const known = (s: string) => !s.startsWith("[");
const list = (items: string[]) => items.filter(known).join("; ");

export const PORTFOLIO_CONTENT = `
Name: ${profile.name}
Site: ${profile.siteTitle} — ${profile.tagline}
Headline: ${profile.heroLine} ${profile.heroSupport}
Roles: ${profile.roles.join("; ")}

About (in her words): ${story.lead} ${story.paragraphs.join(" ")}
Main areas of interest: ${focusAreas.map((f) => `${f.title} — ${f.text}`).join(" ")}
Values: ${story.values.map((v) => `${v.title} (${v.text})`).join("; ")}

Journey:
${journey.map((m) => `- ${m.title} — ${m.subtitle}. ${m.summary} ${list(m.details)}`).join("\n")}

Leadership: ${leadership.role}. ${leadership.intro}
Experiences: ${leadership.experiences.map((e) => `${e.title}: ${e.text}`).join("; ")}
Skills built: ${leadership.skills.join(", ")}

Interests: ${interests.map((i) => i.title).join("; ")}

Research:
${research.map((r) => `- ${r.title} (${r.field}, ${STATUS_LABEL[r.status]}): ${r.overview} Technologies: ${r.technologies.join(", ")}`).join("\n")}

Projects:
${projects
  .map(
    (p) =>
      `- ${p.name} (${STATUS_LABEL[p.status]}): ${known(p.description) ? p.description : "details coming soon"} Tech: ${p.technologies.join(", ")}.${known(p.contribution) ? ` Her contribution: ${p.contribution}` : ""}${p.repo ? ` Repo: ${p.repo}` : ""}`,
  )
  .join("\n")}

Currently learning/exploring: ${becoming.columns.map((c) => `${c.label}: ${list(c.items)}`).join(" | ")}

Vision: ${vision.statement} ${vision.aspirations.map((a) => a.text).join(" ")}

Contact: Use the form in the "Let's Connect" section. GitHub: ${contact.github}.${contact.linkedin ? ` LinkedIn: ${contact.linkedin}.` : ""}

Dates, qualification names and some project details are not yet published on the site. If asked, say those details are still being added and suggest reaching out via the Let's Connect section.
`;
