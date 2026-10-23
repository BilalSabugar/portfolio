export const portfolioData = {
  identity: {
    name: "Bilal Sabugar",
    role: "Robotics engineer · CTO & Co-founder",
    statement: "I build machines that leave the screen.",
    summary: "Robotics, embedded systems, AI and product engineering—brought together to turn an ambitious idea into a working physical system.",
    availability: "Available for select freelance and R&D projects",
    email: "bilal.07.04.07@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/bilal-sabugar/",
    companyUrl: "https://www.aetheronlabs.in/",
  },
  projects: [
    {
      id: "NX-18", scene: "hexapod", title: "Novexa", status: "Active · 2025", category: "All-terrain hexapod",
      summary: "A 3D-printed, 18-DOF hexapod built to study adaptive locomotion across uneven terrain.",
      role: "Mechanical design, structural fabrication and mechatronic systems integration",
      challenge: "Coordinate six articulated legs while keeping the platform manufacturable, repairable and stable.",
      outcome: "A working Arduino Mega prototype, with STM32, environmental sensing, ultrasonic and LiDAR upgrades in development.",
      signal: "18 DOF", stack: ["CAD", "Arduino Mega", "STM32", "LiDAR", "Mechatronics"],
    },
    {
      id: "SL-20", scene: "agv", title: "S.L.A.B.", status: "V1/V2 R&D · 2026", category: "Warehouse AGV",
      summary: "An automated guided vehicle for moving material through warehouses and dark stores.",
      role: "System architecture, physical integration and validation",
      challenge: "Build a compact mobile platform that can lift, navigate and repeat tasks in real operating conditions.",
      outcome: "V2 is being engineered toward a 20 kg payload and 1,200 mm lift target, subject to testing.",
      signal: "20 kg target", stack: ["AGV", "Actuation", "Embedded systems", "Sensors", "Testing"],
    },
    {
      id: "VR-01", scene: "medical", title: "VIER", status: "Active · 2026", category: "Medical training robot",
      summary: "A non-invasive intravenous practice simulator guided by ultrasound for safer, repeatable training.",
      role: "Mechatronics, mechanical systems and prototype development",
      challenge: "Turn a delicate clinical training interaction into a controlled, repeatable physical system.",
      outcome: "An active research prototype focused on training feedback and realistic guided practice.",
      signal: "Non-invasive", stack: ["Ultrasound", "Robotics", "Simulation", "Sensors", "Prototyping"],
    },
    {
      id: "RV-26", scene: "drone", title: "Raven", status: "Research · 2026", category: "Aerial inspection",
      summary: "An aerial robotics program exploring safer inspection of places that are difficult for people to reach.",
      role: "Research, system design and hardware integration",
      challenge: "Balance flight, sensing and useful inspection data inside a constrained aerial platform.",
      outcome: "An active research track at Aetheron Labs; capabilities will be published as validation progresses.",
      signal: "Aerial R&D", stack: ["Aerial robotics", "Sensing", "Inspection", "Control", "R&D"],
    },
    {
      id: "TH-01", scene: "arm", title: "T.H.O.M.A.S.", status: "Research · 2026", category: "Robot learning",
      summary: "A research program investigating how robots can learn useful physical tasks through repeated interaction.",
      role: "Research direction, mechatronics and physical validation",
      challenge: "Connect learning software to hardware that must behave safely and consistently in the real world.",
      outcome: "An active Aetheron Labs research platform for experiments in robot learning.",
      signal: "Learning loop", stack: ["Robot learning", "Actuation", "Control", "AI", "Validation"],
    },
  ],
  services: [
    { number: "01", title: "Robotics prototypes", text: "Mechanisms, actuation, sensors, embedded control and physical integration—from first architecture to a testable machine." },
    { number: "02", title: "AI & automation", text: "Practical intelligence for real workflows: perception, decision systems, automation and operator-facing tools." },
    { number: "03", title: "Product engineering", text: "Full-stack interfaces and internal tools that make complex systems easier to control, observe and use." },
    { number: "04", title: "Technical R&D", text: "Focused experiments for founders and teams who need to reduce uncertainty before committing to a full build." },
  ],
  proof: [
    { value: "CTO", label: "Co-founder, Aetheron Labs", note: "Robotics and mechatronics R&D" },
    { value: "18", label: "Degrees of freedom", note: "Designed into the Novexa hexapod" },
    { value: "2026", label: "Published research", note: "3D-printed hexapod for all-terrain locomotion" },
    { value: "2025–29", label: "B.Tech", note: "Computer Science, AI & Robotics at ATLAS SkillTech University" },
  ],
  credentials: [
    { id: "01", issuer: "IJIRT", title: "Fabrication of a 3D Printed Hexapod for All Terrain Adaptive Locomotion", date: "April 2026", credential: "Publication · ID 199344" },
    { id: "02", issuer: "IIT Gandhinagar", title: "Introduction to Robot Kinematics", date: "September 2025", credential: "Credential ID AB6250044" },
  ],
} as const;

export type PortfolioProject = (typeof portfolioData.projects)[number];
