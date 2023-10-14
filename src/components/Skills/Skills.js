import React from "react";
import "./Skills.css"; 
import webDevelopmentImage from "./webDevelopmentImage.png";
import reactImage from "./reactImage.png";
import jsImage from "./jsImage.png";
import htmlCssImage from "./htmlCssImage.png";
import problemSolvingImage from "./problemSolvingImage.png";
import programmingImage from "./programmingImage.png"; 

function Skills() {
  return (
    <section className="skills">
      <h1><b>Skills</b></h1>
      <ul className="skills-list">
        <li>
          <h1>Web Development</h1>
          <img src={webDevelopmentImage} alt="Web Development" />
        </li>
        <li>
          <h1>React.js</h1>
          <img src={reactImage} alt="React.js" />
        </li>
        <li>
          <h1>JavaScript</h1>
          <img src={jsImage} alt="JavaScript" />
        </li>
        <li>
          <h1>HTML & CSS</h1>
          <img src={htmlCssImage} alt="HTML & CSS" />
        </li>
        <li>
          <h1>Problem Solving</h1>
          <img src={problemSolvingImage} alt="Problem Solving" />
        </li>
        <li>
          <h1>Python, C, C++, Java</h1>
          <img src={programmingImage} alt="Python, C, C++, Java" />
        </li>
      </ul>
    </section>
  );
}

export default Skills;
