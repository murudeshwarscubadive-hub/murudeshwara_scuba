"use client";

import { useEffect, useState } from "react";

export default function WeatherStats() {
  const [airTemp, setAirTemp] = useState<string>("27-31°C");
  const [waterTemp, setWaterTemp] = useState<string>("26-30°C");
  const [isLive, setIsLive] = useState<boolean>(false);

  useEffect(() => {
    async function fetchWeather() {
      try {
        // Fetch current air temperature in Murudeshwar
        const weatherRes = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=14.0945&longitude=74.4844&current=temperature_2m"
        );
        const weatherData = await weatherRes.json();
        if (weatherData?.current?.temperature_2m !== undefined) {
          setAirTemp(`${Math.round(weatherData.current.temperature_2m)}°C`);
          setIsLive(true);
        }

        // Fetch current sea surface temperature near Murudeshwar
        const marineRes = await fetch(
          "https://marine-api.open-meteo.com/v1/marine?latitude=14.0945&longitude=74.4844&current=sea_surface_temperature"
        );
        const marineData = await marineRes.json();
        if (marineData?.current?.sea_surface_temperature !== undefined) {
          setWaterTemp(`${Math.round(marineData.current.sea_surface_temperature)}°C`);
        }
      } catch (error) {
        console.error("Failed to fetch dynamic weather conditions:", error);
      }
    }

    fetchWeather();
  }, []);

  return (
    <div className="w-full lg:w-auto flex flex-col md:flex-row gap-8 md:gap-12 bg-white/[0.02] backdrop-blur-md p-6 rounded-2xl border border-white/10">
      <div className="flex flex-col gap-2">
        <span className="text-[#00D4FF] text-[10px] font-bold uppercase tracking-[0.25em] font-display">
          {isLive ? "Live Conditions" : "Typical Conditions"}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-white">
            Murudeshwar
          </span>
          {isLive && (
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-[#00D4FF]"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
        <div>
          <span className="block text-xl font-bold font-display">{airTemp}</span>
          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold font-display">
            Air {isLive ? "(Today)" : "(In Season)"}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-blue-400"
          aria-hidden="true"
        >
          <path d="M12 22a7 7 0 0 0 5-2 7 7 0 0 0 2-5c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 0 0 2 5 7 7 0 0 0 5 2z"></path>
        </svg>
        <div>
          <span className="block text-xl font-bold font-display">{waterTemp}</span>
          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold font-display">
            Water {isLive ? "(Today)" : "(In Season)"}
          </span>
        </div>
      </div>
    </div>
  );
}
