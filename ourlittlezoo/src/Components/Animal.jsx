import SearchBar from "./AnimalChildren/SearchBar";
import AnimalContainer from "./AnimalChildren/AnimalContainer";
import AnimalInfo from "./AnimalChildren/AnimalInfo";
import { useState } from "react";
import { Route , Routes } from "react-router-dom";

function Animal({ animals }){

    const [ formData , setFormData ] = useState("");
    const [ showAll , setShowAll ] = useState(true);

    const searchedAnimals = animals.filter((animalObj) => animalObj.commonName.toLowerCase().includes(formData.toLowerCase()))

    function handleHideComp(){
        setShowAll(!showAll)
    };

    return (
        <div>
            {showAll && 
            <div>
                <SearchBar onSearchChange={setFormData} formData={formData}/>
                <AnimalContainer animals={searchedAnimals} onLearnMore={handleHideComp}   /> 
            </div>}  
          
        </div>
    )
}

export default Animal;