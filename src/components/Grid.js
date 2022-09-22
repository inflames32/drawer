import { v4 as uuidv4 } from "uuid";
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

  return (
    <div className="grid_container">
      <div className="grid">
        {numberOfRows.map((row, idRow) => (
          <div className="grid_row" key={row} name={row}>
            {numberOfCols.map((pixel, idCol) => (
              <div
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
