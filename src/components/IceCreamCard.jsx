import React from "react";
import CookiesnCream from "../assets/img/cookies_&_cream.png";

const IceCreamCard = () => {
  const [name, price] = "";
  return (
    <>
      <div className="h-[508px] w-[280px] p-4">
        <img
          src={CookiesnCream}
          alt="Ice Cream"
          className="border-2 rounded-full"
        />
        <div>
          <h1>Cookies & Cream</h1>
        </div>
        <div>
          <h1>${"100"}</h1>
        </div>
        <div>
          <button className="font-InstrumentSans text-[24px]">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default IceCreamCard;
