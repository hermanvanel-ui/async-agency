"use client";

import { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 200;
const CONNECTION_DISTANCE = 2.5;

function Particles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const particles = useMemo(() => {
    const positions: number[] = [];
    const velocities: number[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions.push(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6
      );
      velocities.push(
        (Math.random() - 0.5) * 0.005,
        (Math.random() - 0.5) * 0.005,
        (Math.random() - 0.5) * 0.003
      );
    }
    return { positions, velocities };
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const positionsRef = useRef(new Float32Array(particles.positions));
  const velocitiesRef = useRef(new Float32Array(particles.velocities));

  const handlePointerMove = useCallback(
    (e: { clientX: number; clientY: number }) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    },
    []
  );

  useFrame(() => {
    if (!meshRef.current || !linesRef.current) return;

    const positions = positionsRef.current;
    const velocities = velocitiesRef.current;
    const linePositions: number[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;

      // Mouse influence
      const mx = mouseRef.current.x * viewport.width * 0.5;
      const my = mouseRef.current.y * viewport.height * 0.5;
      const dx = mx - positions[i3];
      const dy = my - positions[i3 + 1];
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 3) {
        const force = (3 - dist) * 0.0003;
        velocities[i3] += dx * force;
        velocities[i3 + 1] += dy * force;
      }

      positions[i3] += velocities[i3];
      positions[i3 + 1] += velocities[i3 + 1];
      positions[i3 + 2] += velocities[i3 + 2];

      // Bounds
      if (Math.abs(positions[i3]) > 6) velocities[i3] *= -1;
      if (Math.abs(positions[i3 + 1]) > 4) velocities[i3 + 1] *= -1;
      if (Math.abs(positions[i3 + 2]) > 3) velocities[i3 + 2] *= -1;

      // Damping
      velocities[i3] *= 0.999;
      velocities[i3 + 1] *= 0.999;
      velocities[i3 + 2] *= 0.999;

      dummy.position.set(positions[i3], positions[i3 + 1], positions[i3 + 2]);
      const scale = 0.03 + Math.sin(Date.now() * 0.001 + i) * 0.01;
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);

      // Connections
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const j3 = j * 3;
        const ddx = positions[i3] - positions[j3];
        const ddy = positions[i3 + 1] - positions[j3 + 1];
        const ddz = positions[i3 + 2] - positions[j3 + 2];
        const d = Math.sqrt(ddx * ddx + ddy * ddy + ddz * ddz);
        if (d < CONNECTION_DISTANCE) {
          linePositions.push(
            positions[i3], positions[i3 + 1], positions[i3 + 2],
            positions[j3], positions[j3 + 1], positions[j3 + 2]
          );
        }
      }
    }

    meshRef.current.instanceMatrix.needsUpdate = true;

    const lineGeometry = linesRef.current.geometry;
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    lineGeometry.attributes.position.needsUpdate = true;
  });

  return (
    <group onPointerMove={handlePointerMove as never}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial color="#0066FF" transparent opacity={0.8} />
      </instancedMesh>
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#0066FF" transparent opacity={0.15} />
      </lineSegments>
    </group>
  );
}

function GlowingSphere() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.scale.setScalar(1 + Math.sin(clock.elapsedTime * 0.5) * 0.1);
  });

  return (
    <mesh ref={ref} position={[0, 0, -2]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshBasicMaterial color="#0066FF" transparent opacity={0.03} />
    </mesh>
  );
}

export function NeuralNetworkScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <Particles />
        <GlowingSphere />
      </Canvas>
    </div>
  );
}
