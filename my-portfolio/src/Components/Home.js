import React from "react";
import me from "../assets/my.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiPhoneLine } from "react-icons/ri";
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-left">
        <img src={me} alt="mySql" alt="avathar" />
      </div>
      <div className="home-right">
        <div className="description">
          <p>
            <b>Seena Chacko</b>
          </p>
          
          <p><b>Front-end Developer</b></p>
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
          </ul>
        </div>
        </div>
        
        <p className="about-para">
          I am a strongly motivated professional programmer and really
          passionate in software programming and designing. I have knowledge and
          experience in React, Nodejs, Git, GitHub and MySQL, I have good
          knowledge in UX/UI designing. I am always curious to learn new skills
          and looking for a   <strong>front-end developer</strong> role to take next step in my
          career.
        </p>
      </div>
    </div>
  );
};

export default Home;
