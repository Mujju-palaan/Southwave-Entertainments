import React from "react";

const OurVision = () => {
  return (
    <div className="relative max-w-sm rounded-[18px] border border-gray-300
         bg-white md:p-6 p-3 md:m-0 m-3 shadow-sm rotate-[2.5deg]">
      {/* Decorative top icon */}
      <div className="absolute -top-3 right-6 h-8 w-8 rounded-full bg-emerald-500 
      flex items-center justify-center">
        <span className="block h-3 w-3 rounded-full bg-white"></span>
      </div>

      <h3 className="mb-3 text-xl font-medium tracking-wide">MISSION</h3>

      <p className="text-sm leading-relaxed text-gray-600">
        Our mission is to deliver exceptional digital solutions through a
        combination of creativity, technology, and strategy. We aim to exceed
        client expectations by providing customized, high-quality services that
        foster growth and engagement.
      </p>
    </div>
  );
};

export default OurVision;
