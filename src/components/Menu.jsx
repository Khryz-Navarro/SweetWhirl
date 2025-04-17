import React from "react";
import IceCreamCard from "./IceCreamCard";

const Menu = () => {
  return (
    <div className="p-1 m-1 h-screen ">
      <div className="justify-center items-center text-center p-8 m-8">
        <h1 className="text-center font-GochiHand font-bold text-5xl">
          Flavors
        </h1>
      </div>
      <div className="flex p-4 m-4 gap-4 justify-center items-center flex-wrap">
        <IceCreamCard />
        <IceCreamCard />
        <IceCreamCard />
      </div>
    </div>
  );
};

export default Menu;
