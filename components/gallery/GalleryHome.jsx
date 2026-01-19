"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryData from "@/app/data/GalleryData.json";

const TABS = [
  { key: "events", label: "Events" },
  { key: "clubbing", label: "Clubbing" },
  { key: "dj_concerts", label: "DJ Concerts" },
  { key: "south_indian_events", label: "South Indian Events" },
];

const GalleryHome = () => {
  const [activeTab, setActiveTab] = useState("events");

  return (
    <div className="w-full flex flex-col items-center text-center">
      {/* Tabs Header */}
      <div className="flex flex-wrap justify-center gap-2 p-4">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`md:px-5 p-2 md:py-3 rounded-2xl transition-all cursor-pointer font-semibold
              ${
                activeTab === tab.key
                  ? "bg-primary text-white shadow-md"
                  : "bg-muted text-stone-700 hover:bg-accent"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-full max-w-6xl p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 place-items-center">
          {GalleryData[activeTab].map((url, index) => (
            <div
              key={index}
              className="relative aspect-square w-full max-w-[180px] overflow-hidden rounded-lg"
            >
              <Image
                src={url}
                alt={`${activeTab}-${index}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 180px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryHome;
