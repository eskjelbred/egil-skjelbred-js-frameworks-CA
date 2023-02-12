import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import { eventsURL } from "../constants/Api";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import Moment from "react-moment";

function EventDetails() {
    const [event, setEvent] = useState([]);
    const { param } = useParams();
    const eventUrl = eventsURL + "/" + param;

    useEffect(() => {
        axios.get(eventUrl).then((res) => {
            const item = res.data.data.attributes;
            setEvent(item);
        });
    }, [eventUrl]);

    return (
        <>
            <Header />
            <Card className="bg-dark">
                <Card.Body className="col-7 p-0 d-flex row">
                    <div>
                        <h2 className="card-title col-12">
                            {event.title} <br />
                        </h2>
                        <Moment className="col-8" format="D MMM YYYY, HH:mm">
                            {event.date}
                        </Moment>
                        <p> {event.description}</p>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}

export default EventDetails;
