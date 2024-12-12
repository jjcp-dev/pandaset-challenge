import React from "react";
import { useClip } from "./hooks/ClipHook";
import { Tool } from "./Tool";

export function App() {
  const [clip, isLoading] = useClip();
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && <Tool clip={clip} />}
    </>
  );
}
