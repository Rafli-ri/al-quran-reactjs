import Search from "./Search";
import header from "../assets/header.png";

const Header = () => {
  return (
    <>
      <div className="w-full p-2 md:p-5 bg-[#656d4a] grid justify-items-center shadow-[0_1px_0px_rgba(17,17,26,0.1)]">
        <div className="w-1/3 lg:w-1/5">
          <img src={header} alt="Al-Quran Karim" />
        </div>
        <Search />
      </div>
    </>
  );
};

export default Header;
