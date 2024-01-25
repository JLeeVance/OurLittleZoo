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
    <NavLink to="/events" >
        <div className="ui card" style={{margin:10}}>   
            <div className='ui fluid container' >
                <div style={{padding:10 }} >
                    <h3 className='ui tiny header'>{eventName}</h3>
                </div>
                <div className="ui container left aligned" style={{color: "black" , padding:10}} >
                    <p className='ui small sub header'>Location </p>
                        <span> {locationInZoo} </span>
                    <p className="ui small sub header" >Animals</p>
                        <span>{animalsInvolved}</span>
                    <p className='ui small sub header'>Time</p>
                        <span>{time}</span>
                </div>
            </div>
        </div> 
       </NavLink>
    )
}

export default EventPreviewCard;