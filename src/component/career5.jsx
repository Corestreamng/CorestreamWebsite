import React from 'react'
import Inno from '../assets/images/inno.svg'
import Excellent from '../assets/images/excellent.svg'
import Empa from '../assets/images/empa.svg'
import Bugs from '../assets/images/bugs.svg'
import Coll from '../assets/images/coll.svg'

export default function Career5() {
  return (
    <div className="min-h-screen px-4 md:px-8">
      
      {/* Heading */}
      <h1 className="text-center pt-20 text-3xl md:text-5xl font-semibold">
        We have Values
      </h1>

      <p className="text-center text-sm md:text-base text-gray-400 mt-6">
        At Corestream, we're passionate about more than just work. Our mission
        <br className="hidden md:block" />
        drives us to create meaningful impact
      </p>

      {/* Cards */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card */}
          {[ 
            { img: Empa, title: "Empathy", text: "We put ourselves in each other’s shoes, realizing how we are different but mostly the same. We show kindness and treat each other with love." },
            { img: Coll, title: "Collaboration", text: "We work as a tight-knit team of friends who are obsessed with producing excellent work." },
            { img: Inno, title: "Innovation", text: "At Corestream, no idea goes to waste. We are forward thinkers who are always thinking of a better way to do everything." },
            { img: Excellent, title: "Excellent Beyond Borders", text: "Our clients mean the world to us and we ensure they always have a pleasant experience." },
            { img: Bugs, title: "Zero Tolerance for Bugs", text: "Our excellent products are our trophies for all our efforts." }
          ].map((item, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-xl overflow-hidden bg-white"
            >
              {/* Image */}
              <div className="h-40 relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* Content */}
              <div className="px-6 py-4 space-y-3">
                <h2 className="text-lg font-medium text-gray-950">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-400">
                  {item.text}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
