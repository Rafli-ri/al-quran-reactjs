import { createContext } from "react";

export const SurahContext = createContext({
  surah: [],
  searchSurah: () => {},
  valueSurah: [],
  filteredItemSurah: [],
});

// export default function SurahContextProvider(){

// }
