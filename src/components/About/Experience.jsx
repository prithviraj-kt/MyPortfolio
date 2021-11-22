import React, { useEffect } from "react";
import "./Experience.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Exp from "./Exp";
function Experience() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="experience">
      <div className="container">
        <div className="row experienceTitle">
          <h1>EXPERIENCE & EDUCATION</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <Exp skill="web development"/>
          <Exp skill="Java developer"/>
          <Exp skill="Python Developer"/>
        </div>
        <div className="col-lg-6">
          <Exp skill="school" />
          <Exp skill="PUC" />
          <Exp skill="Degree" />
        </div>
      </div>
    </div>
  );
}
export default Experience;
