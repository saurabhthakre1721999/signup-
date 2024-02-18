import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div>
        <div>
          <label htmlFor="Username "> Username</label>
          <input type="text" name="" id="Username" />
        </div>
        <div>
          <label htmlFor="Password "> Password</label>
          <input type="text" name="" id="Password" />
        </div>
        <div>
          {" "}
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </>
  );
};
export default Login;
