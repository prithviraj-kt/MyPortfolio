import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import "./AddExperience.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
function AddExperience() {
  const [data, setData] = useState();

  const history = useHistory()
  const auth=() => {
    const auth = localStorage.getItem("password")
    console.log(auth)
    if(auth!="set"){
      history.push("/")
    }
  }

  useEffect(() => {
    auth()
  },[])

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await axios
      .post("http://localhost:8080/addexperience", data)
      .then((succ) => {
        alert("Experience added");
        window.location.reload();
      })
      .catch((err) => {
        alert("Error occured");
      });
  };

  return (
    // date: String,
    // title: String,
    // description: String,
    // type: String,

    <div>
      <Navbar />
      <div className="row ExperienceAdd">
        <h1>ADD EXPERIENCE</h1>
      </div>
      <div className="container-fluid Experience">
        <div className="row ExperienceCard">
          <input
            onChange={(e) => handleChange(e)}
            name="date"
            placeholder="Date"
            type="text"
          />
          <input
            onChange={(e) => handleChange(e)}
            name="title"
            placeholder="Title"
            type="text"
          />
          <input
            onChange={(e) => handleChange(e)}
            name="description"
            placeholder="Description"
            type="text"
          />

          <select
            onChange={(e) => handleChange(e)}
            className="ExperienceDropdown"
            name="type"
            id="cars"
          >
            <option value="">Choose the type</option>
            <option value="EXPERIENCE">Experience</option>
            <option value="EDUCATION">Education</option>
          </select>
          {/* <input
            onChange={(e) => handleChange(e)}
            name="type"
            placeholder="Type"
            type="text"
          /> */}
          <button className="btn btn-warning" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddExperience;
