import axios from "axios";

export const getQuranList = async () => {
  const surah = await axios.get(import.meta.env.VITE_API_BASE_URL);
  return surah;
};
// console.log(API_BASE_URL);
