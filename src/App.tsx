import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import { CuboidMesh } from "./CuboidMesh";

export function App() {
  const cuboid = {
    uuid: "5bc135e3-0e44-4e78-8a67-cc06b97cb180",
    label: "Car",
    yaw: -0.7813873611914692,
    stationary: false,
    camera_used: 1,
    "position.x": 8.941,
    "position.y": 14.062,
    "position.z": 0.633,
    "dimensions.x": 1.934,
    "dimensions.y": 4.229,
    "dimensions.z": 1.555,
    "cuboids.sibling_id": "4ca78c65-b17e-4cc4-95d8-556e9dea834a",
    "cuboids.sensor_id": 0,
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />

        <OrbitControls makeDefault />
        <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        />

        <CuboidMesh cuboid={cuboid} />
      </Canvas>
    </div>
  );
}
