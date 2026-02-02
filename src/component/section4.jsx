import React, { useState } from 'react'
import Whispa from '../assets/images/whispa.svg'
import Boabab from '../assets/images/baobab.webp'
import Kafene1 from '../assets/images/kafene (1).webp'
import Seedfi from '../assets/images/seedfi.webp'
import Luxim from '../assets/images/luxim.png'
import Spark from '../assets/images/spark.webp'
import Kafene from '../assets/images/kafene.svg'
import Sojourne from '../assets/images/sojourne.jpg' 

export default function Section4 () {

  const [activeItem, setActiveItem] = useState(null)

  // ✅ DATA (image + comment)
  const items = [
    { img: Boabab, comment: 'Baobab is transforming financial access across Africa.' },
    { img: Seedfi, comment: 'Seedfi helps people build credit and financial confidence.' },
    { img: Luxim, comment: 'Luxim powers seamless payments for modern businesses.' },
    { img: Kafene1, comment: 'Kafene enables flexible ownership for everyday consumers.' },
    { img: Sojourne, comment: 'Sojourne redefines travel and lifestyle experiences.' },
  ]

  return (
    <>
      <div className='h-200 w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className="hidden md:flex w-full h-full justify-center mt-54 relative">
            <div className="relative w-120 h-120 rounded-full border-2 border-dashed border-gray-300 masked-circle flex items-center justify-center">
              {activeItem && (
                <img src={activeItem.img} alt="" className="w-60 h-60 rounded-full border-4 border-gray-200"/>
              )}
            </div>
            <img src={Boabab} alt="" onClick={() => setActiveItem(items[0])} className='absolute w-30 h-30 rounded-full border-2 border-gray-200 -mt-14 cursor-pointer'/>

            <img src={Seedfi} alt=""  onClick={() => setActiveItem(items[1])} className='absolute w-30 h-30 rounded-full border-2 border-gray-200 mt-14 -ml-120 cursor-pointer'/>

            <img src={Luxim} alt="" onClick={() => setActiveItem(items[2])} className='absolute w-30 h-30 rounded-full border-2 border-gray-200 mt-70 -ml-120 cursor-pointer'/>
            <img src={Kafene1} alt="" onClick={() => setActiveItem(items[3])} className='absolute w-30 h-30 rounded-full border-2 border-gray-200 mt-100 cursor-pointer'/>

            <img alt="" onClick={() => setActiveItem(items[4])} className='absolute w-60 h-60 rounded-full border-4 border-gray-200 mt-30 cursor-pointer'/>
            <div className='w-30 h-120 bg-white z-[900] -ml-24'></div>
          </div>
          <div className='w-full h-full flex flex-col items-center'>
            <svg
              width="200"
              height="720"
              viewBox="0 0 200 720"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 20
                  C 40 140, 40 240, 100 300
                  C 160 360, 160 440, 100 560"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeDasharray="5 8"
                fill="none"
              />
              <circle cx="100" cy="20" r="8" fill="#111827" />
              <circle cx="90" cy="140" r="7" stroke="#9CA3AF" strokeWidth="2" fill="white" />
              <circle cx="90" cy="240" r="7" stroke="#9CA3AF" strokeWidth="2" fill="white" />
              <circle cx="100" cy="300" r="7" stroke="#9CA3AF" strokeWidth="2" fill="white" />
              <circle cx="110" cy="380" r="7" stroke="#9CA3AF" strokeWidth="2" fill="white" />
              <circle cx="100" cy="480" r="7" stroke="#9CA3AF" strokeWidth="2" fill="white" />
            </svg>

            <div className=" max-w-md text-base md:text-3xl text-center text-gray-700">
              {activeItem ? activeItem.comment : 'Comments'}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
