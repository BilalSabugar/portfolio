// Editorial summaries of the source-linked implementations in portfolio.ts.
// These describe architecture and purpose, not independently measured results.
export const projectContext: Record<string, { purpose: string; architecture: string }> = {
  nook: {
    purpose: "The experiment brings documents, coworker profiles and proposed actions into one interface. Its useful current evidence is an editable local workspace, not a demonstrated replacement for secure agent infrastructure.",
    architecture: "A Next.js/React interface stores Spaces, agent definitions and settings in browser localStorage. Server route handlers wrap model-provider HTTP requests, a fetch-and-parse browser endpoint, a simulated terminal and a limited JSON-RPC tool interface. These are separate capabilities rather than a verified autonomous runtime.",
  },
  novexa: {
    purpose: "A legged platform makes the relationship between mechanical geometry, actuation and coordinated movement tangible. The practical problem is assembling eighteen joints into a structure that can be inspected and revised.",
    architecture: "Fusion 360 geometry defines the printed body, mounts and three-joint legs. Servo-driven joints connect to an Arduino Mega control system. The documented inverse kinematics translates foot-position targets into joint angles; gait coordination sits above the individual legs.",
  },
  osrs: {
    purpose: "A controller is difficult to study when hardware commands, sensor observations and test records are disconnected. OSRS gives the team a shared platform for observing and repeating robotics experiments.",
    architecture: "A Python/FastAPI runtime connects robot interfaces, OpenCV perception and MuJoCo simulation to a React dashboard. The ball-balancing work joins camera and force estimates with control and online identification. Repository manuals describe the physical connections and calibration separately from software-in-the-loop evaluation.",
  },
  roboscout: {
    purpose: "Component research needs more than a plausible recommendation. An engineer needs to trace a specification to its source, check the calculation and understand the assumptions before selecting hardware.",
    architecture: "The Next.js/TypeScript application connects requirement and research workflows with SerpApi retrieval, Prisma/SQLite records and report generation. Static torque sizing is a deterministic TypeScript calculation, separate from generated research text.",
  },
  wirk: {
    purpose: "Task lists, focus timers and reflection often become separate records. WIRK explores a single local workflow in which a plan can be followed through focused work and review, without requiring an AI account.",
    architecture: "A React/Vite interface connects Kanban tasks, focus sessions and a journal to browser storage. JSON import/export provides a user-managed backup path. Web Crypto journal handling and optional model-provider requests have separate responsibilities; local mode is not a cloud service.",
  },
  recoveros: {
    purpose: "A payment retry has consequences beyond a model recommendation. This prototype explores the boundary between proposing an action, checking whether it is allowed and recording a confirmed outcome.",
    architecture: "A React interface connects to Python/FastAPI services and SQLAlchemy records. Recommendations pass through deterministic policy checks before a test-mode gateway flow. Synthetic evaluation scripts exercise the decision process without representing real customer payments or recovered revenue.",
  },
  "calm-pulse": {
    purpose: "Everyday wellness support involves more than a conversation. The prototype brings logging, reflection and guided exercises into one interface, while keeping its demonstration status separate from clinical or treatment claims.",
    architecture: "React Native and Expo provide the application foundation. AsyncStorage holds on-device records and Gemini supports the conversational feature. The repository's mock-user login is a demonstration mechanism, not production authentication.",
  },
};
