import React from 'react'

export default function About5 () {


  return (
    <>
    <div className='w-full h-auto md:min-h-screen'>
        <h2 className='text-3xl py-8 md:py-20 md:text-5xl  text-gray-900 font-bold text-center'>What we do</h2>
        <p className='text-center text-base  md:text-md text-gray-600 md:-mt-14 '>We build software solutions that meet your  <br /> business objectives and users needs.</p>

        <div className='grid grid-cols-1 mt-12 md:grid-cols-2 md:mt-22 px-6'>
            <div className='flex flex-col gap-12 py-4 px-'>
                <div className='w-full md:w-150 h-auto border-2 bg-indigo-50 border-gray-300  rounded-3xl'>
                  <h2 className='px-16 py-10 text-2xl md:text-4xl text-gray-800 font-bold'>Optimise Existing Software</h2>
                  <p className='text-base md:text-lg px-16 -mt-6 text-gray-500 mb-12'>We will help you scale your applications, integrate essential features, and resolve lingering issues.</p>
                </div>
                  <div className='w-full md:w-150 h-75 border-2 bg-indigo-50 border-gray-300 rounded-3xl'>
                  <h2 className='px-16 py-10 text-2xl  md:text-4xl text-gray-800 font-bold'>Provide Engineering Expertise</h2>
                  <p className='text-base md:text-lg px-16 -mt-6 text-gray-500 mb-12'>We provide the technical leadership and support needed by your team to excel. While you focus on core business strategy, we handle the complexities of software development.</p>
                </div>
            </div>

             <div className='w-full h-full rounded-4xl  border-2 bg-indigo-50 border-gray-300'>

                     </div>
                 

        </div>
    </div>
    
    
    </>
  )
}
