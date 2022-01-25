import React from "react";
import {HiBadgeCheck} from "react-icons/hi";
import { skills } from "../data";
//import "./Skills.css";
function Skills() {
  return (
      <div className="skills-container">
        <h3 className="skill-heading">Skills</h3>
      
    <ul className="skill-list">
    {skills.map((skill)=>{
      return(
        <>
        <li> <HiBadgeCheck></HiBadgeCheck> {skill.title} - <b>{skill.technology}</b></li><br></br>
        </>
        
      )
    })}
    </ul>
    </div>
  );
}

export default Skills;
