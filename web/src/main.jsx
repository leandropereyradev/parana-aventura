import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ParanaAventuraProvider } from "./context/paranaAventuraContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ParanaAventuraProvider>
        <App />
      </ParanaAventuraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
