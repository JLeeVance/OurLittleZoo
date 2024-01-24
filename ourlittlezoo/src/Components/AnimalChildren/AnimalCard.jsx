import { Link } from "react-router-dom";


function AnimalCard({
    animalUrl,
    commonName,
    exhibit,
    id
}){

    return(
        <card className="ui card">
            <h4 className="ui header" >{commonName}</h4>
            <img alt={commonName} src={animalUrl} className="ui image" />
            <h4 className="ui sub header" >Exhibit: {exhibit} </h4>
            <Link to={`/animals/${id}`} className="ui button">Learn More!</Link>
        </card>
    )
}

export default AnimalCard;