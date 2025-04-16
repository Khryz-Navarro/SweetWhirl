import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-16 py-4 bg-white">
      <div className="text-3xl font-bold">SweetWhirl</div>
      <div className="flex items-center gap-8 px-8 py-2 bg-white border-2 border-gray-100 rounded-full shadow-2xl drop-shadow-2xl">
        <ul className="flex gap-8 text-2xl">
          <li className="text-gray-600 hover:text-black">Home</li>
          <li className="text-gray-600 hover:text-black">Menu</li>
          <li className="text-gray-600 hover:text-black">Contact</li>
          <li className="text-gray-600 hover:text-black">About</li>
        </ul>
      </div>

      <div className="text-2xl text-black">
        <FaShoppingCart />
      </div>
    </nav>
  );
};

export default NavBar;
