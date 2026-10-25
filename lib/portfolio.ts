export const siteUrl = "https://bilalsabugar.github.io/portfolio";
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
export const reviewedOn = "2026-10-26";
export const links = {
  github: "https://github.com/BilalSabugar",
  linkedin: "https://www.linkedin.com/in/bilal-sabugar/",
  email: "bilal.07.04.07@gmail.com",
  coffee: "https://buymeacoffee.com/bilal07040s",
  company: "https://www.aetheronlabs.in/",
};

export type Work = {
  slug: string; number: string; title: string; category: "Robotics" | "Software";
  label: string; summary: string; question: string; role: string; context: string;
  status: string; stack: string[]; repository: string; source: string;
  image?: string; imageAlt?: string; imageCaption?: string;
  decisions: { title: string; text: string }[];
  scope: string; outcome: string; disclosure?: string;
};

export const works: Work[] = [
  {
    slug: "novexa", number: "01", title: "Novexa", category: "Robotics",
    label: "Hexapod · Aetheron Labs / team project",
    summary: "A six-legged robot that brings mechanical design, fabrication and coordinated movement into one platform.",
    question: "How do you make eighteen joints work as one machine?",
    role: "Mechanical design, structural fabrication and mechatronic integration within the project team.",
    context: "Developed with Aditya Jadav, Archie Veera and Rabinder Henry, with ATLAS SkillTech University laboratory resources. The open project is now hosted by Aetheron Labs.",
    status: "Experimental prototype", stack: ["Fusion 360", "3D printing", "Arduino Mega", "Inverse kinematics"],
    repository: "https://github.com/Labs-Aetheron/Novexa", source: "https://github.com/Labs-Aetheron/Novexa/blob/main/README.md",
    image: "/work/novexa-cad.png", imageAlt: "Source CAD render of the Novexa hexapod with six articulated legs",
    imageCaption: "Novexa CAD render · Original project repository",
    decisions: [
      { title: "Make the structure modular", text: "The mechanical source includes printable body plates, servo mounts and leg components. A modular assembly allows parts to be fabricated and revised individually rather than rebuilding the whole platform." },
      { title: "Control foot position, then joint motion", text: "Each leg has three joints. The documented inverse-kinematics approach relates a target foot position to those joint angles, providing a basis for coordinating all six legs." },
      { title: "Separate movement strategies", text: "The project documents tripod, ripple and wave gaits. They express different movement and support patterns; the portfolio does not treat them as proof of performance on every terrain." },
    ],
    scope: "The prototype uses an Arduino Mega. STM32, ROS 2 integration and further autonomous navigation work appear on the roadmap. Sensing and control features described in the repository are project documentation, not independently reproduced test results.",
    outcome: "A physical hexapod, a public mechanical-design archive and a co-authored IJIRT paper. The CAD render and workshop photograph show two different stages of the same development process.",
  },
  {
    slug: "osrs", number: "02", title: "OSRS", category: "Robotics",
    label: "Robot control · Collaborative platform",
    summary: "A shared platform for robot control, perception, simulation and live telemetry.",
    question: "How do you connect an experiment, its hardware and the data needed to understand it?",
    role: "Platform engineering, RLS identification and full-stack robotics, as credited in the project's AUTHORS.md.",
    context: "Core engineering team: Bilal Sabugar, Aditya Jadav and Archie Veera. The work connects robot hardware, perception modules and MuJoCo simulation through a common software platform.",
    status: "Open-source research platform", stack: ["Python", "FastAPI", "React", "MuJoCo", "OpenCV", "Dynamixel"],
    repository: "https://github.com/TeamOSRS/OSRS", source: "https://github.com/TeamOSRS/OSRS/blob/main/AUTHORS.md",
    image: "/work/osrs-architecture.png", imageAlt: "OSRS source architecture figure connecting camera and load-cell feedback to the controller, hardware and dashboard",
    imageCaption: "Control and perception architecture · OSRS experiment documentation",
    decisions: [
      { title: "Keep hardware and experiments modular", text: "Robot, perception, research and simulation modules sit behind shared runtime services. This lets a new experiment reuse the command interface and telemetry instead of building a separate application." },
      { title: "Connect observation to control", text: "The ball-balancing work combines visual tracking and load-cell estimates with a control loop. Its research notes describe the progression from simulated cooperative arms to a physical dual-arm platform." },
      { title: "Make the experiment inspectable", text: "A React interface exposes commands and telemetry while the Python backend handles hardware and simulation. Source manuals document hardware connections, calibration and the experimental architecture." },
    ],
    scope: "Repository figures include software-in-the-loop experiments. Simulation traces must not be read as physical hardware performance. The associated report is available as project research documentation; no independent journal publication is claimed here.",
    outcome: "A public robotics codebase, hardware and simulation guides, and a technical report documenting ball balancing and online system identification.",
    disclosure: "The project discloses AI-assisted development under human engineering direction in AI_DISCLOSURE.md.",
  },
  {
    slug: "roboscout", number: "03", title: "RoboScout", category: "Software",
    label: "Engineering research · Open source",
    summary: "A workstation for tracing engineering requirements through component research, calculations and reports.",
    question: "How can engineering research stay traceable when AI is part of the workflow?",
    role: "Project direction and engineering workflow design, developed with AI coding agents as disclosed in the repository.",
    context: "An independently maintained public software project connecting robotics requirements with source material and explicit calculations.",
    status: "Public software project", stack: ["Next.js", "TypeScript", "Prisma", "SQLite", "SerpApi"],
    repository: "https://github.com/BilalSabugar/RoboScout", source: "https://github.com/BilalSabugar/RoboScout/blob/master/ARCHITECTURE.md",
    decisions: [
      { title: "Keep calculations deterministic", text: "Static torque sizing and safety margins are calculated in TypeScript. Generative output is not used as the arithmetic engine for physical requirements." },
      { title: "Preserve the source of each claim", text: "Research records distinguish verified, reported, unknown and conflicting parameters. The intent is to keep a component recommendation connected to its underlying documentation." },
      { title: "Carry research into execution", text: "The documented workflow includes component datasheet retrieval, technical literature, schedules and report export. These outputs help a research session become a reviewable engineering plan." },
    ],
    scope: "Recommendations still require engineering review. Public documentation describes the system's intended checks; it does not establish that every retrieved specification is correct or that a hardware design is safe.",
    outcome: "An open-source research application with architecture documentation and deterministic sizing routines.",
    disclosure: "The README explicitly describes implementation through AI coding agents, with human architectural direction. This portfolio preserves that distinction.",
  },
  {
    slug: "wirk", number: "04", title: "WIRK", category: "Software", label: "Productivity · Community edition",
    summary: "A local workspace combining task flow, focus sessions, reflection and a bring-your-own-key AI assistant.",
    question: "How do plans, focused work and reflection stay connected?",
    role: "Independent software project maintained through Bilal's public repository.",
    context: "WIRK's community edition runs in the browser. The public repository is the scope of this case study; separately advertised cloud services are not treated as demonstrated here.",
    status: "Open-source community edition", stack: ["React", "Vite", "Web Crypto", "Browser storage"],
    repository: "https://github.com/BilalSabugar/wirk-opensource", source: "https://github.com/BilalSabugar/wirk-opensource/blob/main/README.md",
    decisions: [
      { title: "Connect work stages", text: "A five-stage Kanban flow connects backlog, execution, review and completion. Focus sessions are associated with tasks so planning and time spent can be examined together." },
      { title: "Keep a useful local mode", text: "The community workflow uses browser storage and JSON import/export. Optional external integrations are distinct from the local task and reflection tools." },
      { title: "Separate private reflection", text: "The project documents Web Crypto encryption for its journal and a bring-your-own-key assistant. These are implementation choices, not an independent security audit." },
    ],
    scope: "Browser storage and export need user-managed backups. AI requests depend on an external model provider. Encryption of the journal does not mean every piece of workspace data or API configuration is encrypted.",
    outcome: "A public community workspace connecting planning, focus and reflection in a single application.",
  },
  {
    slug: "recoveros", number: "05", title: "RecoverOS", category: "Software", label: "Decision systems · Prototype",
    summary: "A revenue-recovery prototype that separates predictions from policy checks and verified outcomes.",
    question: "When a system recommends an action, what is allowed to execute it?",
    role: "Independent prototype maintained in Bilal's public repository.",
    context: "A software exploration of recovery decisions, deterministic policy enforcement and transaction-state verification. Evaluation uses synthetic payment failures.",
    status: "Simulation and test-mode prototype", stack: ["Python", "FastAPI", "React", "SQLAlchemy", "Razorpay test mode"],
    repository: "https://github.com/BilalSabugar/RECOVEROS", source: "https://github.com/BilalSabugar/RECOVEROS/blob/main/README.md",
    decisions: [
      { title: "Separate recommendation and permission", text: "A model-assisted decision layer proposes actions. A separate control layer checks policies, retry limits and other constraints before execution." },
      { title: "Verify before recording an outcome", text: "The documented ledger flow requires gateway confirmation. Predictions alone are not supposed to count as recovered money." },
      { title: "Keep evaluation reproducible", text: "The repository includes synthetic cohorts, baseline comparisons and evaluation scripts. That makes the demonstration inspectable without publishing real customer transactions." },
    ],
    scope: "Published benchmark numbers are synthetic simulation results, not production revenue or independently verified commercial impact. Payment integrations use test mode; customer communications are simulated.",
    outcome: "A documented prototype with policy controls, evaluation scripts and an auditable recovery flow.",
  },
  {
    slug: "calm-pulse", number: "06", title: "Calm Pulse", category: "Software", label: "Wellness app · Team prototype",
    summary: "A cross-platform prototype for journaling, wellness tracking and AI-assisted conversation.",
    question: "How can everyday wellness tools fit into a small, accessible application?",
    role: "Back-end developer, credited alongside Sidharth Lama in the public README.",
    context: "Team project with Sidharth Lama, Riyaan Sheth and Nandani Singh. Developed as a prototype in September 2025.",
    status: "Team-built prototype", stack: ["React Native", "Expo", "Gemini", "AsyncStorage"],
    repository: "https://github.com/BilalSabugar/CalmPulseGenAI", source: "https://github.com/BilalSabugar/CalmPulseGenAI/blob/main/README.md",
    decisions: [
      { title: "Support common daily activities", text: "The prototype brings together mood and sleep logging, journaling, breathing exercises and meditation timers rather than relying only on conversational AI." },
      { title: "Use a shared cross-platform foundation", text: "React Native and Expo provide the application structure. AsyncStorage supports on-device records while the chat capability connects to Gemini." },
      { title: "Credit the collaboration", text: "The repository names two back-end developers and two coordinators. Bilal's contribution is presented in that team context, without claiming sole ownership of the app." },
    ],
    scope: "The repository uses mock users for a prototype login flow. The application is not presented as a clinically validated service, medical product or production authentication system.",
    outcome: "A public team prototype demonstrating a collection of wellness tools and AI-assisted interaction.",
  },
];

