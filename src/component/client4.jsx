import React from 'react'
import Ens3 from '../assets/images/ens3.webp';
import Mae from '../assets/images/mae.webp'


export default function Client4 () {

  return (
    <>
    <div className='h-auto md:min-h-screen flex'>
        <div className='hidden md:block w-100 h-[500px] rounded-3xl  mt-16 ml-30'>
            <img src={Mae} alt="" className='h-full object-cover rounded-3xl'/>

        </div>

        <div className='w-full md:max-w-4xl h-[500px] mt-16 mx-4 '>
            <div className='py-10 px-5 md:px-10 md:py-30'>
                <h1 className='text-5xl md:text-6xl text-gray-800'>Your idea + our expertise = limitless possibilities.</h1>
                <p className='text-md md:text-2xl py-6 text-gray-400'>Together, we&apos;ll turn your ideas into impactful <br /> solutions that drive success.</p>
                  <button className='w-full md:w-45 h-13 rounded-xl font-semibold border border-gray-600'>Share your Idea</button>
            </div>

        </div>
        

    </div>
    
    </>
  )
}
