import React from "react";
import Ck3 from '../assets/images/ck3.webp'

export default function Contact2() {
  return (
    <section className="min-h-screen relative flex items-center px-4">
      <div className="w-full max-w-7xl mx-auto md:-mt-40 rounded-3xl mb-12 shadow bg-purple-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
          <div className="hidden md:flex items-center justify-center rounded-2xl bg-purple-100 min-h-[600px]">
            <img src={Ck3} alt="" className="object-cover "/>
          </div>

          <div className="rounded-2xl  bg-white p-6 md:p-10">
            <form className="space-y-8">
              <div>
                <p className="tracking-widest font-medium text-gray-400 uppercase">Contact us</p>
                <h2 className="text-3xl md:text-5xl font-semibold text-gray-700 mt-3">Tell us your idea</h2>
                <p className="text-gray-600 mt-4 max-w-lg">Tell us a little bit about yourself to help us get to know youbetter.</p>
              </div>

        
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-400">First Name</label>
                  <input type="text" className="w-full h-12 rounded-xl px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"/>
                </div>

                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-400">Last Name </label>
                  <input type="text" className="w-full h-12 rounded-xl px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"/>
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-400">Email Address</label>
                <input type="email" className="w-full h-12 rounded-xl px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"/>
              </div>

    
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-400">Phone Number</label>
                <input type="tel" className="w-full h-12 rounded-xl px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"/>
              </div>

    
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-400">Your Message</label>
                <textarea rows="5" className="w-full rounded-xl px-4 py-3 border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-gray-500"/>
              </div>

              
              <button type="submit" className="w-full md:w-auto px-8 py-3 border border-gray-300  rounded-xl font-semibold text-gray-900 hover:bg-gray-300 transition">Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
