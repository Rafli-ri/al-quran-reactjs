import React from "react";
import { useAlquran } from "../store/quran-context";
import { SET_SEARCH_SURAH } from "../store/ActionTypes";

const Search: React.FC = () => {
  const { quranState, quranDispatch }: any = useAlquran();

  const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    quranDispatch({ type: SET_SEARCH_SURAH, payload: e.target.value });
  };

  return (
    <div className="w-3/4 my-10">
      <form className="flex items-center">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 feather feather-search text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" x2="16.65" y1="21" y2="16.65" />
            </svg>
          </div>
          <input
            type="text"
            id="voice-search"
            className="border-slate-400 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2 sm:px-10 sm:p-4 bg-[#f4f4f4] placeholder-gray-400 text-slate-700 "
            placeholder="Search..."
            required
            defaultValue={quranState.searchSurah}
            onChange={searchChangeHandler}
          />
          <button
            type="button"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
