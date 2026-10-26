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
  contribution: string; evidence: string; takeaway: string;
  status: string; stack: string[]; repository: string; source: string;
  image?: string; imageAlt?: string; imageCaption?: string; imageWidth?: number; imageHeight?: number; previewLabel?: string;
  decisions: { title: string; text: string }[];
  scope: string; outcome: string; disclosure?: string;
};

export const works: Work[] = [
  {
    slug: "novexa", number: "01", title: "Novexa", category: "Robotics",
    label: "Hexapod · Aetheron Labs / team project",
    summary: "An 18-joint hexapod built from a modular, 3D-printed structure, servo-driven legs and an Arduino-based control system.",
    contribution: "Mechanical design, fabrication & integration",
    evidence: "Physical prototype · CAD files · Journal paper",
    takeaway: "Taking a robot from CAD to a physical assembly means designing around the parts, joints and wiring that must work together.",
    question: "How do you make eighteen joints work as one machine?",
    role: "I contributed to the mechanical design, structural fabrication and mechatronic integration: the work connecting the printed structure, actuators and electronics into one assembly.",
    context: "Developed from September to December 2025 with Aditya Jadav, Archie Veera and Rabinder Henry, with ATLAS SkillTech University laboratory resources. This predates Aetheron Labs; the open project is now hosted by the company.",
    status: "Experimental prototype", stack: ["Fusion 360", "3D printing", "Arduino Mega", "Inverse kinematics"],
    repository: "https://github.com/Labs-Aetheron/Novexa", source: "https://github.com/Labs-Aetheron/Novexa/blob/main/README.md",
    image: "/work/novexa-cad.png", imageAlt: "Source CAD render of the Novexa hexapod with six articulated legs",
    imageCaption: "Novexa CAD render · Original project repository", imageWidth: 1920, imageHeight: 873,
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
    summary: "A robotics platform that connects hardware, camera feedback, simulation and a live control dashboard for repeatable experiments.",
    contribution: "Platform engineering & online system identification",
    evidence: "Source code · 20-trial SIL results · Technical report",
    takeaway: "A useful robotics experiment needs more than a controller: it needs connected hardware, visible data and a way to repeat the test.",
    question: "How do you connect an experiment, its hardware and the data needed to understand it?",
    role: "My credited responsibilities cover platform engineering, full-stack robotics and recursive least squares (RLS) identification—a method for estimating system behaviour from incoming data.",
    context: "Core engineering team: Bilal Sabugar, Aditya Jadav and Archie Veera. My June–July 2026 research internship at the IITGN Robotics Lab included the ball-balancing work. OSRS brings hardware, perception and MuJoCo simulation into a common software platform.",
    status: "Open-source research platform", stack: ["Python", "FastAPI", "React", "MuJoCo", "OpenCV", "Dynamixel"],
    repository: "https://github.com/TeamOSRS/OSRS", source: "https://github.com/TeamOSRS/OSRS/blob/main/AUTHORS.md",
    image: "/work/osrs-architecture.png", imageAlt: "OSRS source architecture figure connecting camera and load-cell feedback to the controller, hardware and dashboard",
    imageCaption: "Control and perception architecture · OSRS experiment documentation", imageWidth: 2000, imageHeight: 1561,
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
    summary: "An engineering research tool that connects component selection to source documents, torque calculations and reviewable reports.",
    contribution: "Product direction & engineering workflow design",
    evidence: "Application source · Architecture · Sizing routines",
    takeaway: "AI can help gather engineering information, but calculations and source checks need explicit rules that a person can inspect.",
    question: "How can engineering research stay traceable when AI is part of the workflow?",
    role: "I directed the project and its engineering workflow: how requirements lead to component research, calculations and reports. AI coding agents produced the implementation, as disclosed in the repository.",
    context: "An independently maintained public software project connecting robotics requirements with source material and explicit calculations.",
    status: "Public software project", stack: ["Next.js", "TypeScript", "Prisma", "SQLite", "SerpApi"],
    repository: "https://github.com/BilalSabugar/RoboScout", source: "https://github.com/BilalSabugar/RoboScout/blob/master/ARCHITECTURE.md",
    image: "/work/roboscout-screen.png", imageAlt: "Actual RoboScout static torque calculator showing inputs, calculated torque and engineering assumptions", imageCaption: "Actual local application · Static torque calculator with default inputs · Font fallback used in this capture", imageWidth: 1274, imageHeight: 717, previewLabel: "Actual application · Static torque calculator",
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
    summary: "A browser-based workspace that keeps task planning, focus sessions and a private journal together, with an optional AI assistant.",
    contribution: "Independent community-edition project",
    evidence: "Application source · Local storage · Import / export",
    takeaway: "Planning, doing and reviewing work belong in one workflow; an AI assistant is optional rather than a requirement for the core tools.",
    question: "How do plans, focused work and reflection stay connected?",
    role: "WIRK is my independent software project. This case covers the open-source community edition: task management, focus sessions, journal storage and optional AI assistance.",
    context: "WIRK's community edition runs in the browser. The public repository is the scope of this case study; separately advertised cloud services are not treated as demonstrated here.",
    status: "Open-source community edition", stack: ["React", "Vite", "Web Crypto", "Browser storage"],
    repository: "https://github.com/BilalSabugar/wirk-opensource", source: "https://github.com/BilalSabugar/wirk-opensource/blob/main/README.md",
    image: "/work/wirk-screen.png", imageAlt: "Actual WIRK local workspace showing the starter task dashboard and focus controls", imageCaption: "Actual local-only workspace · Bundled starter data · Preview-only startup fixes; no cloud or AI service connected", imageWidth: 1280, imageHeight: 720, previewLabel: "Local-only preview · Bundled starter data",
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
    summary: "A payment-recovery prototype that checks proposed retry actions against policy rules and records outcomes only after gateway confirmation.",
    contribution: "Independent decision-system prototype",
    evidence: "Source code · Synthetic evaluations · Test-mode flow",
    takeaway: "A recommendation is not permission to act, and an attempted payment is not recovered revenue. The system keeps those states separate.",
    question: "When a system recommends an action, what is allowed to execute it?",
    role: "RecoverOS is my independent prototype exploring how recommendations, execution rules and payment records should fit together. The public work includes the application, policy checks and synthetic evaluation scripts.",
    context: "A software exploration of recovery decisions, deterministic policy enforcement and transaction-state verification. Evaluation uses synthetic payment failures.",
    status: "Simulation and test-mode prototype", stack: ["Python", "FastAPI", "React", "SQLAlchemy", "Razorpay test mode"],
    repository: "https://github.com/BilalSabugar/RECOVEROS", source: "https://github.com/BilalSabugar/RECOVEROS/blob/main/README.md",
    image: "/work/recoveros-screen.png", imageAlt: "Actual RecoverOS command center running its built-in simulation with synthetic payment data, not real revenue", imageCaption: "Actual local application · Built-in synthetic simulation / test mode · Amounts shown are not real revenue", imageWidth: 1280, imageHeight: 720, previewLabel: "Simulation / test mode · Not real revenue",
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
    summary: "A mobile wellness prototype combining mood and sleep tracking, journaling, breathing exercises and AI-assisted conversation.",
    contribution: "Back-end development within a four-person team",
    evidence: "React Native app source · Credited team roles",
    takeaway: "The app supports several everyday activities rather than making a chatbot the entire experience.",
    question: "How can everyday wellness tools fit into a small, accessible application?",
    role: "I worked on back-end development alongside Sidharth Lama. Riyaan Sheth and Nandani Singh coordinated the project. These are the roles recorded in the team’s README.",
    context: "Team project with Sidharth Lama, Riyaan Sheth and Nandani Singh. Developed as a prototype in September 2025.",
    status: "Team-built prototype", stack: ["React Native", "Expo", "Gemini", "AsyncStorage"],
    repository: "https://github.com/BilalSabugar/CalmPulseGenAI", source: "https://github.com/BilalSabugar/CalmPulseGenAI/blob/main/README.md",
    image: "/work/calm-pulse-screen.png", imageAlt: "Actual Calm Pulse web prototype welcome screen with its static sample conversation and entry form", imageCaption: "Actual web prototype · Static sample conversation, not a live AI response · Preview bundler compatibility fixes", imageWidth: 1440, imageHeight: 1000, previewLabel: "Web prototype · Static sample conversation",
    decisions: [
      { title: "Support common daily activities", text: "The prototype brings together mood and sleep logging, journaling, breathing exercises and meditation timers rather than relying only on conversational AI." },
      { title: "Use a shared cross-platform foundation", text: "React Native and Expo provide the application structure. AsyncStorage supports on-device records while the chat capability connects to Gemini." },
      { title: "Keep the prototype scope clear", text: "Mock-user login supports the demonstration flow. Production identity, sensitive-data handling and clinical validation would require separate work before treating it as a deployed wellness service." },
    ],
    scope: "The repository uses mock users for a prototype login flow. The application is not presented as a clinically validated service, medical product or production authentication system.",
    outcome: "A public team prototype demonstrating a collection of wellness tools and AI-assisted interaction.",
  },
  {
    slug: "nook", number: "07", title: "Nook", category: "Software", label: "AI workspace · Experimental prototype",
    summary: "An open-source workspace prototype connecting editable documents, coworker profiles and model-provider interfaces, with simulated computer tools.",
    contribution: "Independent repository · Workspace prototype",
    evidence: "Working document editor · Local persistence · Inspectable route handlers",
    takeaway: "An interface can make an agent workflow understandable without proving the underlying autonomy. The implementation and its demonstrations need to be evaluated separately.",
    question: "How can documents, model settings and proposed actions share one workspace?",
    role: "Nook is an experimental project in my public GitHub repository. This record covers the workspace implementation and the boundaries found during a source and local-runtime review; it does not claim that every capability described in the README is operational.",
    context: "Reviewed at commit c863879 on 26 October 2026. A local run verified Space creation, document editing, Markdown preview and persistence after reload. The screenshot uses review-created sample content, not client or production data.",
    status: "Experimental local workspace", stack: ["Next.js", "React", "TypeScript", "Browser storage", "JSON-RPC tool interfaces"],
    repository: "https://github.com/BilalSabugar/Nook", source: "https://github.com/BilalSabugar/Nook/tree/c863879ce8ec1f3bc950a22c69c712b1fe6c47f7/src",
    image: "/work/nook-screen.png", imageAlt: "Actual Nook local document preview showing an audit-created page that explicitly labels simulated capabilities", imageCaption: "Actual local application · Review-created sample document · No provider credentials connected · Regenerated dependency lockfile and font fallback used for this local run", imageWidth: 1280, imageHeight: 720, previewLabel: "Experimental workspace · Review-created sample data",
    decisions: [
      { title: "Keep documents directly editable", text: "Spaces support document creation, Markdown editing, preview and export. Space content, agent definitions and settings use browser localStorage; chat and computer state are not equivalent to a persistent server workspace." },
      { title: "Separate adapters from verified integrations", text: "Server routes contain adapters for Gemini, OpenAI, Anthropic and Ollama. No credentialed provider request was exercised in this review. The default demo uses scripted responses rather than an autonomous tool-execution loop." },
      { title: "Inspect what a computer tool actually does", text: "The terminal route returns canned output; it does not run a shell or launch containers. The browser route fetches and parses HTML rather than controlling an interactive browser, and it can return simulated fallback content. Voice sessions are simulated." },
      { title: "Treat tool governance as unfinished", text: "The JSON-RPC endpoint implements a limited tools/list and tools/call interface. Arithmetic and document formatting are implemented, while web search is canned and an advertised fetch tool lacks a corresponding implementation. Review cards are interface controls, not a server-enforced authorization boundary." },
    ],
    outcome: "A working local document workflow and an inspectable prototype for model settings, coworker interfaces and tool review. Eight repository unit tests passed locally; they do not establish end-to-end provider operation, security or MCP compliance.",
    scope: "No production authentication, real container isolation or autonomous background runtime was established. Provider keys can be stored in browser settings, and the routes are not suitable for public exposure without a separate security review. The roadmap describes real computer execution, speech integration and multi-user controls as future work. This portfolio publishes only a static case study, not Nook's API routes.",
    disclosure: "The repository reviewed here does not provide a specific implementation-authorship or AI-assistance disclosure. Individual implementation responsibilities and the extent of AI assistance are not independently established; no sole manual-authorship claim is made.",
  },
];

