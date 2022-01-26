import React from "react";
import { projects } from "../data";

function Projects() {

    return(
        <div className="proj-container">
        <h3 className="proj-heading">Project</h3>
      
    <ul className="proj-list">
    {projects.map((project)=>{
      return(
        <>
        <li> <h4>{project.name}</h4> <br></br> {project.about}<br></br> 
        {project.technologies}<br></br>
        <a target="_blank" href={project.github}>code</a><br></br>
        {project.demo && <a target="_blank" href={project.demo}>Demo</a>}
        </li>
        </>
        
      )
    })}
    </ul>
    </div>
    )
    
}

export default Projects