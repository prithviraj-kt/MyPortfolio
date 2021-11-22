import React from "react";
import Sidebar from "../Home/Sidebar";
function Projects() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <h1>Projects</h1>
          </div>
          <div className="col-md-2">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
