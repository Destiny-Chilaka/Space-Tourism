import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png"; // Adjust the path to your logo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="dosis flex justify-between items-center absolute top-5 sm:top-0 md:left-0 md:right-0 md:py-10 sm:right-0 z-20 sm:gap-15 md:gap-0 w-full">
        <div className="text-white text-2xl font-bold flex items-center justify-center">
          <span className="inline-block ml-5 sm:ml-10 sm:transform sm:-translate-x-5 ">
            <img src={Logo} alt="" className="sm:h-10 sm:w-10 w-8 h-8" />
          </span>{" "}
          {/* Placeholder for logo, replace with actual logo */}
        </div>
        <div className="hidden lg:block absolute left-28 top-23  w-[37%] bg-[#9797977e] h-[1px] z-30 "></div>
        <ul className="hidden space-x-12  sm:flex xl:space-x-20 text-[#fff] backdrop-blur-3xl shadow-[0_0_2px_0.5px_rgba(255,255,255,0.1)] sm:py-7 md:py-10 sm:pl-17 md:pl-20 sm:pr-5 md:pr-10 sm:bg-[#dbd1d10e] lg:bg-transparent">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `sm:hover:border-b-2 sm:hover:border-gray-400 py-8 md:py-10 tracking-wider xl:tracking-widest sm:text-sm md:text-base${
                  isActive ? " active" : ""
                }`
              }
            >
              <span className="font-bold text-white md:inline-block sm:mr-1 md:mr-2 sm:hidden">
                00
              </span>{" "}
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              className="hover:border-b-2 border-gray-400 py-8 md:py-10 tracking-wider xl:tracking-widest sm:text-sm md:text-base"
            >
              <span className="font-bold text-white inline-block sm:mr-1 md:mr-2">
                01
              </span>{" "}
              DESTINATION
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crew"
              className="hover:border-b-2 border-gray-400 py-8 md:py-10 tracking-wider xl:tracking-widest sm:text-sm md:text-base"
            >
              <span className="font-bold text-white inline-block sm:mr-1 md:mr-2">
                02
              </span>{" "}
              CREW
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className="hover:border-b-2 border-gray-400 py-8 md:py-10 tracking-wider xl:tracking-widest sm:text-sm md:text-base"
            >
              <span className="font-bold text-white inline-block sm:mr-1 md:mr-2">
                03
              </span>{" "}
              TECHNOLOGY
            </NavLink>
          </li>
        </ul>
        <div className="block sm:hidden text-white mr-5">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hover:text-gray-300 text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}{" "}
            {/* Toggle between hamburger and close icon */}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 bg-opacity-50 z-50">
          <div className="fixed top-0 right-0 h-full w-[70vw] max-w-xs backdrop-blur-2xl flex flex-col items-start text-left py-6 ">
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-white mr-5 text-2xl mb-[20%] hover:text-gray-300 font-light"
              aria-label="Close menu"
            >
              <AiOutlineClose />
            </button>
            <ul className="text-white text-right space-y-6 py-6 pl-7 backdrop-blur-sm bg-opacity-70 w-full dosis">
              <li className="flex items-start text-left">
                <NavLink
                  to="/"
                  className="hover:border-r-2 hover:border-gray-400 w-full leading-6 tracking-widest text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="font-bold mr-3">00</span> HOME
                </NavLink>
              </li>
              <li className="flex items-start text-left">
                <NavLink
                  to="/destination"
                  className="hover:border-r-2 hover:border-gray-400 w-full leading-6 tracking-widest text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="font-bold mr-3">01</span> DESTINATION
                </NavLink>
              </li>
              <li className="flex items-start text-left">
                <NavLink
                  to="/crew"
                  className="hover:border-r-2 hover:border-gray-400 w-full leading-6 tracking-widest text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="font-bold mr-3">02</span> CREW
                </NavLink>
              </li>
              <li className="flex items-start text-left">
                <NavLink
                  to="/technology"
                  className="hover:border-r-2 hover:border-gray-400 w-full leading-6 tracking-widest text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="font-bold mr-3">03</span> TECHNOLOGY
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
