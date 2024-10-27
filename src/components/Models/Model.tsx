"use client";

import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { Group, Color, MeshStandardMaterial } from "three";

interface ModelProps extends GroupProps {}

export function Model(props: ModelProps) {
  const { nodes } = useGLTF("/anime_vfx.glb") as any;
  const modelRef = useRef<Group>(null);
  
  // Extended palette of colors for dynamic assignment
  const colorPalette = [
    new Color("#1E90FF"), // Dodger Blue
    new Color("#00BFFF"), // Deep Sky Blue
    new Color("#4682B4"), // Steel Blue
    new Color("#6A5ACD"), // Slate Blue
    new Color("#9370DB"), // Medium Purple
    new Color("#8A2BE2"), // Blue Violet
    new Color("#FF1493"), // Deep Pink
    new Color("#FF4500"), // Orange Red
    new Color("#FFD700"), // Gold
    new Color("#32CD32"), // Lime Green
    new Color("#FF8C00"), // Dark Orange
    new Color("#FF69B4"), // Hot Pink
  ];

  // Randomly select colors for each mesh
  const getRandomColor = () => {
    return colorPalette[Math.floor(Math.random() * colorPalette.length)];
  };

  // Create an array of colors for each mesh
  const [meshColors, setMeshColors] = useState<Array<Color>>(Array.from({ length: 9 }, getRandomColor));

  // Slower rotation speeds for each mesh (adjust as needed)
  const rotationSpeeds = [
    0.005, 0.006, 0.007, 0.005, 0.006,
    0.007, 0.005, 0.009, 0.007,
  ];

  useEffect(() => {
    // Change colors on refresh
    setMeshColors(Array.from({ length: 9 }, getRandomColor));
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      // Rotate each mesh individually
      modelRef.current.children.forEach((mesh, index) => {
        mesh.rotation.y += rotationSpeeds[index % rotationSpeeds.length];

        // Apply randomly selected colors to each mesh
        const material = new MeshStandardMaterial({
          color: meshColors[index % meshColors.length],
          emissive: meshColors[index % meshColors.length].clone().multiplyScalar(0.5), // Soft glow effect
          transparent: true,
          opacity: 0.9,
        });
        mesh.material = material;
      });
    }
  });

  return (
    <group ref={modelRef} {...props} dispose={null}>
      {/* Lighting */}
      <ambientLight intensity={0.5} color={"#ffffff"} /> {/* Soft ambient light */}
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={1} 
        color={"#ffffff"} // White light to complement the colors
        castShadow
      />
      
      {/* Mesh Objects */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        position={[-0.042, 1.508, 0]}
        rotation={[0.333, -0.685, 0.602]}
        scale={2.0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        position={[-0.043, 1.509, -0.006]}
        rotation={[0, 0, -0.052]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        position={[-0.055, 1.508, 0]}
        rotation={[-3.012, 0.811, 2.526]}
        scale={1.8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        position={[0, 1.827, -0.067]}
        rotation={[2.377, 0.416, 0.13]}
        scale={[3.0, 8.0, 3.0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        position={[-0.052, 1.615, 0.011]}
        scale={[3.0, 6.0, 3.0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        position={[-0.052, 0.583, 0.011]}
        scale={[2.0, 4.0, 2.0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        position={[-0.047, 0.329, 0.011]}
        scale={[1.5, 3.0, 1.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        position={[0.015, 1.781, -0.14]}
        rotation={[0.692, 0.004, 0.24]}
        scale={[3.0, 10.0, 3.0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        position={[-0.047, 0.256, 0.011]}
        scale={[1.2, 2.5, 1.2]}
      />
    </group>
  );
}

useGLTF.preload('/anime_vfx.glb');
