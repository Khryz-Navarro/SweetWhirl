import React from "react";
import { Link } from "react-router";
import Login from "./Login";

//TODO: create cart page
function Cart() {
  return (
    <>
      <div>
        <Link to={"/"}>
          <h1>Go back</h1>
        </Link>
        <h1>Theres Nothing in Cart yet</h1>
      </div>
      <Link to={"/Login"}>Login</Link>
    </>
  );
}

export default Cart;
