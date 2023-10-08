import React, { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const HomeNineNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <nav className=" bg-transparent p-8 md:px-16 lg:px-28 fixed top-0 right-0 left-0 flex items-center justify-between">
      <div className=" flex items-center space-x-24">
        <div className=" text-white">Logo/Name</div>
      </div>

      <div className="hidden lg:flex md:flex space-x-10">
        <Link
          to="product"
          smooth={true}
          className="text-white cursor-pointer no-underline"
        >
          Product
        </Link>
        <Link
          to="about"
          smooth={true}
          className="text-white cursor-pointer no-underline"
        >
          About Us
        </Link>
        <Link
          to="contact"
          smooth={true}
          className="text-white cursor-pointer no-underline"
        >
          Contact Us
        </Link>
      </div>

      <div>
        <RouterLink
          to="/login"
          className=" lg:h-[48px] md:h-[48px] items-center text-black no-underline justify-center font-medium hover:text-black duration-300 lg:w-[129px] md:w-[129px] bg-white md:flex lg:flex hidden rounded-3xl text-[16px]"
        >
          Register now
        </RouterLink>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          <FaHamburger />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-[0px] left-0 w-[300px] bg-heightcpl p-4 space-y-8">
          <Link
            to="product"
            onClick={closeMenu}
            className="text-white block cursor-pointer no-underline"
          >
            Product
          </Link>
          <Link
            to="about"
            onClick={closeMenu}
            className="text-white block cursor-pointer no-underline"
          >
            About Us
          </Link>
          <Link
            to="contact"
            onClick={closeMenu}
            className="text-white block cursor-pointer no-underline"
          >
            Contact Us
          </Link>
          <div className="mt-4">
            <RouterLink
              to="/login"
              className="px-4 py-2 bg-homeSixCol font-bold rounded-3xl text-white no-underline"
            >
              Register
            </RouterLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default HomeNineNav;
