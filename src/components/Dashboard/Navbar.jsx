import React from "react";
import { useHistory } from "react-router-dom";

function Dashboard() {

  const history = useHistory();
  const logout =() => {
    localStorage.clear()
    history.push("/")
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                Dashboard
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  {/* <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/addprofile">
                      Add Profile
                    </a>
                  </li> */}
                  <li class="nav-item">
                    <a class="nav-link" href="/addexperience">
                      Add Experience
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/addproject">
                      Add Project
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/alldetails">
                      Profile
                    </a>
                  </li>
                  <li class="nav-item">
                    <button onClick={logout} class="btn btn-dark" href="/addproject">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
