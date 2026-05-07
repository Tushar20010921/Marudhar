"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, PerformanceMonitor, useGLTF } from "@react-three/drei";
import { Suspense, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type Hero3DProps = {
  modelUrl?: string;
};

function FallbackSculpture() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.35;
    meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
  });

  return (
    <mesh ref={meshRef} castShadow>
      <torusKnotGeometry args={[1.2, 0.4, 220, 32]} />
      <meshStandardMaterial color="#b39b73" metalness={0.6} roughness={0.3} />
    </mesh>
  );
}

function LoadedModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const cloned = useMemo(() => scene.clone(), [scene]);
  return <primitive object={cloned} scale={1.4} />;
}

export default function Hero3D({ modelUrl }: Hero3DProps) {
  const [dpr, setDpr] = useState(1.5);

  return (
    <div className="relative h-[420px] sm:h-[520px] rounded-3xl overflow-hidden bg-hero-radial">
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 0.6, 4.2], fov: 45 }}
        gl={{ powerPreference: "high-performance", antialias: true }}
      >
        <PerformanceMonitor onChange={({ factor }) => setDpr(1 + 1.5 * factor)} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.3} />
        <Suspense fallback={null}>
          <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
            {modelUrl ? <LoadedModel url={modelUrl} /> : <FallbackSculpture />}
          </Float>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 pointer-events-none bg-hero-glow" />
      <div className="absolute bottom-6 left-6 glass px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] text-luxe-200">
        Interactive 3D Preview
      </div>
    </div>
  );
}