export const research = [
  { slug: "novexa-hexapod", type: "Journal publication", title: "Fabrication of a 3D Printed Hexapod for All Terrain Adaptive Locomotion", shortTitle: "Designing and fabricating Novexa", date: "24 April 2026", authors: "Bilal Sabugar, Aditya Jadav, Archie Veera and Rabinder Henry", venue: "IJIRT · Volume 12, Issue 11 · pp. 12393–12396", identifier: "Manuscript 199344 · ISSN 2349-6002", summary: "Design and fabrication of an 18-degree-of-freedom hexapod, with mechanical structure, gait planning and control architecture documented in a four-page paper.", scope: "The article documents the experimental platform and its development. Design descriptions and future work should be read in their original context; the portfolio does not extend them into independently verified field-performance claims.", href: "https://ijirt.org/publishedpaper/IJIRT199344_PAPER.pdf", project: "novexa", image: "/work/novexa-cad.png" },
  { slug: "osrs-ball-balancing", type: "Repository technical report", title: "Autonomous Dual-Axis Ball Balancing and Online System Identification: A Modular Hybrid Vision-Force Research Architecture", shortTitle: "Control, perception and ball balancing", date: "Repository report · 2026", authors: "OSRS Core Engineering Team: Aditya Jadav, Archie Veera and Bilal Sabugar", venue: "OSRS project documentation", identifier: "BALL_BALANCER_RESEARCH_PAPER.md", summary: "A report on the OSRS ball-balancing module, connecting vision and force estimates, adaptive control and online system identification.", scope: "This is a technical report in a public repository. It is listed separately from the journal publication. The repository's figures include simulation experiments; a standalone journal venue or DOI has not been established for this report.", href: "https://github.com/TeamOSRS/OSRS/blob/main/docs/BALL_BALANCER_RESEARCH_PAPER.md", project: "osrs", image: "/work/osrs-architecture.png" },
] as const;

