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

    const factsToRender = funFacts.map((fact) => <li className="ui comments" key={fact}>{fact}</li> )

    return(
        <div>
            <div className="ui container grid" style={{maxHeight:150}}>
                <div className="fourteen wide column float left">
                    <h1 className="ui huge header" style={{paddingTop:10}}> {commonName} </h1>
                    <h3 className="ui header"> {scienceName} </h3>
                    <p className="ui sub header">Exhibit: {exhibit}</p>
                </div>
                <div className="two wide column float right" style={{paddingTop: 30}}>
                    <Link className="ui button" to="/animals/" style={{backgroundColor: "#90A07B"}}>Back to Exhibits</Link>
                </div>
            </div>
            <img className="ui fluid image" alt={commonName} src={animalUrl} />


            <div className="ui segment">
                <h3 className="ui header center aligned">Bio</h3>
                <span>{bio}</span>
            </div>

            <div className="ui one column grid">
                <div className="eight wide column">
                    <div className="ui segment">
                        <h3 className="ui header center aligned">Diet</h3>
                        <span>{diet}</span>
                    </div>
                </div>
                <div className="eight wide column">
                    <div className="ui segment">
                        <h3 className="ui header center aligned">Fun Facts</h3>
                        <div className="ui container center aligned">
                            {factsToRender}
                        </div>
                    </div>
                </div>
            </div>
            <div className="ui container center aligned" style={{padding:30}}>
                <Comments name={commonName} comments={comments}/>
            </div>

        </div>
    )
}

export default AnimalInfoBox