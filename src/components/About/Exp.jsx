import React from "react";
import cap from "./cap.png";

function Exp(props) {
  return (
    <div>
      <div className="row experienceWeb">
        <div className="row experienceCap">
          <img src={cap} alt="" /> 02-11-2021
        </div>
        <div className="row experienceContent">
          <h2>{props.skill}</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium in eius delectus porro hic perspiciatis natus deleniti,
            excepturi laudantium numquam. Illo quis beatae ratione dolorem
            inventore earum ducimus a doloremque!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Exp;
