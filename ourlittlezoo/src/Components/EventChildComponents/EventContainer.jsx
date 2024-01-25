import React from 'react';
import EventDetails from './EventDetails';

function EventContainer({events}){
    const eventsToRender = events.map((eventObj) => <EventDetails key={eventObj.id} {...eventObj}/>);
    return (
        <ul >
            {eventsToRender}
        </ul>
    )
}

export default EventContainer;