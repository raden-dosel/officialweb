"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import useModelStore from "@store/modelStore";
import { GARMENT_INDEX } from "@utils/constants";

function Model({ sex, season, type, subtype, modelNumber }) {
  const { scene } = useGLTF(`/assets/model/${sex}/${season}/${type}/${subtype}/${subtype} (${modelNumber}).gltf`);

  // Dispose old model resources to free GPU memory
  useEffect(() => {
    return () => {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((mat) => mat.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
    };
  }, [scene]);

  return <primitive object={scene} scale={[7, 7, 7]} />;
}

function Controls() {
  const { camera, gl } = useThree();
  return gl?.domElement ? <OrbitControls args={[camera, gl.domElement]} /> : null;
}

export default function ModelViewer({ type }) {
  const {
    sex,
    season,
    currentSelections,
    nextModel,
    previousModel,
    randomModel
  } = useModelStore();

  const { subtype, modelIndex } = currentSelections[type];

  // Get the valid indices from GARMENT_INDEX
  const validIndices = Array.from(
    { length: GARMENT_INDEX[sex]?.[season]?.[type]?.[subtype] || 0 },
    (_, i) => i
  );

  const maxModels = validIndices.length;
  const hasItems = maxModels > 0;
  const modelNumber = hasItems ? validIndices[modelIndex] + 1 : 0;

  // WebGL Context Loss Handling
  const canvasRef = useRef(null);
  useEffect(() => {
    const handleContextLost = (event) => {
      event.preventDefault();
      console.warn("WebGL context lost! Attempting to restore...");
      window.location.reload();
    };

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener("webglcontextlost", handleContextLost);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener("webglcontextlost", handleContextLost);
      }
    };
  }, []);

  return (
    <div className="h-96 w-full border rounded-lg overflow-hidden relative group">
      {hasItems ? (
        <>
          <Canvas ref={canvasRef} camera={{ position: [0, 5, 2] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Model
              sex={sex}
              season={season}
              type={type}
              subtype={subtype}
              modelNumber={modelNumber}
            />
            <Controls />
          </Canvas>

          {/* Navigation Controls */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              className="px-4 py-2 bg-white/80 hover:bg-white rounded-lg shadow-md text-sm"
              onClick={() => previousModel(type, maxModels)} // ✅ Uses Zustand store function
            >
              ← Previous
            </button>
            <button
              className="px-4 py-2 bg-white/80 hover:bg-white rounded-lg shadow-md text-sm"
              onClick={() => nextModel(type, maxModels)} // ✅ Uses Zustand store function
            >
              Next →
            </button>
            <button
              className="px-4 py-2 bg-white/80 hover:bg-white rounded-lg shadow-md text-sm"
              onClick={() => randomModel(type, maxModels)} // ✅ Uses Zustand store function
            >
              Random
            </button>
          </div>
        </>
      ) : (
        <div className="h-full flex flex-col items-center justify-center text-gray-500 p-4 text-center">
          <span className="text-lg font-semibold">
            No {season} collection available
          </span>
          <span className="text-sm mt-2">
            {subtype.replace(/_/g, " ")} not available for this season
          </span>
        </div>
      )}
    </div>
  );
}
