// ListsSurah.tsx
import React from "react";
import { useAlquran } from "../../store/quran-context";
import ItemsSurah from "./ItemsSurah";
import Loading from "../Loading";
import Error from "../Error";

const ListsSurah: React.FC = () => {
  const { quranState }: any = useAlquran();
  // console.log(quranState);

  const filteredSurahs = quranState?.surahs.filter(
    (surah: any) =>
      surah.namaLatin
        .toLowerCase()
        .includes(quranState.searchSurah.toLowerCase()) |
      surah.arti.toLowerCase().includes(quranState.searchSurah.toLowerCase())
  );

  const surahRender = () => {
    return filteredSurahs?.map((item: any) => {
      return (
        <>
          <Loading loading={quranState.loading} />
          <Error error={quranState.error} />
          <ItemsSurah key={item.nomor} {...item} surahs={filteredSurahs} />
        </>
      );
    });
  };
  return (
    <>
      <div className="m-4">
        <div className="flex flex-wrap">{surahRender()}</div>
      </div>
    </>
  );
};

export default ListsSurah;
