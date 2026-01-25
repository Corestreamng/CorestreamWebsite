import React from 'react'
import Mae from '../assets/images/mae.webp'

export default function Career7 () {


  return (
    <>
       <div className='h-auto md:min-h-screen px-2 overflow-hidden'>
        <div className='w-full md:max-w-6xl h-[500px]  md:m-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 px-4 gap-3 mt-25'>
                <div className='w-full h-[28rem] '>
                    <h2 className='text-3xl md:text-5xl font-semibold px-20 py-40 text-gray-800'>How we hire</h2>
                      <p className='text-base md:text-xl tracking-tight -mt-34 font-semibold px-20 text-gray-400'>We give equal chances to everyone, irrespective of your gender, race or religion.</p>
                </div>
                <div className='w-full h-[28rem] bg-gray-50 rounded-3xl'>
                    <div className='w-120 h-[23rem] m-auto mt-10 rounded-3xl bg-red-900'>
                        <img src={Mae} alt="Mae" className='w-full object-cover h-full rounded-3xl'/>

                    </div>

                </div>

            </div>

        </div>

       </div>


    </>
  )
}
