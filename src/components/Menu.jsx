import React from "react";
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
  return (
    <div className="p-1 m-0">
      <div className="justify-center items-center text-center p-8 m-8">
        <h1 className="text-center font-GochiHand font-bold text-5xl">
          Flavors
        </h1>
      </div>
      <div className="flex col-3 p-8 m-8 gap-4 justify-center items-center flex-wrap">
        <IceCreamCard
          img={CookiesnCream}
          flavor="Cookies & Cream"
          price={10.0}
        />
        <IceCreamCard img={Vanilla} flavor={"Vanilla Cream"} price={8} />
        <IceCreamCard img={Blackberry} flavor={"Blackberry"} price={8} />
      </div>
      <div className="flex col-3 p-4 m-4 gap-4 justify-center items-center flex-wrap">
        <IceCreamCard img={RockyRoad} flavor={"Rocky Road"} price={10} />
        <IceCreamCard img={Mango} flavor={"Mango"} price={9} />
        <IceCreamCard img={ChocoMint} flavor={"ChocoMint"} price={10} />
      </div>
      <div className="flex col-3 p-4 m-4 gap-4 justify-center items-center flex-wrap">
        <IceCreamCard img={Caramel} flavor={"Caramel"} price={11} />
        <IceCreamCard img={Cherry} flavor={"Cherry"} price={12} />
        <IceCreamCard img={Pistachio} flavor={"Pistachio"} price={9} />
      </div>
    </div>
  );
};

export default Menu;
