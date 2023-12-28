import React from "react";
import { BiChevronUp } from "react-icons/bi";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer: React.FC = () => {
  return (
    <footer className="w-full bottom-0 mt-auto static ">
      <div className=" bg-white p-7 border shadow-sm md:mt-14 flex justify-between items-center">
        <h1 className="font-semibold text-[18px] text-slate-600">
          Al-Quran App
        </h1>
        <button
          onClick={scrollToTop}
          className="text-[40] rounded-full p-1.5 shadow-lg hover:bg-slate-100 hover:shadow-inner"
        >
          <BiChevronUp size={25} />
        </button>
      </div>
      <div className="px-4 py-3 bg-[#656d4a] flex items-center justify-center">
        <span className="text-sm text-slate-300 text-center font-semibold">
          © 2023 <a href="#">Quran App</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
