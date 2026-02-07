import React from 'react'
import Map from'../assets/images/map.jpg'
import Wod from '../assets/images/wod.svg'

export default function section8() {
  return (
    <>
    <div className="w-full h-auto md:min-h-screen flex justify-center items-center px-4">
  <div
    className="w-full max-w-6xl mb-3 mt-16 h-[320px] sm:h-[380px] md:h-[380px] mx-auto rounded-3xl bg-center bg-cover relative"
    style={{ backgroundImage: `url(${Map})` }}
  >
    <div className="absolute inset-0 bg-slate-950/95 rounded-3xl flex justify-between px-4">
      <div className='flex flex-col py-12 px-4'>
         <h2 className='text-xl md:text-3xl lg:text-5xl font-semibold  text-gray-200'>We create a new standard <br /> for businesses</h2>
       <p className='mt-8 text-gray-300'>At CorestreamNG, we are dedicated to creating the best apps that run on mobile, web, and desktop platforms. We do this with one aim in mind; improving your business beyond your dreams in the shortest time possible.</p>
       {/* <Link to></Link> */}
      </div>

       <div className='hidden md:flex flex-col justify-between py-6 px-4'>
        <img src={Wod} alt="" />
        </div>

    </div>
  </div>
</div>

    </>
  )
}
