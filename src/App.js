import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./index.css";

const App = () => {
  return (
    <div className=" container font-inter h-[90vh]  bg-stone-800 text-stone-200 bg-gradient-to-r from-indigo-500 to-sky-500  ">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
