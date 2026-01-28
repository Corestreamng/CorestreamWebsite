import React from 'react'
import Ceoo from '../assets/images/ceoo.jpeg'
import Tag from '../assets/images/tag.svg'

export default function About8 () {

  return (
    <>
     <div className=" h-auto w-full md:h-120 relative bg-white overflow-hidden ">
      <div 
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.3) 2px, transparent 2px)',
          backgroundSize: '50px 50px',
          backgroundPosition: '0 0'
        }}
      /> 

               <div className="absolute w-full md:w-250 h-30 border border-gray-700 mx-45 mt-30">
               <div className="absolute -left-2 -top-2 w-4 h-4 bg-gray-400 rounded-sm"></div>
               <div className="absolute -left-2 -bottom-2 w-4 h-4 bg-gray-400 rounded-sm"></div>
               <div className="absolute -right-2 -top-2 w-4 h-4 bg-gray-400 rounded-sm"></div>
              <div className="absolute -right-2 -bottom-2 w-4 h-4 bg-gray-400 rounded-sm"></div>
              <h2 className='text-center text-2xl md:text-4xl mt-3 font-semibold text-gray-400'>Our mission is to turn great ideas into products that solve real problems for people</h2>
              <div className='flex flex-cols justify-end mt-12'>
                <div className='w-20 h-20  rounded-full'>
                  <img src={Ceoo} alt="" className='object-center rounded-full w-20 h-20 object-cover'/>
                   <div className='w-40 h-10 rounded bg-gray-900 mt-3 text-center py-2'>
                    <h1 className='text-xl font-bold text-white'>Ibrahim Jimoh</h1>
                    <p className='text-gray-500 text-md font-semibold py-6'>Founder and CTO CorestreamNG</p>
                   </div>

                </div>

              </div>
               </div>

        


       <style>{`
        @keyframes waveDots {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }
      `}</style>
     </div>
    
    </>
  )
}
