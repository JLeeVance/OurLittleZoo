
import map from "./siteImages/map.png"

function Map(){


    return (
        <div className="ui container">
            <h1 className="ui header">Zoo Map</h1>
            <img className="ui fluid rounded image" src={map} />
        </div>
    )
}

export default Map;