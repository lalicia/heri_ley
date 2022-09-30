import React from "react";
import {useState} from "react";
import ExhibitModal from "./ExhibitModal.js";

import styles from "./Gallery.css";


function Exhibit({image}) {

    //state for modal, set by clicking image in gallery
    const [modal, setModal] = useState(false);

    return (
        <>
            <img className="exhibit" src={image} alt="gallery exhibit" onClick={() => setModal(true)}/>
            
            {/*this says is modal is true, render ExhibitModal and pass it the image and the set function, which is needed to operate the x-btn*/}
            {modal && <ExhibitModal image={image} setModal={setModal}/>}
        </>
    )
}

export default Exhibit;