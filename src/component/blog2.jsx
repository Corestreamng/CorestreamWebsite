import React from 'react'
import Cos from '../assets/images/cos.webp'
import Discovery from '../assets/images/discovery.webp'
import Header from '../component/header'

export default function Blog2() {
  return (
    <div className="h-auto md:min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mt-16">
        <div className="w-full flex flex-col justify-center">
          <h4 className="tracking-widest font-medium text-gray-500 py-8 md:py-20 md:px-20">FOR FOUNDERS</h4>

          <h2 className="text-2xl md:text-6xl font-bold text-gray-900 md:px-20 md:-mt-14">KickStart</h2>

          <p className="text-lg font-medium text-gray-800 py-6 md:px-20"> Understanding Your Vision: A curation of the resources needed for startup development. Learn success strategies from idea to launch to scale.</p>

          <button className="border-2 border-gray-500 text-gray-800 w-40 h-12 rounded-xl mt-2 font-bold md:ml-20">
            Read More
          </button>
        </div>

      
        <div
          className="relative w-full h-[320px] md:h-[480px] rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `url(${Cos})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute left-4 right-4 md:left-10 md:right-auto top-6 bg-gray-50 rounded-3xl shadow-xl p-4 md:w-[420px]">
            <div className="w-full h-[200px] md:h-[260px] rounded-2xl overflow-hidden">
              <img src={Discovery} alt="" className="w-full h-full object-cover rounded-2xl"/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
