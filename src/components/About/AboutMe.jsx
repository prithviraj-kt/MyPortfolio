import React,{useEffect} from "react";
import "./AboutMe.css";
import image from "./image.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
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
                    Prithviraj
                  </p>
                </div>
                <div className="row" >
                  <p>
                    <span className="aboutFirstName"> Last Name: </span>
                    Tagadinamani
                  </p>
                </div>
                <div className="row" >
                  <p>
                    <span className="aboutFirstName"> Age: </span>19 years
                  </p>
                </div>
                <div className="row" >
                  <p>
                    <span className="aboutFirstName"> Nationality: </span>
                    Indian
                  </p>
                </div>
                <div className="row" >
                  <p>
                    <span className="aboutFirstName"> Freelancing: </span>
                    available
                  </p>
                </div>
              </div>

              <div className="col-6 aboutName" data-aos="fade-left" >
                <div className="row" >
                  <p>
                    <span className="aboutFirstName">Country: </span>India
                  </p>
                </div>
                <div className="row" >
                  <p>
                    <span className="aboutFirstName"> Phone: </span>9353968791
                  </p>
                </div>
                <div className="row" >
                  <p>
                    <span className="aboutFirstName"> Email: </span>
                    prithvirajktagadinamani@gmail.com
                  </p>
                </div>
                <div className="row" >
                  <p>
                    <span className="aboutFirstName"> Languages: </span> Hindi,
                    English, Kannada
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
                <h1 className="aboutExperienceYears">10+</h1>
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
