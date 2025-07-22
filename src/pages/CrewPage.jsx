import React, { useState, useEffect } from 'react';
import Img1 from '../assets/crew-img-c.png'
import Img2 from '../assets/crew-img-a.png'
import Img3 from '../assets/crew-img-b.png'
import Img4 from '../assets/crew-img-d.png'

// Sample crew data
const crewMembers = [
  {
    id: 1,
    role: "COMMANDER",
    name: "DOUGLAS HURLEY",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: Img1
  },
  {
    id: 2,
    role: "MISSION SPECIALIST",
    name: "MARK SHUTTLEWORTH",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: Img2
  },
  {
    id: 3,
    role: "PILOT",
    name: "VICTOR GLOVER",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64.",
    image: Img3
  },
  {
    id: 4,
    role: "FLIGHT ENGINEER",
    name: "ANOUSHEH ANSARI",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: Img4
  }
];

const CrewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Auto-rotation effect
  useEffect(() => {
    let interval;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % crewMembers.length);
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying]);
  
  // Pause auto-rotation when user interacts with dots
  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    
    // Resume auto-rotation after 10 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };
  
  const currentMember = crewMembers[currentIndex];
  
  return (
    <div className="flex w-full flex-col items-center px-6 py-12 min-h-screen bg-cover bg-center bg-[url('/Crew-bg.png')] overflow-y-hidden">
      <div className="flex center-div items-center lg:justify-center sm:justify-between flex-col md:flex-row transform md:translate-y-30 sm:translate-y-25 translate-y-20 ">
        <div className="flex flex-col items-center gap-24 w-full md:w-1/2">
          <div className="flex text-start w-full">
            <span className="dosis text-[22px] font-caption-bold text-neutral-200 tracking-[0.1em] inline-block text-center sm:text-start w-full">
              <span className="text-gray-500 font-bold">02</span> MEET YOUR CREW
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-6">
            <span className="text-xl md:text-3xl  text-gray-400 bellefair">
              {currentMember.role}
            </span>
            <span className="text-3xl md:text-5xl  text-gray-100 bellefair inline-block text-center md:text-start">
              {currentMember.name}
            </span>
            <span className="vazirmatn w-full sm:max-w-[400px] lg:max-w-[500px] text-gray-400 text-center md:text-left leading-6 md:leading-7 break-words text-[12px] md:text-base">
              {currentMember.bio}
            </span>
            <div className="flex items-center gap-4 pt-10">
              {crewMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-3 w-3 rounded-full hover:bg-gray-400 ${
                    index === currentIndex ? "bg-white" : "bg-gray-600"
                  } transition-colors duration-300`}
                  aria-label={`View crew member ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-end justify-between w-full md:w-1/2">
          <img
            className="h-125 flex-none object-contain transition-opacity duration-500"
            src={currentMember.image}
            alt={currentMember.name}
          />
        </div>
      </div>
    </div>
  );
};

export default CrewCarousel;