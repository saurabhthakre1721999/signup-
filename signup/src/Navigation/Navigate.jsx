import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Route, Routes } from "react-router";
import Signup from "../components/Atoms/signup";
import Login from "../components/Atoms/login";

const Navigate = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {" "}
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Navigate;
