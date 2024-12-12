import React from "react";
import { Cuboid } from "./Cuboid";
import { Edges } from "@react-three/drei";

type CuboidMeshProps = {
  cuboid: Cuboid;
};

export function CuboidMesh({ cuboid, ...rest }: CuboidMeshProps) {
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
    <mesh position={position} rotation={rotation} {...rest}>
      <boxGeometry args={scale} />
      <meshPhongMaterial color="#ff0000" opacity={0.2} transparent />
      <Edges linewidth={2} color="black" />
    </mesh>
  );
}
