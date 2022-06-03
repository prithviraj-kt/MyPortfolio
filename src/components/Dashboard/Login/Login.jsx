import React, { useState } from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
function Login() {
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });

  };

  const history = useHistory();

  const handleClick =() => {
    if(password.password=="abcde"){
      alert("Login successful")
      localStorage.setItem('password', 'set');
      history.push("/alldetails")
    }else{
      history.push("/")
    }
  }

  return (
    <div>
      <div className="container-fluid Login">
        <div className="row LoginWarning">
          <center>
            <div className="row">
              <center className="LoginWarnText">
                <h1>WARNING!!!</h1>
                <p>You are not authorized to login</p>
              </center>
              <center className="LoginInput">
                <input
                  type="text"
                  name="password"
                  onChange={(e) => handleChange(e)}
                  placeholder="Password"
                />
              </center>
              <center>
                <button onClick={handleClick} className="btn btn-danger m-3">Submit</button>
              </center>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Login;
