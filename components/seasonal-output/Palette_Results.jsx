"use client";
import { useState, useEffect } from "react";
import { Palette, Check  } from "lucide-react";
import  usePaletteStore  from "@store/paletteStore";
import ColorAnalysisCard from "./Display_Information";
import HoverNextButton from "./Next_Button";
import { useRouter } from "next/navigation";
import HoverBackButton from "./Back_Button";

const Palette_Results = () => {
  const { palette, 
    trueColors,setTrueColors
   } = usePaletteStore();
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState([0]);
  const [hue, setHue] = useState("Warm");
  const [saturation, setSaturation] = useState("Muted");
  const [value, setValue] = useState("Dark");
  const [contrast, setContrast] = useState("High");


  useEffect(() => {
    if (palette === "winter") {
      setHue("Cool");
      setSaturation("Bright");
      setValue("Dark");
      setContrast("High");
    } else if (palette === "spring") {
      setHue("Warm");
      setSaturation("Muted");
      setValue("Light");
      setContrast("High");
    } else if (palette === "summer") {
      setHue("Cool");
      setSaturation("Muted");
      setValue("Light");
      setContrast("High");
    } else if (palette === "autumn") {
      setHue("Warm");
      setSaturation("Bright");
      setValue("Dark");
      setContrast("Low");
    }
  }, [palette]);


  const handleNextClick = () => {
    
    router.push("/text-input");
  };
  const handleBackClick = () => {
    router.push("/cloth");
    setTrueColors([]);
  };
  return (
    <div className="flex">
      <div className="bg-white rounded-2xl shadow-md border border-zinc-200 p-6 flex flex-col justify-center items-center">
        <div className="flex items-center space-x-3 mb-6">
          <Palette className="text-purple-500" size={24} />
          <h3 className=" text-foreground">True Colors</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {trueColors.map((color) => (
        <button
          key={color.hex}
          onClick={() => setSelectedColor(color)}
          className={`
            group
            relative
            w-full
            aspect-square
            rounded-2xl
            shadow-sm
            hover:shadow-lg
            flex
            flex-col
            items-center
            justify-center
            border-4
            ${
              selectedColor.hex === color.hex
                ? "border-blue-500 scale-105"
                : "border-transparent hover:border-zinc-300"
            }
            transition-all
            duration-200
            ease-in-out
            min-h-[100px]
          `}
          style={{ backgroundColor: color.hex }}
        >
          {selectedColor.hex === color.hex && (
            <div className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-md">
              <Check className="w-3 h-3 text-blue-500" />
            </div>
          )}
          
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="text-background text-center">
              <div className="text-sm font-medium">{color.name}</div>
              <div className="text-xs opacity-75 mt-1">{color.hex}</div>
            </div>
          </div>
        </button>
      ))}
    </div>
      </div>
      <ColorAnalysisCard
        hue={hue}
        saturation={saturation}
        value={value}
        contrast={contrast}
        palette={palette}
      />
      <HoverBackButton 
  onClick={handleBackClick}
  buttonWidth="w-20"
  iconSize={24}
/>
<HoverNextButton 
  onClick={handleNextClick}
  buttonWidth="w-20"
  iconSize={24}
/>
    </div>
  );
};

export default Palette_Results;
