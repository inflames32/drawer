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
          <HiOutlineLightBulb onClick={handleDarkMode} />
        </span>
      ) : (
        <span className="darkmode">
          <HiLightBulb onClick={handleDarkMode} />
        </span>
      )}
    </div>
  );
};

export default DarkMode;
