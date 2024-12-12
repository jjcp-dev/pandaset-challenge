import React from "react";

import { Edges } from "@react-three/drei";

import { Cuboid } from "./Cuboid";
import { CuboidMesh } from "./CuboidMesh";

export function Cuboids({ cuboids }: { cuboids: Cuboid[] }) {
  return (
    <>
      {cuboids.map((cuboid) => (
        <CuboidMesh key={cuboid.uuid} cuboid={cuboid} />
      ))}
    </>
  );
}
