import React from "react";
import ListsSurah from "../components/surah/ListsSurah";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <ListsSurah />
      <Footer />
    </>
  );
};

export default HomePage;
