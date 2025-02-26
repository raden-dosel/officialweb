"use client";
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import usePaletteStore from "@store/paletteStore";
import { motion, AnimatePresence } from 'framer-motion';
import { mapPalette } from '@utils/map_colors';

const tips = [
  {
    title: "What is Personal Color Analysis?",
    content: "Personal color analysis determines which colors complement your natural features best, enhancing your appearance through proper color coordination.",
    icon: "🎨"
  },
  {
    title: "The Four Seasons",
    content: "Colors are categorized into Spring, Summer, Autumn, and Winter palettes, each with unique characteristics that match different skin undertones.",
    icon: "🍂"
  },
  {
    title: "Understanding Undertones",
    content: "Your skin's undertone can be warm, cool, or neutral. Check your veins: green suggests warm, blue suggests cool undertones.",
    icon: "✨"
  },
  {
    title: "Color Temperature",
    content: "Warm colors contain yellow undertones, while cool colors have blue undertones. Your best colors will match your natural temperature.",
    icon: "🌡️"
  },
  {
    title: "The Impact of Lighting",
    content: "Always analyze your colors in natural daylight for the most accurate results. Artificial lighting can alter how colors appear.",
    icon: "☀️"
  }
];

const LoadingScreen = () => {
  const { taskId, setPalette, setStatus, setPaletteColors, } = usePaletteStore();
  const router = useRouter();

  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 0.5;
      });
    }, 50);

    const tipInterval = setInterval(() => {
      setCurrentTipIndex(prev => (prev + 1) % tips.length);
    }, 4000);
    
    if (taskId) {
      interval = setInterval(async () => {
        try {
          const response = await fetch(`http://localhost:8000/task-result/${taskId}`);
          if (!response.ok) throw new Error("Failed to fetch task result");
          
          const data = await response.json();

          console.log("Polling Response:", data); // Debugging
          
          if (data.result) {
            
            
            setPalette(data.result.palette);
            setStatus(data.status);
            clearInterval(interval);
          } else {
            setStatus(data.status);
          }

          if(data.status === "SUCCESS") {
            setPaletteColors(mapPalette(data.result.palette));
            router.push("seasonal-output");
          }
        } catch (error) {
          console.error("Error fetching task result:", error);
        }
      }, 2000);
    }
  
    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
      clearInterval(tipInterval);
    };
  }, [taskId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-200 to-purple-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1 
            className="text-3xl font-bold text-gray-800 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Analyzing Your Personal Colors
          </motion.h1>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Discovering your perfect color palette...
          </motion.p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-100 rounded-full h-2 mb-8">
          <motion.div
            className="h-full bg-gradient-to-r from-violet-500 to-rose-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Tips Section */}
        <div className="relative h-48">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTipIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <div className="text-center">
                <span className="text-4xl mb-4 block">{tips[currentTipIndex].icon}</span>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {tips[currentTipIndex].title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {tips[currentTipIndex].content}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {tips.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentTipIndex ? 'w-4 bg-violet-500' : 'w-2 bg-gray-200'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
