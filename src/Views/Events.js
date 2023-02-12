import React from "react";
import Header from "../components/Header/Header";
import EventList from "../components/Events/EventList";

function Events() {
    return (
        <>
            <Header />
            <h1 className="m-5">Check out our events</h1>

            <EventList />
        </>
    );
}

export default Events;
