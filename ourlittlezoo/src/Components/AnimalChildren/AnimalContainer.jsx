import AnimalCard from "./AnimalCard";

function AnimalContainer({ animals }){

    const animalsToDisplay = animals.map((animalObj) => <AnimalCard key={animalObj.id} {...animalObj}   />)
  
    return(
        <div className="">
            <h1>Animals on Exhibit!</h1>
            <nav className="ui  grid">
                {animalsToDisplay}
            </nav>
        </div>
        
    )
}

export default AnimalContainer;