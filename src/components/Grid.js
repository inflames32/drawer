import { useState } from "react";
import { GiConsoleController } from "react-icons/gi";

import "../assets/CSS/grid.css";
const Grid = ({
  color,
  setColor,
  pixelsColored,
  setWidth,
  width,
  height,
  setHeight,
  selectedColor,
  setPixelsColored,
}) => {
  const handleColor = (evt) => {
    evt.target.style.background = selectedColor;
    const id = evt.target.getAttribute("id");
    setColor(selectedColor);
    /*  pixelsColored.push({ id, color }); */
    console.log(pixelsColored);
    setPixelsColored([...pixelsColored], { id, selectedColor });
    console.log(pixelsColored);
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

  const [widthOfPixel, setWidthOfPixel] = useState("20px");
  const [heightOfPixel, setHeightOfPixel] = useState("150px");
  const [widthGrid, setWidthGrid] = useState();

  const test = window.innerWidth / numberOfCols.length;
  /* console.log(widthGrid); */
  console.log(numberOfRows.length);
  console.log("test", test);
  const newtest = window.innerWidth;

  let widthOfGridElement = document.getElementsByClassName("grid");

  console.log("widthOfGridElement.inn", widthOfGridElement.innerWidth);

  return (
    <div className="grid_container">
      <div className="grid" style={{ height: newtest }}>
        {numberOfRows.map((row, idRow) => (
          <div
            className="grid_row"
            key={row}
            name={row}
            style={{ height: test }}
          >
            {numberOfCols.map((pixel, idCol) => (
              <div
                style={{ width: test, height: test }}
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
