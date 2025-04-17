import React from "react";

const IceCreamCard = (props) => {
  return (
    <div className="flex flex-col items-center w-64 p-4 m-4">
      <div className="rounded-full overflow-hidden w-64 h-64 mb-4 border-2 border-black">
        <img
          src={props.img}
          alt={props.alt}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="font-GochiHand text-xl mb-2">{props.flavor}</h2>
      <p className="font-InstrumentSans text-3xl font-bold mb-4">
        ${Number(props.price).toFixed(2)}
      </p>
      <button className="w-full bg-white text-black border-2 border-black border-b-4 rounded-full py-3 px-6 font-InstrumentSans text-lg transition-all duration-550 hover:bg-black hover:text-white dura">
        Add to Cart
      </button>
    </div>
  );
};

export default IceCreamCard;
