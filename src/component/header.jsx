import { useState, useEffect } from "react";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setShow((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full md:hidden z-50 bg-white shadow-md px-4 py-3">
        <div className="flex justify-between items-center">

          <Link to="/">
            <img src={Logo} className="w-32" />
          </Link>

          <button onClick={toggleMenu}>
            {show ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {show && (
        <div className="fixed inset-0 z-40 bg-white pt-24 md:hidden overflow-y-auto">
          <div className="flex flex-col space-y-8 mx-6 text-lg pb-10">
            <Link to="/about" onClick={() => setShow(false)}>About</Link>
            <Link to="/client" onClick={() => setShow(false)}>Client Stories</Link>
            <Link to="/service" onClick={() => setShow(false)}>Service</Link>
            <Link to="/community" onClick={() => setShow(false)}>Community</Link>
            <Link to="/contact" onClick={() => setShow(false)}>Contact Us</Link>
            <Link to="/career" onClick={() => setShow(false)}>Career</Link>
            <Link to="/blog" onClick={() => setShow(false)}>Our Blog</Link>
          </div>
        </div>
      )}

      {/* DESKTOP HEADER */}
      <header
        className={`hidden md:block fixed w-full z-40 transition ${
          scrolled ? "bg-white/90 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">

            <Link to="/">
              <img src={Logo} className="w-36" />
            </Link>

            <ul className="hidden lg:flex space-x-10 text-sm text-gray-400 hover:text-gray-600">
              <Link to="/about"  className=' transition-transform duration-200 hover:-translate-y-1'>About</Link>
              <Link to="/client" className=' transition-transform duration-200 hover:-translate-y-1'>Client Stories</Link>
              <Link to="/service" className=' transition-transform duration-200 hover:-translate-y-1'>Service</Link>
              <Link to="/community"  className=' transition-transform duration-200 hover:-translate-y-1'>Community</Link>
              <Link to="/contact"  className=' transition-transform duration-200 hover:-translate-y-1'>Contact Us</Link>
              <Link to="/career"  className=' transition-transform duration-200 hover:-translate-y-1'>Career</Link>
              <Link to="/blog" className=' transition-transform duration-200 hover:-translate-y-1'>Our Blog</Link>
            </ul>

            <Link to="/contact" className="hidden lg:block px-6 py-2 rounded-xl border bg-green-200 border-gray-100 text-white hover:scale-95">Share with us </Link>

          </div>
        </div>
      </header>
    </>
  );
}
