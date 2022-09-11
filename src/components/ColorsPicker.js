import { useState, useEffect } from "react";
import "../assets/CSS/colorspicker.css";
import "aos/dist/aos.css";
const ColorsPicker = ({
  color,
  setColor,
  setDisplayColorPicker,
  displayColorPicker,
  background,
  setBackground,
  ColorChooseWithPicker,
  setColorChooseWithPicker,
  selectedColor,
}) => {
  const handleColor = (evt) => {
    const selectedColor = evt.target.id;
    console.log(selectedColor);
    setColor(selectedColor);
  };

  return (
    <div className="colorspicker_container">
      <span className="color_container">
        <div
          className={selectedColor ? "color blue selected_color" : "color blue"}
          onClick={handleColor}
          id="blue"
          name="blue"
        ></div>
      </span>
      <span className="color_container">
        <div
          className="color red"
          onClick={handleColor}
          id="red"
          name="red"
        ></div>
      </span>
      <span className="color_container">
        <div
          className="color green"
          onClick={handleColor}
          id="green"
          name="green"
        ></div>
      </span>
      <span className="color_container">
        <div
          className="color yellow"
          onClick={handleColor}
          id="yellow"
          name="yellow"
        ></div>
      </span>
      <span className="color_container">
        <div
          className="color black"
          onClick={handleColor}
          id="black"
          name="black"
        ></div>
      </span>
      <span className="color_container">
        <div
          className="color white"
          onClick={handleColor}
          id="white"
          name="white"
        ></div>
      </span>
    </div>
  );
};

export default ColorsPicker;
