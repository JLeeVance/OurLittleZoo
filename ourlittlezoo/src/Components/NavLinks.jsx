import { NavLink } from "react-router-dom";

function NavLinks(){


    return(
        <div className="ui five menu item">
            <NavLink className="item" to="/">Home</NavLink>
            <NavLink className="item" to="/animals">Animals & Exhibits</NavLink>
            <NavLink className="item" to="/events">Events</NavLink>
            <NavLink className="item" to="/map">Map</NavLink>
            <NavLink className="item" to="/about">About</NavLink>
        </div>
    )
}

export default NavLinks;