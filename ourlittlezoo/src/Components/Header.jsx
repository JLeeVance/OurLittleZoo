import NavLinks from "./NavLinks";
import {Link} from "react-router-dom"

function Header(){



    return(
    <div >
        <div className="ui header center aligned">
            <div style={{padding:30}} >
                <Link to="/" className="ui extra large header" >OurLittleZoo</Link>
                <NavLinks   />
            </div>
        </div>
    </div>
    )
}

export default Header;