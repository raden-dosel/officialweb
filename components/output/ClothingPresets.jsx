"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Palette,
  Layers,
  RefreshCcw,
  ShoppingCart,
  Ruler,
  Info,
  ArrowLeft,
} from "lucide-react";

const clothingPresets = [
  { id: 1, name: "T-Shirt", thumbnail: "/assets/image/shirt561651.jpg" },
  { id: 2, name: "Jacket", thumbnail: "/assets/image/jacket454564.jpg" },
  { id: 4, name: "Polo Shirt", thumbnail: "/assets/image/shirt35156468.jpg" },
  { id: 3, name: "Shorts", thumbnail: "/assets/image/shorts12315.jpg" },
  { id: 5, name: "Shorts", thumbnail: "/assets/image/shorts5465.jpg" },
  { id: 6, name: "Dress", thumbnail: "/assets/image/dress4546886.jpg" },
];

const ClothingPresets = () => {
  const [selectedPreset, setSelectedPreset] = useState(clothingPresets[0]);
  return (
    <div className="bg-white rounded-2xl shadow-md border border-zinc-200 p-6">
      <div className="flex items-center space-x-3 mb-4">
        <Layers className="text-blue-500" size={24} />
        <h3 className="text-xl font-semibold text-zinc-800">
          Clothing Presets
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {clothingPresets.map((preset) => (
          <button
            key={preset.id}
            onClick={() => setSelectedPreset(preset)}
            className={`
          relative 
          aspect-square 
          rounded-lg 
          overflow-hidden 
          border-2 
          ${
            selectedPreset.id === preset.id
              ? "border-blue-500"
              : "border-transparent hover:border-zinc-300"
          }
          transition-all
        `}
          >
            <Image
              src={preset.thumbnail}
              alt={preset.name}
              fill
              className="object-cover"
            />
            {selectedPreset.id === preset.id && (
              <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClothingPresets;
