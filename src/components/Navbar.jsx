import { useState } from "react";
import { FaMoon, FaLightbulb, FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../assets/navbar/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = ({ handleMode, darkMode }) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed z-20 w-full h-[80px] shadow-lg flex justify-between items-center px-4 bg-[#2b4b77] dark:bg-gray-500 text-gray-300 dark:text-gray-800">
      <Link
        className="cursor-ponter"
        to="/"
        onClick={() => window.scrollTo(0, 0)}
      >
        <img
          src={Logo}
          alt="Logo Image"
          style={{ width: "80px", height: "80px", borderRadius: "50px" }}
        />
      </Link>

      {/* menu */}
      <ul className="hidden md:flex space-x-10 text-md font-semibold tracking-wide">
        <li className="cursor-pointer">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            Home
          </Link>
        </li>
        <li className="hover:scale-110">
          <Link to="/about" className="peer">
            About
            <IoIosArrowDown className="inline ml-1" />
          </Link>
          <div className="hidden p-5 peer-hover:flex hover:flex bg-transparent w-[250px] -mt-2 h-[500px] absolute">
            <span
            className="peer-hover:flex flex absolute
         w-[150px] h-[150px] flex-col mt-5 bg-white drop-shadow-lg z-10"
          >
            <a className="px-2 py-3 hover:bg-gray-200 text-black" href="/about#vision">
              Our Vision
            </a>
            <a className="px-2 py-3 hover:bg-gray-200 text-black" href="/about#mission">
              Our Mission
            </a>
            <a className="px-2 py-3 hover:bg-gray-200 text-black" href="/about#coreValues">
              Core Values
            </a>
          </span>
          </div>
          
        </li>
        <li className="cursor-pointer">
          <Link to="/services">Services</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/resources">Resources</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Dark/Light Mode */}
      <div
        onClick={handleMode}
        className="z-30 ml-72 sm:ml-[30rem] md:ml-0 cursor-pointer dark:text-gray-800"
      >
        {darkMode ? <FaMoon size={27} /> : <FaLightbulb size={27} />}
      </div>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-30 cursor-pointer dark:text-gray-800"
      >
        {!nav ? <FaBars size={22} /> : <FaTimes size={22} />}
      </div>

      {/* Mobile menu */}
      <ul
        id="nav"
        className={`top-0 right-0 w-1/2 bg-[#0a192f] p-10 pl-20 text-white fixed h-full z-20 ease-in-out duration-300 flex flex-col justify-center items-center dark:bg-gray-100 dark:text-gray-800 space-y-8 ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <li className="py-2 text-3xl">
          <Link onClick={handleClick} className="cursor-pointer" to="/about">
            About
          </Link>
        </li>
        <li className="py-2 text-3xl">
          <Link onClick={handleClick} className="cursor-pointer" to="/courses">
            Courses
          </Link>
        </li>
        <li className="py-2 text-3xl">
          <Link onClick={handleClick} className="cursor-pointer" to="/services">
            Services
          </Link>
        </li>
        <li className="py-2 text-3xl">
          <Link onClick={handleClick} className="cursor-pointer" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
