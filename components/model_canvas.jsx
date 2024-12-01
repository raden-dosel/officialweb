"use client";

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";

const Model = ({ url }) => {
  const clothes = useGLTF(url);
  return (
    <Center>
      <primitive
        object={clothes.scene}
        rotation={[Math.PI / 3.3, Math.PI / 5, -Math.PI / 4.5]}
      />
    </Center>
  );
};

const CanvasModel = () => {
  const orbitControlsRef = useRef();

  // Constants for rotation increments (in radians)
  const ROTATION_INCREMENT = Math.PI / 12; // 15 degrees rotation increment

  //Function to handle rotation of the model
  const handleRotate = (direction) => {
    if (orbitControlsRef.current) {
      const currentPolar = orbitControlsRef.current.getPolarAngle();
      const currentAzimuthal = orbitControlsRef.current.getAzimuthalAngle();

      switch (direction) {
        case "north":
          // Rotate upward, but don't go past 0 radians
          const newPolarUp = Math.max(0.1, currentPolar - ROTATION_INCREMENT);
          orbitControlsRef.current.setPolarAngle(newPolarUp);
          break;
        case "south":
          // Rotate downward, but don't go past PI radians
          const newPolarDown = Math.min(
            Math.PI - 0.1,
            currentPolar + ROTATION_INCREMENT
          );
          orbitControlsRef.current.setPolarAngle(newPolarDown);
          break;
        case "east":
          // Rotate right
          orbitControlsRef.current.setAzimuthalAngle(
            currentAzimuthal + ROTATION_INCREMENT
          );
          break;
        case "west":
          // Rotate left
          orbitControlsRef.current.setAzimuthalAngle(
            currentAzimuthal - ROTATION_INCREMENT
          );
          break;
        default:
          break;
      }
      orbitControlsRef.current.update();
    }
  };

  //function for a button that resets into model's original position
  const handleReset = () => {
    if (orbitControlsRef.current) {
      orbitControlsRef.current.reset();
    }
  };

  return (
    <div className="lg:h-[512px] lg:w-[512px] relative mx-auto p-4 md:p-6 lg:p-8">
      <div
        className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-300
      rounded-xl shadow-lg"
      >
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
          <Model url="/assets/model/clothes.gltf" />
          <OrbitControls
            ref={orbitControlsRef}
            minPolarAngle={0.1}
            maxPolarAngle={Math.PI - 0.1}
            minZoom={0.2}
            maxZoom={1}
            enableDamping
            dampingFactor={0.05}
          />
        </Canvas>
      </div>

      {/* Control buttons with improved styling */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full ">
          {/* North button */}
          <button
            onClick={() => handleRotate("north")}
            className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-auto
              p-3 md:p-4
              bg-white/80 hover:bg-white
              border border-zinc-100
              rounded-full
              shadow-lg hover:shadow-xl
              transform transition-all duration-200 ease-in-out
              hover:-translate-y-1
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
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

          {/* South button */}
          <button
            onClick={() => handleRotate("south")}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-auto
              p-3 md:p-4
              bg-white/80 hover:bg-white
              border border-zinc-100
              rounded-full
              shadow-lg hover:shadow-xl
              transform transition-all duration-200 ease-in-out
              hover:translate-y-1
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
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

          {/* West button */}
          <button
            onClick={() => handleRotate("west")}
            className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-auto
              p-3 md:p-4
              bg-white/80 hover:bg-white
              border border-zinc-100
              rounded-full
              shadow-lg hover:shadow-xl
              transform transition-all duration-200 ease-in-out
              hover:-translate-x-1
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
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

          {/* East button */}
          <button
            onClick={() => handleRotate("east")}
            className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-auto
              p-3 md:p-4
              bg-white/80 hover:bg-white
              border border-zinc-100
              rounded-full
              shadow-lg hover:shadow-xl
              transform transition-all duration-200 ease-in-out
              hover:translate-x-1
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
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
      </div>
      <div className="flex justify-center mt-12">
        <button
          onClick={handleReset}
          className="
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

export default CanvasModel;
