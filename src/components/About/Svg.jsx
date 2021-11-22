import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Svg(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
    return (
        <div>
            <div className="mySkillsSvg">
              <svg class="abc progress-ring" width="200" height="200">
                <circle
                  class="progress-ring__circle"
                  stroke="#E1AE01"
                  stroke-width="5"
                  fill="black"
                  r="50"
                  cx="100"
                  cy="100"
                />
                <text
                  x="80"
                  y="100"
                  fill="white"
                  text-anchor="start"
                  class="barLegend"
                >
                  65%
                </text>
              </svg>
              <p>{props.name}</p>
            </div>
        </div>
    )
}

export default Svg
