import React from "react";
import Exhibit from "./Exhibit.js";

import styles from "./Gallery.css";

import back from "../assets/backbutton.JPG";

//images 
import gal1 from "../assets/1.jpg";
import gal2 from "../assets/2.jpg";
import gal3 from "../assets/3.jpg";
import gal4 from "../assets/4.jpg";
import gal5 from "../assets/5.jpg";
import gal6 from "../assets/6.jpg";
import gal7 from "../assets/7.jpg";
import gal8 from "../assets/8.jpg";
import gal9 from "../assets/9.jpg";
import gal10 from "../assets/10.jpg";
import gal11 from "../assets/11.jpg";
import gal12 from "../assets/12.jpg";
import gal13 from "../assets/13.jpg";
import gal14 from "../assets/14.jpg";
import gal15 from "../assets/15.jpg";
import gal16 from "../assets/16.jpg";
import gal17 from "../assets/17.jpg";
// import BackButton from "./BackButton.js";

function Gallery() {

    //add all images for galleries into array so can map through and return an Exhibit for each one
    const exhibits = [
        gal1,
        gal2,
        gal3,
        gal4,
        gal5,
        gal6,
        gal7,
        gal8,
        gal9,
        gal10,
        gal11,
        gal12,
        gal13,
        gal14,
        gal15,
        gal16,
        gal17
    ]

    return (
        <div className="overall">
            <div className="gallery">
                {exhibits.map((item) => 
                    <Exhibit image={item} />
                    )}
            </div>
            {/* <BackButton /> */}
            <a className="back-btn" href="#navbar"><img className="back-btn-img" src={back} alt="back button" /></a>
        </div>
    )
}

export default Gallery;