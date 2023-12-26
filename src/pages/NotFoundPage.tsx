import React from "react";
import notFound from "../assets/notFound.png";

const NotFoundPage: React.FC = () => {
  return (
    <>
      <div className=" grid place-content-center gap-y-5 justify-items-center py-36 content-around">
        <img src={notFound} alt="" className="w-10/12" />
        <p className="text-[30px] font-bold text-slate-600">Page Not Found</p>
        <a href="https://www.vecteezy.com/free-vector/404">
          404 Vectors by Vecteezy
        </a>
      </div>
    </>
  );
};

export default NotFoundPage;
