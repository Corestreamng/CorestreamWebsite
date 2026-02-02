import React from 'react'

export default function About5 () {


  return (
    <>
    <div className='w-full h-auto md:min-h-screen'>
        <h2 className='text-3xl py-8 md:py-20 md:text-5xl  text-gray-900 font-bold text-center'>What we do</h2>
        <p className='text-center text-base  md:text-md text-gray-600 md:-mt-14 '>We build software solutions that meet your  <br /> business objectives and users needs.</p>

        <div className='grid grid-cols-1 mt-12 md:grid-cols-2 gap-6 md:gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
            <div className='flex flex-col gap-6 md:gap-8'>
                <div className='w-full h-auto border-2 bg-indigo-50 border-gray-300 rounded-2xl md:rounded-3xl p-6 md:p-8'>
                  <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 font-bold mb-4'>Optimise Existing Software</h2>
                  <p className='text-sm sm:text-base md:text-lg text-gray-500'>We will help you scale your applications, integrate essential features, and resolve lingering issues.</p>
                </div>
                <div className='w-full h-auto border-2 bg-indigo-50 border-gray-300 rounded-2xl md:rounded-3xl p-6 md:p-8'>
                  <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 font-bold mb-4'>Provide Engineering Expertise</h2>
                  <p className='text-sm sm:text-base md:text-lg text-gray-500'>We provide the technical leadership and support needed by your team to excel. While you focus on core business strategy, we handle the complexities of software development.</p>
                </div>
            </div>

            <div className='w-full h-auto min-h-80 md:min-h-full rounded-2xl md:rounded-4xl border-2 bg-indigo-50 border-gray-300'>
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 px-12 py-14 font-bold mb-4'>Build Custom Software</h2>
            <p className='text-base md:text-lg -mt-12 px-12 text-gray-600 '>We partner with businesses to build their custom web applications, mobile apps, or enterprise-grade software tailored to their unique business needs.</p>
            </div>
        </div>
    </div>
    
    
    </>
  )
}
