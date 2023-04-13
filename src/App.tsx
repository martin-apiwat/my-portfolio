import React from "react";
import "./App.scss";

export default function App() {
   return (
      <div>
         <div className="navbar">
            <ul>
               <li>About me</li>
               <li>Projects</li>
               <li>Contact</li>
            </ul>
         </div>
         <div className="welcome">
            <h1>Welcome to my portfolio</h1>
         </div>
         <div className="image-text">
            <img src="./img/Martin.jpeg" alt="" height="400px" />
            <div className="about-me">
               <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                  sunt excepturi dolor odio veniam ad omnis non suscipit quas
                  itaque.
               </p>
            </div>
         </div>
         <div className="languages">
            <h3>
               TypeScript, JavaScript, React, Next, Node, Express, MongoDB,
               Sass, CSS
            </h3>
         </div>
         <div className="projects"></div>
      </div>
   );
}
