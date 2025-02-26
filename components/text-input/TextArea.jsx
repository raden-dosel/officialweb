"use client";
import React, { useState, useEffect } from "react";
import { Send, Edit2, Clipboard, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import HoverBackButton from "@components/seasonal-output/Back_Button";
import NLPMATCHER from "@lib/nlpProcessor"
import useModelStore from "@store/modelStore";
import COLOR_LIBRARY from "@lib/color_library";
import  usePaletteStore  from "@store/paletteStore";



const TextArea = () => {

    const nlpMatcher = new NLPMATCHER;
 
  const router = useRouter();
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const { setCapturedKeywords} = useModelStore();
  

  const handleSubmit = () => {
    const match = nlpMatcher.findMatches(text);
    setCapturedKeywords(match);
    router.push("/display-keywords");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  



  return (
    <div className="w-full max-w-5xl bg-gradient-to-br from-white to-blue-50/50 rounded-[2rem] shadow-2xl shadow-pink-500/10 overflow-hidden border border-white/30 backdrop-blur-sm">
      {/* Header with animated gradient */}
      <div className="p-8 bg-gradient-to-r from-blue-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNi41IDAuNUM2Ljc2NDU2IDAuNSA3IDAuNzM1NDM3IDcgMXYyLjVDNyAzLjc2NDU2IDYuNzY0NTYgNCA2LjUgNEM2LjIzNTQzIDQgNiAzLjc2NDU2IDYgMy41VjFDNiAwLjczNTQzNyA2LjIzNTQzIDAuNSA2LjUgMC41Wk0xMy4zODQgMi4xMTUzOEMxMy41NTQ1IDIuMjg1OTYgMTMuNTk1MiAyLjU0NDYxIDEzLjQ4ODggMi43NTE5MkwxMi40ODg4IDUuMjUxOTJDMTIuMzM5NCA1LjYwNDU3IDExLjkwNDkgNS43MDM3OSAxMS41NTIzIDUuNTU0MzZDMTEuMTk5NiA1LjQwNDkzIDExLjEwMDQgNC45NzA0OSAxMS4yNDk4IDQuNjE3ODRMMTIuMjQ5OCAyLjExNzg0QzEyLjM1NjIgMS45MTA1MSAxMi42MTQ5IDEuODcwMDMgMTIuNzg1NSAyLjA0MDYxTDEzLjM4NCAyLjExNTM4Wk0wLjYxNjE1IDIuMTE1MzhMMS4yMTQ3MiAyLjA0MDYxQzEuMzg1MyAxLjg3MDAzIDEuNjQzOTggMS45MTA1MSAxLjc1MDQgMi4xMTc4NEwyLjc1MDQgNC42MTc4NEMyLjg5OTggNC45NzA0OSAyLjgwMDYgNS40MDQ5MyAyLjQ0NzkgNS41NTQzNkMyLjA5NTMgNS43MDM3OSAxLjY2MDg1IDUuNjA0NTcgMS41MTE0MiA1LjI1MTkyTDAuNTExNDIyIDIuNzUxOTJDMC40MDUwMDIgMi41NDQ2MSAwLjQ0NTU3OCAyLjI4NTk2IDAuNjE2MTUgMi4xMTUzOFpNOCAxNC41QzggMTQuMjM1NCA4LjIzNTQzIDE0IDguNSAxNEgxNC41QzE0Ljc2NDYgMTQgMTUgMTQuMjM1NCAxNSAxNC41QzE1IDE0Ljc2NDYgMTQuNzY0NiAxNSAxNC41IDE1SDguNUM4LjIzNTQzIDE1IDggMTQuNzY0NiA4IDE0LjVaIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==')]"/>
        <div className="flex items-center space-x-3 relative z-10">
          <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
            <Edit2 className="text-white/90" size={28} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white/90 tracking-tight">
              Step 2: Style Preferences
            </h1>
            <p className="text-white/80 text-sm mt-1">
              Describe your ideal wardrobe or color palette
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        <div className="relative group">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Example: 'I love soft pastel colors and minimalist patterns...'"
            className="w-full min-h-[280px] p-6 bg-white/95 border border-white/30 rounded-2xl shadow-lg
                     focus:outline-none focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500/30
                     transition-all duration-300 resize-none text-zinc-700 placeholder-zinc-400/80
                     prose prose-pink font-medium leading-relaxed scrollbar-thin scrollbar-track-transparent
                     scrollbar-thumb-zinc-200 hover:scrollbar-thumb-zinc-300"
          />
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button
              onClick={handleCopy}
              className="p-2 bg-white/90 backdrop-blur-sm text-zinc-600 rounded-xl shadow-sm
                       hover:bg-white hover:-translate-y-0.5 transition-all duration-300
                       border border-white/30 hover:shadow-md active:scale-95"
              aria-label="Copy text"
            >
              {copied ? (
                <Check className="text-green-500 w-5 h-5" />
              ) : (
                <Clipboard className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={!text.trim()}
            className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-blue-500 
                     text-white/95 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
                     group disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5
                     hover:scale-[1.02] active:scale-95"
          >
            <Send size={24} className="group-hover:animate-pulse-slow" />
            <span className="font-semibold tracking-tight">Analyze Preferences</span>
          </button>
        </div>
      </div>
      
      
    </div>
  );
};

export default TextArea;
