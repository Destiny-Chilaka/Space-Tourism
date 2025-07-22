import { useState } from "react";
import ToggleGroup from "./ToggleGroup";
import Moon from "../assets/moon.png";
import Mars from "../assets/mars.png";
import Europa from "../assets/europa.png";
import Titan from "../assets/titan.png";

import './Destination.css'
export default function Destination() {
  const destinations = {
    moon: {
      name: "MOON",
      image:
        Moon,
      description:
        "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 KM",
      travelTime: "3 DAYS",
    },
    mars: {
      name: "MARS",
      image:
        Mars,
      description:
        "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
      distance: "225 MIL. KM",
      travelTime: "9 MONTHS",
    },
    europa: {
      name: "EUROPA",
      image:
        Europa,
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 MIL. KM",
      travelTime: "3 YEARS",
    },
    titan: {
      name: "TITAN",
      image:
        Titan,
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 BIL. KM",
      travelTime: "7 YEARS",
    },
  };
  const [selectedDestination, setSelectedDestination] = useState("moon");
  const currentDestination = destinations[selectedDestination];

  return (
    <div className="flex w-full flex-col items-center min-h-screen bg-cover bg-center bg-[url('/Destination-bg.png')] overflow-y-hidden">
      <div className="flex w-full max-w-[1280px] flex-col items-start gap-10 sm:gap-9 md:gap-13 px-6 py-12 md:px-8 md:py-16 lg:px-12 transform md:translate-y-20 sm:translate-y-15 center-div ">
        {/* Header */}
        <span className="dosis text-[22px] font-caption-bold text-neutral-300 tracking-[0.15em] inline-block text-center sm:text-start w-full">
          <span className="text-gray-500 font-bold">01</span> PICK YOUR DESTINATION
        </span>

        {/* Content Container */}
        <div className="flex w-full flex-col lg:flex-row lg:items-start items-center gap-9 lg:gap-24">
          {/* Image - Full width on mobile/tablet, 40% on desktop */}
          <div className="flex items-center justify-center w-full lg:w-[40%]">
            <img
              className="h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 object-contain"
              src={currentDestination.image}
              alt={currentDestination.name}
            />
          </div>

          {/* Content - Full width on mobile/tablet, 60% on desktop */}
          <div className="flex w-full lg:w-[60%] flex-col items-center lg:items-start gap-4 md:gap-8 dosis">
            {/* Navigation Tabs */}
            <ToggleGroup
              value={selectedDestination}
              onValueChange={setSelectedDestination}
            >
              <ToggleGroup.Item value="moon">MOON</ToggleGroup.Item>
              <ToggleGroup.Item value="mars">MARS</ToggleGroup.Item>
              <ToggleGroup.Item value="europa">EUROPA</ToggleGroup.Item>
              <ToggleGroup.Item value="titan">TITAN</ToggleGroup.Item>
            </ToggleGroup>

            {/* Destination Info */}
            <div className="flex w-full flex-col items-center lg:items-start gap-3 sm:gap-6">
              <span className="bellefair text-[56px] md:text-[64px] lg:text-[90px] font-[600] leading-[1.2] text-white -tracking-[0.04em]  text-center lg:text-left ">
                {currentDestination.name}
              </span>
              <span className="text-gray-400 text-center lg:text-left sm:leading-6 md:leading-7 max-w-[400px]">
                {currentDestination.description}
              </span>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-neutral-700" />

            {/* Stats */}
            <div className="flex w-full flex-col sm:flex-row items-center sm:justify-center lg:justify-start gap-6 md:gap-24">
              <div className="flex flex-col items-center lg:items-start sm:gap-2">
                <span className="text-[12px] font-caption-bold text-neutral-400 tracking-[0.1em]">
                  AVG. DISTANCE
                </span>
                <span className=" text-white text-xl bellefair">
                  {currentDestination.distance}
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <span className="text-[12px] font-caption-bold text-neutral-400 tracking-[0.1em]">
                  EST. TRAVEL TIME
                </span>
                <span className="text-body-bold font-body-bold text-white text-xl bellefair">
                  {currentDestination.travelTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
