import React, { useState } from "react";
import Sidebar from "../Home/Sidebar";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
// import MySkills from "./MySkills";
// import more from "./more.png"
import "./About.css";
import ClickSidebar from "./ClickSidebar";
function About() {
  // let sidebarStyle = {
  //   backgroundColor: "rgb(17, 9, 9, 0.7)",
  // };
  // let sidebarStyle1 = {
  //   backgroundColor: "rgb(17, 9, 9, 0.7)",
  //   display: "none",
  // };
  // const [sidebarState, setSidebarState] = useState({
  //   backgroundColor: "rgb(17, 9, 9, 0.7)",
  //   display: "none",
  // });

  // const changeSidebar = () => {
  //   if (sidebarState.display == "block") {
  //     setSidebarState({
  //       display: "none",
  //     });
  //   } else {
  //     setSidebarState({
  //       backgroundColor: "rgb(17, 9, 9, 0.7)",
  //       display: "block",
  //     });
  //   }
  // };

  return (
    <div className="container-fluid About">
      <div className="AboutContainer">
        <div className="row">
          <div className="col-10">
            <div className="row">
              <AboutMe />
            </div>
            {/* <div className="row">
              <MySkills />
            </div> */}
            <div className="row">
              <Experience />
            </div>
          </div>
          <div className="col-2">
            <Sidebar />
          </div>
        </div>
      </div>

      {/* <div className="row aboutSidebar" style={sidebarState}>
        <div className="row aboutSidebarContent">
          <div className="row">
            <h2>HOME</h2>
          </div>
          <div className="row">
            <h2>ABOUT</h2>
          </div>
          <div className="row">
            <h2>PROJECTS</h2>
          </div>
          <div className="row">
            <h2>CONTACT ME</h2>
          </div>
        </div>
      </div>
      <div className="row aboutButton">
        <button onClick={changeSidebar}><img src={more} alt="" /></button>
      </div> */}
      {/* <ClickSidebar /> */}
    </div>
  );
}

export default About;
