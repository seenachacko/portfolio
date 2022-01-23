import React from "react";
import gitSymbol from "../assets/gitSymbol.png";
import figma from "../assets/fig.png";
import html from "../assets/htmlsy.png";
import symbolMysql from "../assets/symbolMysql.png";
import nodeS from "../assets/nodeS.png";
import reactsymbol from "../assets/rec.png";
import tre from "../assets/tre.png";
import vsc from "../assets/vsc.png";
import JsSymbol from "../assets/jsSymbol.png";
import zep from "../assets/zepl.png";
import "./Skills.css";
function Skills() {
  return (
      <div className="skills-container">
      <h3 className="skill-heading">Skills</h3>
    <div className="logo-container">
        
      <div>
        <img src={reactsymbol} alt="reactsymbol" width={100} />
      </div>
      <div>
        <img src={html} alt="html" width={100} />

      </div>
      <div>
        <img src={JsSymbol} alt="JsSymbol" width={100} />
      </div>
      <div>
        <img src={nodeS} alt="node" width={100} />
      </div>
      <div>
        <img src={symbolMysql} alt="mySql" width={100} />
      </div>
      <div>
        <img src={gitSymbol} alt="git" width={100} />
      </div>
      <div>
        <img src={vsc} alt="vscode" width={100} />
      </div>
      <div>
        <img src={figma} alt="figma" width={100} />
      </div>
      <div>
        <img src={zep} alt="zeplin" width={100} />
      </div>
      <div>
        <img src={tre} alt="trello" width={100} />
      </div>
    </div>
    </div>
  );
}

export default Skills;
