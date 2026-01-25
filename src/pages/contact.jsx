import React from 'react'
import Tech2 from '../component/tech2'
import Header from '../component/header'

export default function Contact () {

  return (
    <>
    <div className='h-screen '>
        <Header/>
        <div className=' flex justify-center'>
         <Tech2/>
         <div className='flex flex-col mt-110 md:mt-55'>
            <p className='text-3xl px-12 md:text-7xl text-white md:px-16'>There’s no limit to what  </p>
             <p className='text-3xl text-center md:text-7xl text-white'>you can <span className='text-3xl md:text-7xl font-bold text-white/75'>Build</span> </p>
             <p className='text-base md:text-lg text-gray-200 text-center py-10'>Do you have an idea or solution? Let’s work together to <br/> build it into technology</p> 
        </div>
         </div>
    </div>
    
    </>
  )
}
