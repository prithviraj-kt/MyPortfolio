import React from "react";
import cap from "./cap.png";

function Exp(props) {
  return (
    <div>
      <div className="row experienceWeb">
        <div className="row experienceCap">
          <img src={cap} alt="" /> {props.date}
        </div>
        <div className="row experienceContent">
          <h2>{props.title}</h2>
          <p>
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Exp;
