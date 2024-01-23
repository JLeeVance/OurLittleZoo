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

    return (
        <div className='card' onClick={handleClick}>
            <h3>{eventName}</h3>
            <p>Location: {locationInZoo}</p>
            <p>Animals: {animalsInvolved}</p>
            <p>Time: {time}</p>
            {showDetails ? (
                <div>
                    <p>Description: {eventDescription}</p>
                    <p>Handler: {zooHandler}</p>
                </div>
            ) : null}
            
        </div>
    )
}

export default EventDetails;