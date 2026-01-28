import { useState } from "react";
import Mami from '../assets/images/mami.webp'
import Mae from '../assets/images/mae.webp'
import Sxxc from '../assets/images/sxxc.svg'
import Valu from '../assets/images/valu.jpeg'
import Wev from '../assets/images/wev.webp'
import Pto from '../assets/images/pto.webp'

const items = [
  {
    title: "Prioritizing Your Needs",
    description:
      "We believe in putting users first. Before any development starts, we conduct thorough user research to deeply understand their needs, pain points, and desires.",
    image: Valu,
    icon: (
      <svg className="size-10 mx-12 mt-4 " fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: "Values & Principles",
    description:
      "Our core values align perfectly with Agile principles. We prioritize collaboration, open communication, and responsiveness to feedback.",
    image: Wev,
    icon: (
      <svg className="size-10 mx-12 mt-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" >
        <path d="M16 7a4 4 0 0 1-8 0" />
        <path d="M12 14v7" />
        <path d="M5 21h14" />
      </svg>
    ),
  },
  {
    title: "We Work In Milestones",
    description:
      "We break our deliverables into short, focused milestones. This fosters transparency, accountability, and continuous improvement.",
   image: Pto,
    icon: (
      <svg className="size-10 mx-12 mt-4 " fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 12h18" />
        <path d="M3 6h18" />
        <path d="M3 18h18" />
      </svg>
    ),
  },
];

export default function About4() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full mx-auto h-300 md:py-10 bg-gray-50 mb-14">
      <p className='text-center tracking-widest text-gray-500 py-20 text-sm font-semibold'>H O W  W E  W O R K</p>
        <h2 className='text-3xl md:text-5xl text-center text-gray-900 -mt-14 font-bold'>Agile Methodology</h2>
        <p className='text-center text--base py-6 md:text-lg text-gray-400'>Using the Agile methodology helps us adapt to changing requirements and deliver <br /> tangible results quickly. We guarantee that our clients receive solutions that meet <br /> their exact needs.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-170 ">
      
    <div className="flex flex-col gap-20 mt-12 w-full ">
  {items.map((item, index) => (
    <div
      key={index}
      onMouseEnter={() => setActiveIndex(index)}
      className="relative pl-8 cursor-pointer group w-full"
    >
       <span
        className={`absolute left-0 top-0 w-1 transition-all duration-300
          ${activeIndex === index ? "h-full bg-gray-900" : "h-0 bg-gray-300"}`}
      />
      <div className="flex items-center gap-4 ">
      <div className="w-18 h-17 rounded-xl bg- backdrop-blur-2xl ">
          <span
          className={`transition-colors size-20 duration-300
            ${activeIndex === index ? "text-gray-900" : "text-gray-400"}`}
        >
          {item.icon}
        </span>
      </div>

        <h3
          className={`text-xl md:text-2xl px-6 py-5 font-semibold tracking-tight transition-colors duration-300
            ${activeIndex === index ? "text-gray-900" : "text-gray-600"}`}
        >
          {item.title}
        </h3>
      </div>
      <p
        className={`mt-4 px-12 text-base md:text-lg leading-relaxed transition-colors duration-300 w-full
          ${activeIndex === index ? "text-gray-800" : "text-gray-500"}`}
      >
        {item.description}
      </p>
    </div>
  ))}
</div>


     
      <div className="hidden relative w-full rounded-3xl overflow-hidden m-auto  md:block -ml-16  h-[500px]">
        <img src={Sxxc} alt="" className="hidden md:block ml-90 rotate-12 mt-6 absolute z-20 text-gray-900 "/>        
        <img
          src={items[activeIndex].image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />
      </div>
    </div>
    </div>
  );
}






 