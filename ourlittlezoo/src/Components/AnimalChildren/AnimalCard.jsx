import { Link } from "react-router-dom";


function AnimalCard({
    animalUrl,
    commonName,
    exhibit,
    id
}){

    return(
        <card className="animalCard">
            <h3>{commonName}</h3>
            <img alt={commonName} src={animalUrl} className="cardImg" />
            <p>Exhibit: {exhibit} </p>
            <Link to={`/animals/${id}`} >Learn More!</Link>
        </card>
    )
}

export default AnimalCard;