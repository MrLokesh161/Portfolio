"use client";

import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Model } from "../Models/Model";

const Heroobj: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        style={{
          width: "100%",
          height: "120%",
        }}
        gl={{ alpha: true }}
      >
        <PerspectiveCamera makeDefault position={[5, 1, 3]} />
        <OrbitControls enableZoom={false} />
        <Environment preset="studio" />
        <Model position={[0, -1, 0]} />
        <ContactShadows />
      </Canvas>
    </div>
  );
};

export default Heroobj;
