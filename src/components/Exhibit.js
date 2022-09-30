import React from "react";

import styles from "./Gallery.css";


function Exhibit({image}) {


    return (
        <img className="exhibit" src={image} alt="gallery exhibit" />
    )
}

export default Exhibit;