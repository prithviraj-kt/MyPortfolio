import React, { useEffect, useState } from "react";
import "./Experience.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Exp from "./Exp";
import axios from "axios";
function Experience() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    getProfileDetails();
  }, []);

  const [profile, setProfile] = useState("");
  const [experience, setExperience] = useState([]);
  const [project, setProject] = useState([]);

  const getProfileDetails = async () => {
    await axios
      .get("http://localhost:8080/getprofile/6296efba89c46824f1ba157e")
      .then((succ) => {
        setProfile(succ.data);
      })
      .catch((err) => {
        console.log("Error occured");
      });
  };

  const getExperienceDetails = async () => {
    await axios
      .get("http://localhost:8080/getexperience")
      .then((succ) => {
        console.log(succ.data);
        setExperience(succ.data);
      })
      .catch((err) => {
        console.log("Error occured");
      });
  };

  const getProjectsDetails = async () => {
    await axios
      .get("http://localhost:8080/getproject")
      .then((succ) => {
        console.log(succ.data);
        setProject(succ.data);
      })
      .catch((err) => {
        console.log("Error occured");
      });
  };

  useEffect(() => {
    getExperienceDetails();
    getProjectsDetails();
  }, []);

  return (
    <div className="experience">
      <div className="row">
        <div className="col-lg-6">
          <center>
            {" "}
            <h1 >EDUCATION</h1>
          </center>{" "}
          {/* <div data-aos="fade-right">
            <Exp skill="Web Development" />
          </div>
          <div data-aos="fade-left">
            <Exp skill="Java Developer" />
          </div>
          <div data-aos="fade-right">
            <Exp skill="Python Developer" />
          </div> */}
          {experience
            .filter((item) => item.type == "EDUCATION")
            .map((item) => Exp(item))}
        </div>
        <div className="col-lg-6">
          <center>
            <h1>EXPERIENCE</h1>
          </center>
          {experience
            .filter((item) => item.type == "EXPERIENCE")
            .map((item) => Exp(item))}
        </div>
      </div>
    </div>
  );
}
export default Experience;
