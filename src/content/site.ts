/**
 * ─────────────────────────────────────────────────────────────
 *  MY STORY — site content
 * ─────────────────────────────────────────────────────────────
 *  Everything visitors read lives in this one file. To update the
 *  site, edit the data below — no component changes needed.
 *
 *  Anything wrapped in [square brackets] is a placeholder waiting
 *  for real details. Search for "[" to find them all.
 * ─────────────────────────────────────────────────────────────
 */

export type Status = "completed" | "ongoing" | "interest";

export const STATUS_LABEL: Record<Status, string> = {
  completed: "Completed",
  ongoing: "Ongoing",
  interest: "Area of interest",
};

/* ── Identity ─────────────────────────────────────────────── */

export const profile = {
  name: "Innocentia Bulenda",
  firstName: "Innocentia",
  siteTitle: "MY STORY.",
  tagline: "Beyond the Code. Beyond the Title. Always Becoming.",
  closingTagline: "A work in progress. A mind full of possibilities. A story still being written.",
  heroLine: "Software developer. Curious mind. Aspiring author.",
  heroSupport:
    "Exploring the possibilities of technology, transforming ideas into solutions, and continuously becoming a better version of myself.",
  theme:
    "More than what I do. A reflection of who I am, what I believe in, and everything I am becoming.",
  roles: [
    "Software Developer",
    "Software Testing & Data Analytics",
    "BICT Honours · DUT",
    "Aspiring Author",
  ],
};

export const contact = {
  /** Replace with your real address. Used for the email link and the form fallback. */
  email: "[your.email@example.com]",
  /** Replace with your LinkedIn URL, e.g. https://www.linkedin.com/in/your-handle */
  linkedin: "https://www.linkedin.com/in/innocentia-nefolovhodwe/",
  github: "https://github.com/Centia-0113",
  /**
   * Put your CV in /public (e.g. public/innocentia-bulenda-cv.pdf) and set
   * this to "/innocentia-bulenda-cv.pdf". While empty, the button shows "CV coming soon".
   */
  cvUrl: "",
  closing:
    "Every connection starts with a conversation. Let's connect, collaborate, and create something meaningful.",
};

/* ── 01 · The Introduction ────────────────────────────────── */

export const story = {
  lead: "I've never been satisfied with just knowing that something works. I want to know why it works — and what happens when it doesn't.",
  paragraphs: [
    "That curiosity is what pulled me into technology, and it's what made me a software developer. Studying at Durban University of Technology, where I earned my Advanced Diploma in ICT in 2025 and am now completing my Bachelor of Information and Communications Technology Honours, opened a door to software development, artificial intelligence, and the way digital tools quietly shape real lives. The more I learned, the more I found myself drawn to the questions behind the code: Is this reliable? Who does it serve? What story is the data actually telling?",
    "Building software every day has made me care deeply about what happens after the code is written. That's why software testing and data analytics are my main areas of interest. Testing appeals to the part of me that asks hard questions and won't settle for “it should be fine.” Analytics appeals to the part that loves finding patterns no one noticed yet. Both come down to the same thing: making technology more trustworthy and more useful for the people who depend on it.",
    "My path hasn't been a straight line, and I'm glad of it. Research, student leadership, and building real projects have each taught me something a classroom couldn't. I believe growth comes from being willing to explore, learn, make mistakes, ask questions, and keep improving — and that's exactly how I try to live.",
    "And beyond the code, I write. I'm an aspiring author, because some stories are best told in software and others can only be told in words. This site is one of them: my story, still being written.",
  ],
  values: [
    { title: "Curiosity", text: "Asking why, then asking again." },
    { title: "Reliability", text: "Building things people can trust." },
    { title: "Impact", text: "Technology that solves real problems." },
    { title: "Growth", text: "Learning out loud, mistakes included." },
  ],
};

/** My two core areas of interest, featured in The Introduction. */
export const focusAreas = [
  {
    title: "Software Testing",
    tagline: "Making sure it works, and making sure it keeps working.",
    text: "Quality assurance, test design, finding defects early, and building software people can rely on.",
    skills: ["Test planning", "Test case design", "Defect reporting", "QA mindset"],
  },
  {
    title: "Data Analytics",
    tagline: "Finding the story the data is telling.",
    text: "Cleaning and exploring data, discovering patterns, extracting insight, and supporting informed decisions.",
    skills: ["Python", "Data preparation", "Pattern discovery", "Insight"],
  },
];

/* ── 02 · The Journey ─────────────────────────────────────── */

