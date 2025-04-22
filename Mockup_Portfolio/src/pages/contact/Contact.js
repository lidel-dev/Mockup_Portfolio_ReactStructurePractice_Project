import React from "react";
import "./style.css";
import Header from "../home/Header";
import Footer from "../home/Footer";

function ContactFunction() {
    return(
    //add html here (a way to reach out including text fields and a submit btn)
    <div className="contactDiv">
        <Header title="Contact me"/>
        <div className="divCard">
            <h4>Contact</h4>
            
            <div class="container">
                <form action="action_page.php">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your Name.."></input>
                
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your Last Name.."></input>
                
                <label for="email">Email</label>
                <input type="text" id="email" name="emailName" placeholder="Your Email.."></input>
                
                <label for="message">Message</label>
                <input type="text" id="message" name="messageName" placeholder="Your Email.."></input>

                <input type="submit" value="Submit"></input>
                </form>
            </div>


        </div>
        <Footer title="Contact Me"/>
        <a href="https://github.com/22Slore"> github |</a>
            <a href="https://www.linkedin.com/in/spencer-lore-568a2218a/"> LinkedIn |</a>
            <a href="gmail.com"> Email: spencer.lore04@gmail.com</a>
    </div>
    );
}

export default ContactFunction;
