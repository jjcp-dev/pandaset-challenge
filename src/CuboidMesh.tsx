import React from "react";
import { Cuboid } from "./types/Cuboid";
import { Edges } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";

export type CuboidMeshProps = {
  cuboid: Cuboid;
  hovered: boolean;
} & MeshProps;

// Renders a translucent cuboid with visible edges
export function CuboidMesh({
  cuboid,
  hovered = false,
  ...rest
}: CuboidMeshProps) {
  const position = [
    cuboid["position.x"],
    cuboid["position.y"],
    cuboid["position.z"],
  ];

  const scale = [
    cuboid["dimensions.x"],
    cuboid["dimensions.y"],
    cuboid["dimensions.z"],
  ];

  const rotation = [0, 0, cuboid.yaw];

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
