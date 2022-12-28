import React from "react";
import Logo from "../assets/navbar/logo.png";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 px-12 py-8 text-gray-100">
      <div className="grid grid-cols-3 gap-8 w-[80vw] mx-auto">
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
          <h6>+234 8102 5853</h6>
          <h6>support@gmal.com</h6>
        </div>

        <div>
          <h6 className="mb-4">Quick Links</h6>
          <div className="flex gap-12 ">
            <span>Home</span>
            <span>Blog</span>
          </div>
          <div className="flex gap-12">
            <span>Services</span>
            <span>Contact</span>
          </div>
        </div>

        <div className="flex flex-wrap flex-row">
            <div className="flex justify-center flex-col">
                <div>Home</div>
                </div>
            <div className="flex justify-center flex-col">
                <div>Blog</div>
            </div>
            <div className="flex justify-center flex-col">
                <div>Services</div>
            </div>
            <div className="flex justify-center flex-col">
                <div>Contact</div>
            </div>
        </div>

        <div>
          <h3 className="pb-3">Subscribe</h3>
          <div className="flex text-black gap-2">
            <textarea name="" id="" cols="20" rows="1" className="outline-none"></textarea>
            <div className="inline bg-gray-300 p-[2px]">
              <MdOutlineKeyboardArrowRight
                size={25}
                className="inline"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
