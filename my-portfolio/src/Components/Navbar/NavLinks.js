import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
function NavLinks(props) {
    
    return(
        <ul className="nav-ul">
        <li><Link  onClick={()=>props.isMoblile && props.closeMobileMenu()} to="/"> Home</Link></li>
        <li> <Link onClick={()=>props.isMoblile && props.closeMobileMenu()} to="/experience"> Experience</Link></li>
        <li> <Link onClick={()=>props.isMoblile && props.closeMobileMenu()} to="/skills"> skills</Link></li>
        <li> <Link onClick={()=>props.isMoblile && props.closeMobileMenu()} to="/education"> Education</Link></li>
        <li> <Link onClick={()=>props.isMoblile && props.closeMobileMenu()} to="/project">Project</Link></li>
        <li> <Link onClick={()=>props.isMoblile && props.closeMobileMenu()} to="/contact">Contact</Link></li>
        </ul>
    )
}

export default NavLinks