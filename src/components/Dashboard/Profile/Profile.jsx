import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Profile.css";
import image from "./image.jpg";
import cap from "./cap.png";
function Profile() {
  const history = useHistory();

  const auth = () => {
    const auth = localStorage.getItem("password");
    console.log(auth);
    if (auth != "set") {
      history.push("/");
    }
  };

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
    auth();
    getProfileDetails();
    getExperienceDetails();
    getProjectsDetails();
  }, []);

  const deleteCard = async (e) => {
    const confirm = prompt("Are you sure you want to delete? YES or NO");
    if (confirm == "YES" || confirm == "yes") {
      await axios
        .delete(`http://localhost:8080/deleteexperience/${e._id}`)
        .then((succ) => {
          window.location.reload();
        });
    }
  };

  const editCard = (e) => {
    history.push(`/editexperience/${e._id}`)
  }

  const goToEditProfile =() => {
    history.push("/addprofile")
  }

  const displayData = (e) => {
    return (
      <div className="ProfileExperienceCard">
        <div className="row">
          <div className="row experienceCap">
            <img src={cap} alt="" /> {e.date}
          </div>
          <div className="row">
            <h2>{e.title}</h2>
            <p>{e.description}</p>
          </div>
          <div className="row">
            <button
              onClick={() => deleteCard(e)}
              className="w-25 mx-2 btn btn-danger ProfileCardDelete"
            >
              Delete
            </button>
            <button onClick={() => editCard(e)} className="w-25 mx-2 btn btn-primary ProfileCardDelete">
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="container-fl">
        <div className="row ProfileProfile">
          <div className="my-5 ProfileDetails">
            <img className="ProfileImage" src={image} alt="" />
            <p>First name: {profile.fname}</p>
            <p>Last name: {profile.lname}</p>
            <p>Position: {profile.position}</p>
            <p>Description: {profile.description}</p>
            <p>Age: {profile.age}</p>
            <p>Nationality: {profile.nationality}</p>
            <p>Country: {profile.country}</p>
            <p>Email: {profile.email}</p>
            <p>Phone: {profile.phone}</p>
            <p>Language: {profile.language}</p>
            <button onClick={goToEditProfile} className="my-3 btn btn-primary">Edit</button>
          </div>
        </div>
        <div className="my-5">
          <div className="row">
            <center>
              <h1>EXPERIENCE</h1>
            </center>
          </div>
          <div className="row ProfileExperience">
            {experience
              .filter((item) => item.type == "EXPERIENCE")
              .map((value) => displayData(value))}
          </div>
        </div>
        <div className="my-5">
          <div className="row">
            <center>
              <h1>EDUCATION</h1>
            </center>
          </div>
          <div className="row ProfileExperience">
            {/* {experience.filter(item => item.type=="EDUCATION").map((value) => displayData(value))} */}

            {experience
              .filter((item) => item.type == "EDUCATION")
              .map((item) => displayData(item))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
