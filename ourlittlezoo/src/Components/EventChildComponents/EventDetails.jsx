import React, { useState } from 'react';

function EventDetails({

    id,
    eventName,
    locationInZoo,
    animalsInvolved,
    eventDescription,
    zooHandler,
    time

}){

    const [showDetails, setShowDetails] = useState(false);

    function handleClick(){
        setShowDetails(!showDetails);
        
        if(showDetails === true){
            setShowDetails(false);
        }
        else{
            setShowDetails(true);
        }
    }
    const animalsInEvent=animalsInvolved.map((string) => <span key={string}>{string}   </span>)

    return (
    <div style={{padding:10}}>
        <div className='ui card' >
            <h3 className='ui header center aligned' style={{padding:15}}>{eventName}</h3>
            <div className='ui container left aligned'>
                <p><strong>Location:</strong> {locationInZoo}</p>
                <p><strong>Animals:</strong> {animalsInEvent}</p>
                <p><strong>Time:</strong> {time}</p>
            </div>
            {showDetails ? (
                <div style={{padding:10}}>
                    <p><strong>Description:</strong> {eventDescription}</p>
                    <p><strong>Handler:</strong> {zooHandler}</p>
                </div>
            ) : null}
            <button onClick={handleClick} className='ui small button'style={{backgroundColor: "#90A07B"}} >{showDetails ? "Show Less!" : "Show More!"}</button>
        </div>
    </div>
    )
}

export default EventDetails;