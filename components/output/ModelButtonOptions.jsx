"use client";
import React from "react";
import {
  Palette,
  Layers,
  RefreshCcw,
  ShoppingCart,
  Ruler,
  Info,
  ArrowLeft,
} from "lucide-react";

const ModelButtonOptions = () => {
  return (
    <div className="absolute top-4 right-4 z-10 flex space-x-2">
      <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
        <ShoppingCart size={20} />
      </button>
    </div>
  );
};

export default ModelButtonOptions;
