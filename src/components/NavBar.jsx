import React from "react";
import { FaShoppingCart } from "react-icons/fa";
// import { Link } from "react-router";

const NavBar = () => {
  const scrollTo = (x, y) => () => {
    window.scrollTo({
      top: y,
      left: x,
      behavior: "smooth",
      animation: "ease-in-out",
    });
  };
  return (
    <nav className="sticky top-0 z-20 md:flex hidden items-center justify-between px-16 py-3 bg-opacity-80 backdrop-blur-sm">
      <div className="text-[24px] font-bold font-GochiHand">SweetWhirl</div>
      <div className="border-2 w-[576px] h-[64.89795684814453px] rounded-[50px] drop-shadow-2xl shadow-lg border-b-5">
        <ul className="flex gap-8 text-2xl  items-center justify-center h-full">
          <li
            onClick={scrollTo(0, 0)}
            className="text-gray-600 hover:text-black mb-3 cursor-pointer">
            Home
          </li>
          <li
            onClick={scrollTo(0, 1300)}
            className="text-gray-600 hover:text-black mb-3 cursor-pointer">
            Menu
          </li>
          <li
            onClick={scrollTo(0, 3000)}
            className="text-gray-600 hover:text-black mb-3 cursor-pointer">
            About
          </li>
          <li
            onClick={scrollTo(0, 4000)}
            className="text-gray-600 hover:text-black mb-3 cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
      <div>
        <FaShoppingCart size={40} className="hover:cursor-pointer" />
      </div>
    </nav>
  );
};

export default NavBar;
