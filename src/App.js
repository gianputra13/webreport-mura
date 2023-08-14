import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PrintWebView from "./components/PrintWebView";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/webview" element={<PrintWebView />} />
    </Routes>
  );
};

export default App;
