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
    const animalsInEvent=animalsInvolved.map((string) => <span>{string}   </span>)

    return (
        <div className='ui card' onClick={handleClick}>
            <h3 className='ui header center aligned'>{eventName}</h3>
            <p><strong>Location:</strong> {locationInZoo}</p>
            <p><strong>Animals:</strong> {animalsInEvent}</p>
            <p><strong>Time:</strong> {time}</p>
            {showDetails ? (
                <div>
                    <p><strong>Description:</strong> {eventDescription}</p>
                    <p><strong>Handler:</strong> {zooHandler}</p>
                </div>
            ) : null}
            
        </div>
    )
}

export default EventDetails;