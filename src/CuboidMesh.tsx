import React from "react";
import { Cuboid } from "./Cuboid";
import { Edges } from "@react-three/drei";

type CuboidMeshProps = {
  cuboid: Cuboid;
  hovered: boolean;
};

export function CuboidMesh({ cuboid, hovered, ...rest }: CuboidMeshProps) {
  const position = [
    cuboid["position.x"],
    cuboid["position.y"],
    cuboid["position.z"],
  ];

  const rotation = [0, 0, cuboid.yaw];

  const scale = [
    cuboid["dimensions.x"],
    cuboid["dimensions.y"],
    cuboid["dimensions.z"],
  ];

  return (
    <mesh
      position={position}
      rotation={rotation}
      userData={{ cuboid }}
      {...rest}
    >
      <boxGeometry args={scale} />
      <meshPhongMaterial
        color="#ff0000"
        opacity={hovered ? 0.7 : 0.2}
        transparent
      />
      <Edges linewidth={2} color="black" />
    </mesh>
  );
}
