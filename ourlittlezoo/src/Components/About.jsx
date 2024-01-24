import Bio from "./AboutChildren/Bio";
import SupportZooLink from "./AboutChildren/SupportZooLink";
import Hours from "./AboutChildren/Hours";
import Faq from "./AboutChildren/Faq"; 

function About(){


    return(
    <div className="ui stackable grid">
        
        <div className="one column row">
            <h1 className="ui header " >About</h1>
            <SupportZooLink     />
        </div>
        <Bio    />
        <div className="two column row">
            <Hours  />
            <Faq    />
        </div>
    </div>
    )
}

export default About;