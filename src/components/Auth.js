import axios from "axios";
import { useState } from "react";
import { HiEyeOff, HiEye } from "react-icons/hi";

import "../assets/CSS/auth.css";
const Auth = ({
  email,
  setEmail,
  password,
  setPassword,
  passwordIsShow,
  setPasswordIsShow,
}) => {
  const [message, setMessage] = useState("");
  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const passwordShow = () => {
    setPasswordIsShow(!passwordIsShow);
  };
  const url = `http://localhost:5000/`;
  const submitForm = (email, passwordShow) => {
    axios
      .get(url)
      .then((res) => {
        setMessage(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="auth_container">
      {message ? message : "null"}
      <div className="auth_login">
        <form action="submit" method="get" className="auth_login_form"></form>
        <input
          type="text"
          className="auth_login_form_email"
          value={email}
          onChange={handleEmail}
        />
        <input
          type={passwordIsShow ? "text" : "password"}
          className="auth_login_form_password"
          value={password}
          onChange={handlePassword}
        />
        <button
          type="submit"
          className="auth_login_btn_submit"
          onClick={submitForm}
        >
          Login
        </button>
        <span className="auth_btn_password-Show" onClick={passwordShow}>
          {passwordIsShow ? <HiEye /> : <HiEyeOff />}
        </span>
      </div>
    </div>
  );
};

export default Auth;
