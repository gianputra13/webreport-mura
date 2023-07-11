import React from "react";
import "./App.css";
// import "rsuite/dist/rsuite.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import TableData from "./components/TableData";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <TableData />
      <Footer />
    </>
  );
}

export default App;
