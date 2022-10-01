import React from "react";
import Navbar from "../components/Navbar.js";
import Gallery from "../components/Gallery.js";
import About from "../components/About.js";
import Events from "../components/Events.js";
import BackButton from "../components/BackButton.js";


function Main() {


    return (
        <>
            <Navbar />
            <Gallery />
            <About />
            <Events />
            {/* <BackButton /> */}
        </>
    )
}

export default Main;