import React, { useEffect, useState } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import ClickSidebar from "../About/ClickSidebar";
import axios from "axios";
function About() {
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
    <div>
      <div className="about">
        <div className="aboutContent">
          <div className="row aboutName" data-aos="fade-right">
            <h1>
              ~{profile.fname} {profile.lname}
            </h1>
            <h2>{profile.position}</h2>
          </div>
          <div className="row aboutInfo" data-aos="fade-right">
            <p>{profile.description}</p>
          </div>
          <div className="row aboutButton">
            <Link className="aboutLink" to="/about">
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
