import React, { useRef } from "react";
import { LuBadgeInfo } from "react-icons/lu";
import { IoChevronBack } from "react-icons/io5";
import { HiPlayCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useAlquran } from "../store/quran-context";
import Modal, { InfoModalRef } from "./Modal";

const HeaderDetail: React.FC<{ onShow: () => void }> = ({ onShow }) => {
  const modal = useRef<InfoModalRef>(null);

  const { quranState }: any = useAlquran();
  const {
    suratSelanjutnya: { nomor: nextSurahNomor, namaLatin: nextNamaLatin },
    suratSebelumnya: { nomor: prevSurahNomor, namaLatin: prevNamaLatin },
    namaLatin,
    arti,
    tempatTurun,
    jumlahAyat,
  } = quranState.surahDetail;

  const showTafsirModalHandler = () => {
    if (modal.current) {
      modal.current.open?.();
    }
    return;
  };

  // console.log(quranState.surahDetail.audioFull);
  return (
    <>
      {/* modal */}
      <Modal ref={modal}>
        <div className="flex justify-between items-center">
          <div className="font-semibold ">
            <p>Surat {namaLatin}</p>
          </div>
          <div>
            <span className="font-semibold">Tempat Wahyu </span>
            <p>{tempatTurun}</p>
          </div>
          <div>
            <span className="font-semibold">Jumlah Ayat </span>
            <p>{jumlahAyat}</p>
          </div>
        </div>
        <hr className="my-3" />
        <div
          dangerouslySetInnerHTML={{ __html: quranState.surahDetail.deskripsi }}
          className="text-justify"
        ></div>
      </Modal>
      <div className="py-2 w-11/12 sm:w-3/4 mt-8">
        <div className="bg-white p-7 rounded-md border flex justify-between items-center shadow-[0_20px_15px_-20px_rgba(68,68,68,0.3)] mb-4 transform transition-transform ease-out duration-300 animate-fadeIn">
          <Link
            to={`/surat/${prevSurahNomor}`}
            className="text-[9px] sm:text-[18px]"
          >
            {prevNamaLatin}
          </Link>

          <div className="text-center">
            <div className="font-bold text-[12px] sm:text-[18px]">
              {namaLatin}
            </div>
            <div className="text-[10px] sm:text-[14px]">{arti}</div>
          </div>

          <Link
            to={`/surat/${nextSurahNomor}`}
            className="text-[9px] sm:text-[18px]"
          >
            {nextNamaLatin}
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
            <button onClick={showTafsirModalHandler}>
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
        {/* <AudioPlayer audioSrc={quranState.surahDetail.audioFull?.["01"]} /> */}
      </div>
    </>
  );
};

export default HeaderDetail;