export type Milestone = {
  period: string;
  title: string;
  subtitle: string;
  summary: string;
  details: string[];
  tags: string[];
};

export const journey: Milestone[] = [
  {
    period: "2025",
    title: "Advanced Diploma in ICT",
    subtitle: "Information and Communications Technology · Durban University of Technology",
    summary:
      "A solid foundation in Information and Communications Technology, and the year my technical skills really came together.",
    details: [
      "Completed my Advanced Diploma in Information and Communications Technology at Durban University of Technology in 2025.",
      "Built core skills across software development, systems, and data.",
    ],
    tags: ["ICT", "Software development", "Systems"],
  },
  {
    period: "2025",
    title: "House Committee Chairperson",
    subtitle: "Student residence leadership · Durban University of Technology",
    summary:
      "Leading a DUT residence house committee: representing students, coordinating programmes, and keeping a community running well.",
    details: [
      "Served as House Committee Chairperson at one of the DUT residences in 2025.",
      "Led student representation, programme planning, engagement activities, and conflict resolution.",
      "See Beyond the Code for more on what this role taught me.",
    ],
    tags: ["Leadership", "Representation", "Coordination"],
  },
  {
    period: "2026",
    title: "BICT Honours",
    subtitle: "Bachelor of Information and Communications Technology Honours · DUT",
    summary:
      "Going deeper: advanced study and research in Information and Communications Technology.",
    details: [
      "Completing my Bachelor of Information and Communications Technology Honours at Durban University of Technology in 2026.",
      "Pursuing research in AI, machine learning, and cloud security (see Research & Innovation).",
    ],
    tags: ["Honours", "Research", "ICT"],
  },
  {
    period: "2026",
    title: "Developer & Analyst",
    subtitle: "Singawe Innovative · Non-profit organisation",
    summary:
      "Applying technical skills in a real organisation, where the work has a purpose beyond the assignment brief.",
    details: [
      "Working with Singawe Innovative, a non-profit organisation, as a developer and analyst in 2026.",
      "[Add what you built, analysed, or improved there]",
    ],
    tags: ["Development", "Analysis", "Non-profit"],
  },
  {
    period: "Profession",
    title: "Software Developer",
    subtitle: "Building software for real people",
    summary:
      "Software development is my profession: turning ideas and requirements into working, reliable software.",
    details: [
      "Working as a software developer.",
      "Building full-stack web applications and websites (see Things I've Built).",
    ],
    tags: ["Software development", "Full-stack", "TypeScript"],
  },
  {
    period: "Core interest",
    title: "Software Testing",
    subtitle: "Quality assurance · Reliability",
    summary:
      "A passion for software quality: testing methodologies, finding defects early, and building software people can rely on.",
    details: [
      "Learning testing methodologies and the software testing life cycle.",
      "Practising how to identify, document, and communicate defects clearly.",
      "[Add any tools, certifications, or courses, e.g. ISTQB, Selenium, Postman]",
    ],
    tags: ["QA", "Test design", "Defect tracking"],
  },
  {
    period: "Core interest",
    title: "Data Analytics",
    subtitle: "Patterns · Insight · Decisions",
    summary:
      "Understanding data, discovering patterns, extracting insight, and supporting better decisions.",
    details: [
      "Exploring how data can reveal patterns and support informed decision-making.",
      "Applied machine learning and data preparation in a code-quality prediction study (see Things I've Built).",
      "[Add tools you use, e.g. Python, SQL, Excel, Power BI]",
    ],
    tags: ["Python", "Data preparation", "Insight"],
  },
  {
    period: "Always",
    title: "Continuous Learning",
    subtitle: "Research · Independent learning · Writing",
    summary:
      "A commitment to keep expanding what I know, through research, self-directed learning, building things, and writing.",
    details: [
      "Learning by building real projects and sharing them on GitHub.",
      "Writing as an aspiring author.",
    ],
    tags: ["Research", "Self-study", "Writing"],
  },
];

/* ── 03 · Beyond the Code ─────────────────────────────────── */

export const leadership = {
  intro:
    "Technology is only one part of my story. In 2025 I served as House Committee Chairperson at one of the Durban University of Technology residences, and it taught me things no codebase could — how to listen, how to organise people around a shared goal, and how to stay steady when things get difficult.",
  role: "House Committee Chairperson · DUT Residence · 2025",
  experiences: [
    {
      title: "Student representation",
      text: "Representing residents' voices and leading on their behalf.",
    },
    {
      title: "Programme planning",
      text: "Planning and coordinating residence programmes from idea to delivery.",
    },
    { title: "Student engagement", text: "Organising activities that bring residents together." },
    {
      title: "Community & social responsibility",
      text: "Contributing to community development initiatives.",
    },
    {
      title: "Innovation & entrepreneurship",
      text: "Promoting an innovative, entrepreneurial mindset among students.",
    },
    {
      title: "Conflict resolution",
      text: "Addressing student concerns fairly and finding workable solutions.",
    },
    {
      title: "Stakeholder collaboration",
      text: "Working with different stakeholders to create meaningful experiences.",
    },
  ],
  skills: ["Communication", "Organisation", "Teamwork", "Project management", "Leadership"],
};

