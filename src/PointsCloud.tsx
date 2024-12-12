import { MeshProps } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef } from "react";
import { Color, Points, DynamicDrawUsage } from "three";

export type PointsCloudProps = {
  maxPoints: number;
  minZ: number;
  maxZ: number;
  pointSize: number;
  points: number[][];
  gradientFrom: Color;
  gradientTo: Color;
} & MeshProps;

// Renders a point cloud from a single frame of a Clip
export function PointsCloud({
  maxPoints,
  minZ,
  maxZ,
  points,
  pointSize,
  gradientFrom,
  gradientTo,
  ...rest
}: PointsCloudProps) {
  const pointsRef = useRef<Points>(null!);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(maxPoints * 3);
    const colors = new Float32Array(maxPoints * 3);

    return { positions, colors };
  }, [maxPoints]);

  useEffect(() => {
    const color = new Color();

    for (let i = 0; i < points.length; i++) {
      const [x, y, z] = points[i];

      positions[i * 3 + 0] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const alpha = (z - minZ) / (maxZ - minZ);

      color.lerpColors(gradientFrom, gradientTo, alpha);

      colors[i * 3 + 0] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.geometry.attributes.color.needsUpdate = true;
    pointsRef.current.geometry.computeBoundingBox();
    pointsRef.current.geometry.computeBoundingSphere();
  }, [pointsRef, points, positions, colors]);

  return (
    <points ref={pointsRef} {...rest}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={positions}
          itemSize={3}
          usage={DynamicDrawUsage}
        />
        <bufferAttribute
          attach="attributes-color"
          count={points.length}
          array={colors}
          itemSize={3}
          usage={DynamicDrawUsage}
        />
      </bufferGeometry>
      <pointsMaterial size={pointSize} vertexColors />
    </points>
  );
}
