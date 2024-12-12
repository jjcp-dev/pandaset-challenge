import React, { useState } from "react";

import { CycleRaycast } from "@react-three/drei";

import { CuboidMesh } from "./CuboidMesh";
import { Cuboid } from "./types/Cuboid";
import { ThreeEvent } from "@react-three/fiber";

export type CuboidsProps = {
  cuboids: Cuboid[];
  onHover: (cuboids: Cuboid[]) => void;
};

export function Cuboids({ cuboids, onHover }: CuboidsProps) {
  const [hovered, setHovered] = useState({});

  return (
    <>
      {cuboids.map((cuboid) => (
        <CuboidMesh
          key={cuboid.uuid}
          cuboid={cuboid}
          hovered={cuboid.uuid in hovered}
          onPointerOver={(e: ThreeEvent<MouseEvent>) => {
            e.stopPropagation();
          }}
        />
      ))}
      <CycleRaycast
        onChanged={(objects, cycle) => {
          const cuboids = objects.map((x) => x.object.userData.cuboid);

          setHovered(
            cuboids.reduce((acc, x) => {
              acc[x.uuid] = x;
              return acc;
            }, {})
          );

          onHover(objects.map((x) => x.object.userData.cuboid));

          return null;
        }}
      />
    </>
  );
}
