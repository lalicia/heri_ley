import React from "react";

import styles from "./Events.css";


function EventListing({date, name, place}) {

    return (
        <>
            <h3 className="event-listitem">{date} : {name}, {place}</h3>
        </>
    )
}

export default EventListing;