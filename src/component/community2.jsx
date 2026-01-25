import React from 'react'
import Our from '../assets/images/our.webp'

export default function Community2 () 
{
  return (
    <>
    <div className='hidden w-full md:block h-230  '>
        <div className='w-130 h-120 md:mx-4 flex-cols'>
            <p className='py-30 md:px-18 tracking-widest font-medium text-gray-400'>Slack Community</p>
               <h1 className='-mt-25 px-20 text-5xl font-bold'>Join Our Community</h1>
               <div className='w-100 h-45 md:mx-20 mt-6'>
                <p className='text-xl text-gray-500'>Join our thriving community and connect with industry leaders who can guide your tech journey. We have educational events designed to help you navigate opportunities and reach your full potential. Slack Communitycommunity</p>
               </div>
        </div>
        <div className='w-full h-auto flex flex-cols px-4 gap-4'>
          <div className='w-80 h-[400px] bg-blue-800 rounded-3xl mb-4 mt-2'>
            <img src={Our} alt="" className='rounded-3xl h-full object-cover '/>
          </div>

          <div className='w-100 h-[600px] bg-blue-800 rounded-3xl mb-4 -mt-30'>
            <img src={Our} alt="" className='rounded-3xl h-full object-cover '/>
          </div>
              
                <div className='w-140 h-[400px] bg-blue-800 rounded-3xl mb-4 mt-2'>
            <img src={Our} alt="" className='rounded-3xl h-full object-cover '/>
          </div>
        </div>


    </div>
    
    
    </>
  )
}
