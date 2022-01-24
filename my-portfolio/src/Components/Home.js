import React from "react";
import me from "../assets/my.png";
//import './Home.css';
const Home = () => {
  return (
    <div className="home-container">
      <div className="bg-image"   style={{ backgroundImage: `url(${me})` }}></div>
      <p className="about-para">
      I am a strongly motivated professional programmer and really passionate in software programming and designing. I have knowledge
and experience in React, Nodejs, Git, GitHub and MySQL, I have good knowledge in UX/UI
designing. I am always curious to learn new skills and looking for a front-end developer role
to take next step in my career.
      </p>
    </div>
  );
};

export default Home;
