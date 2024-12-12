import React from "react";
import { useClip } from "./hooks/ClipHook";
import { Tool } from "./Tool";

export function App() {
  const [clip, isLoading] = useClip();
  return (
    <>
      {isLoading && (
        <>
          <h1>Loading...</h1>
          {/* Having a bit of fun :D */}
          <img
            style={{ width: "100vw", height: "100vh", objectFit: "contain" }}
            src="//i.imgur.com/eL6jRH7.gif"
          />
        </>
      )}

      {!isLoading && <Tool clip={clip} />}
    </>
  );
}
