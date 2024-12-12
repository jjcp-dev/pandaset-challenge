import React from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sky } from "@react-three/drei";

export function App() {
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
        }}>
            <Canvas>
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />

                <OrbitControls makeDefault/>
                <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25}  />
            </Canvas>
        </div>
    );
}