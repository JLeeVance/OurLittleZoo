import AnimalCard from "./AnimalCard";

function AnimalContainer({ animals , onLearnMore }){

    const animalsToDisplay = animals.map((animalObj) => <AnimalCard onLearnMore={onLearnMore} key={animalObj.id} {...animalObj}   />)
    console.log(animals)
    return(
        <div className="animalNav">
            <h1>Animals on Exhibit!</h1>
            <nav>
                
                {animalsToDisplay}
                
            </nav>
        </div>
        
    )
}

export default AnimalContainer;