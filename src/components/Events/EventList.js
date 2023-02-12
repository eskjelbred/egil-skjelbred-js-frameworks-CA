import React, { useState, useEffect } from "react";
import axios from "axios";
import { eventsURL } from "../../constants/Api";
import EventItem from "./EventItem";

function EventList() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get(eventsURL + "?populate=*").then((res) => {
            const event = res.data;
            setEvents(event.data);
        });
    }, []);

    return (
        <>
            <div className="row">
                {events.map(function (event) {
                    const id = event.id;
                    const title = event.attributes.title;
                    const date = event.attributes.date;

                    return <EventItem key={id} id={id} title={title} date={date} />;
                })}
            </div>
        </>
    );
}

export default EventList;
