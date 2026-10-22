export type AtlasRecord = {
  id: string;
  shortId: string;
  title: string;
  kind: "Personal project" | "Research" | "Credential" | "Company" | "Company project";
  mapLabel: string;
  relation: string;
  summary: string;
  purpose: string;
  contribution: string;
  status: string;
  evidence: string;
  year: string;
  image?: string;
  imageAlt?: string;
  tags: readonly string[];
};

export const atlasRecords: readonly AtlasRecord[] = [
  {
    id: "iit-kinematics", shortId: "01", title: "IIT Gandhinagar", kind: "Credential", mapLabel: "Foundations",
    relation: "Robotics foundation", summary: "Introduction to Robot Kinematics",
    purpose: "Build a formal foundation in robot motion, coordinate frames and kinematic reasoning.",
    contribution: "Completed IIT Gandhinagar's Introduction to Robot Kinematics course.", status: "Issued September 2025 · Valid through December 2025",
    evidence: "Credential ID AB6250044", year: "2025", tags: ["Kinematics", "Robotics", "Credential"],
  },
  {
    id: "ijirt-research", shortId: "02", title: "IJIRT publication", kind: "Research", mapLabel: "Published research",
    relation: "Research informed", summary: "Fabrication of a 3D Printed Hexapod for All Terrain Adaptive Locomotion",
    purpose: "Record the design and fabrication approach behind a multi-legged robotic platform.",
    contribution: "Co-authored with Aditya Jadav, Archie Veera and Rabinder Henry.", status: "Published · 24 April 2026",
    evidence: "IJIRT 199344 · Volume 12, Issue 11 · pp. 12393–12396", year: "2026", tags: ["Research", "Hexapod", "Publication"],
  },
  {
    id: "novexa", shortId: "03", title: "Novexa", kind: "Personal project", mapLabel: "18-DOF hexapod",
    relation: "Insights applied", summary: "A 3D-printed, 18-DOF hexapod built to study adaptive locomotion across uneven terrain.",
    purpose: "Study how a multi-legged robot can maintain stable movement across uneven terrain.",
    contribution: "Team development spanning CAD, modular 3D-printed fabrication, assembly and mechatronic integration.", status: "Working prototype · June–December 2025",
    evidence: "Project record, build notes and related publication", year: "2025–", image: "/novexa-hexapod.png",
    imageAlt: "Novexa, a black, aluminium and orange six-legged robotics prototype on rocky terrain",
    tags: ["CAD", "Mechatronics", "Embedded control", "Locomotion"],
  },
  {
    id: "aetheron", shortId: "04", title: "Aetheron Labs", kind: "Company", mapLabel: "Company building",
    relation: "Developed with the team", summary: "A robotics and mechatronics company that develops physical systems from concept through validation.",
    purpose: "Build practical machines by developing structure, electronics, firmware and testing around the same operating requirements.",
    contribution: "CTO and co-founder; leads mechanical design, structural fabrication and mechatronic systems integration.", status: "Operating · Co-founder and CTO",
    evidence: "Company website, program pages and public team profile", year: "2025–", tags: ["Leadership", "Robotics", "Product development", "R&D"],
  },
  {
    id: "slab", shortId: "05", title: "S.L.A.B.", kind: "Company project", mapLabel: "Warehouse AGV",
    relation: "Validated through", summary: "An automated guided vehicle for material movement in warehouses and dark stores.",
    purpose: "Develop a compact mobile platform that can lift, navigate and repeat material-handling tasks.",
    contribution: "System architecture, physical integration and validation as part of Aetheron Labs.", status: "V1 / V2 R&D · 2026",
    evidence: "Public Aetheron Labs program record; V2 targets remain subject to testing", year: "2026", tags: ["AGV", "Actuation", "Embedded systems", "Validation"],
  },
  {
    id: "raven", shortId: "06", title: "Raven", kind: "Company project", mapLabel: "Aerial inspection",
    relation: "Designed and built", summary: "An aerial robotics program for inspecting places that are difficult or unsafe for people to reach.",
    purpose: "Balance flight, sensing and useful inspection data inside a constrained aerial platform.",
    contribution: "Research, system design and hardware integration as part of Aetheron Labs.", status: "Active research · 2026",
    evidence: "Public Aetheron Labs program record", year: "2026", tags: ["Aerial robotics", "Sensing", "Inspection", "R&D"],
  },
];

export const companyPrograms = [
  { title: "S.L.A.B.", detail: "Warehouse AGV", status: "V1 / V2 R&D · 2026", contribution: "V2 targets a 20 kg payload and 1,200 mm lift; both remain subject to testing." },
  { title: "VIER", detail: "Intravenous training robot", status: "Active · 2026", contribution: "A non-invasive training simulator using sensor feedback and ultrasound imaging." },
  { title: "Raven", detail: "Aerial inspection research", status: "Active · 2026", contribution: "A company research program for inspection in difficult-to-access environments." },
  { title: "T.H.O.M.A.S.", detail: "Robot-learning research", status: "Active · 2026", contribution: "A company research program focused on learning for physical robotic systems." },
] as const;

export const githubProjects = [
  {
    title: "RoboScout",
    type: "Engineering research workstation",
    summary: "Turns physical-system requirements into sourced component research, deterministic sizing calculations, project schedules and traceable engineering reports.",
    stack: ["Next.js", "TypeScript", "Prisma", "SerpApi"],
    note: "Public open-source repository · MIT licensed",
    href: "https://github.com/BilalSabugar/RoboScout",
  },
  {
    title: "WIRK",
    type: "Local-first executive workspace",
    summary: "Combines a five-stage Kanban workflow, focused-work tracking, a BYOK AI assistant and an AES-GCM encrypted reflection journal.",
    stack: ["React 19", "Vite", "Web Crypto", "Gemini"],
    note: "Community edition · MIT licensed",
    href: "https://github.com/BilalSabugar/wirk-opensource",
  },
  {
    title: "RecoverOS",
    type: "Revenue-recovery prototype",
    summary: "Separates ML-assisted recovery decisions from deterministic policy controls, gateway verification and financial-ledger settlement.",
    stack: ["Python", "FastAPI", "React", "Razorpay test mode"],
    note: "Synthetic evaluation data · Prototype boundaries documented",
    href: "https://github.com/BilalSabugar/RECOVEROS",
  },
  {
    title: "Calm Pulse",
    type: "Team-built wellness prototype",
    summary: "A cross-platform mental-wellness companion with AI chat, mood and sleep tracking, breathing exercises, journaling and on-device data storage.",
    stack: ["React Native", "Expo", "Gemini", "AsyncStorage"],
    note: "Team project · Bilal contributed as a back-end developer",
    href: "https://github.com/BilalSabugar/CalmPulseGenAI",
  },
] as const;

export const profileLinks = {
  email: "bilal.07.04.07@gmail.com",
  linkedin: "https://www.linkedin.com/in/bilal-sabugar/",
  github: "https://github.com/BilalSabugar",
  osrs: "https://github.com/TeamOSRS/OSRS",
  coffee: "https://buymeacoffee.com/bilal07040s",
  company: "https://www.aetheronlabs.in/",
} as const;
