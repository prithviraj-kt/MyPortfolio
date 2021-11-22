import React from "react";
import Sidebar from "../Home/Sidebar";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import MySkills from "./MySkills";
import "./About.css"
function About() {
  return (
    <div className="About">
      <div className="container-fluid AboutContainer">
        <div className="row">
          <div className="col-md-11">
            <div className="row">
              <AboutMe />
            </div>
            <div className="row">
              <MySkills />
            </div>
            <div className="row">
              <Experience />
            </div>
          </div>
          <div className="col-md-1">
            <Sidebar />
          </div>
        </div>
      </div>
      <div className="container aboutSidebar">

      </div>
    </div>
  );
}

export default About;
