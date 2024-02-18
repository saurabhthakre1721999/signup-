import React, { useRef, useState } from "react";
import { Link, json, useActionData } from "react-router-dom";
const Signup = () => {
  const emailOrMobile = useRef();
  const password = useRef();
  const name = useRef();

  const onSingIUp = (e) => {
    const emailOrMobileValue = emailOrMobile.current.value;
    const passwordValue = password.current.value;
    const nameValue = name.current.value;
    console.log("firstname", name);

    if (emailOrMobileValue === "") {
      alert();
    } else if (!emailOrMobileValue.includes("@")) {
      alert();
    } else if (name === "") {
      alert();
    } else if (name.legnth < 6) {
      alert();
    } else if (passwordValue.legnth < 8) {
      alert();
    } else {
      const newUser = {
        email: emailOrMobileValue,
        password: passwordValue,
        name: nameValue,
      };
      localStorage.setItem("users", JSON.stringify([newUser]));
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
          <h3>Create a new account It's quick and easy</h3>.
        </div>{" "}
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="fullname"
            ref={name}
          />
        </div>
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
          <Link to="/">Already have an account?</Link>
        </div>
      </div>
    </>
  );
};
export default Signup;
