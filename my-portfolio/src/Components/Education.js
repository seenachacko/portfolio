import React from "react";

import "./Experience.css";
 function Education() {


    return(
        <div className="edu-container">
            <h3 className="edu-heading">Educational Background</h3>
      <ul>
        <li>
          <h4>
            December 2020-September 2021 | Full-stack Development | HackyourFuture,
            Copenhagen
          </h4>
          <p className="edu-description">
            Subject include: HTML5, CSS3, JavaScript, React, Nodejs,Git,GitHub,MySQL.
          </p>
        </li><br></br>
        <li>
          
          <h4>
            February 2020-April 2020 | UX/UI-Designing | RDi School,
            Copenhagen
          </h4>
          <p className="-description">
          Subject include: User reserch,User studies, Ethical design,Testing and Adjusting.
          </p>
        </li><br></br>
        <li>
          <h4>
            June 2014-June 2017 | Bachelor's in Computer Science & Engineering | University of Calicut,
            India
          </h4>
          <p className="exp-description">
          Subject include: Operating system,DBMS,Design and Analysis of Algrotithm,Computer Software and Programming languages
          </p>
        </li><br></br>
        <li>
          <h4>
            June 2011-April 2014 | Diploma in Computer Engineering | Kerala board of Technical Education,
            India
          </h4>
          
        </li>
        
      </ul>
           
        </div>
    )
     
 }

 export default Education