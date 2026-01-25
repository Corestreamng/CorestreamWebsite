import React from 'react'
import Map from'../assets/images/map.jpg'

export default function section8() {
  return (
    <>
    <div className="w-full h-auto md:min-h-screen flex justify-center items-center px-4">
  <div
    className="w-full max-w-6xl mb-3 mt-16 h-[320px] sm:h-[380px] md:h-[380px] mx-auto rounded-3xl bg-center bg-cover relative"
    style={{ backgroundImage: `url(${Map})` }}
  >
    <div className="absolute inset-0 bg-slate-950/95 rounded-3xl flex flex-col items-center text-center px-4">
      
      <p className="tracking-widest text-gray-300 mt-12 md:mt-30 text-sm md:text-base">
        WE ARE GLOBE
      </p>

      <div className="flex flex-col items-center justify-center flex-1 -mt-25">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white">
          Let’s Build the future together
        </h2>

        <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-300">
          We build impactful technology for businesses worldwide
        </p>
      </div>

    </div>
  </div>
</div>

    </>
  )
}
