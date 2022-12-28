import React from "react";
import Logo from "../assets/navbar/logo.png";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 px-12 py-8 text-gray-100">
      <div className="grid grid-cols-3 gap-8">
        <div>
          <div className="flex">
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
            <span className="text-xl my-auto">MODA</span>
          </div>
          <span>+234 8102 5853</span>
          <span>support@gmal.com</span>
        </div>

        <div>
          <h6>Quick Links</h6>
          <div className="flex gap-12">
            <span>Home</span>
            <span>Blog</span>
          </div>
          <div className="flex gap-12">
            <span>Services</span>
            <span>Contact</span>
          </div>
        </div>

        <div>
          <h3 className="pb-3">Subscribe</h3>
          <div className="flex">
            <textarea name="" id="" cols="20" rows="1"></textarea>
            <div className="inline bg-gray-300 m-2 p-[2px]">
              <MdOutlineKeyboardArrowRight
                size={25}
                className="text-black inline"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
