import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Auth from "../components/Auth";

import "../assets/CSS/Header.css";

const Header = ({
  email,
  password,
  setEmail,
  setPassword,
  passwordIsShow,
  setPasswordIsShow,
  setMenuIsOpen,
  menuIsOpen,
}) => {
  const handleOpenMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div className="header">
      <nav className="header_nav">
        {menuIsOpen ? (
          <div className="header_btn--open">
            <GiHamburgerMenu className="header_icon" onClick={handleOpenMenu} />
          </div>
        ) : (
          <div className="header_btn--close">
            <AiOutlineClose className="header_icon" onClick={handleOpenMenu} />
          </div>
        )}

        {menuIsOpen ? (
          <div className="header_message">Open</div>
        ) : (
          <div className="header_message">Close</div>
        )}
      </nav>

      {/*  <h1 className="header_title">Pixel Art Grid React App </h1> */}
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
