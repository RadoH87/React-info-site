import React from "react";
import logo from "../images/small-react-logo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center w-full h-24 bg-gray-800 px-6">
      <img width="40px" src={logo} alt="react-logo" className="mr-2" />
      <h3 className="text-[#61dafb] font-semibold text-4xl mr-auto">
        ReactFacts
      </h3>
      <h4 className="font-semibold text-2xl">React Course - Project 1</h4>
    </nav>
  );
};

export default Navbar;
