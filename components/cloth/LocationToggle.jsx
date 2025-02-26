"use client";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { fetchWeatherApi } from "openmeteo";
import useModelStore from "@store/modelStore";

const LocationToggle = () => {
  const { setTemperature, setHumidity } = useModelStore();
  const [locationType, setLocationType] = useState("Off");
  const [isLoading, setIsLoading] = useState(false);

  async function getCurrentWeather(latitude, longitude) {
    const params = {
      latitude,
      longitude,
      hourly: ["temperature_2m", "relative_humidity_2m"],
      temperature_unit: "celsius",
      timezone: "auto",
    };

    try {
      const responses = await fetchWeatherApi(
        "https://api.open-meteo.com/v1/forecast",
        params
      );

      const response = responses[0];
      const hourly = response.hourly();

      return {
        temperature: hourly.variables(0).valuesArray()[0],
        humidity: hourly.variables(1).valuesArray()[0],
      };
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    }
  }

  const handleGPS = () => {
    setLocationType("On");
    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("Latitude:", latitude, "Longitude:", longitude);
        getCurrentWeather(latitude, longitude).then((weather) => {
          if (weather) {
            console.log(
              "Temperature:",
              weather.temperature,
              "Humidity:",
              weather.humidity
            );
            setTemperature(weather.temperature);
            setHumidity(weather.humidity);
          }
          setIsLoading(false);
        });
      },
      (error) => {
        console.error("Error getting geolocation:", error);
        setIsLoading(false);
      }
    );
  };

  const handleOff = () => {
    setLocationType("Off");
    // Optionally clear weather data when turning off
    setTemperature(null);
    setHumidity(null);
  };

  return (
    <div className="">
      <div className="">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <MapPin
              className={`transition-colors duration-300 ${
                locationType === "On" ? "text-pink-500" : "text-gray-400"
              }`}
              size={24}
            />
            <h2 className="text-lg font-semibold text-gray-800">
              Location Services
            </h2>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleGPS}
              disabled={isLoading}
              className={`px-4 py-2 rounded-full transition-transform duration-300 focus:outline-none ${
                locationType === "On"
                  ? "bg-pink-500 text-white shadow-md transform active:scale-95"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {isLoading ? "Loading..." : "On"}
            </button>
            <button
              onClick={handleOff}
              className={`px-4 py-2 rounded-full transition-transform duration-300 focus:outline-none ${
                locationType === "Off"
                  ? "bg-pink-500 text-white shadow-md transform active:scale-95"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Off
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationToggle;
