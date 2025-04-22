import React from "react";
import "./style.css";
import Header from "./Header";
import Footer from "./Footer";
import profilePic from '../../img/profilePic.jpg';
function Home() {
    return(
    //add html here
    <div className="navDiv">
        
        <Header title="About Me"/>
    <div className="navCard">
        <p></p>
        <img class="resize" src={profilePic}></img>
                <p>My name is Spencer Lore and im a full stack developer.
                    I like to snowboard in my free time and my favorite food is pizza.
                    Im also an artist and am working towards learning c++ to create games. </p>
        <nav>
        </nav>
    </div>
    <Footer title="Contact Me"/>
    <a href="https://github.com/22Slore"> github |</a>
            <a href="https://www.linkedin.com/in/spencer-lore-568a2218a/"> LinkedIn |</a>
            <a href="gmail.com"> Email: spencer.lore04@gmail.com</a>
</div>
    );
}

export default Home;