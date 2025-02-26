"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, Camera, Palette, Sparkles } from "lucide-react";

const Footer = () => {
  const router = useRouter();
  const getStarted = () => {
    router.push("/guidelines");
  };

  return (
    <footer className="relative py-8 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Ready to transform your style?
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            {
              icon: <Camera className="w-5 h-5 text-pink-400" />,
              text: "Take or upload a selfie of your face",
            },
            {
              icon: <Palette className="w-5 h-5 text-pink-400" />,
              text: "Enter your style preferences",
            },
            {
              icon: <Sparkles className="w-5 h-5 text-pink-400" />,
              text: "Get your personalized style results",
            },
          ].map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="mb-6 flex justify-center">
                <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl group-hover:scale-110 group-hover:bg-gray-700/50 transition-all duration-300 shadow-lg">
                  {item.icon}
                </div>
              </div>
              <p className="text-xl text-gray-300 group-hover:text-white transition-colors duration-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={getStarted}
          className="group px-10 py-5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full font-semibold
                   text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300
                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          <span className="flex items-center justify-center text-lg">
            Start Your Style Journey
            <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;