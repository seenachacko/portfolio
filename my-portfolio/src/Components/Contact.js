import React from "react";
import meet from "../assets/cm.png";
import "./Contact.css";
function Contact() {
    return(
     <>
         <div className="bg-meet"   style={{ backgroundImage: `url(${meet})` }}> </div>
             <div className="contact-de">
             <h3>Let's have a coffe meet !</h3>
             <p>Email: seenachacko119@gmail.com</p>
             <p>Mob: +45 50202119</p>
             </div>
             
             </>
         
      
    )
    
}

export default Contact