import React from "react";
import NavBar from "../Components/Navbar/NavBar";
//import Main from "../Components/Main";
function Header() {
    return(
        <div className="header-container">
        <div><label><b>Seena Chacko</b></label><br></br>
        <label>Front-end Developer</label>
        </div>
        
        <NavBar></NavBar>
    </div>

    )
    
}

export default Header