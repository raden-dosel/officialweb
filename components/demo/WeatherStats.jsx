"use client";
import React from 'react';
import { Thermometer, Droplets } from 'lucide-react';
import { Card } from '@/components/ui/card';

import useModelStore from "@store/modelStore";

const WeatherStats = () => {

    const { temperature, humidity } = useModelStore();

  // Function to get temperature description
  const getTemperatureDesc = (temp) => {
    if (temp < 15) return "It's quite cool";
    if (temp < 25) return "The temperature is comfortable";
    return "It's getting warm";
  };

  // Function to get humidity description
  const getHumidityDesc = (hum) => {
    if (hum < 30) return "The air is quite dry";
    if (hum < 60) return "Humidity is at a comfortable level";
    return "It's feeling quite humid";
  };

  // Function to get temperature color
  const getTempColor = (temp) => {
    if (temp < 15) return "from-blue-400 to-blue-600";
    if (temp < 25) return "from-green-400 to-green-600";
    return "from-orange-400 to-red-500";
  };

  return (
    <div className="p-2 max-w-full overflow-x-auto">
      <div className="flex flex-row gap-2">
        {/* Temperature Card */}
        <Card className="min-w-[300px] overflow-hidden flex-1 bg-pink-500/20 border-transparent backdrop-blur-lg">
          <div className="p-2 bg-white/5">
            <div className="flex items-center space-x-4">
              <div className={` rounded-xl bg-gradient-to-br ${getTempColor(temperature)} text-white`}>
                <Thermometer className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  {temperature}°C
                </h2>
                <p className="text-gray-600 text-sm">
                  {getTemperatureDesc(temperature)}
                </p>
              </div>
            </div>
            <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r ${getTempColor(temperature)} transition-all duration-500`}
                style={{ width: `${Math.min((temperature / 40) * 100, 100)}%` }}
              />
            </div>
          </div>
        </Card>

        {/* Humidity Card */}
        <Card className="min-w-[300px] overflow-hidden flex-1 bg-pink-500/20 border-transparent backdrop-blur-lg">
        <div className="p-2 bg-white/5">
            <div className="flex items-center space-x-4">
              <div className=" rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 text-white">
                <Droplets className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  {humidity}%
                </h2>
                <p className="text-gray-600 text-sm">
                  {getHumidityDesc(humidity)}
                </p>
              </div>
            </div>
            <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-500"
                style={{ width: `${humidity}%` }}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WeatherStats;
