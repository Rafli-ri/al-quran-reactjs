import "./App.css";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailSurahPage from "./pages/DetailSurahPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/surat/:nomor" element={<DetailSurahPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <footer></footer>
    </>
  );
}

export default App;
