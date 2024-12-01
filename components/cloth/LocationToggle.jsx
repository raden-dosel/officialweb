"use client";
import { Upload, ImageIcon, MapPin, Globe } from "lucide-react";
import { useState } from "react";

const LocationToggle = () => {
  const [locationType, setLocationType] = useState("global");
  return (
    <div className="mt-8 max-w-5xl w-full">
      <div className="bg-white shadow-md rounded-lg p-4 border border-zinc-200">
        <div className="flex items-center justify-center space-x-4">
          <MapPin
            className={`${
              locationType === "local" ? "text-blue-500" : "text-zinc-400"
            }`}
          />
          <div className="flex items-center space-x-2 bg-zinc-100 rounded-full p-1">
            <button
              onClick={() => setLocationType("local")}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                locationType === "local"
                  ? "bg-blue-500 text-white"
                  : "text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              Local
            </button>
            <button
              onClick={() => setLocationType("global")}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                locationType === "global"
                  ? "bg-blue-500 text-white"
                  : "text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              Global
            </button>
          </div>
          <Globe
            className={`${
              locationType === "global" ? "text-blue-500" : "text-zinc-400"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default LocationToggle;
