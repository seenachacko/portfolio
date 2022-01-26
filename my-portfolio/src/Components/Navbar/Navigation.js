import React from "react";
import NavLinks from "./NavLinks";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
function Navigation() {

    return(
       <nav className="nav-bar navigation" >
        <nav className="nav">
            <NavLinks></NavLinks>
        </nav>
        </nav>
    )
    
}
export default Navigation