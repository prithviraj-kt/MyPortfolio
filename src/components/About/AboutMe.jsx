import React,{useEffect, useState} from "react";
import "./AboutMe.css";
import image from "./image.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios"
function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    getProfileDetails();
  }, []);

  const [profile, setProfile] = useState("");

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

  return (
    <div className="aboutme">
      <div className="container">
        <div className="row aboutmeName">
          <h1 data-aos="fade-down">
            ABOUT <span className="span">ME</span>
          </h1>
        </div>
        <div className="row aboutPersonalTitle" data-aos="fade-right">
          <h1>PERSONAL INFOS</h1>
        </div>
        <div className="row aboutImage" data-aos="zoom-in">
          <img src={image} alt="" />
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-6 aboutName" data-aos="fade-right">
                <div className="row" >
                  <p>
                    <span className="aboutFirstName">First Name: </span>
                    {profile.fname}
                  </p>
                </div>
                <div className="row" >
                  <p>
                    <span className="aboutFirstName"> Last Name: </span>
                    {profile.lname}
                  </p>
                </div>
                <div className="row" >
                  <p>
                    <span className="aboutFirstName"> Age: </span>{profile.age}
                  </p>
                </div>
                <div className="row" >
                  <p>
                    <span className="aboutFirstName"> Nationality: </span>
                    {profile.nationality}
                  </p>
                </div>
                {/* <div className="row" >
                  <p>
                    <span className="aboutFirstName"> Freelancing: </span>
                    available
                  </p>
                </div> */}
              </div>

              <div className="col-6 aboutName" data-aos="fade-left" >
                <div className="row" >
                  <p>
                    <span className="aboutFirstName">Country: </span>{profile.country}
                  </p>
                </div>
                <div className="row" >
                  <p>
                    <span className="aboutFirstName"> Phone: </span>{profile.phone}
                  </p>
                </div>
                <div className="row" >
                  <p>
                    {/* <span className="aboutFirstName"> Email: </span> */}
                    Email: <span>{profile.email}</span>
                  </p>
                </div>
                <div className="row" >
                  <p>
                    <span className="aboutFirstName"> Languages: </span> {profile.language}
                  </p>
                </div>
              </div>
            </div>
            <div className="row aboutDownloadCv" data-aos="fade-up">
              <button>Download CV</button>
            </div>
          </div>
          <div className="col-lg-6 aboutExperience">
            <div className="row aboutExperienceRow">
              <div className="col-5 aboutExp" data-aos="zoom-in">
                <h1 className="aboutExperienceYears">2+</h1>
                <p>Years Of experience</p>
              </div>
              <div className="col-5 aboutExp" data-aos="zoom-in">
                <h1 className="aboutExperienceYears">10+</h1>
                <p>Projects completed</p>
              </div>
            </div>
            <div className="row aboutExperienceRow">
              <div className="col-5 aboutExp" data-aos="zoom-in">
                <h1 className="aboutExperienceYears">50+</h1>
                <p>Happy customers</p>
              </div>
              <div className="col-5 aboutExp" data-aos="zoom-in">
                <h1 className="aboutExperienceYears">5+</h1>
                <p>Awards won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
