import React from "react";
import Flag from "../assets/images/flag.svg";

export default function Contact4() {
  return (
    <section className="min-h-screen px-4 py-20">
          <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-6xl text-gray-700 font-semibold">
          Our Locations
        </h2>
        <p className="py-6 text-base md:text-xl tracking-tight text-gray-400">
          Technology is global and so are we. We build for businesses in every
          country.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <img src={Flag} alt="Nigeria Flag" className="w-10 h-10" />
            <h3 className="text-2xl font-semibold text-gray-700">Nigeria</h3>
          </div>

          <div className="flex items-start gap-4 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 mt-1"
              fill="currentColor"
            >
              <path d="M12 21c-3.314 0-6-8.138-6-11.647S8.686 3 12 3s6 2.844 6 6.353S15.314 21 12 21zm0-10a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" />
            </svg>
            <p className="text-lg">
              Suite 7B, Korinjoh House,<br />
              Jos, Plateau State, Nigeria.
            </p>
          </div>
          <div className="space-y-2 text-gray-500">
            <p>Email: info@Corestreamng.com</p>
            <p>Phone: +234 800 000 0000</p>
          </div>
        </div>

       
        <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="Nigeria Office Location" src="https://www.google.com/maps?q=Jos,%20Nigeria&output=embed" className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
        </div>
      </div>
    </section>
  );
}
