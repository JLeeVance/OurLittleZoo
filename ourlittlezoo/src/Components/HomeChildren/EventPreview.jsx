import React from 'react';
import EventPreviewCard from "./EventPreviewCard";


function EventPreview({ events }) {

    const eventsToRender = events.map((eventObj) => <EventPreviewCard key={eventObj.id} {...eventObj}/>);    

    return (
        <div>
            {eventsToRender}
        </div>
    )
}

export default EventPreview;