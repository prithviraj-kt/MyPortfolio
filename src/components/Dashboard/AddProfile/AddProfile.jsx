import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import "./addprofile.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
function AddProfile() {
  const [input, setInput] = useState({});

  const history = useHistory();
  const auth = () => {
    const auth = localStorage.getItem("password");
    console.log(auth);
    if (auth != "set") {
      history.push("/");
    }
  };

  useEffect(() => {
    auth();
    getProfileData();
  }, []);
  const [profileData, setProfileData] = useState({});
  const getProfileData = async () => {
    await axios
      .get("http://localhost:8080/getprofile/6296efba89c46824f1ba157e")
      .then((succ) => {
        setInput(succ.data);
      })
      .catch((err) => {
        console.log("Error occured");
      });
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };

  const handleClick = async () => {
    await axios
      .put("http://localhost:8080/editprofile/6296efba89c46824f1ba157e", input)
      .then((succ) => {
        alert("Data Updated successfully");
        history.push("/alldetails")
      })
      .catch((err) => {
        alert("Error occured");
      });
  };

  //     fname: String,
  //   lname: String,
  //   position:String,
  //   description:String,
  //   age:String,
  //   nationality:String,
  //   country:String,
  //   phone:String,
  //   email:String,
  //   language:String
  return (
    <div>
      <Navbar />
      <div className=" AddProfile container-fluid">
        <div className="row AddProfileInputs">
          <div className="row ">
            <div className="col-md-6 AddProfileLeft">
              <div className="row">
                <div className="col-6 ">
                  <input
                    name="fname"
                    className="AddProfileInput"
                    type="text"
                    value={input.fname}
                    placeholder="First Name"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="col-6">
                  <input
                    name="lname"
                    className="AddProfileInput"
                    type="text"
                    value={input.lname}
                    placeholder="Last Name"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <input
                    name="position"
                    className="AddProfileInput"
                    type="text"
                    value={input.position}
                    placeholder="Position"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="col-6">
                  <input
                    name="age"
                    className="AddProfileInput"
                    type="number"
                    value={input.age}
                    placeholder="Age"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="row">
                <input
                  name="description"
                  className="AddProfileInput"
                  type="text"
                  value={input.description}
                  placeholder="Description"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="col-md-6 AddProfileLeft">
              <div className="row">
                <div className="col-6">
                  <input
                    name="phone"
                    className="AddProfileInput"
                    type="text"
                    value={input.phone}
                    placeholder="Phone Number"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="col-6">
                  <input
                    name="email"
                    className="AddProfileInput"
                    type="email"
                    value={input.email}
                    placeholder="Email"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  {" "}
                  <input
                    name="country"
                    className="AddProfileInput"
                    type="text"
                    value={input.country}
                    placeholder="Country"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="col-6">
                  <input
                    name="nationality"
                    className="AddProfileInput"
                    type="text"
                    value={input.nationality}
                    placeholder="Nationality"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="row">
                <input
                  name="language"
                  className="AddProfileInput"
                  type="text"
                  value={input.language}
                  placeholder="Language"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <center>
            <button onClick={handleClick} className="ProfileButton">
              Submit
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default AddProfile;
