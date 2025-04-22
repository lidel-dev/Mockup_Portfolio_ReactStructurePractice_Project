import { Link } from "react-router-dom";
import "./style.css";



function Nav() {
    return(
        // change class to className
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
           Home
        </Link>
        <div class="collapse navbar-collapse" id="navbarNav">
     <ul class="navbar-nav">
        <li class="nav-item active">
        <Link class="nav-link" to="/about">About Me</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/portfolio">Portfolio</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/contact">Contact</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/resume">Resume</Link>
        </li>
     </ul>
        </div>
    </nav>
    )
};

export default Nav;