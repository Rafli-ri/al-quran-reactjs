import React from "react";
import header from "../assets/header.png";
import Search from "./Search";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="w-full p-2 md:p-5 bg-[#656d4a] grid justify-items-center shadow-[0_1px_0px_rgba(17,17,26,0.1)]">
        <div className="w-1/3 lg:w-1/5 drop-shadow-lg">
          <img src={header} alt="Al-Quran" />
        </div>
        <Search />
      </div>
    </>
  );
};

export default Header;
