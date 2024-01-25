import React from 'react';
import EventContainer from './EventChildComponents/EventContainer';

function Events({events}){

    return (
    <div className={'ui round segment && contentContainer'}>
        <h1 className='ui header center aligned'>Events Page</h1>
        <div className='sixteen wide column center aligned'>
            <EventContainer events={events}/>
        </div>
    </div>
    )
}

export default Events;