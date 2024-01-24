import React from "react";
import AnimalImg from "./AnimalImg";

function AnimalPreview({ animals }) {

    if (animals.length > 3) {
        const startIndex = Math.floor(Math.random() * animals.length - 2);
        const animalsToDisplay = animals.slice(startIndex, startIndex + 3).map((animalObj) =>(
            <AnimalImg key={animalObj.id} {...animalObj} />
        ))

        return (
            <div>
                {animalsToDisplay}
            </div>
        )
    }

    // const animalsToDisplay = animals.map((animalObj) => <AnimalImg key={animalObj.id} {...animalObj}   />)
    console.log(animals)
}

export default AnimalPreview;