export const interests = [
  {
    icon: "cpu",
    title: "Technology & innovation",
    reflection: "I love the moment an idea stops being an idea and starts working.",
  },
  {
    icon: "book",
    title: "Research & continuous learning",
    reflection: "Every answer I find tends to come with two better questions.",
  },
  {
    icon: "briefcase",
    title: "Entrepreneurship & business",
    reflection:
      "Good technology needs a reason to exist. I like understanding the why behind the build.",
  },
  {
    icon: "users",
    title: "Leadership & community impact",
    reflection: "The best things I've been part of were built with other people, not around them.",
  },
  {
    icon: "pen",
    title: "Writing & storytelling",
    reflection:
      "I'm an aspiring author. Code tells a computer what to do; words tell people who you are.",
  },
  {
    icon: "puzzle",
    title: "Creative problem-solving",
    reflection: "A bug, a scheduling conflict, a messy dataset — I enjoy untangling all of them.",
  },
  {
    icon: "compass",
    title: "Personal growth & new opportunities",
    reflection: "I say yes to things that scare me a little. That's usually where the growth is.",
  },
] as const;

/* ── 04 · Research & Innovation ───────────────────────────── */

export type Research = {
  title: string;
  field: string;
  status: Status;
  overview: string;
  objectives: string[];
  technologies: string[];
};

// Statuses are a best first guess — please confirm each one.
export const research: Research[] = [
  {
    title: "Explainable AI for Breast Cancer Diagnosis",
    field: "Artificial Intelligence & Medical Imaging",
    status: "ongoing",
    overview:
      "Using Convolutional Neural Networks to support breast cancer diagnosis through medical image analysis — with a focus on making the model's reasoning visible to clinicians.",
    objectives: [
      "Improve diagnostic support through deep learning on medical images.",
      "Use attention mechanisms to focus the model on clinically relevant regions.",
      "Apply explainable-AI techniques so predictions can be understood and trusted.",
    ],
    technologies: ["CNNs", "Deep learning", "Attention mechanisms", "Explainable AI"],
  },
  {
    title: "Predictive Maintenance in Underground Mining",
    field: "Machine Learning",
    status: "ongoing",
    overview:
      "Exploring how machine learning can predict equipment failures before they happen, reducing emergency field repairs in underground mining.",
    objectives: [
      "Identify early warning signals of equipment failure.",
      "Reduce costly and dangerous emergency field repairs.",
      "Support safer, better-planned maintenance schedules.",
    ],
    technologies: ["Machine learning", "Predictive modelling", "Sensor & maintenance data"],
  },
  {
    title: "User-Friendly Two-Factor Authentication",
    field: "Cloud Security",
    status: "ongoing",
    overview:
      "Exploring two-factor authentication approaches that strengthen security on cloud file-sharing platforms without making them harder to use.",
    objectives: [
      "Compare 2FA approaches for security and usability.",
      "Reduce friction so users actually keep 2FA turned on.",
      "Improve protection of files shared in the cloud.",
    ],
    technologies: ["Two-factor authentication", "Cloud platforms", "Usable security"],
  },
  {
    title: "Software & Data in Renewable Energy",
    field: "Renewable Energy & Technology",
    status: "interest",
    overview:
      "An interest in how software development, data analytics, and digital innovation can accelerate the renewable energy industry.",
    objectives: [
      "Understand where data and software create value in renewable energy.",
      "Explore analytics for energy monitoring and forecasting.",
    ],
    technologies: ["Data analytics", "Software development", "Digital innovation"],
  },
];

/* ── 05 · Things I've Built ───────────────────────────────── */

export const PROJECT_CATEGORIES = [
  "Software Development",
  "Software Testing",
  "Data Analytics",
  "AI & Machine Learning",
  "Research & Innovation",
] as const;
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export type Project = {
  name: string;
  categories: ProjectCategory[];
  description: string;
  problem: string;
  technologies: string[];
  contribution: string;
  status: Status;
  repo?: string;
  demo?: string;
};