export const programs = [
  { title: "S.L.A.B.", description: "Shelf Loading Autonomous Bot: a material-handling platform. V1 has app-controlled movement and lifting; it is not presented as an autonomous deployed system.", contribution: "I co-developed V1, contributing to software, embedded electronics and hardware integration.", next: "V2 targets autonomous navigation, omnidirectional mobility, robotic gripping, automatic docking and improved vertical shelf interaction. The 20 kg payload and 1,200 mm lift are development targets, not independently validated physical specifications.", status: "Working V1 prototype · V2 in development", href: "https://www.aetheronlabs.in/programs/slab/" },
  { title: "Novexa", description: "An 18-joint hexapod with original CAD, fabrication files, a physical prototype and a published paper. Built in 2025 before the company; its open repository is now hosted by Aetheron Labs.", contribution: "My work covered mechanical design, fabrication and mechatronic integration within the team.", next: "Further autonomy is roadmap work, not an independently verified result.", status: "Experimental platform · Open project", href: "/work/novexa/" },
  { title: "Raven", description: "A drone-based intrusion-detection concept with a master hexacopter and six modular tricopters.", contribution: "My current work focuses on system design, docking mechanisms, mission coordination and simulation.", next: "Sector exploration, intrusion alerts, return and docking are planned capabilities; an operational drone swarm is not claimed.", status: "System design & simulation", href: "https://www.aetheronlabs.in/programs/raven/" },
  { title: "VIER", description: "A robotic system for intravenous-procedure training on a phantom, combining a 5-DOF arm and a 1-DOF forearm support. This is a training platform, not a clinically validated treatment device.", contribution: "I am developing the platform and integrating stepper motors, magnetic encoders and embedded control.", next: "Inverse-kinematics-based motion, closed-loop positioning and movement recording for trainee assessment are planned capabilities.", status: "Prototype development", href: "https://www.aetheronlabs.in/programs/vier/" },
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
