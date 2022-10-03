import React from "react";

import heri from "../assets/hericol.jpg";

import styles from "./About.css";

function About() {

    return (
        <div id="about" className="about-container">
            <hr></hr>
            <div className="about-row-container">
                <div className="about-img-container">
                    <img className="about-img" src={heri} alt="Heri" />
                </div>

                <div className="about-blurb-container">
                    <h1 className="about-title">ABOUT</h1>
                    <p className="about-blurb">Heri is a Texas-based self-taught artist whose inspirations include comic books, cartoons, anime, and martial arts/action movies.<br></br><br></br>
                    He initially worked with Wacom tablets (and still does on occasion) before transitioning to iPad with apple pencil.<br></br><br></br>
                    Heri appears at many US conventions where you can see and purchase his artwork. For some footage of him working on his latest creations, or to contact him, please visit his <a className="about-social" href="https://www.instagram.com/ragnavladez/" target="_blank" rel="noreferrer">Instagram.</a></p>
                </div>
            </div>
        </div>
    )
}

export default About;