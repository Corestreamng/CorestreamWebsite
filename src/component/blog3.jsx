import React from 'react'
import Cos from '../assets/images/cos.webp'
import Discovery from '../assets/images/discovery.webp'
import Tech from '../assets/images/tech.webp'


export default function Blog2() {
  return (
    <div className="h-auto md:min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-8 mt-16">

        {/* IMAGE SECTION */}
        <div
          className="relative w-full h-[320px] md:h-[480px] rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `url(${Cos})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-x-4 bottom-4 md:inset-auto md:top-6 md:left-25 w-auto md:w-[520px] bg-gray-50 rounded-3xl shadow-xl p-4">
            <div className="w-full h-[200px] md:h-[360px] rounded-2xl overflow-hidden">
              <img
                src={Tech}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* TEXT SECTION */}
        <div className="flex flex-col justify-center px-2 md:px-10">
          <h4 className="tracking-widest font-medium text-gray-500 py-6">
            FOR FOUNDERS
          </h4>

          <h2 className="text-2xl md:text-6xl font-bold text-gray-900 mb-4">
            KickStart
          </h2>

          <p className="text-lg font-medium text-gray-800 py-4">
            Understanding Your Vision: A curation of the resources needed for
            startup development. Learn success strategies from idea to launch
            to scale.
          </p>

          <button className="border-2 border-gray-500 text-gray-800 w-40 h-12 rounded-xl mt-4 font-bold">
            Read More
          </button>
        </div>

      </div>
    </div>
  )
}
