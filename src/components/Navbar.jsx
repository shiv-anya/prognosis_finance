import React from "react";
import "../App.css";
import Logo from "../assets/image 1.svg";
import Earth from "../assets/Vector.svg";
import Dropdown from "../assets/Vector-1.svg"

const Navbar = () => {
  return (
    <nav className="flex gap-44 justify-center item-center p-5 bg-white">
      {/* Left Part */}
      <div className="logo flex justify-center items-center mr-20 gap-2 text-lg">
        <img src={Logo} alt="logoimg" className="h-10 w-10" />
        <h1 className="font-bold">
          Prognosis <span className="Finance">Finance</span>
        </h1>
      </div>
      {/* Middle Part */}
      <div className="nav-item flex justify-center items-center">
        <ul className="flex gap-8">
          <li className="cursor-pointer text-black">Home</li>
          <li className="cursor-pointer text-black">Trending</li>
          <li className="cursor-pointer text-black">About US</li>
          <li className="cursor-pointer text-black">Market</li>
          <li className="cursor-pointer text-black">Learn</li>
        </ul>
      </div>
      {/* Right Part */}
      <div className="right flex gap-1 justify-center items-center">
        <div className="items flex gap-1 justify-center items-center">
          <img src={Earth} alt="lang img" className="h-5  mt-0.5" />
          <span className="h-1 mb-4 font-semibold ml-2">EN</span>
        </div>
        <img src={Dropdown} alt="lang img" className="h-2  mt-1" />
        <button className="bg-purple-600 w-31 h-10 ml-7 p-2 text-center text-white rounded-lg hover:bg-purple-700">
          Enter App
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
