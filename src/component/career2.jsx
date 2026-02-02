import React from 'react'
import Mae from '../assets/images/mae.webp'
import Uc from '../assets/images/uc.jpeg'
import Det from '../assets/images/det.jpeg'
import Voa from '../assets/images/voa.png'
import Deb from '../assets/images/deb.jpeg'

export default function Career2 () {

  return (
    <>
     <div className='hidden h-auto md:block md:min-h-screen'>
        <div className='m-auto relative max-w-2xl h-[400px] rounded-3xl border-2 border-dashed border-gray-700'>
             <div className='m-auto relative -mt-20 max-w-md h-[600px] rounded-3xl border-2 border-dashed border-gray-700'></div>
        </div>

        <div className='w-full h-[500px] -mt-100 absolute flex'>
            <div className='w-125 rounded-3xl mx-2 h-[400px] mt-6 bg-red-300'>
                <img src={Deb} alt="" className='rounded-3xl object-cover h-full'/>
            </div>

             <div className='w-90 rounded-3xl mx-2 h-[500px] '>
                <img src={Uc} alt="" className='rounded-3xl object-cover h-full'/>
            </div>

             <div className='w-110 rounded-3xl mx-2 h-[250px] mt-40 '>
                <img src={Det} alt="" className='rounded-3xl w-full object-cover h-full'/>
            </div>

        </div>
        

     </div>
    
    </>
  )
}
 