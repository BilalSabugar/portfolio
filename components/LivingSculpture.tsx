"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, OrbitControls, RoundedBox } from "@react-three/drei";
import { useMemo, useRef, useState } from "react";
import { MathUtils, type Group } from "three";

export type MachineChapter = "overview" | "mechanics" | "control" | "research" | "company";

type Props = {
  chapter: MachineChapter;
  reducedMotion?: boolean;
  onSelect?: (chapter: MachineChapter) => void;
};

const steel = { color: "#87919c", metalness: 0.9, roughness: 0.22 };
const graphite = { color: "#2a3038", metalness: 0.72, roughness: 0.26 };
const orange = { color: "#ef5b28", metalness: 0.62, roughness: 0.2 };

function Hexapod({ chapter, reducedMotion, onSelect }: Props) {
  const machine = useRef<Group>(null);
  const shell = useRef<Group>(null);
  const board = useRef<Group>(null);
  const sensor = useRef<Group>(null);
  const [hovered, setHovered] = useState<MachineChapter | null>(null);
  const legs = useMemo(() => [-1, 0, 1].flatMap((x) => [-1, 1].map((side) => ({ x, side }))), []);

  useFrame((state, delta) => {
    if (!machine.current || !shell.current || !board.current || !sensor.current) return;
    const targetY = reducedMotion ? -0.46 : -0.46 + state.pointer.x * 0.32;
    machine.current.rotation.y = MathUtils.damp(machine.current.rotation.y, targetY, 3.2, delta);
    machine.current.rotation.x = MathUtils.damp(machine.current.rotation.x, reducedMotion ? 0.08 : 0.08 - state.pointer.y * 0.07, 3.2, delta);
    machine.current.position.y = reducedMotion ? -0.08 : -0.08 + Math.sin(state.clock.elapsedTime * 0.75) * 0.018;
    shell.current.position.y = MathUtils.damp(shell.current.position.y, chapter === "mechanics" ? 0.62 : 0.18, 4, delta);
    board.current.position.y = MathUtils.damp(board.current.position.y, chapter === "control" ? 0.48 : 0.18, 4, delta);
    sensor.current.position.y = MathUtils.damp(sensor.current.position.y, chapter === "research" ? 0.72 : 0.43, 4, delta);
  });

  const activeColor = (part: MachineChapter, base: string) => hovered === part ? "#ff6333" : base;

  return (
    <group ref={machine} rotation={[0.08, -0.4, 0]} scale={1.08}>
      <group
        ref={shell}
        position={[0, 0.18, 0]}
        onPointerEnter={(event) => { event.stopPropagation(); setHovered("mechanics"); document.body.style.cursor = "pointer"; }}
        onPointerLeave={() => { setHovered(null); document.body.style.cursor = "default"; }}
        onClick={(event) => { event.stopPropagation(); onSelect?.("mechanics"); }}
      >
        <RoundedBox args={[1.42, 0.24, 0.76]} radius={0.07} smoothness={4}>
          <meshStandardMaterial {...steel} color={activeColor("mechanics", steel.color)} />
        </RoundedBox>
        <RoundedBox args={[1.2, 0.3, 0.64]} radius={0.06} smoothness={4} position={[0, -0.1, 0]}>
          <meshStandardMaterial {...graphite} />
        </RoundedBox>
        <mesh position={[0, 0.14, 0]} scale={[0.92, 0.035, 0.54]}>
          <boxGeometry args={[1, 1, 1]} /><meshStandardMaterial color="#7b8189" metalness={0.92} roughness={0.18} />
        </mesh>
        {[-0.48, 0.48].map((x) => [-0.31, 0.31].map((z) => (
          <mesh key={`${x}-${z}`} position={[x, 0.19, z]}>
            <cylinderGeometry args={[0.025, 0.025, 0.018, 16]} /><meshStandardMaterial color="#24282e" metalness={0.9} roughness={0.18} />
          </mesh>
        )))}
        {[-1, 1].map((side) => <mesh key={side} position={[0, -0.02, side * 0.4]} scale={[1.02, 0.04, 0.035]}><boxGeometry args={[1, 1, 1]} /><meshStandardMaterial {...orange} /></mesh>)}
      </group>

      <group
        ref={board}
        position={[0, 0.18, 0]}
        onPointerEnter={(event) => { event.stopPropagation(); setHovered("control"); document.body.style.cursor = "pointer"; }}
        onPointerLeave={() => { setHovered(null); document.body.style.cursor = "default"; }}
        onClick={(event) => { event.stopPropagation(); onSelect?.("control"); }}
      >
        <mesh scale={[0.72, 0.075, 0.46]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={activeColor("control", "#17352f")} metalness={0.45} roughness={0.32} />
        </mesh>
        {[-0.24, 0, 0.24].map((x) => (
          <mesh key={x} position={[x, 0.07, 0]} scale={[0.12, 0.04, 0.19]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#0d1014" metalness={0.5} roughness={0.3} />
          </mesh>
        ))}
        {[-0.28, -0.14, 0, 0.14, 0.28].map((x) => <mesh key={`pin-${x}`} position={[x, 0.08, -0.19]} scale={[0.035, 0.025, 0.045]}><boxGeometry args={[1,1,1]} /><meshStandardMaterial color="#d0a51e" metalness={0.55} roughness={0.28} /></mesh>)}
      </group>

      <group
        ref={sensor}
        position={[0.35, 0.43, 0]}
        onPointerEnter={(event) => { event.stopPropagation(); setHovered("research"); document.body.style.cursor = "pointer"; }}
        onPointerLeave={() => { setHovered(null); document.body.style.cursor = "default"; }}
        onClick={(event) => { event.stopPropagation(); onSelect?.("research"); }}
      >
        <RoundedBox args={[0.42, 0.23, 0.3]} radius={0.04} smoothness={3}>
          <meshStandardMaterial {...graphite} color={activeColor("research", graphite.color)} />
        </RoundedBox>
        {[-0.09, 0.09].map((x) => <mesh key={x} position={[x, 0, 0.17]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.055, 0.055, 0.045, 24]} /><meshStandardMaterial color="#233a67" emissive={chapter === "research" ? "#245cc5" : "#07101f"} emissiveIntensity={2.4} /></mesh>)}
      </group>

      {legs.map(({ x, side }) => (
        <Leg key={`${x}-${side}`} x={x} side={side} active={chapter === "mechanics"} onSelect={() => onSelect?.("mechanics")} />
      ))}

      <mesh position={[-0.77, 0.03, -0.02]} onClick={(event) => { event.stopPropagation(); onSelect?.("company"); }}>
        <cylinderGeometry args={[0.14, 0.14, 0.14, 28]} />
        <meshStandardMaterial color={activeColor("company", "#24272d")} metalness={0.72} roughness={0.24} />
      </mesh>
      <mesh position={[0, -1.13, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.56, 0.009, 8, 96]} /><meshBasicMaterial color={chapter === "overview" ? "#9ca1a8" : "#ff6333"} transparent opacity={0.28} />
      </mesh>
    </group>
  );
}

function Leg({ x, side, active, onSelect }: { x: number; side: number; active: boolean; onSelect: () => void }) {
  const leg = useRef<Group>(null);
  useFrame((_, delta) => {
    if (!leg.current) return;
    const target = active ? side * (0.66 + Math.abs(x) * 0.07) : side * 0.52;
    leg.current.position.z = MathUtils.damp(leg.current.position.z, target, 4, delta);
  });
  return (
    <group ref={leg} position={[x * 0.72, -0.05, side * 0.45]} rotation={[0, x * -0.13, 0]} onClick={(event) => { event.stopPropagation(); onSelect(); }}>
      <mesh position={[0, 0, side * 0.05]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.125, 0.125, 0.16, 28]} /><meshStandardMaterial {...graphite} />
      </mesh>
      <mesh position={[0, 0, side * 0.135]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.092, 0.092, 0.175, 28]} /><meshStandardMaterial {...orange} />
      </mesh>
      <RoundedBox args={[0.14, 0.48, 0.14]} radius={0.045} smoothness={3} position={[0, -0.22, side * 0.24]} rotation={[side * -0.72, 0, 0]}>
        <meshStandardMaterial {...graphite} />
      </RoundedBox>
      <mesh position={[0, -0.43, side * 0.42]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.105, 0.105, 0.13, 24]} /><meshStandardMaterial {...graphite} />
      </mesh>
      <mesh position={[0, -0.43, side * 0.49]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.075, 0.075, 0.145, 24]} /><meshStandardMaterial {...orange} />
      </mesh>
      <RoundedBox args={[0.115, 0.62, 0.115]} radius={0.035} smoothness={3} position={[0, -0.7, side * 0.58]} rotation={[side * 0.37, 0, 0]}>
        <meshStandardMaterial {...steel} />
      </RoundedBox>
      <RoundedBox args={[0.24, 0.085, 0.18]} radius={0.03} smoothness={3} position={[x * 0.035, -1.01, side * 0.7]}>
        <meshStandardMaterial color="#171b21" metalness={0.68} roughness={0.34} />
      </RoundedBox>
    </group>
  );
}

function Scene(props: Props) {
  return (
    <>
      <ambientLight intensity={0.28} />
      <directionalLight position={[4, 7, 6]} intensity={4.2} color="#ffe2b4" />
      <directionalLight position={[0, 2, 5]} intensity={2.7} color="#dbe7ff" />
      <pointLight position={[-4, 2, 3]} intensity={11} color="#25549c" />
      <pointLight position={[3, 0, 2]} intensity={16} color="#ff6a2f" />
      <Hexapod {...props} />
      <ContactShadows position={[0, -1.16, 0]} opacity={0.72} scale={6} blur={2.8} far={4} color="#05070b" />
      <OrbitControls enablePan={false} enableZoom={false} enableDamping dampingFactor={0.08} rotateSpeed={0.28} minPolarAngle={0.8} maxPolarAngle={1.78} />
    </>
  );
}

export default function LivingSculpture(props: Props) {
  return (
    <Canvas camera={{ position: [0, 0.72, 5.7], fov: 39 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
      <Scene {...props} />
    </Canvas>
  );
}
