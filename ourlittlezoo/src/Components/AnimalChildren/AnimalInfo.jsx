import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import AnimalInfoBox from "./AnimalInfoBox";

function AnimalInfo(){

    const { id } = useParams();
    console.log("here")
    const [ singleAniObj , setSingleAniObj ] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/animals/?id=${id}`)
        .then(r => r.json())
        .then(animalArray => setSingleAniObj(animalArray[0]))
    } , [id] )

    return(
        <div>
            <AnimalInfoBox  {...singleAniObj}  />

        </div>
        
    )
}

export default AnimalInfo;