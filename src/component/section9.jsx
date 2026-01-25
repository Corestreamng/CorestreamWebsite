import React from 'react'
import Arrow from '../assets/images/arrow.svg'
import Va from '../assets/images/va.webp'
import Arrow2 from '../assets/images/arrow2.svg'
import Vaw from '../assets/images/vaw.webp'

export default function Section9() {
  return (
    <div className="w-full h-auto md:h-180 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
        <div className="flex justify-start items-center px-4 flex-col mt-30 ">
          <div className="w-full flex-col">
            <p className="tracking-widest scale-95 px-6 text-gray-600 md:px-20 font-medium">
              OUR EVENTS
            </p>
            <h2 className="text-xl md:text-5xl scale-95 px-8 md:px-23 font-bold text-gray-900 py-4">
              Join Our Events <br /> & Programmes
            </h2>
            <p className="text-base px-8 py-3 md:text-xl md:py-5 text-light text-gray-500 scale-95 md:px-23">
              Our events bring industry leaders together to share insightful knowledge. Replay the sessions with our previous guests and register to join upcoming events.
            </p>
           <button className="wave-btn z-[999] w-full md:w-50 md:ml-25 h-14 mt-3 rounded-2xl border-2 border-gray-600 font-bold text-gray-500">
  <span>Check all events</span>
</button>

<style>
{`
.wave-btn {
  position: relative;
  overflow: hidden;
  background: transparent;
}

.wave-btn span {
  position: relative;
  z-index: 2; /* ensures text is above the wave */
  color: #16a34a; /* optional: text green */
  transition: color 0.3s ease;
}

.wave-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    #ffffff,
    #dcfce7,
    #86efac,
    #dcfce7,
    #ffffff
  );
  background-size: 300% 300%;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1; /* behind text */
}

.wave-btn:hover::before {
  opacity: 1;
  animation: waveMove 3s linear infinite;
}

@keyframes waveMove {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 300% 50%;
  }
}
`}</style>

          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full h-auto md:h-180">

          {/* Top Row */}
          <div className="w-full h-auto md:flex flex-col md:flex-row md:space-y-4">
            {/* Left Arrow */}
            <div className="w-full md:w-50 flex justify-center">
              <img
                src={Arrow}
                alt=""
                className="hidden md:block mt-10 mx-12"
              />
            </div>

            {/* Main Image */}
            <div className="w-full md:w-115 rounded-3xl mt-4">
              <img
                src={Va}
                alt=""
                className="w-full h-auto md:h-full object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="w-full h-auto mt-3 flex flex-col md:flex-row gap-1 px-2">
            {/* Main Image */}
            <div className="w-full md:w-115 rounded-3xl">
              <img
                src={Vaw}
                alt=""
                className="w-full h-auto md:h-full object-cover rounded-3xl"
              />
            </div>

            {/* Right Arrow */}
            <div className="w-full md:w-50 flex justify-center items-center mb-8">
              <img
                src={Arrow2}
                alt=""
                className="hidden md:block h-40 -ml-4"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
