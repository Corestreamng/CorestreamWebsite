import React from 'react';
import { motion } from 'framer-motion';
import Tech2 from '../component/tech2'
import Header from '../component/header'

export default function Contact () {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <>
    <motion.div 
      className='h-screen '
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
        <Header/>
        <motion.div 
          className=' flex justify-center'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
         <Tech2/>
         <motion.div 
           className='flex flex-col mt-70 md:mt-55'
           variants={containerVariants}
           initial="hidden"
           animate="visible"
         >
            <motion.p 
              className='text-2xl px-12 md:text-7xl text-white md:px-12'
              variants={itemVariants}
            >
              There's no limit to what  
            </motion.p>
             <motion.p 
               className='text-2xl text-center md:text-7xl text-white'
               variants={itemVariants}
             >
               you can <motion.span 
                 className='text-3xl md:text-7xl font-bold text-white/75'
                 whileHover={{ scale: 1.1, color: "#ffffff" }}
               >
                 Build
               </motion.span> 
             </motion.p>
             <motion.p 
              className='text-sm md:text-gray-200 text-center py-6'
               variants={itemVariants}
             >
               Do you have an idea or solution? Let's work together to <br/> build it into technology
             </motion.p> 
        </motion.div>
         </motion.div>
    </motion.div>
    
    </>
  )
}
