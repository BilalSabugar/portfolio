"use client";
import { Suspense, useEffect, useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import { STLLoader } from "three/addons/loaders/STLLoader.js";
import { Vector3 } from "three";

function Model() {
  const source = useLoader(STLLoader, "https://raw.githubusercontent.com/Labs-Aetheron/Novexa/main/Mechanical/Design/All%20STLS/BodyWithArms.stl");
  const geometry = useMemo(() => {
    const clone = source.clone();
    clone.rotateX(-Math.PI / 2); clone.center(); clone.computeBoundingBox();
    const size = clone.boundingBox!.getSize(new Vector3());
    const scale = 3.5 / Math.max(size.x, size.y, size.z);
    clone.scale(scale, scale, scale); clone.computeVertexNormals();
    return clone;
  }, [source]);
  useEffect(() => () => geometry.dispose(), [geometry]);
  return <mesh geometry={geometry}><meshStandardMaterial color="#b5b8b1" metalness={.35} roughness={.42} /></mesh>;
}
function Loading() { const { progress } = useProgress(); return <Html center><p className="cad-loading" role="status">Loading original mesh… {Math.round(progress)}%</p></Html>; }
export default function OriginalCadViewer() {
  return <Canvas camera={{ position: [2.6, 2, 3], fov: 40 }} dpr={[1, 1.5]} frameloop="demand" fallback={<p className="cad-loading">3D rendering is unavailable. The source CAD remains accessible in the project repository.</p>}><ambientLight intensity={1.3} /><directionalLight position={[5, 7, 4]} intensity={3} /><directionalLight position={[-5, -2, -3]} intensity={1} color="#e6b49a" /><Suspense fallback={<Loading />}><Model /></Suspense><OrbitControls makeDefault enablePan={false} minDistance={2} maxDistance={10} minPolarAngle={.15} maxPolarAngle={Math.PI - .15} /></Canvas>;
}
