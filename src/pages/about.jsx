import React from 'react';
import { useState, useEffect } from 'react';
import White from '../component/white';
import Header from '../component/header';

export default function About() {

      const texts = ["Product", "Engineering", "Solutions"];
  const [currentIndex, setCurrentIndex] = useState(0);

      useEffect(() => {
       const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 4000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative  w-full h-auto md:h-screen bg-white overflow-hidden">
     <White />
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-start">
        <Header />
        <div className="flex flex-col items-center  mt-60 ">
          <h4 className="text-5xl text-center md:text-7xl  text-gray-800 tracking-tighter">
            Building transformative 
          </h4>
          <h4 className="text-5xl text-center md:text-7xl py-2 text-gray-800 tracking-tighter">
             technology with the best minds 
          </h4>
         <div className='flex flex-cols gap-4 mt-1'>
            <h4 className="text-5xl text-center md:text-7xl  text-gray-800 tracking-tighter ">
            in 
          </h4>
          <h4 className="text-5xl text-center md:text-7xl  text-green-800 font-semibold tracking-tighter ">
             {texts[currentIndex]}
          </h4>
         </div>
          <p className="text-md text-center py-5 text-gray-600 max-w-xl mx-auto">
            We help businesses of all sizes and industries to develop tailored software   that’s scalable, flexible, and designed to improve your business
          </p>
          <button className='wave-btn w-40 h-12 border-2 font-semibold text-gray-600 border-green-800 rounded-xl mb-6'><span>Start Building</span></button>
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
    </div>
  );
}
