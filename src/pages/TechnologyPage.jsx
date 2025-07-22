import React, { useState, useEffect } from "react";
import TechA from '../assets/tech-img-a.jpg'
import TechB from '../assets/tech-img-b.jpg'
import TechC from '../assets/tech-img-c.jpg'

// Sample terminology data
const terminologyData = [
  {
    id: 1,
    title: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: TechA,
  },
  {
    id: 2,
    title: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
    image: TechB,
  },
  {
    id: 3,
    title: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: TechC,
  },
];

const TechnologyPage = () => {
  const [activeId, setActiveId] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Find the currently active terminology item
  const activeTerm = terminologyData.find((term) => term.id === activeId);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="relative flex w-full h-screen overflow-hidden bg-cover bg-center bg-[url('/Technology-bg.png')]">
      {/* Main content */}
      <div className="relative z-10 flex flex-col w-full transform md:translate-y-35 sm:translate-y-25 translate-y-20 lg:pl-25">
        {/* Header */}
        <span className="dosis text-[22px] font-caption-bold text-neutral-300 tracking-[0.15em] inline-block text-center sm:text-start w-full mb-20 sm:mb-0">
          <span className="text-gray-500 font-bold md:ml-5">03</span> SPACE
          LAUNCH 101
        </span>
        {isMobile ? (
          // Tablet/Mobile Layout
          <div className="flex flex-col w-full">
            {/* Image at top */}
            <div className="w-full">
              <img
                className="w-full h-70 object-cover"
                src={activeTerm.image}
                alt={activeTerm.title}
              />
            </div>

            {/* Navigation and content below */}
            <div className="flex flex-col items-center px-6 py-8 gap-5">
              {/* Navigation circles */}
              <div className="flex gap-4">
                {terminologyData.map((term) => (
                  <button
                    key={term.id}
                    onClick={() => setActiveId(term.id)}
                    className={`flex h-12 w-12 items-center justify-center rounded-full border hover:border-white ${
                      activeId === term.id
                        ? "border-white bg-white text-black"
                        : "border-gray-400 bg-transparent text-white"
                    } text-heading-3 font-heading-3 transition-colors duration-300`}
                    aria-label={`View ${term.title}`}
                  >
                    {term.id}
                  </button>
                ))}
              </div>

              {/* Text content */}
              <div className="flex flex-col items-center text-center gap-2 max-w-md">
                <span className="text-xl text-gray-400 bellefair">
                  THE TERMINOLOGY...
                </span>
                <h2 className="text-3xl text-gray-100 bellefair inline-block text-center md:text-start mb-4">
                  {activeTerm.title}
                </h2>
                <p className=" vazirmatn w-full sm:max-w-[400px] lg:max-w-[500px] text-gray-400 text-center leading-6  break-words text-[13px] md:text-base max-w-[500px]">
                  {activeTerm.description}
                </p>
              </div>
            </div>
          </div>
        ) : (
          // Desktop Layout
          <div className="flex items-start pl-12 py-8">
            {/* Navigation circles */}
            <div className="flex flex-col gap-8 mr-15 md:mt-25">
              {terminologyData.map((term) => (
                <button
                  key={term.id}
                  onClick={() => setActiveId(term.id)}
                  className={`flex h-16 w-16 items-center justify-center rounded-full border hover:border-white ${
                    activeId === term.id
                      ? "border-white bg-white text-black"
                      : "border-gray-400 bg-transparent text-white"
                  } text-heading-3 font-heading-3 transition-colors duration-300`}
                  aria-label={`View ${term.title}`}
                >
                  {term.id}
                </button>
              ))}
            </div>

            {/* Text content */}
            <div className="flex flex-col items-start gap-4 max-w-md lg:mt-25 lg:mr-2 ">
              <span className="text-xl md:text-3xl  text-gray-400 bellefair">
                THE TERMINOLOGY...
              </span>
              <h2 className="text-3xl md:text-5xl  text-gray-100 bellefair inline-block text-center md:text-start mb-4">
                {activeTerm.title}
              </h2>
              <p className=" vazirmatn w-full sm:max-w-[400px] lg:max-w-[500px] text-gray-400 text-center md:text-left leading-6 md:leading-7 break-words text-[12px] md:text-base max-w-[500px]">
                {activeTerm.description}
              </p>
            </div>

            {/* Image */}
            <div className="flex-1 ">
              <img
                className="h-100 w-full object-cover transition-opacity duration-500"
                src={activeTerm.image}
                alt={activeTerm.title}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechnologyPage;
