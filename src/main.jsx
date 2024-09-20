import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./stars.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    <App />
  </StrictMode>
);
