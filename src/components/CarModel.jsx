import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function CarModel(props) {
  const mesh = useRef();

  // Simple rotation animation
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={mesh} {...props}>
      <boxGeometry args={[3, 1, 6]} />
      <meshStandardMaterial 
        color="#222222" 
        metalness={0.8} 
        roughness={0.2} 
        emissive="#ff6600" 
        emissiveIntensity={0.1} 
      />
    </mesh>
  );
}
