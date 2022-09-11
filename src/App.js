import { useState, useEffect } from "react";

import "./assets/CSS/App.css";

import Grid from "./components/Grid";
import ColorsPicker from "./components/ColorsPicker";
import Selector from "../src/components/Selector";
import DarkMode from "../src/components/DarkMode";

export default function App() {
  useEffect(() => {
    document.title = gridSize;
  });
  const [darkMode, setDarkMode] = useState(false);
  const [gridSize, setGridSize] = useState(400);
  const [casesColored, setCasesColored] = useState([
    {
      id: 1,
      background: "blue",
    },
    {
      id: 1,
      background: "green",
    },
  ]);
  const [background, setBackground] = useState("#fff");
  const [color, setColor] = useState("");

  const totalCases = gridSize;

  const saveOnLocaleStorage = () => {
    const savedInformations = localStorage.setItem("darMode", true);
    console.log(savedInformations);
  };
  const saveColorInLocaleStorage = () => {
    const colorInLocaleStorage = localStorage.setItem(
      "casesColored",
      JSON.stringify(
        { id: 1, background: { background } },
        { id: 2, background: { background } },
        { id: 3, background: { background } },
        { id: 4, background: { background } },
        { id: 5, background: { background } },
        { id: 6, background: { background } },
        { id: 7, background: { background } },
        { id: 8, background: { background } },
        { id: 9, background: { background } },
        { id: 10, background: { background } },
        { id: 11, background: { background } },
        { id: 12, background: { background } },
        { id: 13, background: { background } },
        { id: 14, background: { background } }
      )
    );
    console.log(colorInLocaleStorage);
    console.log(localStorage);
  };
  const loadLocaleStorage = () => {
    const loadInformations = localStorage.getItem();
    console.log(loadInformations);
  };
  const clearLocaleStorage = () => {
    localStorage.clear();
    console.log(localStorage);
    if (localStorage.length === 0) {
      console.log("LocaleStorage vide :)");
    }
  };

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <DarkMode handleDarkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="container">
        {/* <Selector gridSize={gridSize} setGridSize={setGridSize} /> */}
        <ColorsPicker
          color={color}
          setColor={setColor}
          background={background}
          setBackground={setBackground}
        />
        <Grid
          gridSize={gridSize}
          totalCases={totalCases}
          color={color}
          data-aos="zoom-in"
        />
        {/* <button onClick={(saveOnLocaleStorage, saveColorInLocaleStorage)}>
          Sauvegarde
        </button>
        <button onClick={loadLocaleStorage}>Rechargement</button>
        <button onClick={clearLocaleStorage}>Clear</button> */}
      </div>
    </div>
  );
}
