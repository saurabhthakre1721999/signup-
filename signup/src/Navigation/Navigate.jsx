import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Route, Routes } from "react-router";
import Signup from "../components/Atoms/signup";
import Login from "../components/Atoms/login";
import Home from "../components/home";

const Navigate = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {" "}
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Navigate;
