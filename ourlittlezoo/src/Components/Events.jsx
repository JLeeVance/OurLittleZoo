import React from 'react';
import EventContainer from './EventChildComponents/EventContainer';

function Events({events}){

    return (
        <div>
            <h1>Events Page</h1>
            <EventContainer events={events}/>
        </div>
    )
}

export default Events;