import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../component/header";

export default function Service() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const leftCards = [
    { color: "blue", title: "Design", text: "We combine creativity with strategy through branding, web design, and UI/UX design, to create designs that pass your message effectively and elevate your brand visual impression." },
    { color: "green", title: "Product", text: "We take your product idea and turn it into reality, handling everything from design and engineering to testing and launch. We give attention to all processes involved in building a great product" },
    { color: "purple", title: "Web Development", text: "We create custom websites and web applications that fit your business needs. Our team uses the latest technology to make your site look good and work perfectly on any device." },
    { color: "yellow", title: "Mobile Development", text: "We design and build high-performing mobile apps for iOS & Android, designed to seamlessly meet your needs and delight your users using the latest technology available." },
  ];

  const rightCards = [
    { color: "red", title: "AI & Machine Learning", text: "We build using the latest AI and ML technology to create powerful tools for businesses. Our custom solutions make processes smarter and help you make better decisions.", svg:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9 text-teal-600"> <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" /></svg> },
    { color: "indigo", title: "CTO-as-a-service", text: "Empower your business with on-demand CTOs. Receive expert guidance, strategy, and implementation support for your team." },
    { color: "teal", title: "Team Optimization", text: "We help your team perform at its best with solutions to improve collaboration, productivity, and workflows." },
    { color: "pink", title: "DevSecOps & Engineering", text: "We deliver secure, scalable software faster. Our DevSecOps, SRE, and Platform Engineering expertise ensures rapid development, reliable performance, and worry-free deployments" },
  ];

  
  useEffect(() => {
    const speed = 0.2; 
    let animationFrame;

    const animate = () => {
      setScrollPosition(prev => prev + speed);
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const leftColumnHeight = leftCards.length * 180;
  const rightColumnHeight = rightCards.length * 180;

  const heroVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <div>
      <Header />
      <div className="bg-gray-50 h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl px-14 gap-8">

          {/* LEFT HERO */}
          <motion.div 
            className="flex flex-col justify-center max-w-md text-gray-900 space-y-6"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-7xl md:px-2 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Our Software development 
            </motion.h1>
            <motion.h1 
              className="text-4xl md:text-7xl md:px-2 font-semibold -mt-4 text-gray-950"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Service
            </motion.h1>
            <motion.p 
              className="text-gray-600 text-xl px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Our developers and product specialists build software solutions that help your business grow.
            </motion.p>
          </motion.div>

          {/* RIGHT SCROLLING CARDS */}
          <div className="flex items-center justify-center overflow-hidden h-auto md:h-[500px] relative">
            <div className="grid grid-cols-2 gap-6 md:gap-10 w-full h-full relative">

              {/* LEFT CARDS UP */}
              <div
                className="space-y-6 absolute"
                style={{
                  top: `-${scrollPosition % leftColumnHeight}px`,
                }}
              >
                {[...leftCards, ...leftCards].map((card, i) => (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card {...card} />
                  </motion.div>
                ))}
              </div>

              {/* RIGHT CARDS DOWN */}
              <div
                className="space-y-6 absolute right-0"
                style={{
                  top: `${scrollPosition % rightColumnHeight - rightColumnHeight}px`,
                }}
              >
                {[...rightCards, ...rightCards].map((card, i) => (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card {...card} />
                  </motion.div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function Card({ color, title, text }) {
  const colors = {
    blue: "border-gray-400",
    green: "border-gray-400",
    purple: "border-gray-400",
    yellow: "border-gray-400",
    red: "border-gray-400",
    indigo: "border-gray-400",
    teal: "border-gray-400",
    pink: "border-gray-400",
  };

  return (
    <motion.div 
      className="w-64 md:w-72 p-4 bg-gray-50 rounded-xl shadow-md flex flex-col items-start justify-start space-y-3 border border-gray-200 h-auto"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`w-10 h-10 md:w-14 md:h-14 rounded-2xl flex items-center justify-center ${colors[color]}`}>
      </div>
      <h3 className="text-lg md:text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base">{text}</p>
    </motion.div>
  );
}
