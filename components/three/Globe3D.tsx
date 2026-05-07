"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Environment, PerformanceMonitor } from "@react-three/drei";
import { Suspense, useRef, useState, useMemo } from "react";
import * as THREE from "three";

const CITIES = [
  { label: "London", lat: 51.5, lon: -0.1 },
  { label: "New York", lat: 40.7, lon: -74 },
  { label: "Dubai", lat: 25.2, lon: 55.3 },
  { label: "Paris", lat: 48.9, lon: 2.3 },
  { label: "Tokyo", lat: 35.7, lon: 139.7 },
  { label: "Sydney", lat: -33.9, lon: 151.2 },
  { label: "Toronto", lat: 43.7, lon: -79.4 },
  { label: "Singapore", lat: 1.4, lon: 103.8 }
];

function latLonToVec3(lat: number, lon: number, r: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

function GlobeMarker({ lat, lon }: { lat: number; lon: number }) {
  const pos = useMemo(() => latLonToVec3(lat, lon, 1.52), [lat, lon]);
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.scale.setScalar(
      1 + 0.3 * Math.abs(Math.sin(clock.getElapsedTime() * 1.5 + lat))
    );
  });

  return (
    <mesh ref={ref} position={pos}>
      <sphereGeometry args={[0.025, 8, 8]} />
      <meshStandardMaterial
        color="#b39b73"
        emissive="#b39b73"
        emissiveIntensity={1.2}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
}

function Globe() {
  const globeRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!globeRef.current) return;
    globeRef.current.rotation.y = clock.getElapsedTime() * 0.12;
  });

  return (
    <group>
      {/* Globe body */}
      <Sphere ref={globeRef} args={[1.5, 64, 64]}>
        <meshStandardMaterial
          color="#0d1220"
          metalness={0.3}
          roughness={0.7}
          wireframe={false}
        />
      </Sphere>

      {/* Wireframe overlay */}
      <Sphere args={[1.52, 24, 24]}>
        <meshStandardMaterial
          color="#b39b73"
          wireframe
          transparent
          opacity={0.12}
        />
      </Sphere>

      {/* Atmosphere glow */}
      <Sphere args={[1.6, 32, 32]}>
        <meshStandardMaterial
          color="#3b6bff"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* City markers */}
      {CITIES.map((city) => (
        <GlobeMarker key={city.label} lat={city.lat} lon={city.lon} />
      ))}
    </group>
  );
}

export default function Globe3D() {
  const [dpr, setDpr] = useState(1.5);

  return (
    <div className="relative w-full h-[340px] sm:h-[420px]">
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 0, 4.2], fov: 42 }}
        gl={{ powerPreference: "high-performance", antialias: true }}
      >
        <PerformanceMonitor
          onChange={({ factor }) => setDpr(Math.min(1.5, 0.8 + 1.2 * factor))}
        />
        <ambientLight intensity={0.2} />
        <pointLight position={[4, 4, 4]} intensity={1.2} color="#b39b73" />
        <pointLight position={[-4, -2, -2]} intensity={0.5} color="#3b6bff" />
        <Suspense fallback={null}>
          <Globe />
          <Environment preset="night" />
        </Suspense>
      </Canvas>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 glass px-3 py-2 rounded-xl text-xs text-white/60 space-y-1">
        {CITIES.slice(0, 4).map((c) => (
          <div key={c.label} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-luxe-400 inline-block" />
            {c.label}
          </div>
        ))}
        <div className="text-white/40 text-[10px] mt-1">+{CITIES.length - 4} more</div>
      </div>
    </div>
  );
}
