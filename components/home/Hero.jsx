"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowRight,
  Shirt,
  Sparkles,
  Layers,
  PanelRightOpen,
  Zap,
} from "lucide-react";

const Hero = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const getStarted = () => {
    router.push("/cloth");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-200 to-purple-50 flex items-center justify-center px-4 py-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Content Section */}
        <div className="space-y-6 md:pr-12">
          <div className="inline-flex items-center space-x-3 bg-white shadow-md rounded-full px-4 py-2">
            <Sparkles className="text-purple-500" size={20} />
            <span className="text-sm font-medium text-zinc-700">
              AI-Powered Virtual Try-On
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600 leading-tight">
            Virtual Try-On Revolution
          </h1>

          <p className="text-lg text-zinc-600 leading-relaxed">
            Transform your online shopping experience with our cutting-edge 3D
            virtual try-on platform. See how clothes look on you instantly,
            without leaving home.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={getStarted}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="
                flex items-center justify-center 
                px-6 py-3 
                bg-gradient-to-r from-blue-500 to-pink-600 
                text-white 
                rounded-full 
                font-semibold 
                hover:scale-105 
                transition-all 
                duration-300 
                group
              "
            >
              Get Started
              <ArrowRight
                className={`ml-2 transition-transform duration-300 ${
                  isHovered ? "translate-x-1" : ""
                }`}
              />
            </button>
            <button
              className="
                flex items-center justify-center 
                px-6 py-3 
                border 
                border-zinc-300 
                text-zinc-700 
                rounded-full 
                hover:bg-white 
                hover:shadow-md 
                transition-all 
                duration-300
              "
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative hidden md:block">
          <div className="absolute -top-12 -left-12 z-0 w-64 h-64 bg-pink-500 rounded-full blur-2xl opacity-50"></div>
          <div className="flex justify-center relative z-10 ">
            <Image
              alt="Virtual Try-On Model"
              width={300}
              height={400}
              src="/assets/image/model.jpg"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="absolute bottom-12 -right-12 z-0 w-48 h-48 bg-pink-500 rounded-full blur-2xl opacity-50"></div>
        </div>
      </div>

      {/* Features */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        <div className="flex space-x-4 bg-white/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center space-x-2 text-zinc-700">
            <Shirt size={20} className="text-blue-500" />
            <span className="text-sm">3D Clothing</span>
          </div>
          <div className="w-px bg-zinc-300"></div>
          <div className="flex items-center space-x-2 text-zinc-700">
            <Layers size={20} className="text-purple-500" />
            <span className="text-sm">AI Powered</span>
          </div>
          <div className="w-px bg-zinc-300"></div>
          <div className="flex items-center space-x-2 text-zinc-700">
            <Zap size={20} className="text-green-500" />
            <span className="text-sm">Instant Preview</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
