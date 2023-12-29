import React, { useState, useEffect } from "react";
import logo from "../assets/logo-removebg-preview.png";

const Navbar: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolling
          ? " sm:bg-white sm:shadow-[0_20px_15px_-20px_rgba(68,68,68,0.45)]"
          : " sm:bg-transparent "
      }    border-1 border-gray-300  sticky sm:top-0 z-50 transition-all ease-in-out duration-300`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="w-7 sm:w-10 p-0" alt="Flowbite Logo" />
          <span className="self-center sm:text-2xl font-semibold whitespace-nowrap text-slate-600">
            Al-Quran App
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
