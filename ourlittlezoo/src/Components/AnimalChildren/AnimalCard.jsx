import { Link } from "react-router-dom";
import React , { useState } from "react";


function AnimalCard({
    animalUrl,
    commonName,
    exhibit,
    id
}){
    const [dimmerActive, setDimmerActive] = useState(false);

    return (

    <div className="ui special cards">
        <div className="card">
          <div className="ui blurring dimmable image"
            onMouseEnter={() => setDimmerActive(true)}
            onMouseLeave={() => setDimmerActive(false)}
          >
          <div className={`ui dimmer ${dimmerActive ? 'active' : ''}`}>
            <div className="content">
              <div className="center">
                <Link to={`/animals/${id}`} class="ui inverted button">more on the {commonName}</Link>
              </div>
            </div>
          </div>
        <img className="ui image" style={{maxHeight:230}} src={animalUrl}/>
        </div>
        <h4 className="ui large header center aligned" >{commonName}</h4>
        <h4 className="ui sub header" >Exhibit: {exhibit} </h4>
      </div>
    </div>

    )









        // <card className="ui card">
        //     <h4 className="ui header center aligned" >{commonName}</h4>
        //     <img alt={commonName} src={animalUrl} className="ui image" />
        //     <h4 className="ui sub header" >Exhibit: {exhibit} </h4>
        //     <Link to={`/animals/${id}`} className="ui button , nopadding">Learn More!</Link>
        // </card>





    
}

export default AnimalCard;