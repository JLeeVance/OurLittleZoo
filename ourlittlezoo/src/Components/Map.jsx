
import map from "./siteImages/map.png"

function Map(){
    return (
        <div className={"ui container"} >
            <h1 style={{padding:30 }} className="ui huge header center aligned">Zoo Map</h1>
            <div className="ui segment" style={{backgroundColor: "#90A07B"}}>
                <img className="ui fluid rounded image" src={map} alt="zoo map" />
            </div>
        </div>
    )
}

export default Map;