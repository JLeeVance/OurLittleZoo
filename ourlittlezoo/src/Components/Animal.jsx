import SearchBar from "./AnimalChildren/SearchBar";
import AnimalContainer from "./AnimalChildren/AnimalContainer";
import { useState } from "react";

function Animal({ animals }){

    const [ formData , setFormData ] = useState("");

    const searchedAnimals = animals.filter((animalObj) => animalObj.commonName.toLowerCase().includes(formData.toLowerCase()))

  
    return (
        <div className="ui container grid">
            <h1 style={{paddingTop: 30}} className="ui header center aligned">Animals on Exhibit!</h1>
            <div className="sixteen wide column" style={{paddingTop:2}}>
                <SearchBar onSearchChange={setFormData} formData={formData}/>
            </div>
            <div className="sixteen wide column">
                <AnimalContainer animals={searchedAnimals}  /> 
            </div>
        </div>  
          
    )
}

export default Animal;