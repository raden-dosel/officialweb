import React from 'react';
import { ChevronDown, ArrowDown } from 'lucide-react';

const HoverBottomButton = ({
  onClick,
  className = "",
  iconSize = 32,
  label = "Proceed",
  variant = "default"
}) => {
  const variants = {
    default: {
      button: "bg-gray-100/80 hover:bg-gray-200/80 dark:bg-white/5 dark:hover:bg-white/10",
      icon: "text-gray-600 dark:text-gray-300",
      indicator: "bg-gradient-to-t from-gray-200 to-transparent dark:from-white/10",
      hover: "hover:shadow-lg"
    },
    minimal: {
      button: "bg-transparent hover:bg-gray-50/50 dark:hover:bg-white/5",
      icon: "text-gray-400 dark:text-gray-500",
      indicator: "bg-transparent",
      hover: "hover:shadow-md"
    },
    gradient: {
      button: "bg-gradient-to-t from-pink-100/80 via-pink-50/50 to-transparent dark:from-white/10 dark:via-white/5",
      icon: "text-pink-600 dark:text-gray-200",
      indicator: "bg-gradient-to-t from-pink-200 to-transparent dark:from-white/20",
      hover: "hover:shadow-xl"
    }
  };
  
  const style = variants[variant];

  return (
    <div className={`group relative w-full ${className}`}>
      {/* Backdrop blur effect */}
      <div className="absolute inset-0 backdrop-blur-sm" />
      
      {/* Main button container */}
      <button
        onClick={onClick}
        className={`
          relative w-full h-20 
          flex flex-col items-center justify-center
          opacity-60 hover:opacity-100 
          transition-all duration-500
          ${style.button}
          ${style.hover}
          focus:outline-none focus:ring-2 focus:ring-pink-500/30 
          focus:ring-offset-2 focus:ring-offset-white
          rounded-xl
          overflow-hidden
        `}
        aria-label={label}
      >
        {/* Button content wrapper */}
        <div className="relative flex flex-col items-center transition-transform duration-500 transform group-hover:-translate-y-1">
          {/* Animated icon */}
          <div className="relative animate-bounce-gentle">
            <ChevronDown 
              size={iconSize} 
              className={`
                transform transition-all duration-300 
                group-hover:scale-110 group-hover:rotate-12
                ${style.icon}
              `}
            />
          </div>
          
          {/* Label */}
          <span className={`
            text-sm font-medium 
            transition-all duration-500
            opacity-0 group-hover:opacity-100
            transform translate-y-2 group-hover:translate-y-0
            ${style.icon}
          `}>
            {label}
          </span>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/0 to-white/5 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </button>

      {/* Side indicators with improved animation */}
      <div className={`
        absolute inset-y-2 left-0 w-1 
        transform -translate-x-full opacity-0 
        group-hover:opacity-100 group-hover:translate-x-2
        transition-all duration-500 ease-out
        rounded-full
        ${style.indicator}
      `} />
      <div className={`
        absolute inset-y-2 right-0 w-1
        transform translate-x-full opacity-0 
        group-hover:opacity-100 group-hover:-translate-x-2
        transition-all duration-500 ease-out
        rounded-full
        ${style.indicator}
      `} />
    </div>
  );
};

// Add custom animation
const styles = `
  @keyframes bounce-gentle {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-4px);
    }
  }
  .animate-bounce-gentle {
    animation: bounce-gentle 2s infinite;
  }
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default HoverBottomButton;