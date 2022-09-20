import { useState } from "react";

import "./assets/CSS/App.css";

import Grid from "./components/Grid";
import ColorsPicker from "./components/ColorsPicker";
import Header from "./components/Header";
import DarkMode from "../src/components/DarkMode";
import GridSize from "./components/GridSize";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [color, setColor] = useState();
  const [width, setWidth] = useState(5);
  const [height, setHeight] = useState(5);
  const [background, setBackground] = useState("#fff");
  const [selectedColor, setSelectedColor] = useState("");
  const [cellsColored, setCellsColored] = useState([]);
  const [arrayOfColors, setArrayOfColors] = useState([
    { id: 0, color: "blue" },
    { id: 1, color: "red" },
    { id: 2, color: "green" },
    { id: 3, color: "yellow" },
    { id: 4, color: "black" },
    { id: 5, color: "white" },
    { id: 6, color: "pink" },
    { id: 8, color: "orange" },
    { id: 9, color: "violet" },
    { id: 10, color: "magenta" },
  ]);
  return (
    <div className={darkMode ? "App dark" : "App"}>
      <Header />
      <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      <GridSize
        width={width}
        setWidth={setWidth}
        setHeight={setHeight}
        height={height}
      />
      <div className="container">
        <ColorsPicker
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          background={background}
          setBackground={setBackground}
          arrayOfColors={arrayOfColors}
          setArrayOfColors={setArrayOfColors}
        />
        <Grid
          selectedColor={selectedColor}
          cellsColored={cellsColored}
          setCellsColored={setCellsColored}
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
