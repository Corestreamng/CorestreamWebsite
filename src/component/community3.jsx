import React from 'react'
import Our from '../assets/images/our.webp'

export default function Community3() {
  return (
    <div className="min-h-screen mt-10 flex justify-center items-center px-4">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Image Section */}
          <div className="w-full rounded-2xl bg-gray-50 flex justify-center">
            <div className="max-w-xl h-[360px] rounded-3xl mt-5">
              <img
                src={Our}
                alt=""
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <p className="text-sm text-gray-400 px-6 md:px-20 tracking-widest">
              Our Blog
            </p>

            <h2 className="text-2xl md:text-5xl px-6 md:px-20 font-semibold py-4">
              Tech Notions Blog
            </h2>

            <p className="text-base text-gray-500 px-6 md:px-20">
              Tech Notions (by Corestream) helps you get familiar with the tech space.
              Develop your skills and learn what's needed to succeed as a professional in tech.
            </p>

            <button className="w-[120px] h-[48px] bg-gray-200 mt-8 ml-6 md:ml-20 rounded-xl">
              Read More
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
