import React from "react";
import { useState } from "react";
import IceCreamCard from "./IceCreamCard";
import CookiesnCream from "../assets/img/cookies_&_cream.png";
import Vanilla from "../assets/img/vanilla_cream.png";
import Blackberry from "../assets/img/blackberry.png";
import RockyRoad from "../assets/img/rocky_road.png";
import Mango from "../assets/img/mango.png";
import ChocoMint from "../assets/img/choco_mint.png";
import Caramel from "../assets/img/caramel_cream.png";
import Cherry from "../assets/img/cherry_cream.png";
import Pistachio from "../assets/img/pistachio.png";

const Menu = () => {
  const iceCreamFlavors = [
    { img: CookiesnCream, flavor: "Cookies & Cream", price: 10.0 },
    { img: Vanilla, flavor: "Vanilla Cream", price: 8 },
    { img: Blackberry, flavor: "Blackberry", price: 8 },
    { img: RockyRoad, flavor: "Rocky Road", price: 10 },
    { img: Mango, flavor: "Mango", price: 9 },
    { img: ChocoMint, flavor: "ChocoMint", price: 10 },
    { img: Caramel, flavor: "Caramel", price: 11 },
    { img: Cherry, flavor: "Cherry", price: 12 },
    { img: Pistachio, flavor: "Pistachio", price: 9 },
  ];
  return (
    <div>
      <div className="justify-center items-center text-center p-8 m-8">
        <h1 className="text-center font-GochiHand font-bold text-5xl">
          Flavors
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-1 p-4 m-4 justify-items-center">
        {iceCreamFlavors.map((item, index) => (
          <IceCreamCard
            key={index}
            img={item.img}
            flavor={item.flavor}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
