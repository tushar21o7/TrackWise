import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import UserContext from "./contexts/UserContext.jsx";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContext>
    <App />
  </UserContext>
);
