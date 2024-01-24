import React from 'react';

function AnimalImg({
    animalUrl,
    commonName
}) {


    return (
        <div>
            <img src={animalUrl} alt={commonName} />
        </div>
    )
}

export default AnimalImg;