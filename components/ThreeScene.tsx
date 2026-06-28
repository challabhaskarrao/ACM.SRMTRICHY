'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField({ count = 800, mouse }: { count?: number; mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const mesh = useRef<THREE.Points>(null!);
  const { viewport } = useThree();

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const siz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      const t = Math.random();
      col[i * 3] = 0.02 + t * 0.04;
      col[i * 3 + 1] = 0.71 + t * 0.1;
      col[i * 3 + 2] = 0.83 + t * 0.1;
      siz[i] = Math.random() * 2 + 0.5;
    }
    return [pos, col, siz];
  }, [count]);

  const positionsRef = useRef(positions);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const positions = mesh.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const baseX = positionsRef.current[i3];
      const baseY = positionsRef.current[i3 + 1];
      const baseZ = positionsRef.current[i3 + 2];
      const waveX = Math.sin(time * 0.15 + baseY * 2 + baseZ * 1.5) * 0.3;
      const waveY = Math.cos(time * 0.12 + baseX * 2 + baseZ * 1.5) * 0.3;
      const waveZ = Math.sin(time * 0.1 + baseX * 2 + baseY * 1.5) * 0.3;
      const mx = mouse.current.x * 0.5;
      const my = mouse.current.y * -0.5;
      positions[i3] = baseX + waveX + mx * 0.1;
      positions[i3 + 1] = baseY + waveY + my * 0.1;
      positions[i3 + 2] = baseZ + waveZ;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.rotation.y = time * 0.02;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingGeometries({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const groupRef = useRef<THREE.Group>(null!);

  const geometries = useMemo(() => [
    { position: [-3.5, 1.5, -2], color: '#06b6d4', shape: 'icosahedron' as const, scale: 0.4 },
    { position: [3.8, -1.8, -3], color: '#8b5cf6', shape: 'octahedron' as const, scale: 0.35 },
    { position: [-2.5, -2.5, -1], color: '#ec4899', shape: 'dodecahedron' as const, scale: 0.3 },
    { position: [4.2, 2.2, -4], color: '#06b6d4', shape: 'torus' as const, scale: 0.25 },
    { position: [-4.5, -0.5, -5], color: '#8b5cf6', shape: 'icosahedron' as const, scale: 0.2 },
    { position: [2.8, 3.0, -3.5], color: '#06b6d4', shape: 'octahedron' as const, scale: 0.28 },
  ], []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const mx = mouse.current.x * 0.3;
    const my = mouse.current.y * -0.3;
    groupRef.current.rotation.x = my * 0.1;
    groupRef.current.rotation.y = mx * 0.1;
    groupRef.current.children.forEach((child, i) => {
      child.rotation.x += 0.005 * (i % 2 === 0 ? 1 : -1);
      child.rotation.y += 0.008 * (i % 2 === 0 ? -1 : 1);
      child.position.y += Math.sin(time * 0.5 + i) * 0.002;
    });
  });

  return (
    <group ref={groupRef}>
      {geometries.map((geo, i) => (
        <Float key={i} speed={1.5 + i * 0.3} rotationIntensity={0.3 + i * 0.1} floatIntensity={0.5 + i * 0.2}>
          <mesh position={geo.position as [number, number, number]} scale={geo.scale}>
            {geo.shape === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
            {geo.shape === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
            {geo.shape === 'dodecahedron' && <dodecahedronGeometry args={[1, 0]} />}
            {geo.shape === 'torus' && <torusGeometry args={[0.8, 0.3, 16, 32]} />}
            <MeshDistortMaterial
              color={geo.color}
              emissive={geo.color}
              emissiveIntensity={0.15}
              transparent
              opacity={0.7}
              wireframe
              distort={0.1 + i * 0.05}
              speed={1 + i * 0.2}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function ThreeScene({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} color="#06b6d4" />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#8b5cf6" />
        <pointLight position={[0, 0, 5]} intensity={0.3} color="#06b6d4" />
        <ParticleField count={800} mouse={mouse} />
        <FloatingGeometries mouse={mouse} />
      </Canvas>
    </div>
  );
}
