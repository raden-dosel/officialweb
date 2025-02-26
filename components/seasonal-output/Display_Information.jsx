import React from "react";
import { Palette, SunMoon, Droplet, Contrast, RefreshCw } from "lucide-react";
import { mapColors } from "@utils/map_colors";
import usePaletteStore from "@store/paletteStore";

const ColorAnalysisCard = ({ hue, saturation, value, contrast, palette }) => {
  const { 
    paletteColors,
    setTrueColors,
    setNeutralColors,
    setS4Colors,
    setS3Colors,
    setS2Colors,
    setS1Colors,
    setBColors,
    setV4Colors,
    setV3Colors,
    setV2Colors,
    setV1Colors,
   
   } = usePaletteStore();

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const user_palette = capitalizeFirstLetter(palette);

  // Determine color and icon for each characteristic
  const getHueDetails = () => {
    const isWarm = hue === "Warm";
    return {
      color: isWarm ? "text-orange-600" : "text-purple-600",
      icon: isWarm ? "🌞" : "❄️",
      description: isWarm
        ? "Warm: Closer to peach tones"
        : "Cool: Closer to purple tones",
    };
  };

  const getSaturationDetails = () => {
    const isBright = saturation === "Bright";
    return {
      color: isBright ? "text-pink-500" : "text-gray-500",
      icon: isBright ? "✨" : "🌫️",
      description: isBright
        ? "Bright: High color intensity"
        : "Muted: Soft color palette",
    };
  };

  const getValueDetails = () => {
    const isLight = value === "Light";
    return {
      color: isLight ? "text-yellow-500" : "text-indigo-900",
      icon: isLight ? "☀️" : "🌑",
      description: isLight
        ? "Light: Higher overall brightness"
        : "Dark: Lower overall brightness",
    };
  };

  const getContrastDetails = () => {
    const isHigh = contrast === "High";
    return {
      color: isHigh ? "text-emerald-600" : "text-slate-400",
      icon: isHigh ? "🌈" : "🌫️",
      description: isHigh
        ? "High: Significant difference between hair and eye brightness"
        : "Low: Subtle brightness variation",
    };
  };

  const characteristics = [
    {
      label: "Hue",
      ...getHueDetails(),
      icon: <Palette className="w-6 h-6" />,
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
    },
    {
      label: "Saturation",
      ...getSaturationDetails(),
      icon: <Droplet className="w-6 h-6" />,
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20",
    },
    {
      label: "Value",
      ...getValueDetails(),
      icon: <SunMoon className="w-6 h-6" />,
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
    },
    {
      label: "Contrast",
      ...getContrastDetails(),
      icon: <Contrast className="w-6 h-6" />,
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
    },
  ];

  const setColors = () => {
    setTrueColors(mapColors(paletteColors, 'trueColor'));
    setNeutralColors(mapColors(paletteColors, 'neutral'));
    setS4Colors(mapColors(paletteColors, 'saturation4'));
    setS3Colors(mapColors(paletteColors, 'saturation3'));
    setS2Colors(mapColors(paletteColors, 'saturation2'));
    setS1Colors(mapColors(paletteColors, 'saturation1'));
    setBColors(mapColors(paletteColors, 'value0'));
    setV4Colors(mapColors(paletteColors, 'value4'));
    setV3Colors(mapColors(paletteColors, 'value3'));
    setV2Colors(mapColors(paletteColors, 'value2'));
    setV1Colors(mapColors(paletteColors, 'value1'));
    
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-[2rem] p-8 max-w-md mx-auto 
      hover:shadow-xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                  border border-white/50">
      {/* Header Section */}
      <div className="mb-4 flex justify-between items-center">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          {user_palette} Palette
        </h3>
        <button 
          onClick={setColors}
          className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full 
                    border border-white/30 shadow-sm hover:shadow-md
                    flex items-center gap-2 transition-all duration-300
                    hover:bg-white hover:-translate-y-0.5
                    active:scale-95 group"
          title="Replace color"
        >
          <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Display Palette
          </span>
          <RefreshCw className="h-4 w-4 text-pink-600 group-hover:rotate-180 transition-transform" />
        </button>
      </div>
     
      {/* Description */}
      <p className="text-left text-zinc-600/80 mb-6 text-sm leading-relaxed">
        Based on your seasonal palette analysis, here are the core characteristics defining your personal color profile.
      </p>

      {/* Characteristics Grid */}
      <div className="space-y-3">
        {characteristics.map((char) => (
          <div
            key={char.label}
            className={`
              flex items-center p-4 rounded-2xl
              transition-all duration-300 ease-out
              hover:shadow-lg hover:border-transparent
              border ${char.borderColor}
              ${char.bgColor}
              group relative overflow-hidden
            `}
          >
            {/* Icon Container */}
            <div className={`mr-4 p-3 rounded-xl ${char.bgColor} backdrop-blur-sm`}>
              {React.cloneElement(char.icon, { className: `w-6 h-6 ${char.color}` })}
            </div>

            {/* Text Content */}
            <div className="flex-grow">
              <h3 className="font-semibold text-gray-700">{char.label}</h3>
              <p className={`text-sm text-zinc-600/80 leading-tight mt-1`}>
                {char.description}
              </p>
            </div>

            {/* Value Badge */}
            <span className={`ml-4 px-3 py-1 rounded-full text-sm font-semibold ${char.color} 
                            bg-white/50 backdrop-blur-sm border ${char.borderColor}`}>
              {char[char.label.toLowerCase()]}
            </span>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 -left-full 
                            group-hover:left-0 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-xs text-zinc-400/90 font-medium">
        Analyzed using CIELab color space and adaptive threshold algorithms
      </div>
    </div>
  );
};

export default ColorAnalysisCard;
