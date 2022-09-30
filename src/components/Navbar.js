import React from "react";
import Instagram from "../assets/instagram.png";

import styles from "./Navbar.css";


function Navbar() {


    return(
        <nav id="navbar" className="navbar">
            <div className="logo">
                <h1>HERI LEY</h1>
            </div>

            <div className="navlinks">
                <a className="navlink" href="#about">ABOUT</a>
                <a className="navlink" href="#events">EVENTS</a>
                {/* <div className="socialslink"> */}
                    <a className="navlink" href="https://www.instagram.com/ragnavladez/" target="_blank" rel="noreferrer"><img className="socialslogo" src={Instagram} alt="Instagram" /></a>
                {/* </div> */}
            </div>
        </nav>
    )


}

export default Navbar;