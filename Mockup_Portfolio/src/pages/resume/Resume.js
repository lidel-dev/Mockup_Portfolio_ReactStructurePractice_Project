import React from "react";
import "./style.css";
import Header from "../home/Header";
import Footer from "../home/Footer";

function Resume() {
    return(
    //add html here (a way to reach out including text fields and a submit btn)
    <div className="contactDiv">
        <Header title="Contact me"/>
      <p>Download My Resume:</p>
      <a href="https://docs.google.com/document/d/16x7wQ4kUmZhfrFJxSDOSLYxlryABYJIvStrQxOziXbo/edit?usp=sharing">Download Link</a>
      <ul>
        <h1>Proficiencies:</h1>
        <li>Javascript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>SQL</li>
        <li>NoSQL</li>
        <li>MERN</li>
        <li>STATE</li>
      </ul>
      <Footer title="Contact Me"/>
      <a href="https://github.com/22Slore"> github |</a>
            <a href="https://www.linkedin.com/in/spencer-lore-568a2218a/"> LinkedIn |</a>
            <a href="gmail.com"> Email: spencer.lore04@gmail.com</a>
    </div>
    );
}

export default Resume;
