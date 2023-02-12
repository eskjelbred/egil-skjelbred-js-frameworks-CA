import React from "react";
import { Card } from "react-bootstrap";
import Moment from "react-moment";

function EventItem({ id, title, date }) {
    return (
        <>
            <Card style={{ width: "24rem" }} className="bg-dark m-3 border-0">
                <Card.Body className=" p-0 d-flex row">
                    <h2>{title}</h2>
                    <Moment format="D MMM YYYY, HH:mm">{date}</Moment>{" "}
                    <a className="btn btn-primary col-8 p-2 m-2" href={`/detail/${id}`}>
                        Check out the event
                    </a>
                </Card.Body>
            </Card>
        </>
    );
}

export default EventItem;