export const research = [
  { slug: "novexa-hexapod", type: "Journal publication", title: "Fabrication of a 3D Printed Hexapod for All Terrain Adaptive Locomotion", shortTitle: "Designing and fabricating Novexa", date: "24 April 2026", authors: "Bilal Sabugar, Aditya Jadav, Archie Veera and Rabinder Henry", venue: "IJIRT · Volume 12, Issue 11 · pp. 12393–12396", identifier: "Manuscript 199344 · ISSN 2349-6002", summary: "Design and fabrication of an 18-degree-of-freedom hexapod, with mechanical structure, gait planning and control architecture documented in a four-page paper.", scope: "The article documents the experimental platform and its development. Design descriptions and future work should be read in their original context; the portfolio does not extend them into independently verified field-performance claims.", href: "https://ijirt.org/publishedpaper/IJIRT199344_PAPER.pdf", project: "novexa", image: "/work/novexa-cad.png" },
  { slug: "osrs-ball-balancing", type: "Repository technical report", title: "Autonomous Dual-Axis Ball Balancing and Online System Identification: A Modular Hybrid Vision-Force Research Architecture", shortTitle: "Control, perception and ball balancing", date: "Repository report · 2026", authors: "OSRS Core Engineering Team: Aditya Jadav, Archie Veera and Bilal Sabugar", venue: "OSRS project documentation", identifier: "BALL_BALANCER_RESEARCH_PAPER.md", summary: "A report on the OSRS ball-balancing module, connecting vision and force estimates, adaptive control and online system identification.", scope: "This is a technical report in a public repository. It is listed separately from the journal publication. The repository's figures include simulation experiments; a standalone journal venue or DOI has not been established for this report.", href: "https://github.com/TeamOSRS/OSRS/blob/main/docs/BALL_BALANCER_RESEARCH_PAPER.md", project: "osrs", image: "/work/osrs-architecture.png" },
] as const;

