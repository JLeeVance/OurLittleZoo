import React, { useState } from 'react';

function EventDetails({events}) {

    return (
        <>

            {events.map((event) => (
                <li key={event.id}>
                    <h3>{event.eventName}</h3>
                    <p>Location: {event.locationInZoo}</p>
                    <p>Animals Involved: {event.animalsInvoled}</p>
                    <p>Description: {event.eventDescription}</p>
                    <p>Handler: {event.zooHandler}</p>
                    <p>Time: {event.time}</p>
                </li>
            ))}
        </>
    )
}

export default EventDetails;