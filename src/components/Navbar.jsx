import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-15 px-4 text-black-100  w-full mx-auto ${
        scrolling
          ? "bg-gray-700 shadow-md"
          : "bg-transparent transition duration-300"
      }`}
    >
      <Link to="/">
        {/* Display full name on larger screens and "HD" on mobile screens */}
        <div className="text-cyan-300 text-2xl font-bold">
          <span className="hidden sm:inline">Harshad Dongardive</span>
          <span className="sm:hidden">HD</span>
        </div>
      </Link>
      {/* <div className="text-cyan-300 text-2xl font-bold">Harshad Dongardive</div> */}
      {/* Navbar Links */}
      <ul className="hidden md:flex font-lighter ">
        {[
          "About",
          "Skills",
          "Experience",
          "Project",
          "Education",
          "Resume",
          "Contact",
        ].map((item) => (
          <li
            key={item}
            className={`p-4 font-semibold ${
              location.pathname === `/${item}` ? "text-cyan-300" : "text-white"
            }`}
          >
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>

      {/* Toggle Button for Mobile View */}
      <div className="md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? "md:hidden block fixed top-[72px] left-0 right-0  rounded-xl bg-gray-400 ease-in-out duration-500"
            : "hidden"
        }
      >
        {[
          "About",
          "Skills",
          "Experience",
          "Project",
          "Education",
          "Resume",
          "Contact",
        ].map((item) => (
          <li
            key={item}
            className="p-4 border-b rounded-xl text-white font-bold  border-gray-700"
          >
            <Link to={`/${item}`} onClick={handleNav}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
