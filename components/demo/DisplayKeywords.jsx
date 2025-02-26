"use client";
// components/KeywordDisplay.js
import React from 'react';
import useModelStore from '@store/modelStore'; // Adjust the import path
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';



const KeywordDisplay = () => {

    const router = useRouter();
    const { capturedKeywords, formalSubTypes, casualSubTypes, warmSubTypes, coldSubTypes, hotSubTypes, coolSubTypes, rainSubTypes, summerSubTypes, winterSubTypes } = useModelStore();
    const changeDisplay = () => {
      //create a switch statement to set the subtypes based on the captured keywords
  
      const keywords = capturedKeywords
  
      keywords.types.forEach((type) => {
        switch (type) {
          case "formal":
            formalSubTypes();
            break;
          case "casual":
            casualSubTypes();
            break;
          case "warm":
            warmSubTypes();
            break;
          case "cold":
            coldSubTypes();
            break;
          case "hot":
            hotSubTypes();
            break;
          case "cool":
            coolSubTypes();
            break;
          case "rain":
            rainSubTypes();
            break;
          case "summer":
            summerSubTypes();
            break;
          case "winter":
            winterSubTypes();
            break;
          default:
            resetSubTypes();
            break;
        }
      });
    }

    const handleBackClick = () => {
      router.push("/seasonal-output");
    };

    const handleNextClick = () => {
      
      changeDisplay();
      router.push("/output");
    };

    
  
    const sections = [
      { title: 'Types', data: capturedKeywords.types, color: 'from-pink-500 to-rose-500' },
      { title: 'Subtypes', data: capturedKeywords.subtypes, color: 'from-purple-500 to-indigo-500' },
      { title: 'Colors', data: capturedKeywords.colors, color: 'from-blue-500 to-cyan-500' },
      { title: 'Modifiers', data: capturedKeywords.modifiers, color: 'from-green-500 to-emerald-500' }
    ];
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50/50 to-purple-50/50 p-6 flex items-center justify-center">
      <div className="max-w-4xl w-full backdrop-blur-lg bg-white/80 rounded-3xl shadow-2xl border border-white/20 p-8 hover:shadow-3xl transition-all duration-500">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5" />
            <h2 className="text-2xl font-bold">Captured Keywords</h2>
          </div>
          <p className="text-zinc-600/90 mt-2">Analyzed from your style preferences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {sections.map(({ title, data, color }, index) => (
            <div 
              key={title}
              className="group relative bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:border-white/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${color}" />
              <h3 className={`text-lg font-semibold mb-4 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                {title}
              </h3>
              <ul className="space-y-3">
                {data?.map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-center animate-fadeInUp"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r ${color} mr-3 animate-pulse" />
                    <span className="text-zinc-700/90 hover:text-zinc-900 transition-colors duration-200 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
                {!data?.length && (
                  <li className="text-zinc-400/80 italic">No {title.toLowerCase()} detected</li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-between">
          <button
            onClick={handleBackClick}
            className="px-8 py-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg
                     flex items-center gap-2 text-zinc-700 hover:text-zinc-900 transition-all duration-300
                     hover:-translate-x-1 border border-white/30 hover:border-white/50"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back</span>
          </button>
          <button
            onClick={handleNextClick}
            className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl
                     shadow-md hover:shadow-lg flex items-center gap-2 transition-all duration-300
                     hover:scale-[1.02] hover:bg-gradient-to-br active:scale-95"
          >
            <span className="font-semibold">Continue</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
    );
  };
  
  export default KeywordDisplay;