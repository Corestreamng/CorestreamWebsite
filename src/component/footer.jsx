 import Logo from '../assets/images/logo.png' 
  
 const Footer = () => {


  return (
    <footer className="w-full bg-gradient-to-r from-[#021f1a] to-[#022c22] text-white py-12 relative overflow-hidden">
      {/* Optional floating particles */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <svg width="100%" height="100%" viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="50" r="2" fill="white" opacity="0.1" />
          <circle cx="300" cy="120" r="2" fill="white" opacity="0.1" />
          <circle cx="500" cy="80" r="2" fill="white" opacity="0.1" />
          <circle cx="700" cy="150" r="2" fill="white" opacity="0.1" />
          <circle cx="900" cy="50" r="2" fill="white" opacity="0.1" />
        </svg>
      </div>

      <div >
      <div className="grid grid-cols-1 md:grid-cols-2 px-16">
          <div className='px-4 md:px-14 mt-12'>
         <img src={Logo} alt="" className='w-80 '/>
         <h3 className='text-md md:text-2xl text-gray-300'>Partner with us to develop transformative technology.Connect with us</h3>
         <button className='w-40 md:w-55 h-14 bg-white/15 rounded-4xl font-semibold border-2 border-white text-center mt-10'>Connect with us</button>
        </div>

            <div className='grid grid-cols-1 md:grid-cols-3 flex justify-center items-center px-6'>
              <div className=' h-full'>
                <h2 className='text-lg md:text-xl scale-95 font-semibold  mt-20'>Our Links</h2>
                <ul className='text-md md:text-base text-gray-400 px-2 space-y-4 mt-2'>
                  <li>Blog</li>
                   <li>Case study</li>
                </ul>

              </div>

                <div className=' h-full'>
                <h2 className='text-lg md:text-xl scale-105 font-semibold mt-20'>Company</h2>
                <ul className='text-md md:text-base text-gray-400 px-2 space-y-3 mt-4'>
                  <li>About us</li>
                   <li>Event</li>
                   <li>Community</li>
                   <li>Careers</li>
                </ul>

              </div>

                <div className='h-full'>
                <h2 className='text-lg md:text-xl scale-95 font-semibold mt-20'>Contact us</h2>
                <ul className='text-md md:text-base text-gray-400 px-2 space-y-4 mt-4'>
                  <li>Get intouch with us</li>
                   <li>Nigeria (+234)8000000000</li>
                   <li>partnerships@corestreamNg.com</li>
                </ul>

              </div>

            </div>

      </div>
      </div>

      <div className="w-full md:max-w-6xl m-auto mt-8 border-t border-white/15 pt-4 text-gray-400 text-sm flex justify-between">
       <p className='text-lg md:text-xl text-gray-400'> &copy; 2026 Corestream. All rights reserved.</p>
       <div className='flex flex-cols space-x-6'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='size-8'><path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/></svg>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  className='size-8'><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  className='size-8'><path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"/></svg>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  className='size-8'><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>

       </div>
      </div>
    </footer>
  );
};

export default Footer;
