import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";


function NavBar() {
  return (
     <div className="header-container">
       <Navigation></Navigation>
       <MobileNavigation></MobileNavigation>
     </div>
  );
};

export default NavBar;