import React from "react";

import styles from "./Gallery.css";
import back from "../assets/backbutton.JPG";

function BackButton() {

    return (
        <a className="back-btn" href="#navbar"><img className="back-btn-img" src={back} alt="back button" /></a>
    )
}

export default BackButton;