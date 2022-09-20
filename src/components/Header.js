import Saving from "../components/Saving";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header_title">Pixel Art Grid React App </h1>
      <Saving />

      {/*   <a
        class="github-button"
        href="https://github.com/inflames32/drawer"
        data-icon="octicon-star"
        aria-label="Star inflames32/drawer on GitHub"
      >
        Star
      </a>

      <a
        class="github-button"
        href="https://github.com/inflames32"
        aria-label="Follow @inflames32 on GitHub"
      >
        Follow @inflames32
      </a> */}
    </div>
  );
};

export default Header;
