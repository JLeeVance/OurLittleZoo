import React from "react";
import AnimalImg from "./AnimalImg";

function AnimalPreview({ animals }) {

    function getRandom(arr, n) {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result
      };

    let selectedAnimals = [];
    if (animals.length > 0){
        selectedAnimals = getRandom(animals, 3)
    }

    const animalsToDisplay = selectedAnimals.map((animalObj) => {
        return (
            <div className="column" >
                <AnimalImg  key={animalObj.id} {...animalObj} />
            </div>
        )
    })
    // if (animals.length > 3) {
    //     const startIndex = Math.floor(Math.random() * animals.length - 2);
    //     const animalsToDisplay = animals.slice(startIndex, startIndex + 3).map((animalObj) => (
    //         <div className="column" >
    //             <AnimalImg  key={animalObj.id} {...animalObj} />
    //         </div>
    //     ))

        return (
            <div className="ui three column grid" >
                {animalsToDisplay}
            </div>
        )
    }

export default AnimalPreview;