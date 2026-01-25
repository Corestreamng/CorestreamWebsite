import React from 'react'
import Mami from '../assets/images/mami.webp'

export default function About3() {

  return (
    <>
     <div className='w-full h-auto md:min-h-190 flex flex-col'>
        <div className='w-full h-auto md:max-w-6xl  mt-4  m-auto flex gap-3 mb-4 '>
            <div className='hidden md:block w-180 h-110 mt-4 md:flex justify-between'>
                <div className='w-90 h-80 mt-16 mx-4 rounded-3xl '>
                   <img src={Mami} alt="" className='rounded-xl w-full h-80 object-cover'/>
                </div>
                 <div className='w-90 h-110  mx-4 rounded-3xl'>
                     <img src={Mami} alt="" className='rounded-xl w-full h-110 object-cover'/>
                </div>
            </div>

             <div className='mb-14 md:flex flex-col w-130'>
                <h2 className='px-8 text-base md:tracking-widest text-gray-700 py-16 '>WHO WE ARE</h2>
                <h1 className='font-semibold text-3xl px-8  md:text-5xl -mt-13 text-gray-900'>A team of <br /> architects <br /> building the future</h1>
                <p className='mt-4 px-8 md:text-xl text-gray-500'>We build for Enterprises, Mid-market, SMBs, and Startup businesses in diverse industries of tech-enabled businesses.</p>

             </div>

        </div>

         <div className="hidden md:flex max-w-6xl h-[400px] mt-4 mx-auto rounded-3xl p-6 gap-6 mb-8">
  
        <div className="w-1/1 h-full rounded-3xl overflow-hidden">
       <img src={Mami} alt="" className="w-full h-full object-cover"  />
  </div>

  <div className="w-1/2 h-full rounded-3xl overflow-hidden">
    <img src={Mami} alt=""className="w-full h-full object-cover"/>
  </div>

</div>

     </div>
    
    </>
  )
}
