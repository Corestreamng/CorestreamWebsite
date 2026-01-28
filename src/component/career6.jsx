import React, { useState } from 'react'
import Quote from '../assets/images/Quote.webp'
import Md from '../assets/images/md.jpg'
import Mdc from '../assets/images/mdc.jpg'

export default function Career6 () {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className="h-auto md:min-h-screen bg-gray-50 px-4">
        <h3 className="tracking-widest text-center py-12 md:py-24 text-gray-400 font-medium">OUR EMPLOYEE TESTIMONIALS</h3>
        <h2 className="text-2xl md:text-5xl font-semibold text-center md:-mt-20 text-gray-800">Hear from some Corestreamians</h2>
        <div className="w-full md:max-w-4xl mx-auto h-auto bg-slate-950 rounded-3xl mt-12 px-4 md:px-0">
          
          {show && (
            <div className="flex flex-col items-center">
              <div className="hidden md:block w-24 h-24 mt-8 ml-16 self-start">
                <img src={Quote} alt="" />
              </div>

              <div className="px-2 md:px-20 mt-8 md:mt-12 text-center">
                <h2 className="text-xl md:text-3xl font-medium text-white">
                  One thing I can say about this company is that the teams are made of fun, welcoming, talented people who are dedicated to making each product successful.
                </h2>
              </div>

              <div className="mt-6 flex flex-cols">
                <img src={Md} alt="" className="w-10 h-10 rounded-full" />
                <div>
                  <p className='px-3 py-3 text-gray-400'>Ceo K Motors</p>
                </div>
              </div>

              <div className="hidden md:block w-24 h-24 mr-16 self-end mt-4">
                <img src={Quote} alt="" />
              </div>
            </div>
          )}

          {!show && (
            <div className="flex flex-col items-center">
              <div className="hidden md:block w-24 h-24 mt-8 ml-16 self-start">
                <img src={Quote} alt="" />
              </div>

              <div className="px-2 md:px-20 mt-8 text-center">
                <h2 className="text-xl md:text-3xl font-medium text-white">Clean and conducive work environment, Best place to improve as a person and as an engineer!</h2>
              </div>

              <div className="mt-6 flex flex-cols">
                <img src={Mdc} alt="" className="w-10 h-10 rounded-full" />
                <div>
                  <p className='px-3 py-3 text-gray-400'>Ceo PLA Engines</p>
                </div>
              </div>

              <div className="hidden md:block w-24 h-24 mr-16 self-end mt-4">
                <img src={Quote} alt="" />
              </div>
            </div>
          )}
        </div>

       
        <div className="w-full flex justify-center space-x-4 mt-8">
          <button onClick={() => setShow(!show)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10 16l-4-4m0 0l4-4m-4 4h12"/>
            </svg>
          </button>

          <button onClick={() => setShow(!show)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14 16l4-4m0 0l-4-4m4 4H6"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
