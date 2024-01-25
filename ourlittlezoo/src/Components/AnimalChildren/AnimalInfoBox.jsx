import Comments from "./Comments";
import {Link} from "react-router-dom"

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
            <div className="ui container grid" style={{maxHeight:150}}>
                <div className="fourteen wide column float left">
                    <h1 className="ui header"> {commonName} </h1>
                    <h3 className="ui header"> {scienceName} </h3>
                    <p className="ui sub header">Exhibit: {exhibit}</p>
                </div>
                <div className="two wide column float right">
                    <Link className="ui button" to="/animals/">Back to Exhibits</Link>
                </div>
            </div>
            <img className="ui image" alt={commonName} src={animalUrl} />
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
            <div className="ui segment center aligned">
                <Comments  comments={comments}/>
            </div>

        </div>
    )
}

export default AnimalInfoBox