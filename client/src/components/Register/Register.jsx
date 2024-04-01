import { Link } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
import "../../App.css";
import "./Register.css";
import video from "../../LoginAssets/video.mp4";
import { useState } from "react";
import Axios from "axios";

const Register = () => {
  //Inputs State
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //onclick lets user know inputs have been entered
  const createUser = () => {
    //Require  Axios to create an API that connecs to the server
    Axios.post("http://localhost/3002/register", {
      // create variable to send to the server through the route
      Email: email,
      UserName: username,
      Password: password,
    }).then(() => {
      console.log("User has been created");
    });
  };
  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">Create And Sell Extraordinary Products</h2>
            <p>Adopt the peace of nature</p>
          </div>
          <div className="footerDiv flex">
            <span className="text"> have an account?</span>
            <Link to={"/"}>
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src="" alt="" />
            <h3>Let Us Know You!</h3>
          </div>
          <form action="" className="form grid">
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className="icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="name">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="name"
                  id="name"
                  placeholder="Enter username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <button type="submit" className="btn flex" onClick={createUser}>
              <span>Register</span>
              <AiOutlineSwapRight className="icon" />
            </button>
            <span className="forgotPassword">
              Forgot your password?
              <a href=""> Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
