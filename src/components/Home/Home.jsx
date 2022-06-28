import React from "react";
import Profile from "./Profile";
import About from "./About";
import Sidebar from "./Sidebar";
import "./Home.css";
import ClickSidebar from "./Click";
function Home() {
  return (
    <div className="home">
        {/* <div className="row">
          <ClickSidebar />
        </div> */}
      <div className="container-fluid">
        <div className="row homeRow">
          <div className="col-10">
            <div className="row">
              <div className="col-md-4 homeProfile">
                <Profile />
              </div>
              <div className="col-md-6 homeAbout">
                <About />
              </div>
            </div>
          </div>
          <div className="col-2">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
