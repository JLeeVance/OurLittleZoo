import SearchBar from "./AnimalChildren/SearchBar";
import AnimalContainer from "./AnimalChildren/AnimalContainer";
import { useState } from "react";

function Animal({ animals }){

    const [ formData , setFormData ] = useState("");

    const searchedAnimals = animals.filter((animalObj) => animalObj.commonName.toLowerCase().includes(formData.toLowerCase()))

  
    return (
        <div>
            <div>
                <SearchBar onSearchChange={setFormData} formData={formData}/>
                <AnimalContainer animals={searchedAnimals}  /> 
            </div>  
          
        </div>
    )
}

export default Animal;