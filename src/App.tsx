import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";

export default function App() {
   return (
      <div>
         <Navbar />
         <About />
         <div className="projects"></div>
      </div>
   );
}
