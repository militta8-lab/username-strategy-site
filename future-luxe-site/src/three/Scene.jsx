import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { MathUtils } from 'three';
import Spheres from './Spheres.jsx';

const CameraRig = () => {
  const { camera } = useThree();
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 1.2;
      const y = (event.clientY / window.innerHeight - 0.5) * -1.2;
      target.current = { x, y };
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  useFrame(() => {
    camera.position.x = MathUtils.lerp(camera.position.x, target.current.x, 0.06);
    camera.position.y = MathUtils.lerp(camera.position.y, target.current.y, 0.06);
    camera.position.z = MathUtils.lerp(camera.position.z, 4, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
};

const SceneContent = () => (
  <>
    <ambientLight intensity={0.7} />
    <directionalLight position={[2.8, 2.6, 2]} intensity={1.1} />
    <Float speed={1.2} floatIntensity={0.6} rotationIntensity={0.2}>
      <Spheres />
    </Float>
    <Environment preset="studio" />
  </>
);

const Scene = () => (
  <Canvas
    camera={{ position: [0, 0, 5], fov: 45 }}
    gl={{ antialias: true }}
    dpr={[1, 2]}
  >
    <CameraRig />
    <SceneContent />
  </Canvas>
);

export default Scene;
