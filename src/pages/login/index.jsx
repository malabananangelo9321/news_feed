import React from "react";
import Card from "../../components/card/card";
import "./login.css";
const Login = () => {
  const [name, setName] = React.useState("");
  const login = (e) => {
    e.preventDefault();
    if (name == "") {
      alert("Please enter your name!");
    } else {
      sessionStorage.setItem("login", name);
    }
    window.location.reload();
  };
  const onChangeText = (e) => {
    setName(e.target.value);
  };
  return (
    <form onSubmit={login}>
      <div className="login-container">
        <div className="login-parent">
          <p className="login-title-welcome">Welcome to</p>

          <p className="login-title">Social App</p>
          <div className="login-input-container">
            <input
              onChange={onChangeText}
              className="login-input"
              placeholder="Please Enter Your Name"
            />
          </div>
          <button type="submit" className="login-button-style">
            Get Started
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
