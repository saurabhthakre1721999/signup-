import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const emailOrMobile = useRef("");
  const password = useRef("");
  const navigate = useNavigate("");
  const onSingIUp = (e) => {
    const emailOrMobileValue = emailOrMobile.current.value;
    const passwordValue = password.current.value;
    console.log("emailOrMobile", emailOrMobileValue);
    const getUser = localStorage.getItem("users");
    console.log("get", getUser);

    if (emailOrMobileValue === "") {
      alert();
    } else if (!emailOrMobileValue.includes("@")) {
      alert();
    } else if (passwordValue.length < 8) {
      alert();
    } else {
      if (getUser && getUser.length) {
        const userData = JSON.parse(getUser);

        const validUser = userData.filter((use, ind) => {
          return (
            use.email === emailOrMobileValue && use.password === passwordValue
          );
        });

        if (validUser.length === 0) {
          alert("password incorect");
        } else {
          localStorage.setItem("loguser", JSON.stringify(validUser));

          navigate("/Home");
        }
      }
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
          padding: "20px",
          height: "300px",
        }}
      >
        <div>
          {" "}
          <h3>Log in here</h3>.
        </div>{" "}
        <div>
          <input
            type="text"
            name="emailormobile"
            id="email"
            placeholder="Mobile numeber or email address "
            ref={emailOrMobile}
          />
        </div>{" "}
        <div>
          <input
            type="password"
            name="password"
            id="Password"
            placeholder="New password"
            ref={password}
          />
        </div>
        <button name="onsingup" onClick={onSingIUp}>
          Sign Up
        </button>
        <div>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </>
  );
};
export default Login;
