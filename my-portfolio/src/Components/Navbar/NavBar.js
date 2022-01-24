import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
//import './NavBar.css'


function NavBar() {
  return (
    <header className="header-container">
     <nav className="nav-bar" >
        <ul className="nav-ul">
        <li><Link style={{ textDecoration: 'none' }}to="/"> Home</Link></li>
        <li> <Link style={{ textDecoration: 'none' }}to="/experience"> Experience</Link></li>
        <li> <Link style={{ textDecoration: 'none' }}to="/skills"> skills</Link></li>
        <li> <Link style={{ textDecoration: 'none' }}to="/education"> Education</Link></li>
        <li> <Link style={{ textDecoration: 'none' }}to="/project">Project</Link></li>
        <li> <Link style={{ textDecoration: 'none' }}to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;