import Bio from "./AboutChildren/Bio";
import SupportZooLink from "./AboutChildren/SupportZooLink";
import Hours from "./AboutChildren/Hours";
import Faq from "./AboutChildren/Faq"; 

function About(){


    return(
    <div className="ui stackable">
        
        <div className="ui one column grid">
            <div className="column">
                <h1 style={{paddingTop: 15}} className="ui huge header center aligned " >About</h1>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <SupportZooLink     />
                </div>
            </div>
        </div>

        <div className="ui one column grid center aligned">
            <Bio    />
        </div>

        <div className="ui one column grid center aligned">
            <div className="eight wide column">
                <div className="ui container" style={{padding:10}}>
                    <Hours  />
                </div>
            </div>
            <div className="eight wide column">
                <div className="ui container" style={{padding:10}}>
                    <Faq    />
                </div>
            </div>
        </div>
    
    </div>
    )
}

export default About;