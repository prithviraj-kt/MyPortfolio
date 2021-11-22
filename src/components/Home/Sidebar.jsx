import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import home from "./hm.png"
import id from "./id.png"
import idea from "./idea.png"
import contact from "./contact.png"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarSidebar">
        <div className="sidebarContainer">
          <NavLink to="/home" className="but">
            <span className="icon">
              <img src={home} alt="" />
            </span>
            <span className="text">Home</span>
          </NavLink>
          <NavLink to="/about" className="but">
            <span className="icon">
              <img src={id} alt="" />
            </span>
            <span className="text">About Me</span>
          </NavLink>
          <NavLink to="/projects" className="but">
            <span className="icon">
              <img src={idea} alt="" />
            </span>
            <span className="text">Projects</span>
          </NavLink>
          <NavLink to="/contact" className="but">
            <span className="icon">
              <img src={contact} alt="" />
            </span>
            <span className="text">Contact Me</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;