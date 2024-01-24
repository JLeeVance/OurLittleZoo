import NavLinks from "./NavLinks";
import {Link} from "react-router-dom"

function Header(){



    return(
        <div className="ui container">
            <Link to="/" className="ui header" >OurLittleZoo</Link>
            <NavLinks   />
        </div>


    )
}

export default Header;