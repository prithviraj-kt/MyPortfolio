import React, { useEffect } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="about">
        <div className="aboutContent">
          <div className="row aboutName" data-aos="fade-right">
            <h1>- I'M PRITHVIRAJ</h1>
            <h2> MERN DEVELOPER</h2>
          </div>
          <div className="row aboutInfo" data-aos="fade-right">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui enim
              earum voluptatum dicta inventore quia esse voluptas molestias!
              Tenetur, assumenda?
            </p>
          </div>
          <div className="row aboutButton" data-aos="fade-right">
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
