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

import { useRouter } from "next/navigation";

const HomeButton = () => {
  const router = useRouter();

  const handleRoute = () => {
    router.push("/");
  };
  return (
    <button
    onClick={handleRoute}
      className="
    flex
    items-center 
    space-x-2 
    bg-background 
    shadow-xl 
    border 
    border-zinc-200 
    px-4 
    py-2 
    rounded-full 
    group 
   shadow-md hover:scale-105
    transition-all 
    duration-300
  "
    >
      <ArrowLeft
        className="
      text-foreground
      
      duration-300
    "
        size={20}
      />
      <span className="text-foreground ">
        Home
      </span>
    </button>
  );
};

export default HomeButton;
