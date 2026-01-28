import React from 'react'
import Mami from '../assets/images/mami.webp'
import Mae from '../assets/images/mae.webp'
import Gp from '../assets/images/gp.jpeg'
import Jimi from '../assets/images/jimi.jpeg'




export default function About2 () {


  return (
    <>
     <div className="w-full relative flex justify-center h-auto items-center md:min-h-screen px-14 py-12">
        <div className='w-full  md:max-w-4xl text-gray-200 h-120  relative border-2 border-dashed rounded-3xl'>
           </div>
        <div className='w-full h-120 absolute space-y-6 md:flex justify-between items-center px-6'>
           <div className="w-full md:max-w-4xl rounded-xl overflow-hidden">
  <img
    src={Gp}
    alt=""
    className="w-full h-100 object-cover rounded-xl "
  />
</div>
           <div className="hidden md:block max-w-md mx-12 mt-26 rounded-xl bg-red-900 overflow-hidden">
           <img src={Jimi} alt="" className="w-full h-auto object-cover rounded-xl" />
           </div>
             </div>
       
     </div>
    
    </>
  )
}
