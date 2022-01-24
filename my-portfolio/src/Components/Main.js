import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiPhoneLine } from "react-icons/ri";
import me from "../assets/me.png";
import NavBar from "./Navbar/NavBar";
//import "./Main.css";
function Main() {
  return (
    <div className="main-container">
      {/* <img className="picture" src={me} alt="seena-avathar"></img> */}
      <div className="description">
        <label><b>Seena Chacko</b></label><br></br>
        <label>Front-end Developer</label>
        <p><HiOutlineMail /> seenachacko119@gmail.com</p>
         <p> <RiPhoneLine /> +45 50202119</p>  
      </div>
      <div className="contact">
        <ul>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/seena-chacko-017022187/"
            >
              <FaLinkedin className="icon" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/seenachacko">
              <FaGithubSquare className="icon" />
            </a>
          </li>
          {/* <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/seena-chacko-017022187/"
            >
              <FaFacebookSquare className="icon" />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Main;
