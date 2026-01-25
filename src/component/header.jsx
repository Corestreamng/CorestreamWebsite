import { useState,useEffect } from 'react'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';

export default function Header () {

    const [show,setShow ]= useState(false)
     const [scrolled, setScrolled] = useState(false);

      const toggleMenu = () => {
  setShow(prev => !prev);
    };


   useEffect(() => {
     const handleScroll = () => {
       setScrolled(window.scrollY > 100); 
     };
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);


  return (
    <>
    <div className='fixed md:hidden w-full z-[999] px-2 py-2'>
      
      <div className='flex justify-between'>
            <div className='mt-6'>
              <img src={Logo} alt="" className='size-30'/>
            </div>
            <button onClick={toggleMenu} >
        {show ? (
          <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
        ) : (
   
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10  mt-6 text-black">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
</svg>

        )}     
    </button>
        </div>
        </div>
       

     { show &&(
       <div>
       <div className='md:hidden w-100 h-100 absolute bg-white z-[999] inset-0 mt-17'>

       </div>
        
       </div>
      
)}

     {/* large screen */}

          <div className={'hidden md:block w-full h-25 fixed z-[999] ' + (scrolled ? "bg-white/5 text-gray-400 " : "bg-transparent text-white")}>
            <div className='flex flex-cols'>
                <Link to="/" className='py-7 px-18'>
                      <img src={Logo} alt="" className='w-45'/>
                </Link>

                <div className=''>
                    <ul className='flex justify-center text-gray-400 space-x-12 text-sm py-12 px-3'>
                        <Link to="/about" className=' hover:text-white'>About us</Link>
                        <Link to="/client" className=' hover:text-white'>Client Stories</Link>
                        <Link to="/service" className=' hover:text-white'>Service</Link>
                        <Link to="/community" className=' hover:text-white'>Community</Link>
                        <Link to="/contact" className=' hover:text-white'>Contact Us</Link>
                        <Link to="/career" className=' hover:text-white'>Career</Link>
                        <Link to="/blog" className=' hover:text-white'>Our Blog</Link>
                    </ul>
                </div>

                <div className='flex ml-15 mt-8'>
                    <button className='w-34 h-12 rounded-2xl  bg-white/15 text-white text-md border-2 border-indigo-200'>Share with us</button>

                </div>

            </div>

          </div>
    
    </>
  )
}
