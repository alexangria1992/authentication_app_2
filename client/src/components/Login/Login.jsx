import { Link } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import "../../App.css";
import "./Login.css";
import video from "../../LoginAssets/video.mp4";
import { useState } from "react";
import Axios from "axios";

const Login = () => {
  const [loginUserName, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  //onclick lets user know inputs have been entered
  const loginUser = (e) => {
    e.preventDefault();
    //Require  Axios to create an API that connecs to the server
    Axios.post("http://localhost:3002/login", {
      // create variable to send to the server through the route
      LoginUserName: loginUserName,
      LoginPassword: loginPassword,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">Create And Sell Extraordinary Products</h2>
            <p>Adopt the peace of nature</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Don&apos;t have an account?</span>
            <Link to={"/register"}>
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src="" alt="" />
            <h3>Welcome back</h3>
          </div>
          <form action="" className="form grid">
            {/* <span className="message">Login Status will go here</span> */}
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter username"
                  onChange={(e) => {
                    setLoginUsername(e.target.value);
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
                    setLoginPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <button type="submit" className="btn flex" onClick={loginUser}>
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>
            <a href="/dashboard"></a>
            <span className="forgotPassword">
              Forgot your password?
              <a href="/dashboard"> Dashboard</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
