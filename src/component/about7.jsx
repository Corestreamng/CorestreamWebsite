import React from "react";
import Time from "../assets/images/time.webp";

export default function About7() {

  const leftTimeline = [
    { year: "2020", text: "Company founded with a small remote team" },
    { year: "2021", text: "Expanded services across multiple regions" },
    { year: "2022", text: "Reached first 100 successful hires" },
  ];

  const rightTimeline = [
    { year: "2023", text: "Scaled operations internationally" },
    { year: "2024", text: "Partnered with global enterprises" },
    { year: "2025", text: "Recognized as an industry leader" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 py-24 px-6">
      
      <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-300 mb-20">
        Our Journey
      </h2>

      <div
        className="grid gap-16 md:flex md:items-center md:justify-center max-w-7xl mx-auto mb-12">
        
        <div className="flex flex-col space-y-20 text-center md:text-right">
          {leftTimeline.map((item, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-4xl font-semibold text-gray-400">
                {item.year}
              </h3>
              <p className="text-lg text-gray-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      
        <div className="hidden md:flex justify-center">
          <img
            src={Time}
            alt="Timeline"
            className="w-48 md:w-64 opacity-90"
          />
        </div>

        <div className="flex flex-col space-y-20 text-center md:text-left">
          {rightTimeline.map((item, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-4xl font-semibold text-gray-400">
                {item.year}
              </h3>
              <p className="text-lg text-gray-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
