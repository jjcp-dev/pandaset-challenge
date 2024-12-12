import { useEffect, useState } from "react";
import { Frame } from "../types/Frame";
import { Clip } from "../types/Clip";

// Fetch the list of frames from scale.com (from 00 to 49)
async function loadFrames(): Promise<Frame[]> {
  const count = 50;
  const frames: Frame[] = [];

  for (let frameIndex = 0; frameIndex < count; frameIndex++) {
    const frameId = String(frameIndex).padStart(2, "0");
    const response = await fetch(
      `https://static.scale.com/uploads/pandaset-challenge/frame_${frameId}.json`
    );
    const frame = (await response.json()) as Frame;

    frames.push(frame);
  }

  return frames;
}

function computeClipFromFrames(frames: Frame[]): Clip {
  let maxPoints = 0;
  let minZ = Infinity;
  let maxZ = -Infinity;

  if (frames) {
    for (const frame of frames) {
      if (frame.points.length > maxPoints) maxPoints = frame.points.length;

      for (const point of frame.points) {
        const z = point[2];
        if (z < minZ) minZ = z;
        if (z > maxZ) maxZ = z;
      }
    }
  }

  return { frames, maxPoints, minZ, maxZ };
}

export function useClip(): [Clip, boolean] {
  const [clip, setClip] = useState<Clip>({
    frames: [],
    maxPoints: 0,
    minZ: -Infinity,
    maxZ: Infinity,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const frames = await loadFrames();
      const computedClip = computeClipFromFrames(frames);

      if (computedClip.frames.length) {
        setClip(computedClip);
        setIsLoading(false);
      }
    })();
  }, []);

  return [clip, isLoading];
}
