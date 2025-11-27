import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial } from '@react-three/drei';

const Spheres = () => {
  const group = useRef();
  const t = useRef(0);

  useFrame((state, delta) => {
    t.current += delta;
    if (group.current) {
      group.current.rotation.y = Math.sin(t.current * 0.35) * 0.2;
      group.current.position.y = Math.sin(t.current * 0.6) * 0.12;
    }
  });

  return (
    <group ref={group}>
      <mesh scale={[1.65, 1.65, 1.65]}>
        <sphereGeometry args={[1, 128, 128]} />
        <MeshTransmissionMaterial
          backside={false}
          thickness={0.25}
          roughness={0.08}
          anisotropy={0.1}
          chromaticAberration={0.02}
          ior={1.2}
          color="#d8d9e8"
          attenuationColor="#8c8fa7"
          transmission={1}
        />
      </mesh>
      <mesh scale={[0.38, 0.38, 0.38]} position={[1.6, 0.6, -0.6]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#8c8fa7"
          metalness={0.92}
          roughness={0.08}
          envMapIntensity={1.4}
        />
      </mesh>
    </group>
  );
};

export default Spheres;
