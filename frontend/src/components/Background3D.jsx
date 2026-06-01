// src/components/Background3D.jsx
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useMemo } from 'react';

const Particles = () => {
  const ref = useRef();
  const count = 3000;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) arr[i] = (Math.random() - 0.5) * 20;
    return arr;
  }, []);

  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.03;
    ref.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial size={0.015} color="#818cf8" sizeAttenuation transparent opacity={0.6} />
    </Points>
  );
};

const Background3D = () => (
  <div
    style={{
      position: "fixed",
      inset: 0,
      zIndex: 0,
      pointerEvents: "none",
      background: "#020617", // very dark slate
    }}
  >
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      gl={{ alpha: true }}
    >
      <fog attach="fog" args={["#020617", 5, 20]} />

      <Particles />
    </Canvas>
  </div>
);

export default Background3D;