export const programs = [
  { title: "S.L.A.B.", description: "Indoor material handling. The current prototype is remotely operated; autonomous operation is a development goal.", status: "V1 prototype · V2 development", href: "https://www.aetheronlabs.in/programs/slab/" },
  { title: "Novexa", description: "Open hexapod research platform with CAD, fabrication files and a published paper.", status: "Experimental platform", href: "/work/novexa/" },
  { title: "Raven", description: "Company research program for aerial inspection.", status: "Research", href: "https://www.aetheronlabs.in/programs/raven/" },
  { title: "VIER", description: "Company program exploring robotics for intravenous training.", status: "Research and development", href: "https://www.aetheronlabs.in/programs/vier/" },
  { title: "T.H.O.M.A.S.", description: "Company research program focused on robot learning.", status: "Research", href: "https://www.aetheronlabs.in/programs/thomas/" },
] as const;

export const repositoryArchive = [
  { name: "video-downloader-api", language: "Python" }, { name: "python-mini-projects", language: "Python" },
  { name: "NumberGame", language: "Python" }, { name: "TrueRecipes", language: "JavaScript" }, { name: "Book-Santa", language: "JavaScript" },
];

export const services = [
  { title: "Robotics & mechatronics", description: "Mechanical concepts, CAD, actuation and sensor integration for a prototype with a defined test objective." },
  { title: "Control & experiment tools", description: "Robot interfaces, telemetry, simulation workflows and software that helps a team study a physical system." },
  { title: "Applied AI & product software", description: "Research tools, focused applications and automation with clear boundaries between model output and system actions." },
];
