// import React from 'react'
// import { useParams } from 'react-router-dom'

// function EditExperience() {
//     const {id} = useParams()
//   return (
//     <div></div>
//   )
// }

// export default EditExperience



import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import "../AddExperience/AddExperience.css";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
function EditExperience() {
  const [data, setData] = useState();

  const {id} = useParams()
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
    getData()
  },[])

  const [experience, setExperience] = useState("")

  const getData = async () => {
      await axios.get(`http://localhost:8080/getexperience/${id}`).then(succ => {
          setExperience(succ.data)
          console.log(succ.data)
      })
  }

  const handleChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
    console.log(experience)
  };

  const handleSubmit = async () => {
    await axios
      .put(`http://localhost:8080/editexperience/${id}`, experience)
      .then((succ) => {
        alert("Edited Successfully");
        history.push("/alldetails")
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
        <h1>EDIT DETAILS</h1>
      </div>
      <div className="container-fluid Experience">
        <div className="row ExperienceCard">
          <input
            onChange={(e) => handleChange(e)}
            name="date"
            value={experience.date}
            placeholder="Date"
            type="text"
          />
          <input
            onChange={(e) => handleChange(e)}
            name="title"
            value={experience.title}
            placeholder="Title"
            type="text"
          />
          <input
            onChange={(e) => handleChange(e)}
            name="description"
            value={experience.description}
            placeholder="Description"
            type="text"
          />

          {/* <select
            onChange={(e) => handleChange(e)}
            className="ExperienceDropdown"
            name="type"
            id="cars"
          >
            <option value="">Choose the type</option>
            <option value="EXPERIENCE">Experience</option>
            <option value="EDUCATION">Education</option>
          </select> */}
          {/* <input
            onChange={(e) => handleChange(e)}
            name="type"
            placeholder="Type"
            type="text"
          /> */}
          <button className="btn btn-warning" onClick={handleSubmit}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditExperience;
