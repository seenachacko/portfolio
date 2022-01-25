import React from "react";
import { experiences } from "../data";
//import "./Experience.css";

function Experience() {
  return (
    <div className="exp-container">
      <h4 className="exp-heading">Experience Summary</h4>
      <ul>
        {experiences.map((experience) => {
          return (
            <>
              <li>
                <h4>
                  {experience.period} | {experience.position} | {experience.company}
                </h4>

              <p>{experience.details}</p>
              </li><br></br>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Experience;
