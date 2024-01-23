

function AnimalInfoBox({
    animalUrl,
    bio,
    carnivore,
    comments, 
    commonName,
    diet,
    exhibit,
    funFacts,
    id,
    likes,
    scienceName
 }){
    console.log(commonName);

    return(
        <div>
            <h1> {commonName} </h1>
            <h2> {scienceName} </h2>
            <img src={animalUrl} />
            <h3>Bio</h3>
            <span>{bio}</span>



        </div>
        

    )
}

export default AnimalInfoBox