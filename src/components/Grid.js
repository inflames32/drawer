import { v4 as uuidv4 } from "uuid";
import "../assets/CSS/grid.css";
const Grid = ({
  color,
  setColor,
  cellsColored,
  setWidth,
  width,
  height,
  setHeight,
  selectedColor,
}) => {
  const handleColor = (evt) => {
    evt.target.style.background = selectedColor;
    const name = evt.target.getAttribute("name");
    console.log("clic");
    setColor(selectedColor);
    cellsColored.push({ name, color });
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
      <div className="grid">
        {numberOfRows.map((row) => (
          <div className="row" key={row} name={row}>
            {numberOfCols.map((col) => (
              <div
                className="col"
                key={col}
                name={col}
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
