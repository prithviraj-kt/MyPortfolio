import React from "react";
import Profile from "./Profile";
import About from "./About";
import Sidebar from "./Sidebar";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="container-fluid">
        <div className="row homeRow">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-5 homeProfile">
                <Profile />
              </div>
              <div className="col-md-5 homeAbout">
                <About />
              </div>
            </div>
          </div>
          <div className="col-md-2 homeSidebar">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
