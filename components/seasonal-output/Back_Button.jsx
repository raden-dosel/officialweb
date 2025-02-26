import React from 'react';
import { ChevronLeft } from 'lucide-react';

const HoverBackButton = ({ 
  onClick, 
  className = "",
  buttonWidth = "w-20",
  iconSize = 40,
}) => {
  return (
    <div 
      className={`group fixed top-0 left-0 h-full ${buttonWidth} flex items-center justify-center ${className}
                  transition-all duration-300 hover:opacity-100 opacity-90 hover:opacity-100
                  cursor-pointer hover:w-24`}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-all duration-500" />

      {/* Glowing border effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                     shadow-[inset_0_0_12px_rgba(59,130,246,0.3)]" />

      <button 
        onClick={onClick}
        className="relative h-full w-full flex items-center justify-center
                 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                 group-hover:scale-110 active:scale-95
                 focus:outline-none focus:ring-2 focus:ring-pink-500/80 focus:ring-offset-2"
        aria-label="Go back"
      >
        {/* Animated chevron with gradient */}
        <div className="relative p-2 rounded-full group-active:scale-95 transition-transform">
          <div className="absolute inset-0 bg-gradient-to-l from-pink-600 to-purple-500 
                         rounded-full opacity-0 group-hover:opacity-20 transition-opacity" />
          
          <ChevronLeft 
            size={iconSize}
            className="text-gray-700 group-hover:text-pink-600 drop-shadow-sm
                       transition-all duration-300 ease-out
                       group-hover:-translate-x-2"
          />
        </div>

        {/* Animated trail effect */}
        <div className="absolute left-full top-1/2 -translate-y-1/2 h-1 w-0 
                      bg-gradient-to-l from-transparent to-pink-500
                      opacity-0 group-hover:w-8 group-hover:opacity-50
                      transition-all duration-300 delay-75" />
      </button>

      {/* Progressive indicator line */}
      <div className="absolute inset-y-0 right-0 w-0.5 bg-gradient-to-b 
                    from-transparent via-pink-400/50 to-transparent
                    group-hover:via-pink-500 group-hover:to-pink-600
                    opacity-0 group-hover:opacity-100
                    transition-all duration-500 h-0 group-hover:h-full" />
    </div>
  );
};

export default HoverBackButton;