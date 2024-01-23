import Comments from "./Comments";

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
    // console.log(funFacts)

    const factsToRender = funFacts.map((fact) => <li key={id}>{fact}</li> )

    return(
        <div>
            <h1> {commonName} </h1>
            <h2> {scienceName} </h2>
            <img alt={commonName} src={animalUrl} />
            <div>
            <h3>Bio</h3>
            </div>
            <p>Exhibit: {exhibit}</p>
            <span>{bio}</span>
            <div>
                <h3>Diet</h3>
                <span>{diet}</span>
            </div>
            <div>
                <h3>Fun Facts</h3>
                <ul>
                    {factsToRender}
                </ul>
            </div>
            <Comments   comments={comments}/>

        </div>
    )
}

export default AnimalInfoBox