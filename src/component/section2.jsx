import React from 'react'
import Bulb from '../assets/images/bulb.webp'
import Arrow from '../assets/images/arrow.svg'
import Dev from '../assets/images/dev.webp'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';


const images = [Bulb, Dev];

export default function Section2  () {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" h-auto w-full md:h-345 relative bg-white overflow-hidden border-b border-dashed border-gray-400 pb-2">
      <div 
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.3) 2px, transparent 2px)',
          backgroundSize: '50px 50px',
          backgroundPosition: '0 0'
        }}
      />
      
      <div className="relative z-10 h-full ">
        <div className='grid grid-cols-1 md:grid-cols-2'>
           
            <div className='flex flex-col px-6'>
                <div>
                    <p className='py-6 md:mt-16 px-13 text-lg tracking-wider text-gray-400 scale-95'>S E R V I C E   O F F E R I N G</p>
                <h2 className='text-3xl  md:text-5xl mt-2 px-12  font-bold text-gray-900 tracking-wide'>Customize Product <br /> Developement</h2>
                <p className='px-12 text-gray-400 py-4'>Building Confidently with  a product development team that helps <br />  you succeed</p>
                </div>
                <p className='mt-4 px-12 text-gray-950 tracking-wide font-stretch-90%'>Start Building Today</p>

                <div className=' grid grid-col-1 gap-12 md:mt-12 md:ml-12 space-y-2'>
                    <div className='w-full lg:w-130 h-40 rounded-xl py-4 hover:bg-indigo-50'>
                      <div className='flex px-8 mt-2 '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='size-8 mt-1'><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="m3 16l4.47-4.47a1.81 1.81 0 0 1 2.56 0L14 15.5m1.5 1.5L14 15.5m7 .5l-2.47-2.47a1.81 1.81 0 0 0-2.56 0L14 15.5"/><path d="M12 2.5c-4.23 0-6.345 0-7.747 1.198q-.3.256-.555.555C2.5 5.655 2.5 7.77 2.5 12s0 6.345 1.198 7.747q.256.3.555.555C5.655 21.5 7.77 21.5 12 21.5s6.345 0 7.747-1.198q.3-.256.555-.555C21.5 18.345 21.5 16.23 21.5 12m0-6H18m0 0h-3.5M18 6V2.5M18 6v3.5"/></g></svg>
                        <h2 className='text-3xl px-4 text-gray-900 font-semibold'>Product Strategy </h2>
                      </div>
                      <div className='px-10 -mt-2'><p className='mt-6 tracking-wide font- text-gray-600'>Our product strategy service creates a clear plan for your software solution</p></div>
                    </div>

                     <div className='w-full md:w-130 h-40 rounded-xl py-4 hover:bg-indigo-50'>
                      <div className='flex px-8 mt-2 '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='size-8 mt-1'><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="m3 16l4.47-4.47a1.81 1.81 0 0 1 2.56 0L14 15.5m1.5 1.5L14 15.5m7 .5l-2.47-2.47a1.81 1.81 0 0 0-2.56 0L14 15.5"/><path d="M12 2.5c-4.23 0-6.345 0-7.747 1.198q-.3.256-.555.555C2.5 5.655 2.5 7.77 2.5 12s0 6.345 1.198 7.747q.256.3.555.555C5.655 21.5 7.77 21.5 12 21.5s6.345 0 7.747-1.198q.3-.256.555-.555C21.5 18.345 21.5 16.23 21.5 12m0-6H18m0 0h-3.5M18 6V2.5M18 6v3.5"/></g></svg>
                        <h2 className='text-3xl px-4 text-gray-900 font-semibold'>Product Design </h2>
                      </div>
                      <div className='px-10 -mt-2'><p className='mt-6 tracking-tight  text-gray-600'>We create a user-centered and interactive design for your product</p></div>
                    </div>

                    <div className='w-full md:w-130 h-40 rounded-xl py-4 hover:bg-indigo-50'>
                      <div className='flex px-8 mt-2 '>
                       <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" className='size-8 mt-1'><path fill="currentColor" d="M254.777 93.275c-58.482 0-105.695 47.21-105.695 105.696c0 58.487 47.213 105.698 105.695 105.698s105.696-47.21 105.696-105.697c0-58.48-47.214-105.695-105.696-105.695zm-140.714 63.59C-40.9 155.67-21.26 276.118 227.043 357.748c225.954 74.28 319.04 10.624 239.48-69.973q-.62-.825-1.277-1.64a415 415 0 0 1-14.95 11.88c4.487 5.513 7.138 11.084 7.704 16.01c.713 6.2-.9 11.8-6.986 17.977c-5.84 5.927-16.25 11.98-32.307 16.49c-24.074 5.698-58.427 5.6-102.287-2.656l.105-.04c-2.153-.38-4.3-.787-6.445-1.198c-21.875-4.418-46.004-10.805-72.318-19.455c-69.962-23-118.054-49.706-146.063-74.936c.246-.19.48-.38.728-.568c-.27.166-.532.333-.8.5c-53.315-48.08-33.682-90.78 46.558-92.2c-8.46-.665-16.502-1.016-24.124-1.075zm281.425 0c-7.62.06-15.663.41-24.123 1.076c80.24 1.42 99.86 44.115 46.537 92.193c-.264-.165-.513-.33-.78-.494c.244.184.472.368.712.553c-26.017 23.434-69.357 48.144-131.455 69.973c21.19 5.413 42.82 9.363 64.815 11.64c34.83-15.125 63.025-30.916 84.91-46.554q.014.01.032.02c.522-.386 1.03-.773 1.547-1.16c90.502-65.565 69.686-128.11-42.196-127.247zM44.54 286.27c-74.364 73.55-5.467 133.668 176.683 89.125c-22.844-7.563-44.89-15.83-65.84-24.194c-25.396 2.316-46.41 1.29-62.842-2.346c-16.802-4.544-27.613-10.765-33.61-16.852c-6.086-6.176-7.697-11.776-6.985-17.977c.56-4.88 3.17-10.395 7.582-15.86a413 413 0 0 1-14.986-11.894z"/></svg>
                        <h2 className='text-3xl px-4 text-gray-900 font-semibold'>Product Development</h2>
                      </div>
                      <div className='px-10 -mt-2'><p className='mt-6 tracking-tight text-gray-600'>We build user-friendly web and mobile application tailored to your needs and speciications</p></div>
                    </div>

                    <div className='w-full md:w-130 h-40 py-2 rounded-xl hover:bg-indigo-50'>
                      <div className='flex px-8 mt-2 '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"  className='size-8 mt-1 text-black'><path fill="#ff822d" d="m17.831 3.306l-9.726 13.9c-.26.37-.045.794.395.794h4c.35 0 .5.14.5.5v10.763c0 .71.86 1.02 1.27.45l9.618-12.828c.27-.37.052-.885-.388-.885H20c-.5 0-1-.5-1-1V3.5c0-.5-.76-.774-1.169-.194"/></svg>
                        <h2 className='text-3xl px-4 text-gray-900 font-semibold'>Go live and Support </h2>
                      </div>
                      <div className='px-10 -mt-2'><p className='mt-6 tracking-tight text-gray-600'>We monitor your products performance after launch, pproviding free support, and ensure stability. This includes bugs fixes, beta testing, and documentation</p></div>
                    </div>

                    
                      <Link to="/contact" className='w-25 text-sm mt-6 md:w-40 h-14 rounded-xl bg-gray-300 font-semibold text-center py-3 md:text-lg text-gray-800  hover:scale-95 transition-transform duration-300'>Start Building</Link>

                </div>
            </div>
            <div className='hidden md:block '>
                <div className='flex justify-center items-center mt-5 flex-col gap-4'>
                    <img src={images[currentIndex]} alt="" className='w-120 ml-20 transition-opacity duration-500'/>
                    <img src={Arrow} alt="" className='w-120 -ml-40'/>
                </div>

            </div>

        </div>
       
      </div>
    </div>
  )
}