import React from 'react'
import Mae from '../assets/images/mae.webp'
import Ui from '../assets/images/ui.jpeg'

export default function About6 () {

  return (
    <>
      <div className="w-full min-h-[200px] flex items-center justify-center px-4">
        <div className="w-full md:max-w-5xl bg-indigo-50 rounded-2xl py-10 mb-20 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex justify-center">
              <div className="max-w-[450px] h-120 mt-4 rounded-3xl">
                <img src={Ui} alt="" className="w-full h-full object-cover rounded-3xl transition-opacity duration-500"/>
              </div>
            </div>
            <div className="space-y-6 px-6">
              <h2 className="text-base md:text-4xl font-bold tracking-wide text-gray-900">Our Mission</h2>
              <p className="text-gray-900 text-base md:text-md">- Access 150+ experts located across 4 Countries</p>

              <p className="text-gray-900 text-base md:text-md">- Get up to 3x faster time-to-hire compared to industry average</p>

              <p className="text-gray-900 text-base md:text-md">- Achieve up to 2x higher cost-efficiency compared to in-house rates</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
