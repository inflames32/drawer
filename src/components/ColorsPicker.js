import { useState } from "react";

import "../assets/CSS/colorspicker.css";
import ColorsJson from "../components/colors.json";
const ColorsPicker = ({
  selectedColor,
  setSelectedColor,
  arrayOfColors,
  setArrayOfColors,
}) => {
  const [initial, setInitial] = useState("#5e72e4");
  /* const [colorInput, setColorInput] = useState({}); */
  // selectionner la couleur
  const handleColor = (evt) => {
    const selectedColor = evt.target.getAttribute("name");
    setSelectedColor(selectedColor);
    console.log(selectedColor);
  };

  return (
    <div className="colorspicker_container">
      {ColorsJson.map((color) => (
        <div
          style={{ background: color.color }}
          className={`color ${color.color} ${
            selectedColor === `${color.color}` ? ` selected_color` : ""
          }`}
          onClick={handleColor}
          id={color.id}
          name={color.color}
        ></div>
      ))}
      {/* <input
        className="test"
        value={colorInput.hex}
        onChange={handleColor}
        type="color"
      ></input> */}
    </div>
  );
};

export default ColorsPicker;
