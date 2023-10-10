import React from "react";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { Link } from "react-scroll";

import { Link as RouterLink } from "react-router-dom";

const HomeTenNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <nav className="fixed top-[-3px] left-0 right-0 z-20 bg-white px-8 h-20 shadow-md md:px-16 lg:px-28 flex items-center justify-between">
      <div className="text-black text-lg font-semibold">
        <p>Name/Logo</p>
      </div>
      <div className="hidden md:flex space-x-10">
        <Link
          to="product"
          smooth={true}
          className="text-black cursor-pointer no-underline transition-transform hover:scale-110 duration-300 ease-in"
        >
          Product
        </Link>
        <Link
          to="about"
          smooth={true}
          className="text-black cursor-pointer no-underline transition-transform hover:scale-110 duration-300 ease-in"
        >
          About Us
        </Link>
        <Link
          to="contact"
          smooth={true}
          className="text-black cursor-pointer no-underline transition-transform hover:scale-110 duration-300 ease-in"
        >
          Contact Us
        </Link>
      </div>
      <div>
        <RouterLink
          to="/register"
          className="px-4 py-2 lg:block md:block hidden bg-btncol rounded-3xl text-white no-underline transition-transform hover:scale-110 duration-300 ease-in"
        >
          Register
        </RouterLink>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black focus:outline-none "
        >
          <FaHamburger />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white p-4 space-y-8">
          <Link
            to="/"
            onClick={closeMenu}
            className="text-black block cursor-pointer no-underline transition-transform hover:scale-110 duration-300 ease-in"
          >
            Product
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className="text-black block cursor-pointer no-underline transition-transform hover:scale-110 duration-300 ease-in"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="text-black block cursor-pointer no-underline transition-transform hover:scale-110 duration-300 ease-in"
          >
            Contact Us
          </Link>
          <RouterLink
            to="/login"
            onClick={closeMenu}
            className="px-4 py-2 lg:hidden grid justify-center md:hidden cursor-pointer bg-btncol rounded-3xl text-white no-underline transition-transform hover:scale-110 duration-300 ease-in"
          >
            Register Now
          </RouterLink>
        </div>
      )}
    </nav>
  );
};

export default HomeTenNav;
