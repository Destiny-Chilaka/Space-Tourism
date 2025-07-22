import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('/Home-bg-2.png')] md:bg-[url('/Home-bg.png')] overflow-y-hidden">
      <div className=" flex items-end md:items-end justify-center  lg:h-[calc(100vh-120px)] h-[70vh]  sm:h-[80vh] text-white px-3 sm:px-6  md:pt-0">
        <div className="center-div grid grid-cols-1 md:grid-cols-2 md:gap-20  transform translate-y-25">
          <div className="flex justify-center items-center sm:text-center md:items-start md:text-start flex-col">
            <h1 className=" dosis mb-4 text-center md:text-start">
              <span className="text-gray-400 text-spacing text-sm sm:text-lg inline-block mb-4 ">
                SO, YOU WANT TO TRAVEL TO
              </span>
              <br />
              <span className="text-white text-6xl sm:text-9xl bellefair">
                SPACE
              </span>
            </h1>
            <p className="max-w-md md:max-w-lg text-[12px] sm:text-sm md:text-base mb-6 text-gray-400 vazirmatn sm:leading-relaxed leading-6 text-center md:text-start break-words">
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative group">
              <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-30 scale-200 transition duration-300 pointer-events-none"></span>
              <button className="bellefair bg-white text-black rounded-full w-40 h-40 font-bold text-lg hover:text-gray-400 transition relative z-10">
                EXPLORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
