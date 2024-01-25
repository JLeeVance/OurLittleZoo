import React from 'react';
import EventContainer from './EventChildComponents/EventContainer';

function Events({events}){

    return (
    <div className="sixteen wide column center aligned">
        <div >
            <h1 className='ui header center aligned' style={{paddingBottom:30}} >Events Page</h1>
            <EventContainer events={events}/>
        </div>
        
           
       
    </div>
    )
}

export default Events;