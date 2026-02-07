import React from 'react'
import Jollof from '../assets/images/jollof.png'
import Kafene from '../assets/images/Kafene.svg'
import Cam from '../assets/images/cam.svg'
import Careclick from '../assets/images/careclick.svg'
import Nibss from '../assets/images/nibss.svg'
import Whispa from '../assets/images/whispa.svg'
import Bra from '../assets/images/bra.png'
import Bra1 from '../assets/images/bra1.png'
import Bra3 from '../assets/images/bra3.png'
import Bra4 from '../assets/images/bra4.png'
import Bra5 from '../assets/images/bra5.png'
import Bra6 from '../assets/images/bra6.png'
import Bra7 from '../assets/images/bra7.png'
import Bra8 from '../assets/images/bra8.png'
import Bra9 from '../assets/images/bra9.png'
import Bra2 from '../assets/images/bra2.png'



const logos = [Bra, Bra1, Bra2, Bra3, Bra4, Bra5, Bra6, Bra7, Bra8, Bra9]

export default function Section3 () {
  return (
    <>
      {/* MARQUEE STYLES */}
      <style>
        {`
          @keyframes marqueeLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes marqueeRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .marquee-left {
            animation: marqueeLeft 25s linear infinite;
          }

          .marquee-right {
            animation: marqueeRight 25s linear infinite;
          }
        `}
      </style>

      <div className="w-full border-b-2 border-dashed border-gray-300 pb-16">

        {/* HEADER */}
        <div className="flex items-center flex-col">
          <p className="mt-20 tracking-widest text-gray-600 font-semibold">
            OUR CLIENTS
          </p>
          <h2 className="text-center py-4 text-5xl font-bold text-gray-900">
            Innovative products our clients
          </h2>
          <h2 className="-mt-4 text-5xl font-bold text-gray-900">
            have built
          </h2>
          <p className="text-center text-gray-600 py-4">
            We build for startup and enterprises business in diverse industries
          </p>
        </div>

        
        <div className="overflow-hidden mt-12">
          <div className="flex w-max gap-12 marquee-right">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[150px]"
              >
                <img src={logo} alt="" className="h-10 object-contain" />
              </div>
            ))}
          </div>
        </div>

        
        <div className="overflow-hidden mt-10">
          <div className="flex w-max gap-12 marquee-left">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[150px]"
              >
                <img src={logo} alt="" className="h-10 object-contain" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}
