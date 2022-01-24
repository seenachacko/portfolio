import React from "react";
import { educations } from "../data";
import "./Experience.css";
function Education() {
  return (
    <div className="edu-container">
      <h3 className="edu-heading">Educational Background</h3>
      <ul>
        {educations.map((education) => {
          return (
            <>
              <li>
                <h5>
                  {education.period} | {education.title} | {education.place}
                </h5>

                {education.Subject && (
                  <p className="edu-description">
                    {" "}
                    Subject include: {education.Subject}
                  </p>
                )}
              </li><br></br>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Education;
