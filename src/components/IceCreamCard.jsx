import React, { useState } from "react";

const IceCreamCard = (props) => {
  const [isAdded, setIsAdded] = useState(false);
  // const [cart, setCart] = useState(0);

  const handleAddToCart = () => {
    setIsAdded(true);
    // setCart(cart + 1);
    setTimeout(() => {
      setIsAdded(false, isAdded + 1);
    }, 800);
  };
  return (
    <div className="flex flex-col items-center w-64 p-4 m-4">
      <div className="flex grid-col rounded-full overflow-hidden w-64 h-64 mb-4 border-2 border-black">
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
      <button
        onClick={handleAddToCart}
        className={`w-full ${
          isAdded ? "bg-black text-white" : "bg-white text-black"
        } border-2 border-black border-b-4 rounded-full py-3 px-6 font-InstrumentSans text-lg transition-all duration-550 hover:bg-black hover:text-white`}>
        {isAdded ? "Added to Cart!" : "Add to Cart"}
      </button>
    </div>
  );
};

export default IceCreamCard;
