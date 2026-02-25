import React from 'react'
import {Link} from "react-router-dom"

export default function Section5 () {


  return (
    <>
        <div className='h-auto md:h-260 bg-slate-950'>
            <h2 className='text-center py-20 text-3xl md:text-5xl font-bold text-white'>Explore Our Services</h2>

            <div className='grid grid-cols-1 md:grid-cols-4 px-14 mb-12'>
                {/* first grid */}
                <div className='h-full '>
                    <div className='w-15 h-15 rounded-xl  bg-teal-500/20 backdrop-blur-2xl   ml-4 flex items-center justify-center mt-4'>
                 <div className='absolute  rounded-full blur-3x -z-10'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-9 text-teal-600"> <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" /></svg>
                 </div>
                    </div>

                    <div className='flex flex-col'>
                       <h5 className='text-2xl px-4 py-7 font-semibold text-white'>Design</h5>
                       <p className='px-4 -mt-2 text-gray-500 font-semibold'>We combine creativity and strategy through branding,web design and UI/UX, to create design that passyour message effectively and elevate your brand visual impression </p>                       
                    </div>
                     <Link to="/services" className='px-4 mt-4 text-teal-500'>Learn more</Link>

                </div>

                 {/* first grid */}
                <div className='h-full '>
                    <div className='w-15 h-15 rounded-xl  bg-teal-500/20 backdrop-blur-2xl   ml-4 flex items-center justify-center mt-4'>
                 <div className='absolute  rounded-full blur-3x -z-10'>
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className="size-9 text-teal-600"><path fill="currentColor" d="m22.509 12.689l-6-3.55a1 1 0 0 0-1.018.001l-6 3.55a1 1 0 0 0-.491.86v6.9c0 .354.187.681.491.86l6 3.55a.99.99 0 0 0 1.018 0l6-3.55a1 1 0 0 0 .491-.86v-6.9a1 1 0 0 0-.491-.861M21 19.88l-5 2.958l-5-2.958v-5.76l5-2.958l5 2.958z"/><path fill="currentColor" d="M6 20.184V11.07l6.2-3.664l-1.017-1.722l-6.692 3.955A1 1 0 0 0 4 10.5v9.684A3 3 0 0 0 2 23c0 1.654 1.346 3 3 3s3-1.346 3-3a3 3 0 0 0-2-2.816M5 24a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2m22-4c-1.654 0-3 1.346-3 3c0 .353.072.687.185 1.002L16 28.838l-6.404-3.784l-1.017 1.722l6.912 4.084a1 1 0 0 0 1.018.001l8.96-5.295c.45.269.97.434 1.531.434c1.654 0 3-1.346 3-3s-1.346-3-3-3m0 4a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2M16 7c.731 0 1.392-.273 1.913-.708L26 11.071V18h2v-7.5a1 1 0 0 0-.491-.861l-8.567-5.062q.056-.28.058-.577c0-1.654-1.346-3-3-3s-3 1.346-3 3s1.346 3 3 3m0-4a1.001 1.001 0 1 1-1 1c0-.552.449-1 1-1"/></svg>
                 </div>
                    </div>

                    <div className='flex flex-col'>
                       <h5 className='text-2xl px-4 py-7 font-semibold text-white'>Product</h5>
                       <p className='px-4 -mt-2 text-gray-500 font-semibold'>We take your product idea and turn it into reality, handling everything from design and engineering to testing and launch. We give attention to all processes involved in building a great product</p>                       
                    </div>
                     <Link to="/services" className='px-4 mt-4 text-teal-500'>Learn more</Link>

                </div>

                 {/* first grid */}
                <div className='h-full '>
                    <div className='w-15 h-15 rounded-xl  bg-teal-500/20 backdrop-blur-2xl   ml-4 flex items-center justify-center mt-4'>
                 <div className='absolute  rounded-full blur-3x -z-10'>
                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" className="size-9 text-teal-600"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15.5 9L7 14v20l8.5 5l8.5 5l8.5-5l8.5-5V14l-8.5-5L24 4zM41 14L24 24M7 14l17 10m0 20V24m8-5v20m9-15L24 34m0 0L7 24m9 15V19M32 9L16 19m16 0L16 9"/></svg>
                 </div>
                    </div>

                    <div className='flex flex-col'>
                       <h5 className='text-2xl px-4 py-7 font-semibold text-white'>Web Development</h5>
                       <p className='px-4 -mt-2 text-gray-500 font-semibold'>We create custom websites and web applications that fit your business needs. Our team uses the latest technology to make your site look good and work perfectly on any device.</p>                       
                    </div>
                     <Link to="/services" className='px-4 mt-4 text-teal-500'>Learn more</Link>

                </div>

                 {/* first grid */}
                <div className='h-full '>
                    <div className='w-15 h-15 rounded-xl  bg-teal-500/20 backdrop-blur-2xl   ml-4 flex items-center justify-center mt-4'>
                 <div className='absolute  rounded-full blur-3x -z-10'>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="size-9 text-teal-600"><path fill="currentColor" d="M8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.757 2.304c.57.227.943.779.943 1.392v5.859a3.5 3.5 0 0 0-.5-.036h-4a3.5 3.5 0 0 0-2.735 5.685a3.5 3.5 0 0 1-2.065-.166l-5.757-2.303A1.5 1.5 0 0 1 2 13.822V6.176a1.5 1.5 0 0 1 .943-1.392zM5.703 6.043a.5.5 0 1 0-.406.914L9.5 8.824V13.5a.5.5 0 0 0 1 0V8.824l4.203-1.868a.5.5 0 1 0-.406-.914L10 7.952zM13.5 13a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1zm3.5 0a.5.5 0 1 0 0 1h.5a1.5 1.5 0 0 1 0 3H17a.5.5 0 1 0 0 1h.5a2.5 2.5 0 0 0 0-5zm-4 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5"/></svg>
                 </div>
                    </div>

                    <div className='flex flex-col'>
                       <h5 className='text-2xl px-4 py-7 font-semibold text-white'>Mobile Development</h5>
                       <p className='px-4 -mt-2 text-gray-500 font-semibold'>We design and build high-performing mobile apps for iOS & Android, designed to seamlessly meet your needs and delight your users using the latest technology available.</p>                       
                    </div>
                     <Link to="/services" className='px-4 mt-4 text-teal-500'>Learn more</Link>
                </div>
            </div>

             <div className='grid grid-cols-1 md:grid-cols-4 px-14 mt-6'>
                {/* first grid */}
                <div className='h-full '>
                    <div className='w-15 h-15 rounded-xl  bg-teal-500/20 backdrop-blur-2xl   ml-4 flex items-center justify-center mt-4'>
                 <div className='absolute  rounded-full blur-3x -z-10'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className="size-9 text-teal-600"><path fill="currentColor" d="M30.47 18.28V7.62h-1.52v9.14h-1.52v-1.52H25.9v12.19h1.53V25.9h3.04v-1.52H32v-6.1zm-6.09-6.09h1.52v3.05h-1.52ZM6.09 27.43v1.52h1.53v1.53h1.52v-1.53h13.71v1.53h1.53v-1.53h1.52v-1.52zm16.76-9.15h1.53v3.05h-1.53Zm0-7.61h1.53v1.52h-1.53Zm-3.04 6.09h3.04v1.52h-3.04ZM9.14 30.48h13.71V32H9.14Zm10.67-9.15h3.04v1.53h-3.04Zm-1.53-3.05h1.53v3.05h-1.53Zm0-16.76h1.53v1.53h-1.53Zm-4.57 22.86h4.57v1.52h-4.57Zm0-24.38h4.57v1.52h-4.57Zm-1.52 18.28h1.52v3.05h-1.52Zm0-16.76h1.52v1.53h-1.52ZM9.14 16.76h3.05v1.52H9.14Zm13.71-6.09V9.14h-6.09V4.57h1.52V3.05h-4.57v1.52h1.52v4.57H9.14v1.53z"/><path fill="currentColor" d="M9.14 21.33h3.05v1.53H9.14Zm-1.52-3.05h1.52v3.05H7.62Zm0-7.61h1.52v1.52H7.62Zm-1.53 1.52h1.53v3.05H6.09Zm0 3.05H4.57v1.52H3.04V7.62H1.52v10.66H0v6.1h1.52v1.52h3.05v1.53h1.52z"/></svg>
                 </div>
                    </div>

                    <div className='flex flex-col'>
                       <h5 className='text-2xl px-4 py-7 font-semibold text-white'>AI & Machine Learning</h5>
                       <p className='px-4 -mt-2 text-gray-500 font-semibold'>We build using the latest AI and machine learning technology to create powerful tools for businesses. Our custom solutions makes our processes smarter and help you make better decisions. </p>                       
                    </div>
                     <Link to="/services" className='px-4 mt-4 text-teal-500'>Learn more</Link>

                </div>

                 {/* first grid */}
                <div className='h-full '>
                    <div className='w-15 h-15 rounded-xl  bg-teal-500/20 backdrop-blur-2xl   ml-4 flex items-center justify-center mt-4'>
                 <div className='absolute  rounded-full blur-3x -z-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="size-9 text-teal-600"><path fill="currentColor" d="M17.001 4a5 5 0 1 1-.892 9.92l-2.651 1.989q.042.29.043.591a4 4 0 1 1-7.966-.524L1.709 14.43l.75-1.854l3.826 1.545a4 4 0 0 1 3.697-1.592l2.04-3.061A5 5 0 0 1 17.002 4m-7.5 10.5c-.464 0-.892.158-1.231.424l1.606.649a1 1 0 0 1-.75 1.854L7.52 16.78a2 2 0 1 0 1.981-2.28m3.364-2.69l-.983 1.476c.284.21.54.458.758.735l1.36-1.02a5 5 0 0 1-1.135-1.191M17 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0 1a2 2 0 1 1 0 4a2 2 0 0 1 0-4"/></svg>
                 </div>
                    </div>

                    <div className='flex flex-col'>
                       <h5 className='text-2xl px-4 py-7 font-semibold text-white'>Team Optimization</h5>
                       <p className='px-4 -mt-2 text-gray-500 font-semibold'>Our focus is on helping your team perform at its best. We provide solutions and strategies to improve collaboration, boost productivity, and streamline workflows </p>                       
                    </div>
                     <Link to="/service" className='px-4 py-7 text-teal-500'>Learn more</Link>

                </div>

                 {/* first grid */}
                <div className='h-full '>
                    <div className='w-15 h-15 rounded-xl  bg-teal-500/20 backdrop-blur-2xl   ml-4 flex items-center justify-center mt-4'>
                 <div className='absolute  rounded-full blur-3x -z-10'>
                     <svg xmlns="http://www.w3.org/2000/svg" width="2048" height="2048" viewBox="0 0 2048 2048" className='size-9 text-teal-600'><path fill="currentColor" d="m1523 0l525 525v998l-525 525H525L0 1523V525L525 0zM512 1854l13-331l-397-384v331zm0-512v-331L128 627v331zm0-512V194L194 512zm128-702v768h830l384-384l-384-384zm0 1011v269h269zm0 397v268l268-268zm1280-66v-331l-397 397h-434l-384 384h765zm0-512V627l-397 397H706l384 384h380z"/></svg>
                 </div>
                    </div>

                    <div className='flex flex-col'>
                       <h5 className='text-2xl px-4 py-7 font-semibold text-white'>CTO-as-a-service</h5>
                       <p className='px-4 -mt-2 text-gray-500 font-semibold'>Empower your business for long-term success with our on-demand CTOs. With our experienced CTOs you and your team gets expert guidance, strategy and implementation support</p>                       
                    </div>
                     <Link to="/services" className='px-4 mt-4 text-teal-500'>Learn more</Link>

                </div>

                
                <div className='h-full mb-14'>
                    <div className='w-15 h-15 rounded-xl  bg-teal-500/20 backdrop-blur-2xl   ml-4 flex items-center justify-center mt-4'>
                 <div className='absolute  rounded-full blur-3x -z-10'>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className='size-9 text-teal-600'><path fill="currentColor" d="M1 3.5A2.5 2.5 0 0 1 3.5 1h7A2.5 2.5 0 0 1 13 3.5v2.732c-.326.14-.631.343-.897.609L12 6.944V5H2v5.5A1.5 1.5 0 0 0 3.5 12h3.486c-.227.3-.4.639-.51 1H3.5A2.5 2.5 0 0 1 1 10.5zm9.354 4.646c.084.084.131.19.143.3l-2.55 2.551a.5.5 0 0 1-.3-.85L9.292 8.5L7.646 6.854a.5.5 0 1 1 .708-.708zm-4-2a.5.5 0 0 1 0 .708L4.707 8.5l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708 0m1.626 6.231l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.2 2.2 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.2 2.2 0 0 1 .578-1.02"/></svg>
                 </div>
                    </div>

                    <div className='flex flex-col'>
                       <h5 className='text-2xl px-4 py-7 font-semibold text-white'>DevSecOps & Engineering</h5>
                       <p className='px-4 -mt-2 text-gray-500 font-semibold'>We deliver secure, scalable software faster. Our DevSecOps, SRE, and Platform Engineering expertise ensures rapid development, reliable performance, and worry-free deployments</p>                       
                    </div>
                     <Link to="/services" className='px-4 mt-4 text-teal-500'>Learn more</Link>

                </div>

            </div>

            

        </div>
    
    </>
  )
}
