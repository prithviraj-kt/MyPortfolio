import React, {useEffect} from 'react'
import image from "./image.jpg"
import "./Profile.css"
import Aos from "aos";
import "aos/dist/aos.css";
function Profile() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
    return (
        <div className="profile" data-aos="zoom-in">
            <img src={image} alt="" />
        </div>
    )
}

export default Profile
