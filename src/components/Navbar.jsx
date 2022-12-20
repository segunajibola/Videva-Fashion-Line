import { useState, useEffect } from "react";
import { FaMoon, FaLightbulb, FaBars, FaTimes } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";
import Logo from "../assets/navbar/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = ({ handleMode, darkMode }) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return loading ? ( "" )
      : (
    <div className="animate-fade-in-down fixed z-20 w-full h-[80px] flex justify-between items-center px-4 bg-gray-900 dark:bg-gray-100 text-gray-300 dark:text-gray-800">
      {/* menu */}
      <ul className="hidden md:flex space-x-10 text-lg tracking-wide mx-auto">
        <li className="cursor-pointer my-3">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            Home
          </Link>
        </li>
        <li className="cursor-pointer my-3">
          <Link to="/about">
            About
          </Link>          
        </li>
        <li>
        <Link
        className="cursor-pointer my-3"
        to="/"
        onClick={() => window.scrollTo(0, 0)}
      >
        <img
          src={Logo}
          alt="Logo Image"
          style={{ width: "60px", height: "60px", borderRadius: "50px" }}
        />
      </Link>
        </li>
        <li className="cursor-pointer my-3">
          <Link to="/services">Services</Link>
        </li>
        <li className="cursor-pointer my-3">
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
