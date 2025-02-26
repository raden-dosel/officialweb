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

import { useDressTypeStore } from "@store/dress-type-store";
import { useUpperMenTypeStore } from "@store/upper-men-store";
import { useLowerMenTypeStore } from "@store/lower-men-store";

const ClothingPresets = () => {
  const { currentTypeIndex, dressType, switchType } = useDressTypeStore();
  const { currentUpperMenTypeIndex, upperMenType, switchUpperMenType } =
    useUpperMenTypeStore();
  const { currentLowerMenTypeIndex, lowerMenType, switchLowerMenType } =
    useLowerMenTypeStore();

  return (
    <div className="bg-white space-y-2 rounded-2xl shadow-md border border-zinc-200 p-6">
      <div className="flex items-center space-x-3 mb-4">
        <Layers className="text-blue-500" size={24} />
        <h3 className="text-xl font-semibold text-zinc-800">
          Clothing Presets
        </h3>
        <p>Toggle Switch</p>
      </div>
      <h3 className="text-xl font-semibold text-zinc-800">Upper</h3>
      <p>{currentUpperMenTypeIndex}</p>
      <div className=" flex flex-row -col gap-4 mx-2">
        {upperMenType.map((index, type) => (
          <button
            key={index}
            onClick={() => switchUpperMenType(index)}
            className={`
          py-2
          relative 
          rounded-lg 
          overflow-hidden 
           border-zinc-300
          border-[.5px] 
         active:scale-95
          active:bg-blue-500/20
          hover:bg-blue-500/10
          hover:scale-105
          transition-all
        `}
          >
            <p className="text-sm">
              <span>{upperMenType[type]}</span>
            </p>
          </button>
        ))}
      </div>
      <h3 className="text-xl font-semibold text-zinc-800">Lower</h3>
      <p>{currentLowerMenTypeIndex}</p>
      <div className=" flex flex-row -col gap-4 mx-2">
        {lowerMenType.map((index, type) => (
          <button
            key={index}
            onClick={() => switchLowerMenType(index)}
            className={`
          py-2
          relative 
          rounded-lg 
          overflow-hidden 
           border-zinc-300
          border-[.5px] 
         active:scale-95
          active:bg-blue-500/20
          hover:bg-blue-500/10
          hover:scale-105
          transition-all
        `}
          >
            <p className="text-sm">
              <span>{lowerMenType[type]}</span>
            </p>
          </button>
        ))}
      </div>
      <h3 className="text-xl font-semibold text-zinc-800">Dress</h3>
      <p>{currentTypeIndex}</p>
      <div className=" flex flex-row -col gap-4 mx-2">
        {dressType.map((index, type) => (
          <button
            key={index}
            onClick={() => switchType(index)}
            className={`
          py-2
          relative 
          rounded-lg 
          overflow-hidden 
           border-zinc-300
          border-[.5px] 
         active:scale-95
          active:bg-blue-500/20
          hover:bg-blue-500/10
          hover:scale-105
          transition-all
        `}
          >
            <p className="text-sm">
              <span>{dressType[type]}</span>
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClothingPresets;
