import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";
import Home from "./Components/Home";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <div className="app-container">
      <section className="main-section">
        <Main />
      </section>
      <div className="rendersection">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<Users />} />
          {/* <Route path="/" element={}/> */}
        </Routes>
      </div>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
    </div>
  );
}

// function About() {
//   return <h2>About</h2>;
// }

function Users() {
  return <h2>Users</h2>;
}