/**
 * Add a new project by copying one of the objects below.
 * Only list real projects and real links.
 */
export const projects: Project[] = [
  {
    name: "Cross-Project Code Smell Prediction",
    categories: [
      "AI & Machine Learning",
      "Data Analytics",
      "Software Testing",
      "Research & Innovation",
    ],
    description:
      "A cross-project study predicting Java code smells on the SmellyCode++ dataset, comparing Random Forest, Logistic Regression, and XGBoost under grouped project validation.",
    problem:
      "Code smells signal deeper quality problems. Can a model trained on some projects reliably detect smells in projects it has never seen?",
    technologies: ["Python", "scikit-learn", "XGBoost", "Random Forest", "Logistic Regression"],
    contribution:
      "Data cleaning, project-level splitting, model tuning, and evaluation on held-out test projects.",
    status: "completed",
    repo: "https://github.com/Centia-0113/22287322_smellycode-xproject_code_rev5",
  },
  {
    name: "Anointed Hands — Booking Platform",
    categories: ["Software Development"],
    description:
      "A full-stack booking and management platform for a salon with an in-salon café: services, appointments, café ordering, and order tracking.",
    problem:
      "Small businesses juggle bookings, orders, and payments by hand. This brings them into one place for customers and staff.",
    technologies: ["TypeScript", "Full-stack web", "EFT payment flow"],
    contribution: "[Describe your role — e.g. designed and built the platform]",
    status: "ongoing",
    repo: "https://github.com/Centia-0113/Anointed-Hands",
  },
  {
    name: "Ignite Potential — Mentorship Website",
    categories: ["Software Development"],
    description:
      "A clean, minimalistic website for a youth-focused organisation that connects mentors and mentees.",
    problem:
      "Give a youth mentorship organisation a welcoming online home that reflects its own identity.",
    technologies: ["TypeScript"],
    contribution: "[Describe your role]",
    status: "ongoing",
    repo: "https://github.com/Centia-0113/SINGA",
  },
  {
    name: "H&E Beauty Parlour Website",
    categories: ["Software Development"],
    description: "[Add a short description of this website]",
    problem: "[What problem does it solve?]",
    technologies: ["HTML", "CSS"],
    contribution: "[Describe your role]",
    status: "completed",
    repo: "https://github.com/Centia-0113/H-E-Beauty-Palor",
  },
];

/* ── Things I'm Becoming (living section) ─────────────────── */

export const becoming = {
  updated: "November 2026",
  columns: [
    {
      label: "Learning",
      items: [
        "Software testing methodologies",
        "Writing clear, reproducible defect reports",
        "[Add a skill]",
      ],
    },
    {
      label: "Exploring",
      items: [
        "Data analytics & visualisation",
        "Explainable AI",
        "My first book [add working title]",
      ],
    },
    {
      label: "Lessons learnt",
      items: [
        "Asking questions early saves time later.",
        "Leadership is mostly listening.",
        "[Add a lesson]",
      ],
    },
    {
      label: "Working towards",
      items: [
        "Completing my BICT Honours at DUT in 2026",
        "Growing in software testing and data analytics",
        "Becoming a published author",
      ],
    },
  ],
};

/* ── 06 · The Bigger Picture ──────────────────────────────── */

export const vision = {
  statement:
    "I am not defined by where I am today, but by my willingness to keep learning, evolving, building, and becoming.",
  intro:
    "My journey is still unfolding — and that's the most exciting part. Here's where I'm headed.",
  aspirations: [
    {
      title: "A skilled technology professional",
      text: "Growing as a software developer into a trusted specialist in software testing and data analytics.",
    },
    {
      title: "Always exploring",
      text: "Continuing to explore software development, artificial intelligence, and innovative solutions.",
    },
    {
      title: "Meaningful impact",
      text: "Using technology to solve real-world problems for real communities.",
    },
    {
      title: "A published author",
      text: "Telling stories in words as well as code, and sharing them with the world.",
    },
  ],
};

/* ── Navigation ───────────────────────────────────────────── */

export const nav = [
  { id: "story", num: "01", label: "The Introduction", short: "Story" },
  { id: "journey", num: "02", label: "The Journey", short: "Journey" },
  { id: "beyond", num: "03", label: "Beyond the Code", short: "Beyond" },
  { id: "research", num: "04", label: "Research & Innovation", short: "Research" },
  { id: "work", num: "05", label: "Things I've Built", short: "Work" },
  { id: "vision", num: "06", label: "The Bigger Picture", short: "Vision" },
  { id: "connect", num: "07", label: "Let's Connect", short: "Connect" },
] as const;
