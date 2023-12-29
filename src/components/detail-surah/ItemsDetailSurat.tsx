import React, { useState } from "react";
import { SurahDetail } from "../../store/quran-context";
import { BiPlayCircle } from "react-icons/bi";
import { BiDetail } from "react-icons/bi";
import HeaderDetail from "../HeaderDetail";
import AudioPlayer from "../AudioPlayer";
import Footer from "../Footer";
interface SurahDetailProps {
  surahDetail: SurahDetail | null;
}

const ItemsDetailSurat: React.FC<SurahDetailProps> = ({ surahDetail }) => {
  const [showAudio, setShowAudio] = useState(false);
  return (
    <>
      {surahDetail && (
        <div className="flex flex-col justify-center items-center ">
          {/* <h2>{surahDetail.tempatTurun}</h2> */}
          <HeaderDetail onShow={() => setShowAudio(!showAudio)} />
          {surahDetail.ayat?.map(
            ({ teksArab, nomorAyat, teksLatin, teksIndonesia }: any) => {
              return (
                <div className="py-2 w-11/12 sm:w-3/4" key={nomorAyat}>
                  <div className="bg-white p-7 shadow-sm rounded-md border ">
                    <div className="text-right text-slate-800  font-medium text-[24px] sm:text-[30px] font-katibeh mt-4">
                      {teksArab}{" "}
                      <span className="px-1 mx-1 sm:px-3 text-[14px] sm:text-[16px] border-2 border-slate-900 p-1 rounded-full">
                        {nomorAyat}
                      </span>
                    </div>
                    <div className="mt-8 text-[16px] sm:text-[18px]">
                      {teksLatin}
                    </div>
                    <div className="my-4 text-[14px] sm:text-[16px] font-semibold text-slate-600 divide-black">
                      <p>
                        {nomorAyat}
                        {". "} <span>{teksIndonesia}</span>
                      </p>
                    </div>
                    <hr className="my-3 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
                    <div className="flex text-2xl text-slate-600 ">
                      <BiPlayCircle className="mr-3 hover:text-slate-900 hover:cursor-pointer" />
                      <BiDetail
                        className="mr-3 hover:text-slate-900 hover:cursor-pointer transition duration-150 ease-in-out transititext-primary text-primary"
                        data-te-toggle="tooltip"
                        title="Tafsir ayat"
                      />
                    </div>
                  </div>
                </div>
              );
            }
          )}
          {showAudio && (
            <AudioPlayer audioSrc={surahDetail.audioFull?.["01"]} />
          )}
        </div>
      )}
      <Footer className={"sticky sm:static"} />
    </>
  );
};

export default ItemsDetailSurat;
