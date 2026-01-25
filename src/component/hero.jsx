import React, { useState, useEffect } from 'react'
import Header from './header'
import Tech from './tech'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Map scroll to scale (zoom out, min scale 0.8)
  const scale = Math.max(1 - scrollY / 800, 0.8)

  return (
    <div className="relative overflow-hidden">
      <Header />
      <Tech />

    
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          transition: 'transform 0.2s ease-out',
        }}
      >
        <div className="absolute inset-0 flex justify-center items-end">
          <div className="w-full md:w-4/5 lg:w-[720px] h-100 bg-gradient-to-br from-blue-800/10 to-blue-100/30 blur-3xl mt-14 z-[999]"></div>
        </div>

        <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 text-center mt-25">
          <div className="w-full md:w-220 h-auto">
            <h1 className="text-5xl font-semibold sm:text-6xl tracking-normal md:text-7xl text-white">
              Building Custom Software <br /> for your Business Needs
            </h1>
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center gap-16">
            {/* Left Label */}
            <div className="hidden md:flex flex-col items-center animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-9 h-9 text-gray-300"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
              <p className="text-xl text-white mt-2">Developer</p>
            </div>

            {/* Center Text */}
            <div className="flex flex-col items-center -mt-4">
              <p className="font-semibold text-gray-200">
                We develop web and mobile applications for large, mid-size,
              </p>
              <p className="font-semibold text-gray-200">and small businesses</p>

              <p className="text-gray-400 mt-2 font-semibold">
                Do you have a product idea?
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 mt-10">
               <button className="px-6 h-12 bg-white/20 text-white font-semibold rounded-xl border border-white/40 backdrop-blur transition-shadow duration-300 ease-in-out hover:shadow-xl hover:shadow-green-500/50">Share with us</button>
                <button className="px-6 h-12 bg-white/20 text-white font-semibold rounded-xl border border-white/40 backdrop-blur transition-shadow duration-300 ease-in-out hover:shadow-xl hover:shadow-green-500/50">View case study</button>
              </div>
            </div>

            {/* Right Label */}
            <div className="hidden md:flex items-center animate-bounce">
              <p className="text-xl text-white">Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
