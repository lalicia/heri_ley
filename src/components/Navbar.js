import React from "react";
import Instagram from "../assets/instagram.png";

import styles from "./Navbar.css";


function Navbar() {


    return(
        <nav className="navbar">
            <div className="logo">
                <h1>HERI LEY</h1>
            </div>

            <div className="navlinks">
                <h3><a href="#about">ABOUT</a></h3>
                <h3><a href="#about">EVENTS</a></h3>
                {/* <div className="socialslink"> */}
                    <a href="https://www.instagram.com/ragnavladez/"><img className="socialslogo" src={Instagram} alt="Instagram" /></a>
                {/* </div> */}
            </div>
        </nav>
    )


}

export default Navbar;