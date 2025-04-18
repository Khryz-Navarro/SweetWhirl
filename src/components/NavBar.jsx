import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-20 flex items-center justify-between px-16 py-3 bg-opacity-80 backdrop-blur-sm">
      <div className="text-[24px] font-bold font-GochiHand">SweetWhirl</div>
      <div className="border-2 w-[576px] h-[64.89795684814453px] rounded-[50px] drop-shadow-2xl shadow-lg border-b-5">
        <ul className="flex gap-8 text-2xl  items-center justify-center h-full">
          <li className="text-gray-600 hover:text-black mb-3 cursor-pointer">
            Home
          </li>
          <li className="text-gray-600 hover:text-black mb-3 cursor-pointer">
            Menu
          </li>
          <li className="text-gray-600 hover:text-black mb-3 cursor-pointer">
            Contact
          </li>
          <li className="text-gray-600 hover:text-black mb-3 cursor-pointer">
            About
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
