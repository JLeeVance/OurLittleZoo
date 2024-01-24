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

    const factsToRender = funFacts.map((fact) => <li className="ui comments" key={id}>{fact}</li> )

    return(
        <div>
            <div className="ui image">
                <h1 className="ui header"> {commonName} </h1>
                <h3 className="ui header"> {scienceName} </h3>
                <p className="ui sub header">Exhibit: {exhibit}</p>
                <img alt={commonName} src={animalUrl} />
            </div>
            <div></div>
            <div className="ui segment">
                <h3 className="ui header">Bio</h3>
                <span className="">{bio}</span>
            </div>
            <div className="ui segment">
                <h3 className="ui header">Diet</h3>
                <span>{diet}</span>
            </div>
            <div className="ui segment">
                <h3 className="ui header">Fun Facts</h3>
                <div>
                    {factsToRender}
                </div>
            </div>
            <div className="ui segment">
                <Comments  comments={comments}/>
            </div>

        </div>
    )
}

export default AnimalInfoBox