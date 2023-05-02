import React from "react";
import Carousel from "../Carousel";

type Props = {};

const About = (props: Props) => {
   return (
      <div className="about-container">
         <div className="image-text">
            {/* <img src="./img/Martin.jpeg" alt="" /> */}
            <div className="profile-pic"></div>
            <p>Hej, mitt namn är Martin 👋</p>
            <h2>Lorem ipsum dolor sit amet.</h2>
         </div>
         {/* <div className="languages">
            <h3>
               TypeScript, JavaScript, React, Next, Node, Express, MongoDB,
               Sass, CSS
            </h3>
         </div> */}
         <Carousel />
      </div>
   );
};

export default About;
