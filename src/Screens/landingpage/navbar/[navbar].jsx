import React from "react";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <nav className=" flex sticky top-0 font-segoe px-8 md:px-12 lg:px-20 py-2 items-center mx-auto">
      <div className=" grid space-y-3 items-center ">
        <div className=" flex font-segoe justify-between items-center text-white">
          <div>
            <img
              className=" lg:w-[250px] md:w-[200px] w-[160px] lg:h-[47.2px] md:h-[43.2px] h-[42.2px]"
              src={require("../../assets/Logo.png")}
              alt=""
            />
          </div>

          <ul className=" lg:flex md:flex hidden items-center space-x-5">
            <li className="lg:text-[24px] md:text-[20px] cursor-pointer transition-transform hover:scale-110 duration-300 ease-in">
              Home
            </li>
            <li className="lg:text-[24px] md:text-[20px] cursor-pointer transition-transform hover:scale-110 duration-300 ease-in">
              Practice
            </li>
            <li className="lg:text-[24px] md:text-[20px] cursor-pointer transition-transform hover:scale-110 duration-300 ease-in">
              Leaderboard
            </li>
          </ul>

          <div className=" lg:flex md:flex hidden">
            <button className=" text-[16px] cursor-pointer bg-navbtncol flex items-center py-2 px-2 border-navbtncol transition-transform hover:scale-110 duration-300 ease-in">
              <img
                className=" w-[24px] h-[24px]"
                src={require("../../assets/Accicon.png")}
                alt=""
              />
              My account
            </button>
          </div>
        </div>
        <div>
          <img
            className=" w-full"
            src={require("../../assets/Navline.png")}
            alt=""
          />
        </div>
      </div>

      {/* Mobile screen */}

      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none "
        >
          <FaHamburger />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute md:px-16 px-8 top-16 left-0 w-full bg-white p-4 space-y-8">
          <ul className=" grid items-center text-black space-y-5">
            <li onClick={closeMenu} className="text-[24px] cursor-pointer">
              Home
            </li>
            <li onClick={closeMenu} className="text-[24px] cursor-pointer">
              Practice
            </li>
            <li onClick={closeMenu} className="text-[24px] cursor-pointer">
              Leaderboard
            </li>
          </ul>

          <div>
            <button
              onClick={closeMenu}
              className=" text-[16px] cursor-pointer bg-navbtncol flex items-center py-2 px-2 w-full justify-center border-navbtncol"
            >
              <img
                className=" w-[24px] h-[24px]"
                src={require("../../assets/Accicon.png")}
                alt=""
              />
              My account
            </button>
          </div>

          {/* social medial for small screen */}
          <div className="  lg:hidden md:hidden flex w-full justify-center items-center space-x-4">
            <img
              className=" w-[24px] h-[24px]"
              src={require("../../assets/Linkedin.png")}
              alt=""
            />
            <img
              className=" w-[24px] h-[24px]"
              src={require("../../assets/Instagram.png")}
              alt=""
            />
            <img
              className=" w-[24px] h-[24px]"
              src={require("../../assets/Twitter.png")}
              alt=""
            />
            <img
              className=" w-[24px] h-[24px]"
              src={require("../../assets/Facebook.png")}
              alt=""
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
