import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="exp-container">
      <h3 className="exp-heading">Experience Summary</h3>
      <ul>
        <li>
          <h4>
            October 2021-Present | Front-end Developer intern | Makeimpact,
            Copenhagen
          </h4>
          <p className="exp-description">
            Desihning and Developing react application using React
            framework(HTML, SCSS, JAVASCRIPT) and maintenance of exisisting with
            collabration of UX team.Handling REST APIs call. Source code
            controlling using Git/GitHub.
          </p>
        </li><br></br>
        <li>
          
          <h4>
            April 2020-December 2020 | Software Developer intern | Bluebenu,
            Copenhagen
          </h4>
          <p className="exp-description">
            Application designing and developing.UX designing(prototyping,
            Wireframing) with AdobeXD.
          </p>
        </li><br></br>
        <li>
          <h4>
            August 2017-July 2018 | Android Developer intern | Atees infomedia,
            India
          </h4>
          <p className="exp-description">
            Application designing and developing in Android studio
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Experience;
