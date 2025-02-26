"use client";


import HomeButton from "@components/output/HomeButton";
import useModelStore from "@store/modelStore";
import { Switch } from "@/components/ui/switch";


import { Thermometer, Droplets } from "lucide-react";

const NavBar = () => {
  const { temperature, humidity } = useModelStore();
  const { sex, setSex } = useModelStore();

  const handleToggle = () => {
    setSex(sex === "men" ? "women" : "men");
  };

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
    if (temp < 10) return "from-blue-400 to-blue-600";
    if (temp < 20) return "from-green-400 to-green-600";
    if (temp < 30) return "from-yellow-400 to-orange-500";
    return "from-orange-500 to-red-600";
  };

  return (
    <div className="flex justify-between items-center py-2">
      <HomeButton />
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          {/* Temp Stats */}
          <div
            className="flex gap-2 items-center group"
            onMouseEnter={(e) => {
              e.currentTarget.querySelector(".temp-desc").style.display =
                "block";
              e.currentTarget.querySelector(".temp-value").style.display =
                "none";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector(".temp-desc").style.display =
                "none";
              e.currentTarget.querySelector(".temp-value").style.display =
                "flex";
            }}
          >
            <div className="flex gap-2 items-center">
              <h2 className="text-lg font-bold text-foreground temp-value transition-opacity duration-1000 ease-in-out animate-fadeIn animate-slideIn">
                {temperature}°C
              </h2>
              <div
                className="temp-desc space-y-2 transition-opacity duration-1000 ease-in-out animate-fadeIn animate-slideIn"
                style={{ display: "none" }}
              >
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${getTempColor(
                      temperature
                    )} transition-all duration-1000 ease-in-out animate-fadeIn`}
                    style={{
                      width: `${Math.min((temperature / 40) * 100, 100)}%`,
                    }}
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <p className="text-sm text-foreground transition-opacity duration-1000 ease-in-out animate-fadeIn">
                    {getTemperatureDesc(temperature)}
                  </p>
                  <p className="text-sm font-bold text-foreground temp-value transition-opacity duration-1000 ease-in-out animate-fadeIn">
                    {temperature}°C
                  </p>
                </div>
              </div>
              <div
                className={`rounded-xl bg-gradient-to-br ${getTempColor(
                  temperature
                )} text-background transition-transform duration-1000 ease-in-out transform group-hover:scale-110 animate-fadeIn`}
              >
                <Thermometer className="w-6 h-6" />
              </div>
            </div>
          </div>
          {/* Humid Stats */}
          <div
            className="flex gap-2 items-center group"
            onMouseEnter={(e) => {
              e.currentTarget.querySelector(".humid-desc").style.display =
                "block";
              e.currentTarget.querySelector(".humid-value").style.display =
                "none";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector(".humid-desc").style.display =
                "none";
              e.currentTarget.querySelector(".humid-value").style.display =
                "flex";
            }}
          >
            <div className="flex gap-2 items-center">
              <h2 className="text-lg font-bold text-foreground humid-value transition-opacity duration-1000 ease-in-out animate-fadeIn animate-slideIn">
                {humidity}°C
              </h2>
              <div
                className="humid-desc space-y-2 transition-opacity duration-1000 ease-in-out animate-fadeIn animate-slideIn"
                style={{ display: "none" }}
              >
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-1000 ease-in-out animate-fadeIn"
                    style={{ width: `${humidity}%` }}
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <p className="text-sm text-foreground transition-opacity duration-1000 ease-in-out animate-fadeIn">
                    {getHumidityDesc(humidity)}
                  </p>
                  <p className="text-sm font-bold text-foreground humid-value transition-opacity duration-1000 ease-in-out animate-fadeIn">
                    {humidity}°C
                  </p>
                </div>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 text-background transition-transform duration-1000 ease-in-out transform group-hover:scale-110 animate-fadeIn">
                <Droplets className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {/* <WeatherStats/> */}
          <span
            className={`text-sm font-medium ${
              sex === "men" ? "text-blue-600" : "text-pink-600"
            }`}
          >
            {sex === "men" ? "Men" : "Women"}
          </span>
          <Switch
            checked={sex === "women"}
            onCheckedChange={handleToggle}
            className="data-[state=checked]:bg-pink-600 data-[state=unchecked]:bg-blue-600 transition-colors duration-500 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
