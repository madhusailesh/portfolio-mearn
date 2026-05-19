import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./index.css";
import Lenis from "lenis";
import SmoothScroll from "./components/SmoothScroll";
import { useEffect } from "react";
import CustomCursor from "./components/CustomCursor";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Toaster />
    <SmoothScroll />/
    <CustomCursor />
    <App />
    
  </BrowserRouter>,
);
