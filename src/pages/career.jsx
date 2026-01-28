import React from 'react';
import { motion } from 'framer-motion';
import Header from '../component/header'
import Mae from '../assets/images/mae.webp'
import White from '../component/white'


export default function Career() {
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <>
     <motion.div className='h-auto md:min-h-screen' variants={pageVariants} initial="hidden" animate="visible">
        <Header/>
          <svg
        viewBox="0 0 1200 600"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Flowing curves */}
        <g fill="none" stroke="#6366f1" strokeOpacity="0.2" strokeWidth="2">
          <path d="M0 200 Q 300 150, 600 200 T 1200 200">
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="M0 200 Q 300 150, 600 200 T 1200 200;
                      M0 200 Q 300 250, 600 200 T 1200 200;
                      M0 200 Q 300 150, 600 200 T 1200 200"
            />
          </path>
          <path d="M0 350 Q 400 300, 800 350 T 1200 350" opacity="0.3">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="M0 350 Q 400 300, 800 350 T 1200 350;
                      M0 350 Q 400 400, 800 350 T 1200 350;
                      M0 350 Q 400 300, 800 350 T 1200 350"
            />
          </path>
          <path d="M200 100 Q 500 50, 800 100 T 1200 100" opacity="0.15">
            <animate
              attributeName="d"
              dur="12s"
              repeatCount="indefinite"
              values="M200 100 Q 500 50, 800 100 T 1200 100;
                      M200 100 Q 500 150, 800 100 T 1200 100;
                      M200 100 Q 500 50, 800 100 T 1200 100"
            />
          </path>
        </g>

        {/* Geometric shapes with gradient */}
        <defs>
          <linearGradient id="boxGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="boxGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        <g fill="url(#boxGrad1)" stroke="#6366f1" strokeOpacity="0.3" strokeWidth="2">
          <rect x="100" y="80" width="180" height="100" rx="12">
            <animateTransform
              attributeName="transform"
              type="translate"
              dur="15s"
              repeatCount="indefinite"
              values="0 0; 0 -20; 0 0"
            />
          </rect>
          <rect x="900" y="150" width="200" height="120" rx="12">
            <animateTransform
              attributeName="transform"
              type="translate"
              dur="18s"
              repeatCount="indefinite"
              values="0 0; 0 15; 0 0"
            />
          </rect>
        </g>

        <g fill="url(#boxGrad2)" stroke="#3b82f6" strokeOpacity="0.25" strokeWidth="2">
          <rect x="350" y="400" width="220" height="130" rx="12">
            <animateTransform
              attributeName="transform"
              type="translate"
              dur="20s"
              repeatCount="indefinite"
              values="0 0; 0 -10; 0 0"
            />
          </rect>
        </g>

        {/* Floating circles with pulse */}
        <g fill="#6366f1">
          <circle cx="250" cy="300" r="5" opacity="0.4">
            <animate
              attributeName="opacity"
              dur="3s"
              repeatCount="indefinite"
              values="0.2; 0.6; 0.2"
            />
            <animate
              attributeName="r"
              dur="3s"
              repeatCount="indefinite"
              values="5; 7; 5"
            />
          </circle>
          <circle cx="950" cy="450" r="5" opacity="0.4">
            <animate
              attributeName="opacity"
              dur="4s"
              repeatCount="indefinite"
              values="0.3; 0.7; 0.3"
            />
            <animate
              attributeName="r"
              dur="4s"
              repeatCount="indefinite"
              values="5; 8; 5"
            />
          </circle>
          <circle cx="700" cy="150" r="5" opacity="0.4">
            <animate
              attributeName="opacity"
              dur="3.5s"
              repeatCount="indefinite"
              values="0.25; 0.65; 0.25"
            />
            <animate
              attributeName="r"
              dur="3.5s"
              repeatCount="indefinite"
              values="5; 7.5; 5"
            />
          </circle>
          <circle cx="450" cy="220" r="4" opacity="0.3">
            <animate
              attributeName="opacity"
              dur="5s"
              repeatCount="indefinite"
              values="0.2; 0.5; 0.2"
            />
          </circle>
          <circle cx="820" cy="380" r="4" opacity="0.3">
            <animate
              attributeName="opacity"
              dur="4.5s"
              repeatCount="indefinite"
              values="0.15; 0.45; 0.15"
            />
          </circle>
        </g>

        {/* Connection lines */}
        <g stroke="#6366f1" strokeOpacity="0.15" strokeWidth="1" fill="none">
          <line x1="250" y1="300" x2="450" y2="220">
            <animate
              attributeName="stroke-opacity"
              dur="3s"
              repeatCount="indefinite"
              values="0.05; 0.2; 0.05"
            />
          </line>
          <line x1="700" y1="150" x2="820" y2="380">
            <animate
              attributeName="stroke-opacity"
              dur="4s"
              repeatCount="indefinite"
              values="0.05; 0.18; 0.05"
            />
          </line>
        </g>
      </svg>

        <div className='w-full h-[500px] m-auto'>
            <div className='flex-cols'>
                 <p className='text-3xl text-center md:text-7xl text-gray-800 py-50'>Come <span className='text-3xl md:text-6xl font-bold text-gray-900'>build</span> with us</p>
             <p className='text-gray-600 tracking-tight text-center -mt-45 text-base md:text-lg'>Corestream is home to the best minds in tech. Our people are smart,</p>
             <p className='text-gray-600 text-center tracking-tight text-base md:text-lg'> creative, forward-thinking, and fun.</p>
                <button className='wave-btn w-full md:w-50 h-13 mt-8 rounded-xl text- font-semibold  px-3 md:mx-145 border-2  border-gray-400'><span>View Open Roles</span></button>
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


     </motion.div>
    
    </>
  )
}
