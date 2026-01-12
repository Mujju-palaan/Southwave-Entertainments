import React from 'react'

const OurMission = () => {
  return (
    <div className="relative max-w-sm rounded-2xl border border-gray-300
         bg-white md:p-6 p-3 md:m-0 m-3 shadow-sm rotate-[-3deg]">
  {/* Decorative icon */}
  <div className="absolute -top-3 right-6 h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center">
    <span className="h-3 w-3 rounded-full bg-white"></span>
  </div>

  <h3 className="text-xl font-semibold tracking-wide mb-3">
    VISION
  </h3>

  <p className="text-sm text-gray-600 leading-relaxed">
    To be the leading digital agency known for transforming innovative ideas into
    impactful digital experiences that elevate brands and drive success. We strive
    to create solutions that not only meet the needs of today but also anticipate
    the opportunities of tomorrow.
  </p>
</div>

  )
}

export default OurMission