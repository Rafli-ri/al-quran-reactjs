import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ItemsDetails from "./ItemsDetails";
import axios from "axios";
import InfoModal from "./InfoModal";
import HeaderDetailSurah from "./HeaderDetailSurah";
import AudioFooter from "./AudioFooter";

const ListDetailSurah = () => {
  const { nomor } = useParams();
  const [dataSurah, setDataSurah] = useState([]);
  const [dataTafsir, setDataTafsir] = useState([]);
  const [showAudio, setShowAudio] = useState(false);

  const dialog = useRef();
  const tafsir = useRef();

  useEffect(() => {
    axios.get(`https://equran.id/api/v2/surat/${nomor}`).then((result) => {
      const { data } = result.data;
      setDataSurah(data);
    });
  }, [nomor]);

  useEffect(() => {
    axios.get(`https://equran.id/api/v2/tafsir/${nomor}`).then((result) => {
      const {
        data: { tafsir },
      } = result.data;
      setDataTafsir(tafsir);
    });
  }, [nomor]);

  // console.log(dataTafsir?.teks);

  const { ayat, suratSelanjutnya, suratSebelumnya, audioFull } = dataSurah;

  // console.log(ayat?.map(({ audio }) => audio));

  // console.log(audioFull?.["01"]);

  const handleShowModal = () => {
    dialog.current.open();
    return;
  };
  const handleShowTafsirModal = () => {
    tafsir.current.open();
    return;
  };

  return (
    <>
      <InfoModal ref={dialog}>
        <div className="flex justify-between items-center">
          <div className="font-semibold ">
            <p>Surat {dataSurah?.namaLatin}</p>
          </div>
          <div>
            <span className="font-semibold">Tempat Wahyu </span>
            <p>{dataSurah?.tempatTurun}</p>
          </div>
          <div>
            <span className="font-semibold">Jumlah Ayat </span>
            <p>{dataSurah?.jumlahAyat}</p>
          </div>
        </div>
        <hr className="my-3" />
        <div
          dangerouslySetInnerHTML={{ __html: dataSurah.deskripsi }}
          className="text-justify"
        ></div>
      </InfoModal>
      <InfoModal ref={tafsir}>
        {dataTafsir[0]?.teks}

        {/* {dataTafsir?.map(({ teks, ayat }) => (
          <div key={ayat}>
            <p className="py-8">{teks}</p>
          </div>
        ))} */}
      </InfoModal>
      {/*  */}
      <div className="w-full overflow-auto">
        <div className="mt-6">
          <div className="flex flex-col justify-center items-center">
            <HeaderDetailSurah
              {...dataSurah}
              next={suratSelanjutnya?.nomor}
              prev={suratSebelumnya?.nomor}
              namaNext={suratSelanjutnya?.namaLatin}
              namaPrev={suratSebelumnya?.namaLatin}
              onClick={handleShowModal}
              onShow={() => setShowAudio(!showAudio)}
            />
            {ayat?.map((item) => (
              <ItemsDetails
                key={item.nomorAyat}
                {...item}
                showModals={handleShowTafsirModal}
              />
            ))}
          </div>
        </div>
      </div>
      {showAudio && <AudioFooter audio={audioFull?.["01"]} />}
    </>
  );
};

export default ListDetailSurah;
