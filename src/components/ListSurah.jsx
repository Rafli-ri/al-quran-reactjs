import { useEffect, useState } from "react";
import ListItems from "./ListItems.jsx";
import Header from "./Header.jsx";
import { getQuranList } from "../api/api.jsx";
import { SurahContext } from "../store/context.jsx";

const ListSurah = () => {
  const [search, setSearch] = useState("");
  const [getSurah, setGetSurah] = useState([]);
  const [filteredSurah, setFilteredSurah] = useState([]);

  useEffect(() => {
    getQuranList().then((result) => {
      const { data } = result.data;
      setGetSurah(data);
      setFilteredSurah(data);
    });
  }, []);

  const handleSearchSurah = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);

    const filteredItems = getSurah.filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.namaLatin.includes(search) ||
            item.namaLatin.toLowerCase().includes(search) ||
            item.arti.toLowerCase().includes(search) ||
            item.arti.includes(search);
    });

    setFilteredSurah(filteredItems);
  };

  const surahCtx = {
    surah: getSurah,
    searchSurah: handleSearchSurah,
    valueSurah: search,
    filteredItemSurah: filteredSurah.data,
  };
  return (
    <>
      <SurahContext.Provider value={surahCtx}>
        <Header />
        <div className="m-4">
          <div className="flex flex-wrap">
            {filteredSurah.length === 0 && (
              <p className="text-2xl font-bold text-center">Not Result Found</p>
            )}
            {filteredSurah.length > 0 &&
              filteredSurah.map((item) => {
                return <ListItems key={item.nomor} {...item} />;
              })}
          </div>
        </div>
      </SurahContext.Provider>
    </>
  );
};

export default ListSurah;
