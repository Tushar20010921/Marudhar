"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  Float,
  PerformanceMonitor,
  MeshDistortMaterial
} from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from "three";

function BagModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y +=
      (mouse.current.x * 0.6 - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x +=
      (mouse.current.y * 0.2 - groupRef.current.rotation.x) * 0.05;
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.08;
  });

  const goldMat = (
    <meshStandardMaterial
      color="#b39b73"
      metalness={0.85}
      roughness={0.15}
      envMapIntensity={1.5}
    />
  );

  const bodyMat = (
    <meshStandardMaterial
      color="#1a1208"
      metalness={0.1}
      roughness={0.65}
      envMapIntensity={0.8}
    />
  );

  return (
    <group ref={groupRef} scale={1.2}>
      {/* Bag body */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[1.8, 1.4, 0.55, 3, 3, 3]} />
        {bodyMat}
      </mesh>

      {/* Bag flap */}
      <mesh castShadow position={[0, 0.52, 0.1]} rotation={[-0.3, 0, 0]}>
        <boxGeometry args={[1.8, 0.65, 0.08]} />
        {bodyMat}
      </mesh>

      {/* Flap clasp */}
      <mesh castShadow position={[0, 0.3, 0.32]}>
        <cylinderGeometry args={[0.1, 0.1, 0.06, 16]} />
        {goldMat}
      </mesh>
      <mesh castShadow position={[0, 0.3, 0.36]}>
        <torusGeometry args={[0.08, 0.02, 8, 16]} />
        {goldMat}
      </mesh>

      {/* Left strap ring */}
      <mesh castShadow position={[-0.75, 0.78, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.1, 0.025, 8, 16]} />
        {goldMat}
      </mesh>
      {/* Right strap ring */}
      <mesh castShadow position={[0.75, 0.78, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.1, 0.025, 8, 16]} />
        {goldMat}
      </mesh>

      {/* Handle */}
      <mesh castShadow position={[0, 1.1, 0]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.38, 0.035, 12, 32, Math.PI]} />
        {goldMat}
      </mesh>

      {/* Bottom studs */}
      {[-0.7, -0.2, 0.3, 0.8].map((x, i) => (
        <mesh key={i} castShadow position={[x - 0.3, -0.74, 0]}>
          <sphereGeometry args={[0.045, 8, 8]} />
          {goldMat}
        </mesh>
      ))}

      {/* Embroidery accent (thin displaced plane on front) */}
      <mesh position={[0, -0.05, 0.285]}>
        <planeGeometry args={[1.2, 0.9, 16, 16]} />
        <MeshDistortMaterial
          color="#c7b496"
          metalness={0.6}
          roughness={0.4}
          distort={0.08}
          speed={1.2}
          transparent
          opacity={0.55}
        />
      </mesh>
    </group>
  );
}

export default function HeroBagCanvas() {
  const [dpr, setDpr] = useState(1.5);

  return (
    <div className="relative h-[420px] sm:h-[540px] rounded-3xl overflow-hidden bg-hero-radial">
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 0.2, 4.5], fov: 42 }}
        gl={{ powerPreference: "high-performance", antialias: true }}
        shadows
      >
        <PerformanceMonitor
          onChange={({ factor }) => setDpr(Math.min(1.5, 0.8 + 1.2 * factor))}
        />
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[4, 6, 4]}
          intensity={1.6}
          castShadow
          shadow-mapSize-width={512}
          shadow-mapSize-height={512}
        />
        <pointLight position={[-4, 2, -2]} intensity={0.8} color="#b39b73" />
        <pointLight position={[2, -2, 3]} intensity={0.4} color="#6b90ff" />
        <Suspense fallback={null}>
          <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.4}>
            <BagModel />
          </Float>
          <Environment preset="city" />
        </Suspense>
      </Canvas>

      {/* Overlay gradient */}
      <div className="absolute inset-0 pointer-events-none bg-hero-glow" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />

      {/* Badge */}
      <div className="absolute bottom-6 left-6 glass px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] text-luxe-200">
        ◆ Interactive 3D — Move Cursor
      </div>
    </div>
  );
}
