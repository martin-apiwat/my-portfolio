import React from "react";

type Props = {};

const About = (props: Props) => {
   return (
      <div>
         <div className="image-text">
            <img src="./img/Martin.jpeg" alt="" />
            <p>Hej, mitt namn är Martin 👋</p>
            <h2>Lorem ipsum dolor sit amet.</h2>
         </div>
         <div className="languages">
            <h3>
               TypeScript, JavaScript, React, Next, Node, Express, MongoDB,
               Sass, CSS
            </h3>
         </div>
      </div>
   );
};

export default About;
