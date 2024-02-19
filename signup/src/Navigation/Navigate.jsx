import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Route, Routes } from "react-router";
import Signup from "../components/Atoms/signup";
import Login from "../components/login";
import Home from "../components/home";
import Header from "../components/Atoms/header";
import Createpost from "../components/Atoms/createpost";

const Navigate = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {" "}
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Createpost" element={<Createpost />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Navigate;
