import React from "react";
import Logo from "../assets/navbar/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 px-12 py-8 text-gray-100">
      <div className="grid gap-8">
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
        </div>
        <div></div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
