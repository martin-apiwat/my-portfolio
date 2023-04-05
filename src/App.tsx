import React from "react";
import "./App.scss";

export default function App() {
   return (
      <div>
         <div className="main">
            <div className="welcome">
               <h1>Welcome to my portfolio</h1>
            </div>
            <div className="image-text">
               <img src="./img/Martin.jpeg" alt="" height="500px" />
               <div className="about-text">
                  <p>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Rem sunt excepturi dolor odio veniam ad omnis non suscipit
                     quas itaque.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}
