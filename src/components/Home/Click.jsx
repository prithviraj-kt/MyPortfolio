import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import more from "./more.png";
// import "./About.css";
import "./Click.css";
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
        zIndex: "1",
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
    <div className="clickSidebar">
      <div className="row homeAboutButton">
        <button onClick={changeSidebar}>
          <img className="clickImage" src={more} alt="" />
        </button>
      </div>
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

      {/* <div className="clickButton">
        <button onClick={changeSidebar}>
          <img src={more} alt="" />
        </button>
      </div> */}
      {/* <button>Yoo</button> */}
    </div>
  );
}

export default ClickSidebar;
