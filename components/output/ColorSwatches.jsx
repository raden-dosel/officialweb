import { useRef, useState } from "react";
import { Brush, ChevronLeft, ChevronRight, Palette } from 'lucide-react';
import ColorMenu from "./ColorMenu";

const ColorSwatches = ({ colorType, colorSwatch }) => {
  const scrollContainerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [hoveredColor, setHoveredColor] = useState(null);

  const scroll = (direction) => {
    setIsScrolling(true);
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
    setTimeout(() => setIsScrolling(false), 300);
  };

  return (
    <div className="max-w-7xl w-full mx-auto mb-8">
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 py-4 px-6 transition-all duration-300 hover:shadow-xl">
        {/* Header */}
      <div className="flex justify-between">
        <div className="flex items-center gap-4 mb-4">
            <div className="bg-pink-50 p-3 rounded-2xl">
              <Palette className="text-pink-500 h-6 w-6" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                {`${colorType}`}
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Discover and explore your seasonal color harmony
              </p>
            </div>
        </div>
        <ColorMenu/>
    </div>

        {/* Carousel Section */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/95 rounded-full 
              shadow-lg hover:shadow-xl transition-all duration-300 -ml-4 border border-gray-100
              hover:bg-gray-50 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
              ${isScrolling ? 'pointer-events-none' : ''}`}
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/95 rounded-full 
              shadow-lg hover:shadow-xl transition-all duration-300 -mr-4 border border-gray-100
              hover:bg-gray-50 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
              ${isScrolling ? 'pointer-events-none' : ''}`}
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>

          {/* Color Cards Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-6 pt-2 px-2 snap-x snap-mandatory 
              scrollbar-hide scroll-smooth"
          >
            {colorSwatch.map((color, index) => (
              <div 
                key={index}
                onMouseEnter={() => setHoveredColor(index)}
                onMouseLeave={() => setHoveredColor(null)}
                className="relative flex-shrink-0 w-40 rounded-2xl overflow-hidden shadow-md 
                  hover:shadow-xl transition-all duration-300 snap-start group
                  hover:-translate-y-1 cursor-pointer"
              >
                <div
                  className="aspect-square w-full transition-transform duration-300 
                    group-hover:scale-105"
                  style={{ 
                    backgroundColor: color.hex,
                    boxShadow: 'inset 0 0 80px rgba(0,0,0,0.1)'
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md 
                  p-4 transform transition-transform duration-300
                  translate-y-full group-hover:translate-y-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium mb-1">
                        {color.name}
                      </p>
                      <p className="text-white/70 text-sm">
                        {color.hex}
                      </p>
                    </div>
                    <button 
                      onClick={() => {}}
                      className="p-2 bg-white rounded-full hover:bg-gray-100 
                        transition-colors active:scale-95 transform"
                      title="Use this color"
                    >
                      <Brush className="h-4 w-4 text-gray-900" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center">
          <p className="text-gray-500 text-sm font-medium px-4 py-2 bg-gray-50 
            rounded-full inline-block">
            Hover over any color to see details and click to match with clothing
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColorSwatches;