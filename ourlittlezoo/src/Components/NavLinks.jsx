import { NavLink } from "react-router-dom";

function NavLinks(){


    return(
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/animals">Animals & Exhibits</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/map">Map</NavLink>
            <NavLink to="/about">About</NavLink>
        </>
    )
}

export default NavLinks;