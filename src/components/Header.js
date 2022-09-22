import Auth from "../components/Auth";

import "../assets/CSS/header.css";

const Header = ({
  email,
  password,
  setEmail,
  setPassword,
  passwordIsShow,
  setPasswordIsShow,
}) => {
  return (
    <div className="header">
      <h1 className="header_title">Pixel Art Grid React App </h1>
      {/*    <Auth
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        passwordIsShow={passwordIsShow}
        setPasswordIsShow={setPasswordIsShow}
      /> */}
    </div>
  );
};

export default Header;
