import React from 'react'
import Pik2 from'../assets/images/pik2.png'
import Header from '../component/header'
import Content from '../assets/images/contents.webp'

export default function Community () {

  return (
    <>
    <div className='h-auto md:min-h-screen bg-gray-100'>
<Header/>
    <div
  className='text-center mx-auto min-h-screen lg:h-[85vh] w-[80%] bg-no-repeat bg-contain lg:bg-[length:100%_650px] '
  style={{
    backgroundImage: `url(${Pik2})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="absolute inset-0 mt-50"> 
     <h2 className='text-6xl font-semibold'>The Enyata Community</h2>
     {/* <h2  className=' text-4xl md:text-6xl'>Community</h2> */}
    <p className='tracking-tighter py-7 text-2xl text-gray-600'>We Build-Up and empower talented people in the tech <br /> industry</p>
      <button className='w-55 h-15 rounded-2xl border border-gray-600 font-semibold text-md bg-white'>Join the community</button>
  </div>
</div>

      <div className='hidden md:block w-200  float-right -mt-70 inset-0 '>
        <img src={Content} alt="" />

      </div>

    </div>
    
    </>
  )
}
