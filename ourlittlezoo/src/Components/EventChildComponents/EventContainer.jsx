import React from 'react';
import EventDetails from './EventDetails';

function EventContainer({events}){
    return (
        <ul>
            <EventDetails events={events} />
        </ul>
    )
}

export default EventContainer;