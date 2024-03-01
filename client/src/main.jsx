import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import UserContext from "./contexts/UserContext.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./axios/global.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserContext>
      <App />
    </UserContext>
  </BrowserRouter>
);
