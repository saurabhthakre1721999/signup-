import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Signup from "./components/Atoms/signup.jsx";
import Navigate from "./Navigation/Navigate.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navigate />
  </React.StrictMode>
);
