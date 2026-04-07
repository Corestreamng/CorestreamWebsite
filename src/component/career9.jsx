import React from 'react'
import Opew from '../assets/images/opew.svg'
import Nop from '../assets/images/nop.svg'

export default function Career9() {

  return (
    <>
     <div className='h-auto md:min-h-screen'>
      <h3 className='tracking-widest font-medium text-center py-20 text-gray-400'>WORK AT ENYATA</h3>
      <h1 className='text-2xl text-center md:text-6xl font-semibold -mt-16 text-gray-800'>Explore Open Position</h1>
          <p className='text-base md:text-xl text-center py-6 text-gray-500 '>Find Your Role in Shaping Africa&apos;s Tech Future.</p>

          <div className='w-full md:max-w-4xl h-auto md:mx-30'>
            <div className='grid grid-cols-1 md:grid-cols-2 mb-30'>
              <div className='flex justify-center items-center'>
                <img src={Opew} alt="" className='w-130 h-100 mt-6'/>
              </div>

              <div className='flex flex-col justify-center px-10 h-auto md:mt-30 '>
                <img src={Nop} alt="" className='w-20 h-20 '/>
                <h2 className='text-2xl md:text-4xl font-semibold '>No Open <br /> Position</h2>
                   <p className='text-base md:text-2xl text-gray-300 '>We currently have no open <br /> position, Pls check back <br /> later</p> 
              </div> 

            </div>

          </div>
     </div>
    
    </>
  )
}
