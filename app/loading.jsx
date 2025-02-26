import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="text-center">
        <div className="relative">
          {/* Outer spinning ring */}
          <div className="w-36 h-36 rounded-full animate-spin bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
            {/* Inner static circle */}
            <div className="w-32 h-32 rounded-full bg-background flex items-center justify-center">
              {/* Pulsing inner circle */}
              <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 opacity-50 animate-pulse" />
            </div>
          </div>
          
          {/* Floating dots */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8">
            <div className="flex space-x-1">
              <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce delay-100" />
              <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce delay-200" />
              <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce delay-300" />
            </div>
          </div>
        </div>
        
        {/* Loading text with gradient */}
        <h3 className="mt-6 text-lg font-medium bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
          Loading...
        </h3>
      </div>
    </div>
  );
};

export default Loading;