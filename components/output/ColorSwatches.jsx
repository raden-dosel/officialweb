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

const colorSwatches = [
  { name: "Classic White", hex: "#FFFFFF", textColor: "black" },
  { name: "Midnight Black", hex: "#000000", textColor: "white" },
  { name: "Navy Blue", hex: "#1E3A8A", textColor: "white" },
  { name: "Forest Green", hex: "#14532D", textColor: "white" },
  { name: "Crimson Red", hex: "#B91C1C", textColor: "white" },
  { name: "Heather Gray", hex: "#6B7280", textColor: "white" },
];

const ColorSwatches = () => {
  const [selectedColor, setSelectedColor] = useState(colorSwatches[0]);
  return (
    <div className="bg-white rounded-2xl shadow-md border border-zinc-200 p-6">
      <div className="flex items-center space-x-3 mb-4">
        <Palette className="text-purple-500" size={24} />
        <h3 className="text-xl font-semibold text-zinc-800">Choose Color</h3>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {colorSwatches.map((swatch) => (
          <button
            key={swatch.hex}
            onClick={() => setSelectedColor(swatch)}
            className={`
          w-full 
          aspect-square 
          rounded-lg 
          flex 
          items-center 
          justify-center 
          border-4 
          ${
            selectedColor.hex === swatch.hex
              ? "border-blue-500"
              : "border-transparent hover:border-zinc-300"
          }
          transition-all
        `}
            style={{ backgroundColor: swatch.hex }}
          >
            {selectedColor.hex === swatch.hex && (
              <div
                className="w-8 h-8 rounded-full border-4 border-white"
                style={{ backgroundColor: swatch.hex }}
              ></div>
            )}
          </button>
        ))}
      </div>
      <p className="mt-4 text-center text-zinc-600 font-medium">
        {selectedColor.name}
      </p>
    </div>
  );
};

export default ColorSwatches;
