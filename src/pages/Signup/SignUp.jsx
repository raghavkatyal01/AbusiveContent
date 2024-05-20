import React, { useState } from "react";
import "./SignUp.css";
import { generateFromEmail, generateUsername } from "unique-username-generator";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password!=confirmPassword){
      alert("Passwords are not same")
      return
    }
    const username = generateFromEmail(email, Math.floor(Math.random()*100))
    // console.log("usr",username)
    const res = await fetch("http://127.0.0.1:8000/api/register/",{
      method:'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        name:name,
        username: username,
        email:email,
        contact_number:contact,
        password:password
      })
    })
    const resJson = await res.json()
    if(resJson.status == "ok"){
      navigate("/")
    }else{
      alert(resJson.message)
    }
  }

  return (
    <>
      <div className="cont">
        <div className="boxItem">
          <h1>Sign Up</h1>
          <div className="name">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="contact name">
            <label>Contact No:</label>
            <input
              type="number"
              placeholder="Enter Your Contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="email name">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="pass name">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="pass name">
            <label>Confirm Password:</label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="btnn">
            <button onClick={handleSubmit}>Submit</button>
          </div>
          <div className="already">
            <p>Already Registered?</p>
            <a href="/">Login</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
