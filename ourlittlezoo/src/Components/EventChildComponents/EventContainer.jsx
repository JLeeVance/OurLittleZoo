import React from 'react';
import EventDetails from './EventDetails';

function EventContainer({events}){
    const eventsToRender = events.map((eventObj) => {
        return(
            <div key={eventObj.id}>
                <EventDetails  {...eventObj}/>
            </div>
        )});

    return (
        <div className='eventCard'>
            <div className='ui one column grid center aligned'>
                    {eventsToRender}
            </div>
        </div>
    )
}

export default EventContainer;