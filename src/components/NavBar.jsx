import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-16 py-4 bg-white">
      <div className="text-[24px] font-bold font-GochiHand">SweetWhirl</div>
      <div className="border-2 w-[576px] h-[64.89795684814453px] rounded-[50px] drop-shadow-2xl shadow-lg border-b-5">
        <ul className="flex gap-8 text-2xl cursor-pointer items-center justify-center h-full">
          <li className="text-gray-600 hover:text-black mb-3">Home</li>
          <li className="text-gray-600 hover:text-black mb-3">Menu</li>
          <li className="text-gray-600 hover:text-black mb-3">Contact</li>
          <li className="text-gray-600 hover:text-black mb-3">About</li>
        </ul>
      </div>
      <div>
        <FaShoppingCart size={40} />
      </div>
    </nav>
  );
};

export default NavBar;
