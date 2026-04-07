import React from 'react';
import Blur from '../assets/images/blur.jpg';
import Ens from '../assets/images/ens.webp';
import Ens2 from '../assets/images/ens2.webp';
import Ens3 from '../assets/images/ens3.webp';
import Ens4 from '../assets/images/ens4.webp';
import Sojorne from '../assets/images/sojorne.webp';
import Presmit from '../assets/images/presmit.webp';
import Loap from '../assets/images/loap.svg'
import Doc from '../assets/images/doc.png' 
import Core from '../assets/images/core.png'

export default function Section6() {
   const cards = [
    { image: Doc, images: Loap, title: "Wecare", description: "Experience Seamless Telemedicine for Faster, Smarter Healthcare" },
    { image: Core, title: "Coreskool", description: "Smart School Management Made Simple for Better Learning Outcomes" },
    { image: Ens3, title: "Project Three", description: "Short description 3" },
    { image: Ens4, title: "Project Four", description: "Short description 4" },
    { image: Sojorne, title: "Project Five", description: "Short description 5" },
    { image: Presmit, title: "Project Six", description: "Short description 6" },
  ];

  return (
    <div className="w-full h-auto md:h-[1000px] p-4 ">
      {/* Header */}
      <div className="w-full flex flex-col items-center justify-center mt-20">
        <h2 className="text-md md:text-base tracking-widest text-gray-600 ">
          OUR  CASE   STUDY
        </h2>
        <h2 className="text-2xl md:text-5xl font-bold text-gray-900 py-4 px-2">
          Some projects we&apos;ve built
        </h2>
        <p className="text-xl md:text-md text-center text-gray-400 scale-95 ">
          Explore our case studies to see our detailed process.
        </p>
      </div>

      {/* Horizontal Scroll Cards */}
      <div className="w-full mt-16">
        <div className="flex space-x-6 overflow-x-auto px-4 py-6 scrollbar-hide snap-x snap-mandatory">
          {cards.map((cards, i) => ( 
            <div key={i} className='h-auto'>
            <div
              key={i}
              className="flex-none w-[260px] sm:w-[280px] md:w-140 h-90 rounded-3xl flex flex-col shadow-lg overflow-hidden snap-start hover:scale-105 transition-transform duration-300"
              style={{
                backgroundImage: `url(${Blur})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              
              <div className="flex-1 flex justify-center items-center">
                <div
                  className="w-120 h-80 bg-cover bg-center rounded-lg shadow-lg"
                  style={{ backgroundImage: `url(${cards.image})` }}>
                </div>
              </div>
              </div>
              <div className='w-full h-40 mt-4'>
                <div className='flex flex-cols'>
                  <img src={cards.images} alt="" className='mx-6 mt-4'/>
                  <h2 className='py-6 text-xl md:text-4xl -ml-4'>{cards.title}</h2>
                </div>
                <div className='flex flex-col'>
                  <p className='text-2xl font-light text-gray-500 mx-12'>{cards.description}</p>
                    <div className='mt-4 mx-11'>
                        <button className='w-50 h-12 border-2 text-gray-500 border-gray-600 rounded-xl text-base font-semibold text-center'>View case study</button>
                    </div>
                </div>

                </div>
            </div>
          ))}
           
        </div>
      </div>

      {/* Custom scrollbar hide */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
