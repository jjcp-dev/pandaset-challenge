import React, { useState } from "react";
import { Clip } from "./types/Clip";
import { Canvas } from "@react-three/fiber";
import { CameraControls, GizmoHelper, GizmoViewport } from "@react-three/drei";
import { Cuboids } from "./Cuboids";
import { PointsCloud } from "./PointsCloud";
import { InfoPanel } from "./InfoPanel";
import * as THREE from "three";
import { Cuboid } from "./types/Cuboid";
import { useControls } from "leva";

export type ToolProps = {
  clip: Clip;
};

export function Tool({ clip }: ToolProps) {
  const { pointSize, frameNumber } = useControls("Point Cloud", {
    pointSize: {
      min: 0.03,
      max: 0.5,
      step: 0.01,
      value: 0.1,
    },
    frameNumber: {
      min: 0,
      max: clip.frames.length - 1,
      value: 0,
      step: 1,
    },
  });

  const [hoveredCuboids, setHoveredCuboids] = useState<Cuboid[]>([]);

  return (
    <div className="container">
      <InfoPanel hoveredCuboids={hoveredCuboids} />
      <div className="scene">
        <Canvas>
          <color attach="background" args={[0xfff0ea]} />
          <ambientLight intensity={4} />

          <CameraControls makeDefault />

          <group rotation={[-Math.PI / 2, 0, 0]}>
            <Cuboids
              cuboids={clip.frames[frameNumber].cuboids}
              onHover={(cuboids) => setHoveredCuboids(cuboids)}
            />
            <PointsCloud
              maxPoints={clip.maxPoints}
              minZ={clip.minZ}
              maxZ={clip.maxZ}
              pointSize={pointSize}
              gradientFrom={new THREE.Color("#00FF00")}
              gradientTo={new THREE.Color("#FF0000")}
              points={clip.frames[frameNumber].points}
            />
          </group>

          <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
            <GizmoViewport
              axisColors={["#9d4b4b", "#2f7f4f", "#3b5b9d"]}
              labelColor="white"
            />
          </GizmoHelper>
        </Canvas>
      </div>
    </div>
  );
}
