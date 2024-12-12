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
    <mesh {...rest} position={position} rotation={rotation}>
      <boxGeometry args={scale} />
      <meshPhongMaterial color="#ff0000" opacity={0.2} transparent />
      <Edges linewidth={2} scale={1.0} threshold={15} color="black" />
    </mesh>
  );
}
