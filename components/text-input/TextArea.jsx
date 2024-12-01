"use client";
import React, { useState } from "react";
import { Send, Edit2, Clipboard, Check } from "lucide-react";

const TextArea = () => {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = () => {
    // Add your submit logic here
    console.log("Submitted text:", text);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden border border-zinc-200">
      <div className="p-6 bg-gradient-to-r from-blue-600 to-pink-600">
        <div className="flex items-center space-x-3">
          <Edit2 className="text-background" size={24} />
          <h1 className="text-2xl font-semibold text-background">
            Step 2: Input your preferences
          </h1>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="relative ">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Start writing your prefered clothing or color here..."
            className="
                w-full 
                min-h-[250px] 
                p-4 
                border 
                border-zinc-200 
                rounded-lg 
                focus:outline-none 
                focus:ring-2 
                focus:ring-blue-500 
                focus:border-transparent 
                transition-all 
                duration-300 
                resize-y 
                text-zinc-700
                placeholder-zinc-400
              "
          />
          <div className="absolute bottom-3 right-3 flex space-x-2">
            <button
              onClick={handleCopy}
              className="
                  p-2 
                  bg-zinc-100 
                  text-zinc-600 
                  rounded-full 
                  hover:bg-zinc-200 
                  transition-colors 
                  duration-300
                "
            >
              {copied ? <Check className="text-green-500" /> : <Clipboard />}
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={!text.trim()}
            className="
                flex 
                items-center 
                space-x-2 
                px-6 
                py-3 
                bg-blue-500 
                text-white 
                rounded-lg 
                hover:bg-blue-600 
                transition-all 
                duration-300 
                group
                disabled:opacity-50 
                disabled:cursor-not-allowed
              "
          >
            <Send size={20} className="group-hover:animate-send" />
            <span>Submit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextArea;
