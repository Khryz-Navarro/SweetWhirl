import React from "react";
import { Link } from "react-router";

//TODO: create cart page
function Cart() {
  return (
    <>
      <div className="font-GochiHand justify-center justify-items-center text-center items-center text-4xl cursor-progress h-screen w-full p-20">
        <Link to={"/"}>
          <h1>Go back</h1>
        </Link>
        <div className="p-20 my-20">
          <h1 className="font-GochiHand justify-center justify-items-center text-center items-center">
            Theres Nothing in Cart yet
          </h1>
        </div>
      </div>
    </>
  );
}

export default Cart;
