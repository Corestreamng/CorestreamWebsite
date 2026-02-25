import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import White from '../component/white';
import Header from '../component/header';

const texts = ["Product", "Engineering", "Solutions"];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative w-full h-auto md:h-screen bg-white overflow-hidden">
      <White />
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-start">
        <Header />
        <motion.div 
          className="flex flex-col items-center mt-60"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h4 
            className="text-5xl text-center md:text-7xl text-gray-800 tracking-tighter"
            variants={itemVariants}
          >
            Building transformative 
          </motion.h4>
          <motion.h4 
            className="text-5xl text-center md:text-7xl py-2 text-gray-800 tracking-tighter"
            variants={itemVariants}
          >
            technology with the best minds 
          </motion.h4>
          <motion.div 
            className='flex flex-cols gap-4 mt-1'
            variants={itemVariants}
          >
            <h4 className="text-5xl text-center md:text-7xl text-gray-800 tracking-tighter">
              in 
            </h4>
            <motion.h4 
              className="text-5xl text-center md:text-7xl text-green-800 font-semibold tracking-tighter"
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {texts[currentIndex]}
            </motion.h4>
          </motion.div>
          <motion.p 
            className="text-md text-center py-5 text-gray-600 max-w-xl mx-auto"
            variants={itemVariants}
          >
            We help businesses of all sizes and industries to develop tailored software that&apos;s scalable, flexible, and designed to improve your business
          </motion.p>
          <motion.button 
            className='wave-btn w-40 h-12 border-2 font-semibold text-gray-600 border-green-800 rounded-xl mb-6'
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Building</span>
          </motion.button>
          <style>{`
.wave-btn {
  position: relative;
  overflow: hidden;
  background: transparent;
}

.wave-btn span {
  position: relative;
  z-index: 2;
  color: #16a34a;
  transition: color 0.3s ease;
}

.wave-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, #ffffff, #dcfce7, #86efac, #dcfce7, #ffffff);
  background-size: 300% 300%;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.wave-btn:hover::before {
  opacity: 1;
  animation: waveMove 3s linear infinite;
}

@keyframes waveMove {
  0% { background-position: 0% 50%; }
  100% { background-position: 300% 50%; }
}
`}</style>
        </motion.div>
      </div>
    </div>
  );
}
