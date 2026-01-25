import React from 'react';
import { useState, useEffect } from 'react';
import White from '../component/white';
import Header from '../component/header';

export default function About() {

      const texts = ["Product", "Engr", "Solutions"];
  const [currentIndex, setCurrentIndex] = useState(0);

      useEffect(() => {
       const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 4000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative  w-full h-auto md:min-h-screen bg-white overflow-hidden">
      
     <White />
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-start">
        <Header />
        <div className="flex flex-col items-center  mt-60 ">
          <h4 className="text-5xl text-center md:text-7xl  text-gray-800 tracking-tighter">
          Digital solutions built for
          </h4>
         <div className='flex flex-cols gap-4 mt-1'>
            <h4 className="text-5xl text-center md:text-7xl  text-gray-800 tracking-tighter ">
            like yours
          </h4>
          <h4 className="text-5xl text-center md:text-7xl  text-green-800 font-semibold tracking-tighter ">
             {texts[currentIndex]}
          </h4>
         </div>
          <p className="text-base text-center md:font-medium mt-6 text-gray-600 max-w-xl mx-auto">
           Companies like yours Develop your idea into a market-ready product. Corestream
          </p>
            <p className="text-base text-center md:font-medium text-gray-600 max-w-xl mx-auto ">
           builds for businesses of any size and in all industries.
          </p>
          <button className='w-40 h-12 border-2 font-semibold text-gray-600 border-green-800 rounded-xl mt-6 mb-6'>Start building</button>
        </div>
      </div>
    </div>
  );
}
