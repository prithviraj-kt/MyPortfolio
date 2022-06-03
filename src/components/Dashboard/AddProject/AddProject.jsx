import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import "../AddExperience/AddExperience.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
function AddProject() {

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

  const handleImgChange = async (e) => {
    console.log(e.target.files[0])
    axios.post("gs://react-practice-1316d.appspot.com", e.target.files[0])
  }


  // img: String,
  //   title: String,
  //   description: String


  return (
    <div>
      <Navbar />
      <div className="row ExperienceAdd">
        <h1>ADD PROJECT</h1>
      </div>
      <div className="container-fluid Experience">
        <div className="row ExperienceCard">
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
          <input
            onChange={(e) => handleImgChange(e)}
            name="img"
            type="file"
          />
          <button className="btn btn-warning" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProject;
