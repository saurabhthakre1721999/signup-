import React from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <div>
        <div>
          <label htmlFor="firstname"> Username</label>
          <input type="text" name="" id="firstname" />
        </div>
        <div>
          <label htmlFor="Password "> Password</label>
          <input type="password" name="" id="Password" />
        </div>
        <div>
          {" "}
          <Link to="/login">Login</Link>
        </div>
      </div>
    </>
  );
};
export default Signup;
