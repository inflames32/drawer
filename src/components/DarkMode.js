import { BsFillMoonStarsFill, BsFillSunFill, BsSun } from "react-icons/bs";

import { HiLightBulb, HiOutlineLightBulb } from "react-icons/hi";
import "../assets/CSS/darkMode.css";

const DarkMode = ({ setDarkMode, darkMode }) => {
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="darkMode_container">
      {darkMode ? (
        <span className="darkmode">
          <button className="darkmode_btn dark" onClick={handleDarkMode}>
            <BsFillMoonStarsFill
              className="darkmode_icon"
              onClick={handleDarkMode}
            />
          </button>
        </span>
      ) : (
        <span className="darkmode">
          <button className="darkmode_btn light" onClick={handleDarkMode}>
            <BsSun className="darkmode_icon" />
          </button>
        </span>
      )}
    </div>
  );
};

export default DarkMode;
