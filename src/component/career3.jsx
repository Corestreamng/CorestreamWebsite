import React from "react";
import Mae from "../assets/images/mae.webp";
import Tobi from '../assets/images/tobi.webp'

export default function Career3() {
  return (
    <>
      <div className="h-auto md:min-h-screen">
          <div className="grid grid-cols-1  md:grid-cols-2 px-4 md:px-6 gap-8">
             <div className="flex flex-col justify-center text-center md:text-left">
      <h4 className="text-sm tracking-widest py-6 md:py-16 md:px-16">
        OUR CULTURE
      </h4>

      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold md:px-16 md:-mt-6">
        We are centered around excellence
      </h1>

      <p className="text-base sm:text-lg md:text-xl md:px-20 py-6 tracking-tight text-gray-400">
        We encourage our people to be innovative and collaborate as much
        as possible. Our superstars are empowered with creative freedom
        which gives them a sense of ownership with their work.
      </p>
    </div>

             <div className="md:flex flex-col sm:flex-row gap-4 justify-center items-center">
      
      <div className="w-full sm:w-64 md:w-72 aspect-[3/4] rounded-b-3xl overflow-hidden">
        <img
          src={Tobi}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="w-full sm:w-64 md:w-72 aspect-[3/4] sm:mt-6 md:mt-10 rounded-2xl overflow-hidden">
        <img
          src={Tobi}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </div>
        </div>

        <div className="hidden w-full mt-20 md:block  md:mt-32  py-10">
          <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-6 px-4">
            <div className="w-full md:w-[560px] h-64 md:h-96 rounded-3xl overflow-hidden">
              <img
                src={Tobi}
                alt=""
                className="rounded-3xl object-cover w-full h-full"
              />
            </div>

            <div className="w-full md:w-[520px] h-56 md:h-72 rounded-3xl overflow-hidden">
              <img
                src={Tobi}
                alt=""
                className="rounded-3xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 