import React from "react";

type Props = {};

const Navbar = (props: Props) => {
   return (
      <div className="nav-container">
         <div className="navbar">
            <div className="contact">Get in touch with me</div>
            <ul>
               <li>About me</li>
               <li>Projects</li>
               <li>Contact</li>
            </ul>
         </div>
      </div>
   );
};

export default Navbar;
