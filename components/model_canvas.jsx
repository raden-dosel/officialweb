"use client";

import React, { useRef, useContext, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";
// Removed unused import




const Model = ({ url, scale = 1, color = null }) => {
  const { scene } = useGLTF(url);



  return (
    <Center>
      <primitive
        object={scene}
        scale={scale}
        rotation={[Math.PI / 3.3, Math.PI / 5, -Math.PI / 4.5]}
      />
    </Center>
  );
};

const DualCanvasModel = () => {
  const { upper, lower, dress } = useContext(ClotheChangeContext);
  const [add, setAdded] = useState("1");
  const [sub, setSub] = useState("1");

  const randint = Math.floor(Math.random() * 22);
  const addInt = +1;
  const subInt = -1;

  const handleUpperChange = `/assets/model/${upper}/${encodeURIComponent(
    upper
  )} (${randint + 1}).gltf`;

  const handleLowerChange = `/assets/model/${lower}/${encodeURIComponent(
    lower
  )} (${addInt + 1}).gltf`;

  // Create two refs for OrbitContr
  const orbitControlsRef1 = useRef();
  const orbitControlsRef2 = useRef();

  // Constants for rotation increments (in radians)
  const ROTATION_INCREMENT = Math.PI / 12; // 15 degrees rotation increment

  // Unified rotation handler that updates both OrbitControls
  const handleRotate = (direction) => {
    const updateOrbitControls = (controlRef) => {
      if (controlRef.current) {
        const currentPolar = controlRef.current.getPolarAngle();
        const currentAzimuthal = controlRef.current.getAzimuthalAngle();

        switch (direction) {
          case "north":
            const newPolarUp = Math.max(0.1, currentPolar - ROTATION_INCREMENT);
            controlRef.current.setPolarAngle(newPolarUp);
            break;
          case "south":
            const newPolarDown = Math.min(
              Math.PI - 0.1,
              currentPolar + ROTATION_INCREMENT
            );
            controlRef.current.setPolarAngle(newPolarDown);
            break;
          case "east":
            controlRef.current.setAzimuthalAngle(
              currentAzimuthal + ROTATION_INCREMENT
            );
            break;
          case "west":
            controlRef.current.setAzimuthalAngle(
              currentAzimuthal - ROTATION_INCREMENT
            );
            break;
        }
        controlRef.current.update();
      }
    };

    // Update both orbit controls
    updateOrbitControls(orbitControlsRef1);
    updateOrbitControls(orbitControlsRef2);
  };

  // Reset handler for both models
  const handleReset = () => {
    if (orbitControlsRef1.current) orbitControlsRef1.current.reset();
    if (orbitControlsRef2.current) orbitControlsRef2.current.reset();
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="flex h-screen bg-zinc-200 rounded-lg flex-col relative mx-auto md:p-6 lg:p-8">
        {/* Left Model Container */}
        <div className="lg:h-[300px] lg:w-[300px] flex-1   ">
          <Canvas
            camera={{ fov: 20, position: [1, 1, 1] }}
            style={{ background: "transparent" }}
          >
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={0.8} />
            <spotLight
              position={[-10, -10, -10]}
              angle={0.3}
              penumbra={1}
              intensity={0.5}
            />
            <Model
              url={handleUpperChange}
              scale={0.9}
              color={"#Ff0000"} // Set color to red
            />

            <OrbitControls
              ref={orbitControlsRef1}
              minPolarAngle={0.1}
              maxPolarAngle={Math.PI - 0.1}
              minZoom={0.2}
              maxZoom={1}
              enableDamping
              dampingFactor={0.05}
            />
          </Canvas>
        </div>

        {/* Right Model Container */}
        <div className="lg:h-[300px] lg:w-[300px] flex-1 ">
          <Canvas
            camera={{ fov: 20, position: [1, 1, 1] }}
            style={{ background: "transparent" }}
          >
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={0.8} />
            <spotLight
              position={[-10, -10, -10]}
              angle={0.3}
              penumbra={1}
              intensity={0.5}
            />
            <Model url={handleLowerChange} scale={0.9} />

            <OrbitControls
              ref={orbitControlsRef2}
              minPolarAngle={0.1}
              maxPolarAngle={Math.PI - 0.1}
              minZoom={0.2}
              maxZoom={1}
              enableDamping
              dampingFactor={0.05}
            />
          </Canvas>
        </div>
      </div>

      {/* Rotation Control Buttons */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full flex">
          {/* Directional Buttons - Now spanning full width */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center">
            {/* West Button */}
            <button
              onClick={() => handleRotate("west")}
              className="pointer-events-auto p-3 md:p-4 bg-white/80 hover:bg-white border border-zinc-100 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-200 ease-in-out hover:-translate-x-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              aria-label="Rotate West"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-zinc-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* East Button */}
            <button
              onClick={() => handleRotate("east")}
              className="pointer-events-auto p-3 md:p-4 bg-white/80 hover:bg-white border border-zinc-100 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-200 ease-in-out hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              aria-label="Rotate East"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-zinc-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* North and South Buttons */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 flex flex-col justify-between">
            {/* North Button */}
            <button
              onClick={() => handleRotate("north")}
              className="pointer-events-auto p-3 md:p-4 bg-white/80 hover:bg-white border border-zinc-100 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-200 ease-in-out hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              aria-label="Rotate North"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-zinc-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>

            {/* South Button */}
            <button
              onClick={() => handleRotate("south")}
              className="pointer-events-auto p-3 md:p-4 bg-white/80 hover:bg-white border border-zinc-100 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-200 ease-in-out hover:translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              aria-label="Rotate South"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-zinc-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Reset Button */}
      <div className="flex justify-center mt-12">
        <button
          onClick={handleReset}
          className="
          relative
            group
            px-4 py-2 
            bg-zinc-900 
            text-white 
            rounded-lg 
            ring-2 
            ring-zinc-900 
            hover:bg-white 
            hover:text-zinc-900 
            transition-all 
            duration-300 
            flex items-center 
            gap-2 
            hover:ring-offset-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 group-hover:rotate-180 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
};

export default DualCanvasModel;
