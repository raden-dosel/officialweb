"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Palette,
  Layers,
  RefreshCcw,
  ShoppingCart,
  Ruler,
  Info,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const HomeButton = () => {
  return (
    <Link
      href="/"
      className="
    fixed 
    top-6 
    left-6 
    z-50 
    flex 
    items-center 
    space-x-2 
    bg-white 
    shadow-xl 
    border 
    border-zinc-200 
    px-4 
    py-2 
    rounded-full 
    group 
    hover:bg-blue-50 
    transition-all 
    duration-300
  "
    >
      <ArrowLeft
        className="
      text-zinc-600 
      group-hover:text-blue-500 
      transition-colors 
      duration-300
    "
        size={20}
      />
      <span className="text-zinc-700 group-hover:text-blue-600 transition-colors">
        Home
      </span>
    </Link>
  );
};

export default HomeButton;
