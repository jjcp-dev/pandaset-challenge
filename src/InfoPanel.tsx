import React from "react";
import { Cuboid } from "./types/Cuboid";

export type InfoPanelProps = {
  hoveredCuboids: Cuboid[];
};

/// Very basic information panel, displays some info on hovered cuboids
export function InfoPanel({ hoveredCuboids }: InfoPanelProps) {
  return (
    <div className="panel">
      <p>Hovered Cuboids</p>
      <hr />
      {hoveredCuboids.map((x) => (
        <>
          <p>{x.uuid}</p>
          <p>Label: {x.label}</p>
          <hr />
        </>
      ))}
    </div>
  );
}
