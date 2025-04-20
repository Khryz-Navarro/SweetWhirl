import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <>
      <p>This is the login page</p>
      <div>
        <Link to={"/"}>
          <h1>Go back</h1>
        </Link>
      </div>
    </>
  );
};

export default Login;
