import WeatherStats from "@components/demo/WeatherStats";
import BackButton from "@components/seasonal-output/Back_Button";
import ColorAnalysisCard from "@components/seasonal-output/Display_Information";
import HoverNextButton from "@components/seasonal-output/Next_Button";
import Palette_Results from "@components/seasonal-output/Palette_Results";
import React from "react";

const SeasonalResults = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-200 to-purple-50 flex flex-col justify-center items-center">

      <h2 className="my-4">Personal Color Analysis</h2>
   
      <div className="flex justify-center relative max-w-7xl bg-gradient-to-br from-slate-50 to-blue-50 shadow-xl rounded-2xl overflow-hidden ">
        <Palette_Results />
      </div>
      {/* The hover next button */}
      
    </div>
  );
};

export default SeasonalResults;
