import React from "react";
import AnimalImg from "./AnimalImg";

function AnimalPreview({ animals }) {

    if (animals.length > 3) {
        const startIndex = Math.floor(Math.random() * animals.length - 2);
        const animalsToDisplay = animals.slice(startIndex, startIndex + 3).map((animalObj) => (
            <div className="column" >
                <AnimalImg  key={animalObj.id} {...animalObj} />
            </div>
        ))

        return (
            <div className="ui three column grid" >
                {animalsToDisplay}
            </div>
        )
    }
    console.log(animals)
}

export default AnimalPreview;