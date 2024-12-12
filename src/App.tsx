import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import { CuboidMesh } from "./CuboidMesh";
import { Cuboids } from "./Cuboids";

export function App() {
  const cuboids = [
    {
      uuid: "2c4dbdea-845e-4d29-8a94-9c86feb536fe",
      label: "Car",
      yaw: 2.3803062137948943,
      stationary: true,
      camera_used: 1,
      "position.x": 20.759,
      "position.y": 31.401,
      "position.z": 0.591,
      "dimensions.x": 1.867,
      "dimensions.y": 4.629,
      "dimensions.z": 1.673,
      "cuboids.sibling_id": "-",
      "cuboids.sensor_id": -1,
    },
    {
      uuid: "0633a338-f50d-41ca-a387-3100f81bb251",
      label: "Other Vehicle - Uncommon",
      yaw: -0.7840978931225617,
      stationary: true,
      camera_used: 3,
      "position.x": 4.823,
      "position.y": -26.158,
      "position.z": 0.729,
      "dimensions.x": 1.405,
      "dimensions.y": 2.943,
      "dimensions.z": 2.0,
      "cuboids.sibling_id": "-",
      "cuboids.sensor_id": -1,
    },
    {
      uuid: "a12c3f56-50b8-412f-99a1-0165f20b4c97",
      label: "Car",
      yaw: 2.326786801807566,
      stationary: true,
      camera_used: 4,
      "position.x": -60.458,
      "position.y": -37.423,
      "position.z": 0.934,
      "dimensions.x": 2.104,
      "dimensions.y": 4.215,
      "dimensions.z": 1.681,
      "cuboids.sibling_id": "-",
      "cuboids.sensor_id": -1,
    },
  ];

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

        <Cuboids cuboids={cuboids} />
      </Canvas>
    </div>
  );
}
