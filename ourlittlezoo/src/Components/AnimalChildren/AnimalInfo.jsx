import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import AnimalInfoBox from "./AnimalInfoBox";

function AnimalInfo(){

    const { id } = useParams();

    const [ singleAniObj , setSingleAniObj ] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/animals/?id=${id}`)
        .then(r => r.json())
        .then(animalArray => setSingleAniObj(animalArray[0]))
    } , [] )

    return(
        <div>
            {Object.keys(singleAniObj).length > 0 && <AnimalInfoBox  {...singleAniObj}  /> }

        </div>
        
    )
}

export default AnimalInfo;