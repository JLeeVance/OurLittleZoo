import Bio from "./AboutChildren/Bio";
import SupportZooLink from "./AboutChildren/SupportZooLink";
import Hours from "./AboutChildren/Hours";
import Faq from "./AboutChildren/Faq"; 

function About(){


    return(
    <div>
        <SupportZooLink     />
        <Bio    />
        <Hours  />
        <Faq    />
        
    </div>
    )
}

export default About;