import React,{useEffect} from "react";
import "./MySkills.css";
import Svg from "./Svg";
import Aos from "aos";
import "aos/dist/aos.css";
function MySkills() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="mySkills">
      <div className="container">
        <div className="row mySkillsTitle" data-aos="fade-right">
          <h1>MY SKILLS EXPERIENCE</h1>
        </div>
        <div className="row">
          <div className="col-lg-6 mySkillsSkill" data-aos="zoom-in">
            <Svg name="HTML" />
            <Svg name="CSS" />
          </div>
          <div className="col-lg-6 mySkillsSkill" data-aos="zoom-in">
            <Svg name="JAVA SCRIPT" />
            <Svg name="REACT" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mySkillsSkill" data-aos="zoom-in">
            <Svg name="NODE JS" />
            <Svg name="MONGO DB" />
          </div>
          <div className="col-lg-6 mySkillsSkill" data-aos="zoom-in">
            <Svg name="PYTHON" />
            <Svg name="JAVA" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
