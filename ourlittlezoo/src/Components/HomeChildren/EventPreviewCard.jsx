import React from 'react';
import { NavLink } from 'react-router-dom';

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
        <NavLink to="/events" className='ui card'>
            <h3 className='ui header'>{eventName}</h3>
            <p>Location: {locationInZoo}</p>
            <p>Animals: {animalsInvolved}</p>
            <p>Time: {time}</p>
            
        </NavLink>
    )
}

export default EventPreviewCard;