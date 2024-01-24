import React from 'react';

function EventPreviewCard({
    id,
    eventName,
    locationInZoo,
    animalsInvolved,
    eventDescription,
    zooHandler,
    time
}) {


    return (
        <div className='card'>
            <h3>{eventName}</h3>
            <p>Location: {locationInZoo}</p>
            <p>Animals: {animalsInvolved}</p>
            <p>Time: {time}</p>
            
        </div>
    )
}

export default EventPreviewCard;