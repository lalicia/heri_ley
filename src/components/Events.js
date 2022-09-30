import React from "react";
import EventListing from "./EventListing.js";
import {calendar} from "./Calendar.js"

import con1 from "../assets/con1.JPG";
import con2 from "../assets/con2.JPG";

import styles from "./Events.css";

function Events() {

    return (
        <div id="events" className="events-container">
            <hr></hr>
            {/* <div className="events-row-container"> */}
                <div className="events-list-container">
                    <h1 className="events-title">EVENTS</h1>
                    {calendar.map((item) => 
                        <EventListing date={item.date} name={item.name} place={item.place} />)}
                </div>

                <div className="events-img-container">
                    <img className="events-img" src={con1} alt="Heri" />
                    <img className="events-img" src={con2} alt="Heri" />
                </div>
            {/* </div> */}
        </div>
    )
}

export default Events;