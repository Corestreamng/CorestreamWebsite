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
      <button className='wave-btn w-55 h-15 rounded-2xl border border-gray-600 font-semibold text-md bg-white'>Join the community</button>
      <style>
{`
.wave-btn {
  position: relative;
  overflow: hidden;
  background: transparent;
}

.wave-btn span {
  position: relative;
  z-index: 2; /* ensures text is above the wave */
  color: #16a34a; /* optional: text green */
  transition: color 0.3s ease;
}

.wave-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    #ffffff,
    #dcfce7,
    #86efac,
    #dcfce7,
    #ffffff
  );
  background-size: 300% 300%;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1; /* behind text */
}

.wave-btn:hover::before {
  opacity: 1;
  animation: waveMove 3s linear infinite;
}

@keyframes waveMove {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 300% 50%;
  }
}
`}</style>
  </div>
</div>

      <div className='hidden md:block w-200  float-right -mt-70 inset-0 '>
        <img src={Content} alt="" />

      </div>

    </div>
    
    </>
  )
}
