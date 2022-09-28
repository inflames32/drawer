import { useState } from "react";

import "./assets/CSS/App.css";
import colortoJson from "./components/colors.json";

import Grid from "./components/Grid";
import ColorsPicker from "./components/ColorsPicker";
import Header from "./components/Header";
import GridSize from "./components/GridSize";

const App = () => {
  const [passwordIsShow, setPasswordIsShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [color, setColor] = useState();
  const [width, setWidth] = useState(5);
  const [height, setHeight] = useState(5);
  const [background, setBackground] = useState("#fff");
  const [selectedColor, setSelectedColor] = useState("");
  const [pixelsColored, setPixelsColored] = useState([]);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleReset = () => {
    setPixelsColored([]);
    console.log(pixelsColored);
  };
  return (
    <div className={darkMode ? "App dark" : "App"}>
      {/*  <button onClick={handleReset}>Reset</button> */}
      <Header
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        passwordIsShow={passwordIsShow}
        setPasswordIsShow={setPasswordIsShow}
        setMenuIsOpen={setMenuIsOpen}
        menuIsOpen={menuIsOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <GridSize
        width={width}
        setWidth={setWidth}
        setHeight={setHeight}
        height={height}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <div className="container">
        <ColorsPicker
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          background={background}
          setBackground={setBackground}
        />
        <Grid
          selectedColor={selectedColor}
          pixelsColored={pixelsColored}
          setPixelsColored={setPixelsColored}
          color={color}
          setColor={setColor}
          width={width}
          setWidth={setWidth}
          setHeight={setHeight}
          height={height}
        />
      </div>
    </div>
  );
};

export default App;
