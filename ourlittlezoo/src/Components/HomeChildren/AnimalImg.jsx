import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dimmer } from 'semantic-ui-react';

function AnimalImg({
    animalUrl,
    commonName,
    id
}) {
  const [dimmerActive, setDimmerActive] = useState(false);

    return (

    <div className="ui special cards" style={{}}>
        <div className="card">
          <div className="ui blurring dimmable image"
            onMouseEnter={() => setDimmerActive(true)}
            onMouseLeave={() => setDimmerActive(false)}
          >
          <div className={`ui dimmer ${dimmerActive ? 'active' : ''}`}>
            <div className="content">
              <div className="center">
                <Link to={`/animals/${id}`} className="ui inverted button">more on the {commonName}</Link>
                <Link to="/animals/" className='ui inverted button'>See our Animals</Link>
              </div>
            </div>
          </div>
        <img src={animalUrl} />
        </div>
      </div>
    </div>

    )
};

export default AnimalImg;