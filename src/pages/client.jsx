import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import White from '../component/white';
import Header from '../component/header';

export default function About() {
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

      const texts = ["Product", "Engr", "Solutions"];
  const [currentIndex, setCurrentIndex] = useState(0);

      useEffect(() => {
       const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 4000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative  w-full h-auto md:min-h-screen bg-white overflow-hidden">
      
     <White />
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-start">
        <Header />
        <motion.div className="flex flex-col items-center  mt-60 " variants={containerVariants} initial="hidden" animate="visible">
          <motion.h4 className="text-5xl text-center md:text-7xl  text-gray-800 tracking-tighter" variants={itemVariants}>
          Digital solutions built for
          </motion.h4>
         <motion.div className='flex flex-cols gap-4 mt-1' variants={itemVariants}>
            <h4 className="text-5xl text-center md:text-7xl  text-gray-800 tracking-tighter ">
            like yours
          </h4>
          <motion.h4 className="text-5xl text-center md:text-7xl  text-green-800 font-semibold tracking-tighter " key={currentIndex} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
             {texts[currentIndex]}
          </motion.h4>
         </motion.div>
          <motion.p className="text-base text-center md:font-medium mt-6 text-gray-600 max-w-xl mx-auto" variants={itemVariants}>
           Companies like yours Develop your idea into a market-ready product. Corestream
          </motion.p>
            <motion.p className="text-base text-center md:font-medium text-gray-600 max-w-xl mx-auto " variants={itemVariants}>
           builds for businesses of any size and in all industries.
          </motion.p>
          <motion.button className='wave-btn w-40 h-12 border-2 font-semibold text-gray-600 border-green-800 rounded-xl mt-6 mb-6' variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Start building</motion.button>
        </motion.div>
      </div>
    </div>
  );
}
