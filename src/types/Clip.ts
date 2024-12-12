import { Frame } from "./Frame";

export type Clip = {
  frames: Frame[];
  maxPoints: number;
  minZ: number;
  maxZ: number;
};
