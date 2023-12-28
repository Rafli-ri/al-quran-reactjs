// context.tsx
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

import * as ActionTypes from "./ActionTypes.ts";

interface Surah {
  nomor: number;
  namaLatin: string;
  nama: string;
  arti: string;
  tempatTurun: string;
  jumlahAyat: number;
}

export interface SurahDetail {
  tempatTurun: ReactNode;
  arti: string;
  namaLatin: string;
  jumlahAyat: number;
  teksArab: string;
  nomorAyat: number;
  teksLatin: string;
  ayat: string[];
  teksIndonesia: string;
  audioFull: any;
}

interface State {
  surahs: Surah[];
  surahDetail: SurahDetail | null;
  loading: boolean;
  error: string | null;
  searchSurah: string;
}

type ChildProps = {
  children?: ReactNode;
};

type ActionQuran =
  | { type: typeof ActionTypes.GET_QURAN; payload: Surah[] }
  | { type: typeof ActionTypes.GET_SURAH_DETAIL; payload: SurahDetail }
  | { type: typeof ActionTypes.LOADING }
  | { type: typeof ActionTypes.FETCH_FAILED; payload: string }
  | { type: typeof ActionTypes.SET_SEARCH_SURAH; payload: string }
  | { type: typeof ActionTypes.CLEAR_SEARCH };

export const AlquranContext = createContext<
  { quranState: State; quranDispatch: React.Dispatch<ActionQuran> } | undefined
>(undefined);

const reducer = (state: State, action: ActionQuran) => {
  switch (action.type) {
    case ActionTypes.LOADING:
      return { ...state };
    case ActionTypes.GET_QURAN:
      return { ...state, surahs: action.payload, loading: false };
    case ActionTypes.GET_SURAH_DETAIL:
      return { ...state, surahDetail: action.payload, loading: false };
    case ActionTypes.FETCH_FAILED:
      return { ...state, loading: false, error: action.payload };
    case ActionTypes.SET_SEARCH_SURAH:
      return { ...state, searchSurah: action.payload };
    case ActionTypes.CLEAR_SEARCH:
      return { ...state, searchSurah: "" };
    default:
      return state;
  }
};

export const AlquranContextProvider = ({ children }: ChildProps) => {
  const initialState: State = {
    surahs: [],
    surahDetail: null,
    loading: true,
    error: null,
    searchSurah: "",
  };

  const [quranState, quranDispatch] = useReducer(reducer, initialState);

  const getQuran = async () => {
    try {
      quranDispatch({ type: ActionTypes.LOADING });
      const response = await fetch(import.meta.env.VITE_API_BASE_URL);
      const { data } = await response.json();
      // console.log(data);
      quranDispatch({ type: ActionTypes.GET_QURAN, payload: data });
    } catch (error) {
      quranDispatch({
        type: ActionTypes.FETCH_FAILED,
        payload: "Failed to fetch data",
      });
    }
  };

  useEffect(() => {
    getQuran();
  }, []);

  return (
    <AlquranContext.Provider value={{ quranState, quranDispatch }}>
      {children}
    </AlquranContext.Provider>
  );
};

export const useAlquran = () => {
  return useContext(AlquranContext);
};
