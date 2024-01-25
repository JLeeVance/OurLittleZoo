import React from 'react';
import EventPreviewCard from "./EventPreviewCard";


function EventPreview({ events }) {

    const eventsToRender = events.map((eventObj) => <EventPreviewCard key={eventObj.id} {...eventObj}/>);    

    return (
        <div >
            <h1 className='ui huge header center aligned'>Today's Events</h1>
            <div >
                {eventsToRender}
            </div>

        </div>
    )
}

export default EventPreview;