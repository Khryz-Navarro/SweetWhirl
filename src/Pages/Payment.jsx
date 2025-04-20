import React from "react";
import { Link } from "react-router";

const Payment = () => {
  return (
    <>
      <div>
        <h1>Payment Page</h1>
        <Link to={"/Cart"}>
          <h1>Go back</h1>
        </Link>
      </div>
    </>
  );
};

export default Payment;
