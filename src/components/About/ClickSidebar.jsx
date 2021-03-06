import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import more from "./more.png";
import "./About.css"
function ClickSidebar() { 
  const history = useHistory();
  const [sidebarState, setSidebarState] = useState({
    backgroundColor: "rgb(17, 9, 9, 0.7)",
    display: "none",
  });

  const changeSidebar = () => {
    if (sidebarState.display == "block") {
      setSidebarState({
        display: "none",
      });
    } else {
      setSidebarState({
        backgroundColor: "rgb(17, 9, 9, 0.7)",
        display: "block",
      });
    }
  };
  const clickHome = () => {
    history.push("./home");
  };
  const clickAbout = () => {
    history.push("./about");
  };
  const clickProject = () => {
    history.push("./projects");
  };
  const clickContact = () => {
    history.push("./contact");
  };
  return (
    <div>
      <div className="row aboutSidebar" style={sidebarState}>
        <div className="row aboutSidebarContent">
        <div className="row clickButtons">
            <button onClick={clickHome}>
              <h2>HOME</h2>
            </button>
          </div>
          <div className="row clickButtons">
            <button onClick={clickAbout}>
              <h2>ABOUT</h2>
            </button>
          </div>
          <div className="row clickButtons">
            <button onClick={clickProject}>
              <h2>PROJECTS</h2>
            </button>
          </div>
          <div className="row clickButtons">
            <button onClick={clickContact}>
              <h2>CONTACT ME</h2>
            </button>
          </div>
        </div>
      </div>
      <div className="row aboutButton">
        <button onClick={changeSidebar}>
          <img src={more} alt="" />
        </button>
      </div>
    </div>
  );
}

export default ClickSidebar;
