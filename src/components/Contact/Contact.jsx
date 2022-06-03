import React, { useState, useEffect } from "react";
import Sidebar from "../Home/Sidebar";
import "./Contact.css";
import axios from "axios";
function Contact() {
  const [data, setData] = useState();

  const handleClick = async () => {
    await axios
      .post("http://localhost:8080/addmessage", data)
      .then((succ) => {
        alert("Message added successfully");
        window.location.reload();
      })
      .catch((err) => {
        alert("Error occured");
      });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row Contact">
          <div className="col-10">
            <div className="row">
              <div className="col-md-5">
                <div className="row ContactData">
                  <div className="row">
                    <p>I would like to hear from you!</p>
                    <h1>CONTACT ME</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod corporis ullam dicta! Qui rem tempore ab aperiam illo
                      velit debitis harum, nisi quo praesentium, rerum
                      cupiditate beatae delectus sint, eum obcaecati reiciendis
                      mollitia. Quia cumque incidunt labore corporis, totam
                      voluptas excepturi laudantium? Minus exercitationem
                      veritatis vero nihil rem reiciendis at.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-7 contactInputs">
                <div className="row ContactInput">
                  <center>
                    <div className="row">
                      <div className="col-6">
                        <input
                          className="ContactInputFields"
                          type="text"
                          name="email"
                          onChange={(e) => handleChange(e)}
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="col-6">
                        <input
                          className="ContactInputFields"
                          type="text"
                          onChange={(e) => handleChange(e)}
                          name="name"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                  </center>
                  <center>
                    <div className="row">
                      <div className="col-6">
                        <input
                          className="ContactInputFields"
                          type="text"
                          name="address"
                          onChange={(e) => handleChange(e)}
                          placeholder="Address"
                        />
                      </div>
                      <div className="col-6">
                        <input
                          className="ContactInputFields"
                          type="text"
                          name="phone"
                          onChange={(e) => handleChange(e)}
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                  </center>

                  <center>
                    <div className="row">
                      <input
                        className="ContactTextArea"
                        type="text"
                        name="message"
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter your message"
                      />
                    </div>
                  </center>
                  <div className="row">
                    <center>
                      <button onClick={handleClick} className="btn btn-warning">
                        Submit
                      </button>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
