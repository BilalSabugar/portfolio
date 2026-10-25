export type SystemStep = {
  id: string;
  label: string;
  title: string;
  explanation: string;
  reason: string;
  input: string;
  output: string;
  source: string;
  sourceLabel: string;
};

export type SystemWalkthrough = {
  title: string;
  introduction: string;
  note: string;
  steps: SystemStep[];
};

const novexaSource = "https://github.com/Labs-Aetheron/Novexa/blob/main/README.md";
const osrsSource = "https://github.com/TeamOSRS/OSRS/blob/main/docs/BALL_BALANCER_RESEARCH_PAPER.md";

export const walkthroughs: Record<string, SystemWalkthrough> = {
  novexa: {
    title: "From a foot position to a moving leg.",
    introduction: "A six-legged robot becomes easier to understand one layer at a time. Explore the structure, the joint geometry and the coordination described in Novexa’s design.",
    note: "An explanation of the documented design, not a live simulation or a claim of measured walking performance.",
    steps: [
      { id: "structure", label: "Structure", title: "Build a repeatable leg assembly.", explanation: "Each of the six legs has three articulated sections: coxa, femur and tibia. The body, mounts and leg components are designed in Fusion 360 and largely fabricated from printed PLA parts.", reason: "A common leg structure makes the mechanical design easier to assemble, inspect and revise across the robot.", input: "Body plates, mounts and printed leg parts", output: "Six articulated legs with three joints each", source: novexaSource, sourceLabel: "Mechanical specifications and leg architecture" },
      { id: "geometry", label: "Joint geometry", title: "Describe where the foot should go.", explanation: "The inverse-kinematics approach starts with a target foot position and the leg’s link lengths. Geometry converts that target into the three required joint angles.", reason: "A gait can work with foot trajectories instead of manually prescribing every joint angle at every point.", input: "Target foot position and link dimensions", output: "Coxa, femur and tibia joint angles", source: novexaSource, sourceLabel: "Inverse kinematics documentation" },
      { id: "coordination", label: "Coordination", title: "Decide which legs move together.", explanation: "The project describes tripod, ripple and wave patterns. Tripod alternates two groups of three legs; wave moves one leg at a time while the others support the body.", reason: "The pattern changes how motion and ground support are distributed. Comparing patterns requires physical testing, not just selecting a gait in software.", input: "A gait pattern and foot trajectories", output: "Coordinated targets for the six legs", source: novexaSource, sourceLabel: "Gait planning and control architecture" },
    ],
  },
  osrs: {
    title: "Follow one pass through the control loop.",
    introduction: "In the ball-balancing module, observations become an estimate, then a correction and a record of what happened. Select a stage to see its job in the system.",
    note: "A guided reading of the repository technical report. This panel does not run the controller or reproduce its experimental results.",
    steps: [
      { id: "sense", label: "Sense", title: "Collect observations of the ball.", explanation: "The report describes camera-based tracking and load-cell readings beneath the plate. These are different ways to observe the same physical experiment.", reason: "Each sensor has different limitations. Camera visibility and force calibration matter before a controller can trust the observations.", input: "Camera frames and serial load-cell readings", output: "Visual position and force-based observations", source: osrsSource, sourceLabel: "Perception and tracking algorithms" },
      { id: "estimate", label: "Estimate", title: "Turn observations into a useful state.", explanation: "The documented estimator combines position estimates according to confidence and filters velocity. Online identification uses observations and previous control input to estimate the system’s response.", reason: "The controller needs an estimate of motion, not only a raw sensor value. Online identification lets the system estimate model parameters from incoming data instead of treating them as fixed assumptions.", input: "Sensor observations and previous control input", output: "Estimated position, velocity and model parameters", source: osrsSource, sourceLabel: "Sensor fusion and online system identification" },
      { id: "control", label: "Control", title: "Calculate and limit the correction.", explanation: "The control pipeline considers the ball’s position and velocity, selects a response and converts the correction into joint targets. The report describes clamping targets to calibration bounds before sending them to the actuators.", reason: "The correction must become a command that fits the hardware’s configured range, rather than an unconstrained model output.", input: "Estimated state, target position and calibration", output: "Bounded joint commands for the robot", source: osrsSource, sourceLabel: "Movement algorithms and execution flow" },
      { id: "inspect", label: "Inspect", title: "Make the experiment visible.", explanation: "The platform publishes telemetry to the interface. Repository guides and experiment figures let a reader inspect the architecture and the software-in-the-loop tests separately.", reason: "A system is easier to study when its commands, observations and test context can be reviewed together. Simulation figures remain labelled as simulation.", input: "Commands, observations and experiment context", output: "Telemetry, plots and development records", source: "https://github.com/TeamOSRS/OSRS", sourceLabel: "Platform source and experiment records" },
    ],
  },
};
