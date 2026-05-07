"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PerformanceMonitor } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";

function MiniProductBag({ color = "#1a1208" }: { color?: string }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.7;
    groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 1.2) * 0.06;
  });

  const goldMat = (
    <meshStandardMaterial
      color="#b39b73"
      metalness={0.9}
      roughness={0.1}
      envMapIntensity={2}
    />
  );

  return (
    <group ref={groupRef} scale={0.9}>
      <mesh castShadow>
        <boxGeometry args={[1.6, 1.3, 0.5]} />
        <meshStandardMaterial
          color={color}
          metalness={0.1}
          roughness={0.7}
          envMapIntensity={0.8}
        />
      </mesh>
      <mesh position={[0, 0.5, 0.08]} rotation={[-0.25, 0, 0]}>
        <boxGeometry args={[1.6, 0.6, 0.07]} />
        <meshStandardMaterial color={color} metalness={0.1} roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.28, 0.29]}>
        <cylinderGeometry args={[0.09, 0.09, 0.05, 16]} />
        {goldMat}
      </mesh>
      <mesh position={[0, 0.75, 0]}>
        <torusGeometry args={[0.32, 0.03, 10, 28, Math.PI]} />
        {goldMat}
      </mesh>
    </group>
  );
}

const bagColors = [
  "#1a1208",
  "#0d2040",
  "#1a0a0a",
  "#0a1a0a",
  "#1a1208",
  "#2a1a0a",
  "#0d1a20",
  "#1a100a",
  "#1a1208"
];

type ProductViewerProps = {
  productId: string;
};

export default function ProductViewer({ productId }: ProductViewerProps) {
  const [dpr, setDpr] = useState(1.2);
  const colorIndex = parseInt(productId.replace("p", "")) - 1;
  const color = bagColors[colorIndex % bagColors.length];

  return (
    <div className="w-full h-48 rounded-2xl overflow-hidden bg-neutral-900/50">
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 0.2, 3.5], fov: 45 }}
        gl={{ powerPreference: "high-performance", antialias: false }}
      >
        <PerformanceMonitor
          onChange={({ factor }) => setDpr(Math.min(1.5, 0.6 + factor))}
        />
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 4, 3]} intensity={1.2} />
        <pointLight position={[-2, 1, 2]} intensity={0.6} color="#b39b73" />
        <Suspense fallback={null}>
          <MiniProductBag color={color} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
