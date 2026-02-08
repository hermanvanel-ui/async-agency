"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 500 }) {
  const meshRef = useRef<THREE.Points>(null);

  const positionBuffer = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      arr[i] = (Math.random() - 0.5) * 30;
      arr[i + 1] = (Math.random() - 0.5) * 30;
      arr[i + 2] = (Math.random() - 0.5) * 15;
    }
    return new THREE.BufferAttribute(arr, 3);
  }, [count]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = clock.elapsedTime * 0.02;
    meshRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.01) * 0.1;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <primitive object={positionBuffer} attach="attributes-position" />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#0066FF"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

export function BackgroundParticlesScene() {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 1]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
