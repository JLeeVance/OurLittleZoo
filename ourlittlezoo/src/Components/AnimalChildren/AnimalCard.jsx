import { Link } from "react-router-dom";


function AnimalCard({
    animalUrl,
    commonName,
    exhibit,
    id,
    onLearnMore
}){


    return(
        <card onClick={onLearnMore}className="animalCard">
            <h3>{commonName}</h3>
            <img src={animalUrl} className="cardImg" />
            <p>Exhibit: {exhibit} </p>
            <Link to={`/animals/${id}`} >Learn More!</Link>
        </card>
    )
}

export default AnimalCard;