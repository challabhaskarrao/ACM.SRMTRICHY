'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Logo3D({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const groupRef = useRef<THREE.Group>(null!);
  const innerRingRef = useRef<THREE.Mesh>(null!);
  const outerRingRef = useRef<THREE.Mesh>(null!);
  const coreRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const mx = mouse.current.x * 0.6;
    const my = mouse.current.y * -0.6;

    groupRef.current.rotation.x = my * 0.25 + Math.sin(time * 0.2) * 0.03;
    groupRef.current.rotation.y = mx * 0.25 + Math.cos(time * 0.15) * 0.03;
    groupRef.current.position.y = Math.sin(time * 0.4) * 0.12;

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = time * 0.12;
      outerRingRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.z = -time * 0.18;
      innerRingRef.current.rotation.x = Math.cos(time * 0.08) * 0.1;
    }
    if (coreRef.current) {
      coreRef.current.rotation.x = time * 0.2;
      coreRef.current.rotation.y = time * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer ring - cyan */}
      <mesh ref={outerRingRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.8, 0.04, 32, 64]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.6} />
      </mesh>

      {/* Inner ring - purple */}
      <mesh ref={innerRingRef} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <torusGeometry args={[1.4, 0.03, 32, 64]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.5} />
      </mesh>

      {/* Middle ring - pink */}
      <mesh rotation={[Math.PI / 5, -Math.PI / 4, 0]}>
        <torusGeometry args={[1.0, 0.025, 24, 48]} />
        <meshBasicMaterial color="#ec4899" transparent opacity={0.4} />
      </mesh>

      {/* Core geometry - floating icosahedron */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.4}>
        <mesh ref={coreRef} scale={0.3}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#06b6d4"
            emissive="#8b5cf6"
            emissiveIntensity={0.4}
            metalness={0.9}
            roughness={0.1}
            wireframe
            distort={0.15}
            speed={2}
          />
        </mesh>
      </Float>

      {/* Small orbiting dots */}
      {[-2.2, 2.2].map((x, i) => (
        <mesh key={i} position={[x, 0, 0]} scale={0.06}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color={i === 0 ? '#06b6d4' : '#8b5cf6'} />
        </mesh>
      ))}
    </group>
  );
}

export default function FloatingLogo({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} color="#06b6d4" />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#8b5cf6" />
        <pointLight position={[0, 0, 5]} intensity={0.2} color="#fff" />
        <Logo3D mouse={mouse} />
      </Canvas>
    </div>
  );
}
