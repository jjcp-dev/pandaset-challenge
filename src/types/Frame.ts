import { Cuboid } from "./Cuboid";

// A dataset frame, a list of cuboids and points in 3d space.
export type Frame = {
  cuboids: Cuboid[];
  points: number[][]; // A list of [x,y,z] arrays
};
