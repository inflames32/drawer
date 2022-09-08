import { useState } from "react";
import "./App.css";
import Drawer from "./components/drawer";
import ColorsPicker from "./components/ColorsPicker";

export default function App() {
  const [casesNumber, setCasesNumber] = useState("5");
  const [color, setColor] = useState("");
  const handleSelect = (e) => {
    console(e.target.value);
  };

  const totalCases = casesNumber * casesNumber;
  return (
    <div className="App">
      <div className="container">
        {/*  <span>
          Nombre de cases par ligne :
          <select name="cases" id="cases">
            <option onChange={handleSelect} value="5" selected>
              5
            </option>
            <option onChange={handleSelect} value="6">
              6
            </option>
            <option onChange={handleSelect} value="7">
              7
            </option>
            <option onChange={handleSelect} value="8">
              8
            </option>
            <option onChange={handleSelect} value="9">
              9
            </option>
            <option onChange={handleSelect} value="10">
              10
            </option>
            <option onChange={handleSelect} value="11">
              11
            </option>
            <option onChange={handleSelect} value="12">
              12
            </option>
            <option onChange={handleSelect} value="13">
              13
            </option>
            <option onChange={handleSelect} value="14">
              14
            </option>
            <option onChange={handleSelect} value="15">
              15
            </option>
            <option onChange={handleSelect} value="16">
              16
            </option>
          </select>
          {totalCases}
        </span> */}
      </div>

      <ColorsPicker color={color} setColor={setColor} />
      <Drawer casesNumber={casesNumber} totalCases={totalCases} color={color} />
    </div>
  );
}
