import React, { useState } from "react";
import "./LoginPop.css";
import { assets } from "../../assets/assets";

const LoginPop = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h1>{currentState}</h1>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="cross icon"
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Username" required />
          )}

          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the Terms of Use & Privacy Policy.</p>
        </div>

        {currentState === "Login" ? (
          <p onClick={() => setCurrentState("Sign Up")}>
            Create a new account? <span>Click Here</span>
          </p>
        ) : (
          <p onClick={() => setCurrentState("Login")}>
            Already have an account? <span>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPop;
