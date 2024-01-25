import AnimalCard from "./AnimalCard";

function AnimalContainer({ animals }){

    const animalsToDisplay = animals.map((animalObj) => <AnimalCard key={animalObj.id} {...animalObj}   />)
  
    return(
        <div >
            <nav className="ui three column grid center aligned">
                {animalsToDisplay}
            </nav>
        </div>
        
    )
}

export default AnimalContainer;