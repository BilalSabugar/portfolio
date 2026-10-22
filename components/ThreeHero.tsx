'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { useRef } from 'react'


function FloatingCube() {
const ref = useRef<Mesh>(null!)
useFrame((_,d)=>{
ref.current.rotation.x += d*0.4
ref.current.rotation.y += d*0.6
})
return (
<mesh ref={ref}>
<boxGeometry args={[2,2,2]} />
<meshStandardMaterial color="#00ffff" />
</mesh>
)
}


export default function ThreeHero() {
return (
<div className="h-[450px]">
<Canvas camera={{position:[0,0,6]}}>
<ambientLight intensity={1} />
<pointLight position={[5,5,5]} />
<FloatingCube />
</Canvas>
</div>
)
}