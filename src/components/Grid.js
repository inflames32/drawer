import { useState } from "react";
import "../assets/CSS/grid.css";
const Grid = ({
  setColor,
  pixelsColored,
  width,
  height,
  selectedColor,
  setPixelsColored,
}) => {
  const handleColor = (evt) => {
    evt.target.style.background = selectedColor;
    const id = evt.target.getAttribute("id");
    setColor(selectedColor);
    setPixelsColored([...pixelsColored], { id, selectedColor });
  };

  // nombre de lignes
  let numberOfRows = [];
  for (let i = 0; i < width; i++) {
    numberOfRows.push(i);
  } //nombre de colones
  let numberOfCols = [];
  for (let i = 0; i < height; i++) {
    numberOfCols.push(i);
  }

  return (
    <div className="grid_container">
      <div className="grid" style={{ height: window.innerWidth }}>
        {numberOfRows.map((row, idRow) => (
          <div
            className="grid_row"
            key={row}
            name={row}
            style={{ height: window.innerWidth / numberOfCols.length }}
          >
            {numberOfCols.map((pixel, idCol) => (
              <div
                style={{
                  width: window.innerWidth / numberOfCols.length,
                  height: window.innerWidth / numberOfCols.length,
                }}
                className="grid_pixel"
                id={idRow.toString() + "-" + idCol.toString()}
                key={pixel}
                name={pixel}
                onClick={handleColor}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
