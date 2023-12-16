import { BiPlayCircle } from "react-icons/bi";
import { BiDetail } from "react-icons/bi";
import sound from "../assets/sound.mp3";

const ItemsDetails = ({
  teksArab,
  nomorAyat,
  teksLatin,
  teksIndonesia,
  showModals,
}) => {
  return (
    <div className="py-2 w-11/12 sm:w-3/4">
      <div className="bg-white p-7 shadow-sm rounded-md border ">
        <div className="text-right text-slate-800  font-medium text-[24px] sm:text-[30px] font-katibeh mt-4">
          {teksArab}{" "}
          <span className="px-1 mx-1 sm:px-3 text-[14px] sm:text-[16px] border-2 border-slate-900 p-1 rounded-full">
            {nomorAyat}
          </span>
        </div>
        <div className="mt-8 text-[16px] sm:text-[18px]">{teksLatin}</div>
        <div className="my-4 text-[14px] sm:text-[16px] font-semibold text-slate-600 divide-black">
          {teksIndonesia}
        </div>
        <hr className="my-3 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
        <div className="flex text-2xl text-slate-600 ">
          <BiPlayCircle className="mr-3 hover:text-slate-900 hover:cursor-pointer" />
          <BiDetail
            className="mr-3 hover:text-slate-900 hover:cursor-pointer transition duration-150 ease-in-out transititext-primary text-primary"
            onClick={showModals}
            data-te-toggle="tooltip"
            title="Tafsir ayat"
          />
        </div>
      </div>
    </div>
  );
};

export default ItemsDetails;
