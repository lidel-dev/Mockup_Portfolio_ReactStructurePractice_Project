import React from "react";
import "./style.css";
import Header from "../home/Header";
import profilePic from '../../img/profilePic.jpg';
import Footer from "../home/Footer";

function AboutFunction() {
    return (
        
        //add html here
        <div className = "aboutDiv">
            <Header title="About Me"/>
            <div className="divCard">
                <h4>About Me</h4>
                <img class="resize" src={profilePic}></img>
                <p>My name is Spencer Lore and im a full stack developer.
                    I like to hike in the summers and snowboard in the winters.
                    Im also an artist proficient in affinity softwares, adobe softwares, blender, 
                    and maya and am working towards learning additional programing languages to create videogames. </p>
            </div>
            <Footer title="Contact Me"/>
            <a href="https://github.com/22Slore"> github |</a>
            <a href="https://www.linkedin.com/in/spencer-lore-568a2218a/"> LinkedIn |</a>
            <a href="gmail.com"> Email: spencer.lore04@gmail.com</a>
        </div>
    );
}

export default AboutFunction;