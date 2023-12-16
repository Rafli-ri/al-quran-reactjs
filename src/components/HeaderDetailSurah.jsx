import { LuBadgeInfo } from "react-icons/lu";
import { IoChevronBack } from "react-icons/io5";
import { HiPlayCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

const HeaderDetailSurah = ({
  namaNext,
  namaPrev,
  namaLatin,
  arti,
  onClick,
  next,
  prev,
  onShow,
}) => {
  return (
    <div className="py-2 w-11/12 sm:w-3/4">
      <div className="bg-white p-7 rounded-md border flex justify-between items-center shadow-[0_20px_15px_-20px_rgba(68,68,68,0.3)] mb-4">
        <Link to={`/surat/${prev}`} className="text-[12px] sm:text-[18px]">
          {namaPrev}
        </Link>

        <div className="text-center">
          <div className="font-bold text-[12px] sm:text-[18px]">
            {namaLatin}
          </div>
          <div className="text-[10px] sm:text-[14px]">{arti}</div>
        </div>

        <Link to={`/surat/${next}`} className="text-[12px] sm:text-[18px]">
          {namaNext}
        </Link>
      </div>

      <div className="flex justify-between items-center text-[12px] sm:text-[15px] text-slate-500 font-bold">
        <Link to={"/"}>
          <div className="inline-flex items-center hover:text-slate-800">
            <IoChevronBack size={20} className="mr-1" />
            Kembali
          </div>
        </Link>
        <div>
          <button onClick={onClick}>
            <div className="inline-flex items-center hover:text-slate-800">
              <LuBadgeInfo size={20} className="mr-1.5" />
              Info Surah
            </div>
          </button>
          <button onClick={onShow}>
            <div className="inline-flex items-center hover:text-slate-800 mx-5">
              <HiPlayCircle size={20} className="mr-1.5" />
              Play
            </div>
          </button>
        </div>
      </div>
      <hr className="h-1 text-slate-950" />
    </div>
  );
};

export default HeaderDetailSurah;
