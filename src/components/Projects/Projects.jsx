import React from "react";
import Sidebar from "../Home/Sidebar";
import "./Projects.css";
function Projects() {
  const myProject = [
    {
      title: "Linkify",
      description:
        "Social media application used to connect college students and aluminis",
      imgUrl:
        "https://lohitart.com/wp-content/uploads/2021/08/dorami-drawing-tutorial.jpg",
    },
    {
      title: "Linkify",
      description:
        "Social media application used to connect college students and aluminis",
      imgUrl:
        "https://lohitart.com/wp-content/uploads/2021/08/dorami-drawing-tutorial.jpg",
    },
    {
      title: "Linkify",
      description:
        "Social media application used to connect college students and aluminis",
      imgUrl:
        "https://lohitart.com/wp-content/uploads/2021/08/dorami-drawing-tutorial.jpg",
    },
    {
      title: "Linkify",
      description:
        "Social media application used to connect college students and aluminis",
      imgUrl:
        "https://lohitart.com/wp-content/uploads/2021/08/dorami-drawing-tutorial.jpg",
    },
    {
      title: "Linkify",
      description:
        "Social media application used to connect college students and aluminis",
      imgUrl:
        "https://lohitart.com/wp-content/uploads/2021/08/dorami-drawing-tutorial.jpg",
    },
    {
      title: "Linkify",
      description:
        "Social media application used to connect college students and aluminis",
      imgUrl:
        "https://lohitart.com/wp-content/uploads/2021/08/dorami-drawing-tutorial.jpg",
    },
  ];

  const DisplayProject = (item) => {
    return (
      <div className="ProjectDisplayProject">
        <div className="ProjectItem">
          <img src={item.imgUrl} alt="" />
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="container-fluid Project">
        <div className="row">
          <div className="col-10">
            <div className="row ProjectName">
              <center>
                <h1>Projects</h1>
              </center>
            </div>
            <center>
              <div className="row ProjectMapFUnction">
                {myProject.map((item) => DisplayProject(item))}
              </div>
            </center>
          </div>
          <div className="col-2">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
