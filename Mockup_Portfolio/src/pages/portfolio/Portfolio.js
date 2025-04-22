import React from "react";
import "./style.css";
import Header from "../home/Header";
import Footer from "../home/Footer";
import picOne from '../../img/freshBacon.png';
import picTwo from '../../img/Capture999.png';
import picThree from '../../img/sqlsnipping.png';
import picFour from '../../img/codequiz.png';
import picFive from '../../img/weathersnip.jpg';
import picSix from '../../img/images.png';


function ReactFunction() {
    return(
    //add html here
    <div>
         <Header title="My Portfolio"/>
        <p>Ecommerce BackEnd</p>
        <img class="resize" src={picOne}></img>
        <a href="https://github.com/22Slore/EcommerceBackEndExperience">GitHub Repo | </a>
        <a href="https://www.youtube.com/watch?v=FpQBzzE5B2E">Deployed Page</a>
        <p>Social Network Api Tool</p>
        <img class="resize" src={picTwo}></img>
        <a href="https://github.com/22Slore/socialNetworkApiTool">GitHub Repo | </a>
        <a href="https://clipchamp.com/watch/15yJFUfE0FV">Deployed Page</a>
        <p>Employee Tracker</p>
        <img  class="resize" src={picThree}></img>
        <a href="https://github.com/22Slore/employee-tracker">GitHub Repo | </a>
        <a href="">Deployed Page</a>
        <p>Javascript Code Quiz</p>
        <img  class="resize" src={picFour}></img>
        <a href="https://github.com/22Slore/MyJavascriptCodeQuiz">GitHub Repo | </a>
        <a href="https://22slore.github.io/MyJavascriptCodeQuiz/">Deployed Page</a>
        <p>Weather Dashboard</p>
        <img  class="resize" src={picFive}></img>
        <a href="https://github.com/22Slore/myVeryCoolWeatherDashboard">GitHub Repo | </a>
        <a href="https://22slore.github.io/myVeryCoolWeatherDashboard/">Deployed Page</a>
        <p>Random Password Generator</p>
        <img  class="resize" src={picSix}></img>
        <a href="https://github.com/22Slore/RandomPasswordGenerator">GitHub Repo | </a>
        <a href="">Deployed Page</a>
        <Footer title="Contact Me"/>
        <a href="https://github.com/22Slore"> github |</a>
            <a href="https://www.linkedin.com/in/spencer-lore-568a2218a/"> LinkedIn |</a>
            <a href="gmail.com"> Email: spencer.lore04@gmail.com</a>
    </div>
    );
}

export default ReactFunction;