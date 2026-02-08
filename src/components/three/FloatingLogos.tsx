"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import * as THREE from "three";

function TechNode({
  position,
  label,
  color,
  speed = 1,
}: {
  position: [number, number, number];
  label: string;
  color: string;
  speed?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.3 * speed) * 0.2;
  });

  return (
    <Float speed={speed} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={position}>
        <mesh>
          <boxGeometry args={[1.6, 0.6, 0.1]} />
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.15}
            roughness={0.5}
          />
        </mesh>
        <mesh position={[0, 0, 0.06]}>
          <boxGeometry args={[1.58, 0.58, 0.01]} />
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.3}
            emissive={color}
            emissiveIntensity={0.3}
          />
        </mesh>
        <Text
          position={[0, 0, 0.1]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter.woff"
        >
          {label}
        </Text>
      </group>
    </Float>
  );
}

function OrbitRing({
  radius,
  color,
  speed,
}: {
  radius: number;
  color: string;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.z = clock.elapsedTime * speed;
    ref.current.rotation.x = Math.PI / 2 + Math.sin(clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.01, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.2} />
    </mesh>
  );
}

function Scene() {
  const techs = [
    { label: "OpenAI GPT-4", pos: [-2.5, 2, 0] as [number, number, number], color: "#10B981" },
    { label: "n8n", pos: [2.5, 2, 0] as [number, number, number], color: "#F97316" },
    { label: "Next.js", pos: [-3, 0, 0] as [number, number, number], color: "#FFFFFF" },
    { label: "AWS", pos: [3, 0, 0] as [number, number, number], color: "#FF9900" },
    { label: "LangChain", pos: [-2.5, -2, 0] as [number, number, number], color: "#22D3EE" },
    { label: "Docker", pos: [2.5, -2, 0] as [number, number, number], color: "#2496ED" },
    { label: "TypeScript", pos: [0, 2.5, 0] as [number, number, number], color: "#3178C6" },
    { label: "Claude AI", pos: [0, -2.5, 0] as [number, number, number], color: "#D97706" },
  ];

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -5, 5]} intensity={0.4} color="#0066FF" />

      {techs.map((tech, i) => (
        <TechNode
          key={tech.label}
          position={tech.pos}
          label={tech.label}
          color={tech.color}
          speed={0.5 + i * 0.1}
        />
      ))}

      <OrbitRing radius={3.5} color="#0066FF" speed={0.1} />
      <OrbitRing radius={2.5} color="#8B5CF6" speed={-0.15} />
      <OrbitRing radius={1.5} color="#06B6D4" speed={0.2} />

      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#0066FF"
          emissive="#0066FF"
          emissiveIntensity={0.5}
        />
      </mesh>
    </>
  );
}

export function FloatingLogosScene() {
  return (
    <div className="w-full h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
