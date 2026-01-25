import React from 'react'
import Scw from '../assets/images/scw.svg'
import Hor from '../assets/images/hor.svg'
import  Ass from '../assets/images/ass.svg'
import Hor2 from '../assets/images/hor2.svg'
import Vertical from '../assets/images/vertical.svg'

export default function Career8 () {
  return (
    <>
        <div className='h-auto md:min-h-screen '>
            <div className='grid grid-cols-1 md:flex md:mx-16 gap-4'>
                <div className='w-full md:w-120 h-50 rounded-2xl border border-gray-100 shadow'>
                    <div className='flex flex-cols'>
                        <img src={Ass} alt="" className='w-20 h-20 mx-6 mt-4'/>
                        <div className='flex flex-col w-full '>
                            <h2 className='text-lg font-medium text-gray-800 py-4'>Screening</h2>
                            <p className='text-base text-gray-400'>The screening process helps us understand your personality, skills and experience. This also helps us see if your goals aligns with ours.</p>
                        </div>
                    </div>
                </div>

                <div className='hidden w-full md:block md:w-60 h-30 mt-10'>
                  <img src={Hor} alt="" className='mt-12 rotate-180 m'/>
                </div>

                   <div className='w-full md:w-120 h-50 rounded-2xl border border-gray-100 shadow'>
                    <div className='flex flex-cols'>
                        <img src={Ass} alt="" className='w-20 h-20 mx-6 mt-4'/>
                        <div className='flex flex-col w-full '>
                            <h2 className='text-lg font-medium text-gray-800 py-4'>Screening</h2>
                            <p className='text-base text-gray-400'>The screening process helps us understand your personality, skills and experience. This also helps us see if your goals aligns with ours.</p>
                        </div>
                    </div>
                </div>
            </div>
              
              <div className='hidden md:flex justify-between px-45'>
                <div className='w-60 h-50 '>
                    <img src={Vertical} alt="" className='m-auto'/>
                </div>
                 <div className='w-60 h-50 '>
                   <img src={Vertical} alt="" className='m-auto'/>
                </div>
              </div>

                <div className='grid grid-cols-1 md:flex md:mx-16 gap-4'>
                <div className='w-full md:w-120 h-50 rounded-2xl border border-gray-100 shadow'>
                    <div className='flex flex-cols'>
                        <img src={Ass} alt="" className='w-20 h-20 mx-6 mt-4'/>
                        <div className='flex flex-col w-full '>
                            <h2 className='text-lg font-medium text-gray-800 py-4'>Screening</h2>
                            <p className='text-base text-gray-400'>The screening process helps us understand your personality, skills and experience. This also helps us see if your goals aligns with ours.</p>
                        </div>
                    </div>
                </div>

                <div className='hidden w-full md:block md:w-60 h-30 mt-10'>
                  <img src={Hor} alt="" className='mt-12 rotate-180 '/>
                </div>

                   <div className='w-full md:w-120 h-50 rounded-2xl border border-gray-100 shadow'>
                    <div className='flex flex-cols'>
                        <img src={Ass} alt="" className='w-20 h-20 mx-6 mt-4'/>
                        <div className='flex flex-col w-full '>
                            <h2 className='text-lg font-medium text-gray-800 py-4'>Screening</h2>
                            <p className='text-base text-gray-400'>The screening process helps us understand your personality, skills and experience. This also helps us see if your goals aligns with ours.</p>
                        </div>
                    </div>
                </div>
            </div>
              

        </div>


    </> 
  )
}
