import React, { useState } from "react";
import axios from "axios";
import "./Authentification.css";
import log from "../../assets/log1.png";
import logowhite from "../../assets/logowhite.png";
import logogreen from "../../assets/logogreen.png";
import logo from "../../assets/logo.png";
import { useHistory } from "react-router-dom";
import reg from "../../assets/reg.png";
import { message, Form, Input, Button } from "antd";
import { Link } from 'react-router-dom';

function Authentification() {
  const history = useHistory();
  const [marketname, setMarketname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const onFinish = async () => {
    try {
      const res = await axios.post("http://localhost:3000/authmarket/signup", {
        marketname,
        email,
        password,
      });
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        message.success("Registered successfully");
        setIsSignUp(false);
        history.push("/#/home"); // Redirect to the home page after successful signup
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
    }
  };
  
  const onFinishHandler = async () => {
    try {
      const res = await axios.post("http://localhost:3000/authmarket/login", {
        email,
        password,
      });
      console.log("Response from API:", res.data);
  
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        message.success("Logged in successfully");
        console.log("Navigating to /home...");
        history.push("/home"); // Redirect to the home page after successful login
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
    }
  };
  
  return (
    <div className={`container12 ${isSignUp ? "sign-up-mode" : ""}`}>
      <div className="formss-container">
        <div className="signin-signup">
          <Form className="form sign-in-form" onFinish={onFinishHandler}>
            <h2 className="title">Login</h2>
            <Form.Item
              name="email"
              label={<span style={{ fontSize: "16px", fontWeight: "bold" }}>Email</span>}
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                style={{ marginLeft: "0px" }}
                className="Doctorinput"
                prefix={<i className="fas fa-user" />}
                placeholder="your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="password"
              label={<span style={{ fontSize: "16px", fontWeight: "bold" }}>Password</span>}
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input.Password
                style={{ marginLeft: "0px" }}
                className="Doctorinput"
                prefix={<i className="fas fa-lock" />}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <Button type="primary" htmlType="submit" className="btinn solid">
              Login
            </Button>
          </Form>
          <Form className="form sign-up-form" onFinish={onFinish}>
            <h2 className="title">Sign up</h2>
            <Form.Item
              name="marketname"
              label={<span style={{ fontSize: "16px", fontWeight: "bold",marginLeft:'0px' }}>Company <br/>Name</span>}
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                style={{ marginLeft: "40px" }}
                className="Doctorinput"
                prefix={<i className="fas fa-user" />}
                placeholder="Company Name"
                value={marketname}
                onChange={(e) => setMarketname(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="email"
              label={<span style={{ fontSize: "16px", fontWeight: "bold" }}>Email</span>}
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                style={{ marginLeft: "40px" }}
                className="Doctorinput"
                prefix={<i className="fas fa-envelope" />}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="password"
              label={<span style={{ fontSize: "16px", fontWeight: "bold" }}>Password</span>}
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input.Password
                style={{ marginLeft: "15px" }}
                className="Doctorinput"
                prefix={<i className="fas fa-lock" />}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <Button type="primary" htmlType="submit" className="btinn">
              {isSignUp ? "Sign up" : "Login"}
            </Button>
          </Form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3 className="guidinih3" style={{ fontFamily: "Lato, sans-serif", fontSize: "45px" }}>
              Welcome to
            </h3>
            <br />
            <br />
            <div>
              <img src={logo} className="Guidini" alt="" />
            </div>
            <p
              className="guidiniLogindesc"
              style={{
                fontFamily: "Lato, sans-serif",
                fontSize: "25px",
                fontWeight: 100,
                marginTop: "-30px",
                marginBottom: "50px",
              }}
            >
              "A sustainable app for responsible consumption."
            </p>
            <button className="btinn transparent" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <a href="/">
            <img src={log} className="imagereg" alt="Register" />
          </a>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3
              className="guidinih3"
              style={{
                fontFamily: "Lato, sans-serif",
                fontSize: "45px",
                marginBottom: "50px",
              }}
            >
              Welcome Back to
            </h3>
            <div>
              <img src={logo} className="Guidini" alt="" />
            </div>
            <p
              style={{
                fontFamily: "Lato, sans-serif",
                fontSize: "20px",
                fontWeight: 100,
                marginTop: "-80px",
                marginBottom: "0px",
              }}
            >
              "Empowering responsible consumption for a sustainable future,
              while driving market growth."
            </p>
            <button className="btinn transparent" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
          <a href="/">
            <img src={reg} className="imagetbib" alt="Login" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Authentification;
