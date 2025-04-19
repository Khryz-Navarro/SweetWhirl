import React from "react";

function Button() {
  // const [cart, setCart] = useState(0);
  const handleAddToCart = () => {
    // setCart(cart + 1);
  };
  return (
    <div>
      <button
        onClick={handleAddToCart}
        className={`w-full ${
          isAdded ? "bg-black text-white" : "bg-white text-black"
        } border-2 border-black border-b-4 rounded-full py-3 px-6 font-InstrumentSans text-lg transition-all duration-550 hover:bg-black hover:text-white`}>
        {isAdded ? "Added to Cart!" : "Add to Cart"}
      </button>
    </div>
  );
}

export default Button;
